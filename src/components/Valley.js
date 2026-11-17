import React, { useEffect, useRef } from "react";

const COLS = 120;
const ROWS = 52;
const STRIDE = COLS + 1;
const VERTS = STRIDE * (ROWS + 1);
const QUADS = COLS * ROWS;

function hash(ix, iz) {
  const n = Math.sin(ix * 127.1 + iz * 311.7) * 43758.5453;
  return n - Math.floor(n);
}

function noise(x, z) {
  const x0 = Math.floor(x);
  const z0 = Math.floor(z);
  const fx = x - x0;
  const fz = z - z0;
  const ux = fx * fx * (3 - 2 * fx);
  const uz = fz * fz * (3 - 2 * fz);
  const a = hash(x0, z0);
  const b = hash(x0 + 1, z0);
  const c = hash(x0, z0 + 1);
  const d = hash(x0 + 1, z0 + 1);
  return a + (b - a) * ux + (c - a) * uz + (a - b - c + d) * ux * uz;
}

function fbm(x, z) {
  let value = 0;
  let amplitude = 0.55;
  let frequency = 1;
  for (let octave = 0; octave < 5; octave += 1) {
    value += amplitude * noise(x * frequency, z * frequency);
    frequency *= 2.03;
    amplitude *= 0.5;
  }
  return value;
}

function meander(z) {
  return Math.sin(z * 1.7) * 0.34 + Math.sin(z * 3.6 + 0.8) * 0.1;
}

function elevation(x, z) {
  const across = x - meander(z);
  const dist = Math.abs(across);
  const channel = Math.exp(-dist * dist * 22);
  const wall = Math.pow(Math.min(dist / 0.95, 1), 0.7);
  const grain = (fbm(x * 1.55 + 2.2, z * 1.25 + 0.6) - 0.28) * (0.05 + dist * 0.42);
  const spur = Math.sin(x * 2.6 + 0.4) * Math.cos(z * 1.3) * 0.06 * dist;
  return Math.max(0.01, (wall * 0.86 + grain + spur) * (1 - channel * 0.9));
}

function paint(canvas, xyz, camera, order, depths, yaw) {
  const rect = canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const width = Math.max(2, Math.round(rect.width * dpr));
  const height = Math.max(2, Math.round(rect.height * dpr));
  if (width < 8 || height < 8) return;
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }

  const cos = Math.cos(yaw);
  const sin = Math.sin(yaw);
  const pitch = 1.08;
  const cp = Math.cos(pitch);
  const sp = Math.sin(pitch);
  const lightX = -0.42;
  const lightY = 0.82;
  const lightZ = -0.35;

  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;

  for (let v = 0; v < VERTS; v += 1) {
    const x = xyz[v * 3];
    const y = xyz[v * 3 + 1];
    const z = xyz[v * 3 + 2];
    const rx = x * cos - z * sin;
    const rz = x * sin + z * cos;
    const py = y * cp - rz * sp;
    const pz = y * sp + rz * cp;
    const depth = pz + 4.6;
    const inv = 1 / depth;
    const sx = rx * inv;
    const sy = -py * inv;
    camera[v * 3] = sx;
    camera[v * 3 + 1] = sy;
    camera[v * 3 + 2] = depth;
    if (sx < minX) minX = sx;
    if (sx > maxX) maxX = sx;
    if (sy < minY) minY = sy;
    if (sy > maxY) maxY = sy;
  }

  const padX = width * 0.06;
  const padY = height * 0.1;
  const spanX = maxX - minX || 1;
  const spanY = maxY - minY || 1;
  const fit = Math.min((width - padX * 2) / spanX, (height - padY * 2) / spanY);
  const originX = (width - spanX * fit) * 0.5;
  const originY = (height - spanY * fit) * 0.52;

  const screen = (index) => [
    originX + (camera[index * 3] - minX) * fit,
    originY + (camera[index * 3 + 1] - minY) * fit,
  ];

  for (let row = 0; row < ROWS; row += 1) {
    for (let col = 0; col < COLS; col += 1) {
      const quad = row * COLS + col;
      const i0 = row * STRIDE + col;
      depths[quad] =
        camera[i0 * 3 + 2] +
        camera[(i0 + 1) * 3 + 2] +
        camera[(i0 + STRIDE) * 3 + 2] +
        camera[(i0 + STRIDE + 1) * 3 + 2];
      order[quad] = quad;
    }
  }
  order.sort((a, b) => depths[b] - depths[a]);

  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, width, height);
  ctx.lineJoin = "round";

  for (let n = 0; n < QUADS; n += 1) {
    const quad = order[n];
    const row = Math.floor(quad / COLS);
    const col = quad - row * COLS;
    const i0 = row * STRIDE + col;
    const i1 = i0 + 1;
    const i2 = i0 + STRIDE;
    const i3 = i2 + 1;

    const x0 = xyz[i0 * 3];
    const y0 = xyz[i0 * 3 + 1];
    const z0 = xyz[i0 * 3 + 2];
    const x1 = xyz[i1 * 3];
    const y1 = xyz[i1 * 3 + 1];
    const z1 = xyz[i1 * 3 + 2];
    const x2 = xyz[i2 * 3];
    const y2 = xyz[i2 * 3 + 1];
    const z2 = xyz[i2 * 3 + 2];
    const ux = x1 - x0;
    const uy = y1 - y0;
    const uz = z1 - z0;
    const vx = x2 - x0;
    const vy = y2 - y0;
    const vz = z2 - z0;
    let nx = uy * vz - uz * vy;
    let ny = uz * vx - ux * vz;
    let nz = ux * vy - uy * vx;
    const length = Math.hypot(nx, ny, nz) || 1;
    nx /= length;
    ny /= length;
    nz /= length;
    const light = 0.34 + 0.66 * Math.max(0, nx * lightX + ny * lightY + nz * lightZ);
    const lift = (y0 + y1 + y2 + xyz[i3 * 3 + 1]) * 0.25;
    const wet = lift < 0.07;
    const shade = Math.pow(light, 0.85);
    const fog = Math.min(0.16, Math.max(0, (camera[i0 * 3 + 2] - 4.5) / 5));

    let r;
    let g;
    let b;
    if (wet) {
      r = 12 + shade * 70;
      g = 16 + shade * 48;
      b = 18 + shade * 28;
    } else {
      r = 22 + shade * (150 + lift * 70);
      g = 18 + shade * (112 + lift * 55);
      b = 14 + shade * (62 + lift * 40);
    }
    r += (12 - r) * fog;
    g += (12 - g) * fog;
    b += (10 - b) * fog;

    const s0 = screen(i0);
    const s1 = screen(i1);
    const s2 = screen(i2);
    const s3 = screen(i3);
    ctx.beginPath();
    ctx.moveTo(s0[0], s0[1]);
    ctx.lineTo(s1[0], s1[1]);
    ctx.lineTo(s3[0], s3[1]);
    ctx.lineTo(s2[0], s2[1]);
    ctx.closePath();
    const u = (col + 0.5) / COLS;
    const v = (row + 0.5) / ROWS;
    const edge = Math.min(u, 1 - u, v, 1 - v);
    if (edge < 0.045) continue;
    ctx.globalAlpha = Math.min(1, (edge - 0.045) / 0.07);
    ctx.fillStyle = `rgb(${r | 0}, ${g | 0}, ${b | 0})`;
    ctx.strokeStyle = ctx.fillStyle;
    ctx.lineWidth = dpr;
    ctx.fill();
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  ctx.lineWidth = Math.max(1, dpr * 0.7);
  ctx.strokeStyle = "rgba(232, 224, 208, 0.22)";
  [0.14, 0.28, 0.46, 0.64].forEach((level) => {
    ctx.beginPath();
    for (let row = 0; row < ROWS; row += 1) {
      for (let col = 0; col < COLS; col += 1) {
        const u = (col + 0.5) / COLS;
        const v = (row + 0.5) / ROWS;
        if (Math.min(u, 1 - u, v, 1 - v) < 0.06) continue;
        const i0 = row * STRIDE + col;
        const i1 = i0 + 1;
        const i2 = i0 + STRIDE;
        const i3 = i2 + 1;
        const corners = [i0, i1, i3, i2];
        const hits = [];
        for (let edge = 0; edge < 4; edge += 1) {
          const a = corners[edge];
          const b = corners[(edge + 1) % 4];
          const ha = xyz[a * 3 + 1];
          const hb = xyz[b * 3 + 1];
          const delta = hb - ha;
          if (!delta) continue;
          const t = (level - ha) / delta;
          if (t < 0 || t > 1) continue;
          const sa = screen(a);
          const sb = screen(b);
          hits.push([sa[0] + (sb[0] - sa[0]) * t, sa[1] + (sb[1] - sa[1]) * t]);
        }
        if (hits.length < 2) continue;
        ctx.moveTo(hits[0][0], hits[0][1]);
        ctx.lineTo(hits[1][0], hits[1][1]);
      }
    }
    ctx.stroke();
  });

  ctx.beginPath();
  ctx.lineWidth = Math.max(1.25, dpr * 1.15);
  ctx.strokeStyle = "rgba(232, 214, 186, 0.85)";
  for (let step = 0; step <= 140; step += 1) {
    const z = 0.08 + (step / 140) * 2.04 - 1.1;
    const x = meander(z);
    const rx = x * cos - z * sin;
    const rz = x * sin + z * cos;
    const py = 0.02 * cp - rz * sp;
    const pz = 0.02 * sp + rz * cp;
    const depth = pz + 4.6;
    const sx = originX + (rx / depth - minX) * fit;
    const sy = originY + (-py / depth - minY) * fit;
    if (step === 0) ctx.moveTo(sx, sy);
    else ctx.lineTo(sx, sy);
  }
  ctx.stroke();
}

export function Valley() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return undefined;

    const xyz = new Float32Array(VERTS * 3);
    for (let row = 0; row <= ROWS; row += 1) {
      const z = (row / ROWS) * 2.2 - 1.1;
      for (let col = 0; col <= COLS; col += 1) {
        const x = (col / COLS) * 4.8 - 2.4;
        const index = (row * STRIDE + col) * 3;
        xyz[index] = x;
        xyz[index + 1] = elevation(x, z) * 1.55;
        xyz[index + 2] = z;
      }
    }

    const camera = new Float32Array(VERTS * 3);
    const depths = new Float32Array(QUADS);
    const order = new Array(QUADS);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let alive = true;
    let visible = false;
    let raf = 0;

    const frame = (time) => {
      const yaw = reduce ? -0.35 : -0.35 + Math.sin(time * 0.00016) * 0.38;
      paint(canvas, xyz, camera, order, depths, yaw);
      if (alive && visible && !reduce) raf = requestAnimationFrame(frame);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (!visible) return;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(frame);
      },
      { rootMargin: "160px" }
    );
    observer.observe(canvas);

    const onResize = () => {
      if (!visible) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(frame);
    };
    window.addEventListener("resize", onResize);

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <figure className="valley">
      <canvas ref={ref} role="img" aria-label="A river valley drawn in relief. Not a model output." />
      <figcaption>Valley relief. Not a model output.</figcaption>
    </figure>
  );
}
