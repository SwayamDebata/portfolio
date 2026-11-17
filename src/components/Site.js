import React, { useEffect } from "react";
import {
  ADDRESSES,
  EARLIER,
  EVIDENCE,
  NAV,
  PLATE,
  PRACTICE,
  PROFILE,
  RECORD,
  SYSTEMS,
} from "../content";
import coast from "../assets/brahmani.jpg";
import { PixelPortrait } from "./PixelArt";
import { Valley } from "./Valley";

const Site = () => {
  useEffect(() => {
    const root = document.documentElement;
    const onScroll = () => {
      const height = root.scrollHeight - root.clientHeight;
      const progress = height > 0 ? root.scrollTop / height : 0;
      root.style.setProperty("--progress", String(progress));
    };

    const links = Array.from(document.querySelectorAll("[data-nav]"));
    const sections = links
      .map((link) => document.getElementById(link.getAttribute("data-nav")))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("data-nav") === entry.target.id);
          });
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="site">
      <div className="progress" aria-hidden="true" />
      <a className="skip" href="#content">
        Skip to content
      </a>

      <header className="mast">
        <a className="mark" href="#top">
          <strong>Swayam Debata</strong>
          <span>ModelEarth</span>
        </a>
        <nav className="nav-links" aria-label="Sections">
          {NAV.map((item) => (
            <a key={item.id} href={`#${item.id}`} data-nav={item.id}>
              {item.label}
            </a>
          ))}
          <a className="resume" href={PROFILE.resume}>
            Resume
          </a>
        </nav>
      </header>

      <main id="content">
        <section className="sheet hero" id="top">
          <div>
            <p className="kicker">
              <span>01 / Opening</span>
            </p>
            <h1>
              The data was never
              <br />
              the scarce thing.
              <br />
              <em>A decision, in time, was.</em>
            </h1>
            <p className="deck">
              I build the layer between a signal and a person who has to act on it.
              The signal has been a remittance email, a chat message, a river gauge.
              The person has been an operations lead, a support engineer, a district
              officer in Odisha.
            </p>
          </div>
          <aside className="hero-side">
            <PixelPortrait />
            <div className="plate" aria-label="Title block">
            <p className="plate-label">
              <span>Sheet 01</span>
              <span>In production</span>
            </p>
            <dl>
              {PLATE.map(([term, detail]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>{detail}</dd>
                </div>
              ))}
            </dl>
            </div>
          </aside>
        </section>

        <section className="chapter" id="record">
          <div className="sheet">
            <div className="chapter-head">
              <span className="sheet-no">02</span>
              <div>
                <h2>From the thread to the river.</h2>
                <p className="lede">
                  Interfaces, then agents, then a landscape. Each time the failure
                  was the same: the information existed, and the person who needed
                  it could not use it yet.
                </p>
              </div>
            </div>
            <div className="prose">
              <p>
                I am from Odisha. I finished computer science at
                Biju Patnaik University of Technology, Bhubaneswar, in 2023. The
                same year I joined CometChat in Mumbai. In January 2026 I moved
                to Capgemini in Bengaluru, to put agents inside finance workflows
                that cannot afford a confident wrong answer. Alongside both, I
                started ModelEarth, because the hardest version of that problem
                was at home.
              </p>
              <p>
                Odisha is already measured. Gauges in the rivers, satellites
                overhead, thirty years of rain on record. People are still warned
                late. Climate data already exists. The work is turning it into a
                decision someone can act on before the water is in the house.
              </p>
            </div>
            <ol className="posts">
              {RECORD.map((role) => (
                <li className="post" key={role.title}>
                  <div className="post-meta">
                    <time>{role.years}</time>
                    <span>{role.place}</span>
                  </div>
                  <div>
                    <h3>{role.title}</h3>
                    <p className="org">{role.org}</p>
                    {role.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Valley />
        <section className="chapter" id="earth">
          <div className="sheet">
            <div className="chapter-head">
              <span className="sheet-no">03</span>
              <div>
                <h2>ModelEarth keeps the hours that a warning is worth.</h2>
                <p className="lede">
                  Not a weather picture. A call, for a specific place, with the
                  reasoning attached, early enough that a desk can still move
                  people, grain, and livestock.
                </p>
              </div>
            </div>
            <figure className="plate-photo">
              <img
                src={coast}
                width="1600"
                height="1062"
                alt="The Brahmani delta in Odisha, photographed from the International Space Station. The river meets the Bay of Bengal."
              />
              <figcaption>
                <span>Brahmani delta, Odisha</span>
                <span>NASA, 22 February 2012. Public domain.</span>
              </figcaption>
            </figure>
            <div className="prose">
              <p>
                I founded ModelEarth and I am its technical lead. The engine is
                in production. It ingests the record, scores risk, holds a flood
                model in shadow so the model cannot change a number a person
                sees, and runs an alert lifecycle and an operational desk. The
                interface is Next.js, TypeScript, React Query, and Mapbox. The
                service is FastAPI, PostgreSQL, and TimescaleDB.
              </p>
              <p>
                Five cities alert, every thirty minutes, wet or dry: Bhubaneswar,
                Cuttack, Puri, Sambalpur, and Rourkela. The score is a rule an
                engineer wrote and a district can argue with. Rain is judged
                against that location’s own thirty-year baseline. Yesterday’s
                rain stops decaying while a flood is still active. A river
                reading enters the score only when the gauge is genuinely live,
                or when the state’s daily bulletin is fresh on the pilot reaches,
                and it can raise the call on its own when the river is near its
                mark.
              </p>
              <p>
                The Baitarani is where the engine has agreed to be scored in
                public. Jajpur, Bhadrak, Anandapur, and Baripada are an advisory
                pilot, not a siren on the open internet. Nothing is signed.
                There is no paying customer. Heat has no live mode. A pre-seed
                raise is open, for reach: another machine-learning engineer, and
                someone who can sit with the districts.
              </p>
              <p>
                The numbers below are the ones the company is willing to say out
                loud, with the condition attached. A figure without its basin,
                its sample, and its miss is not a figure I will print.
              </p>
            </div>

            <dl className="facts">
              <div>
                <dt>Alerting</dt>
                <dd>Five cities</dd>
              </div>
              <div>
                <dt>Cadence</dt>
                <dd>Thirty minutes</dd>
              </div>
              <div>
                <dt>Model</dt>
                <dd>Shadow only</dd>
              </div>
              <div>
                <dt>Contract</dt>
                <dd>None signed</dd>
              </div>
            </dl>

            <div className="table-wrap">
              <table className="evidence">
                <caption>
                  Read the miss beside the result. The 13 of 13 is a small sample
                  on one basin, and it is not the live product. Statewide, rainfall
                  alone is not good enough to alert. Full record at modelearth.in.
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Standing</th>
                    <th scope="col">Figure</th>
                    <th scope="col">What it actually measures</th>
                  </tr>
                </thead>
                <tbody>
                  {EVIDENCE.map((row) => (
                    <tr key={row.standing + row.figure}>
                      <td className="standing">{row.standing}</td>
                      <td className="figure">{row.figure}</td>
                      <td>{row.claim}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="actions">
              <a href={PROFILE.links.earth}>Mission control</a>
              <a href={PROFILE.links.api}>API</a>
              <a href={`mailto:${PROFILE.founderEmail}`}>Write to the company</a>
              <a href={`mailto:${PROFILE.companyEmail}`}>Write to me there</a>
            </div>
          </div>
        </section>

        <section className="chapter" id="systems">
          <div className="sheet">
            <div className="chapter-head">
              <span className="sheet-no">04</span>
              <div>
                <h2>Other systems, including the early ones.</h2>
                <p className="lede">
                  Infrastructure first. Then the products. Then the work from
                  before any of this had a name.
                </p>
              </div>
            </div>

            {SYSTEMS.map((item) => (
              <article className="system" key={item.name}>
                <span className="idx">{item.index}</span>
                <div>
                  <h3>{item.name}</h3>
                  <p className="meta">{item.meta}</p>
                  <p>{item.summary}</p>
                  <div className="links">
                    {item.links.map((link) => (
                      <a key={link.href} href={link.href}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}

            <div className="earlier">
              <h3>Earlier builds</h3>
              {EARLIER.map((item) => (
                <div className="earlier-row" key={item.name}>
                  <strong>{item.name}</strong>
                  <span>{item.note}</span>
                  <div className="earlier-links">
                    {item.links.map((link) => (
                      <a key={link.href} href={link.href}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="chapter" id="practice">
          <div className="sheet">
            <div className="chapter-head">
              <span className="sheet-no">05</span>
              <div>
                <h2>What the work is made of.</h2>
                <p className="lede">
                  Python, TypeScript, JavaScript, and SQL, used end to end.
                  The list is the toolbox, not a wall of logos.
                </p>
              </div>
            </div>
            <div className="columns">
              {PRACTICE.map((group) => (
                <div key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="chapter" id="contact">
          <div className="sheet close">
            <div className="chapter-head" style={{ gridColumn: "1 / -1" }}>
              <span className="sheet-no">06</span>
              <div>
                <h2>If this is your problem, write.</h2>
                <p className="lede">
                  Districts, funds, and teams who need a system to survive a bad
                  network or a bad week of weather. I read the mail.
                </p>
              </div>
            </div>
            <ul className="contact-list">
              <li>
                <span>Personal</span>
                <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
              </li>
              <li>
                <span>ModelEarth</span>
                <a href={`mailto:${PROFILE.companyEmail}`}>{PROFILE.companyEmail}</a>
              </li>
              <li>
                <span>Company</span>
                <a href={`mailto:${PROFILE.founderEmail}`}>{PROFILE.founderEmail}</a>
              </li>
              <li>
                <span>Phone</span>
                <a href={PROFILE.phoneHref}>{PROFILE.phone}</a>
              </li>
              <li>
                <span>Resume</span>
                <a href={PROFILE.resume}>Download the PDF</a>
              </li>
            </ul>
            <div>
              <p className="lede" style={{ marginTop: 0 }}>
                Based in {PROFILE.locationNow}. The work starts in {PROFILE.locationFrom}.
              </p>
              <div className="addresses">
                {ADDRESSES.map((item) => (
                  <a key={item.label} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="sheet colophon">
          <span>Swayam Debata, ModelEarth</span>
        </footer>
      </main>
    </div>
  );
};

export default Site;
