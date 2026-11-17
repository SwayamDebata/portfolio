import React, { useEffect } from "react";
import { GUIDE, GUIDE_NAV } from "../orqmeshGuide";
import { ORQMESH } from "../content";
import {
  DocumentFigure,
  ReviewFigure,
  RunFigure,
  SeamFigure,
} from "./OrqmeshFigures";

function Block({ block }) {
  if (block.type === "p") return <p>{block.text}</p>;
  if (block.type === "h3") return <h3>{block.text}</h3>;
  if (block.type === "code") {
    return (
      <pre className="guide-code">
        <code>{block.text}</code>
      </pre>
    );
  }
  if (block.type === "ul") {
    return (
      <ul>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  if (block.type === "api") {
    return (
      <article className="api">
        <h3>
          <code>{block.name}</code>
        </h3>
        <p className="api-sig">{block.sig}</p>
        <p>{block.text}</p>
      </article>
    );
  }
  return null;
}

const OrqmeshGuide = () => {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const target = hash ? document.getElementById(hash) : null;
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, []);

  return (
    <div className="site">
      <a className="skip" href="#guide">
        Skip to the guide
      </a>
      <header className="mast">
        <a className="mark" href="/#orqmesh">
          <strong>Swayam Debata</strong>
          <span>Orqmesh</span>
        </a>
        <nav className="nav-links" aria-label="Guide">
          <a href="/#orqmesh">Portfolio</a>
          <a href={ORQMESH.pypi}>PyPI</a>
          <a href={ORQMESH.github}>Source</a>
          <a className="resume" href="#install">
            Guide
          </a>
        </nav>
      </header>

      <main id="guide" className="guide-layout">
        <nav className="guide-toc" aria-label="On this page">
          {GUIDE_NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>

        <article className="guide">
          <p className="kicker">
            <span>Orqmesh 0.1.0b1</span>
            <span>Apache-2.0</span>
          </p>
          <h1>How to run a workflow.</h1>
          <p className="lede">
            A user guide for the published SDK. Each step below is the call the
            library actually makes. It is an alpha. It does not include a model,
            and the local checkpoint is not a place for real documents.
          </p>

          <section id="flow">
            <p className="guide-kicker">Flow</p>
            <h2>How a run moves.</h2>
            <p>
              The step list is a straight line. A step returns a dictionary,
              asks a person, or raises. That return is the only branch in this
              version.
            </p>
            <RunFigure />
            <SeamFigure />
          </section>

          {GUIDE.map((section) => (
            <section key={section.id} id={section.id}>
              <p className="guide-kicker">{section.kicker}</p>
              <h2>{section.title}</h2>
              {section.id === "review" ? <ReviewFigure /> : null}
              {section.id === "document" ? <DocumentFigure /> : null}
              {section.blocks.map((block, index) => (
                <Block key={`${section.id}-${index}`} block={block} />
              ))}
            </section>
          ))}
        </article>
      </main>
    </div>
  );
};

export default OrqmeshGuide;
