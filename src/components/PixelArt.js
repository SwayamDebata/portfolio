import React, { useEffect, useRef } from "react";
import portrait from "../assets/portrait.jpg";

const INK = ["#0c0c0a", "#241f1a", "#5c5144", "#a8845d", "#e7e1d6"];
const FACE = { x: 210, y: 70, w: 520, h: 660 };

function paint(canvas, image, crop, cols, rows) {
  if (!canvas) return;
  const sample = document.createElement("canvas");
  sample.width = cols;
  sample.height = rows;
  const source = sample.getContext("2d", { willReadFrequently: true });
  source.drawImage(image, crop.x, crop.y, crop.w, crop.h, 0, 0, cols, rows);
  const pixels = source.getImageData(0, 0, cols, rows).data;
  const cell = 8;
  canvas.width = cols * cell;
  canvas.height = rows * cell;
  const pen = canvas.getContext("2d");
  for (let y = 0; y < rows; y += 1) {
    for (let x = 0; x < cols; x += 1) {
      const index = (y * cols + x) * 4;
      const light = pixels[index] * 0.2126 + pixels[index + 1] * 0.7152 + pixels[index + 2] * 0.0722;
      const tone = Math.min(INK.length - 1, Math.floor((light / 255) * INK.length));
      pen.fillStyle = INK[tone];
      pen.fillRect(x * cell, y * cell, cell, cell);
    }
  }
}

function usePortrait(ref, crop, cols, rows) {
  useEffect(() => {
    let cancel = false;
    const image = new Image();
    image.src = portrait;
    image.onload = () => {
      if (!cancel) paint(ref.current, image, crop, cols, rows);
    };
    return () => {
      cancel = true;
    };
  }, [ref, crop, cols, rows]);
}

export function PixelPortrait() {
  const ref = useRef(null);
  usePortrait(ref, FACE, 42, 56);
  return (
    <figure className="portrait-frame">
      <canvas ref={ref} aria-label="Swayam Debata in Odisha" />
    </figure>
  );
}

