export default function AboutPage() {
  return (
    <div className="about-page">
      <header className="about-hero">
        <div className="about-hero__copy">
          <p className="eyebrow">About / Victor Omeife</p>
          <h1>
            I build things for the web, then write down what the work taught me.
          </h1>
          <p>
            This journal is the context that does not fit inside a portfolio: the
            decisions, dead ends, client conversations, and lessons behind what I
            ship.
          </p>
        </div>

        <div className="about-hero__mark" aria-hidden="true">
          <span>VO</span>
          <p>Build / Break / Learn</p>
        </div>
      </header>

      <section className="about-story">
        <p className="eyebrow">The short version</p>
        <div>
          <p className="about-story__lead">
            For more than a year, I built quietly. The work existed, but the
            thinking behind it did not.
          </p>
          <div className="about-story__columns">
            <p>
              Finished demos can show what works. They rarely show the trade-offs,
              bugs, and small decisions that made the result possible. I started
              Devlog to leave a better trail of that work.
            </p>
            <p>
              Writing makes me slow down, explain what I know, and notice what I
              still do not understand. Publishing it adds accountability. Keeping
              it simple means I can focus on the note instead of the system around
              it.
            </p>
          </div>
        </div>
      </section>

      <section className="about-notes">
        <div className="about-notes__heading">
          <p className="eyebrow">What gets logged</p>
          <h2>Not a highlight reel. A working record.</h2>
        </div>
        <ol>
          <li>
            <span>01</span>
            <div>
              <h3>Work that shipped</h3>
              <p>
                Projects, client work, and what changed between the first idea and
                the version people actually used.
              </p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Problems worth remembering</h3>
              <p>
                Bugs, constraints, wrong turns, and the reasoning that finally
                unlocked the next step.
              </p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Lessons still in progress</h3>
              <p>
                Tools, technical ideas, communication habits, and honest notes
                from becoming a better developer.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="about-elsewhere">
        <div>
          <p className="eyebrow">Elsewhere</p>
          <h2>The output and the source.</h2>
        </div>
        <p>
          The portfolio holds the finished work. GitHub holds the code. This
          journal holds the part in between.
        </p>
        <div className="about-elsewhere__links">
          <a
            href="https://victor-omeife.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://github.com/victoromeife"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </div>
  );
}
