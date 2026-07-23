import "./foxmade.css";
import { Plumbob } from "./plumbob";
import { SignupForm } from "./signup-form";

// Routes through /api/download, which counts the download (no personal data),
// then redirects to the file in public/. Bump the filename in app/api/download/route.ts.
const DOWNLOAD_URL = "/api/download";

export default function Home() {
  return (
    <div className="fm">
      <nav className="nav">
        <div className="nav-in">
          <a className="brand" href="#top">
            <Plumbob className="pb pb-nav" id="nav" />
            <b>FoxMade&nbsp;Mods</b>
          </a>
          <div className="nav-links">
            <a href="#how">How it works</a>
            <a href="#install">Install</a>
          </div>
        </div>
      </nav>

      <article id="top">
        <header className="post-head">
          <div className="article">
            <Plumbob className="pb pb-hero" id="hero" />
            <div className="eyebrow">A mod for The&nbsp;Sims&nbsp;4</div>
            <h1>RealisticGenetics</h1>
            <p className="deck">
              Babies that actually look like their family &mdash; real inheritance for
              eyes, hair, skin and facial features.
            </p>
            <div className="byline">
              <span className="avatar">
                <Plumbob className="pb pb-av" id="av" />
              </span>
              <span>
                <span className="who">Fox</span>
                <br />
                <span className="meta">FoxMade&nbsp;Mods &middot; Beta release &middot; July&nbsp;2026</span>
              </span>
            </div>
            <div className="pills">
              <span className="pill on">Free</span>
              <span className="pill on">No other mods needed</span>
              <span className="pill">Base-game friendly</span>
              <span className="pill">Safe to remove</span>
            </div>
          </div>
        </header>

        <div className="article prose">
          <p className="lead">
            When two Sims have a baby, the game basically rolls the dice. The little one
            often ends up looking nothing like either parent &mdash; a stranger with a
            random face. After twenty years of playing, that always bugged me. Real
            families have a look. Grandma&rsquo;s nose turns up three generations later.
            That&rsquo;s the part I wanted back.
          </p>

          <h2 id="what">What it does, in one line</h2>
          <p>
            <strong>RealisticGenetics makes children inherit their looks from their
            parents and grandparents</strong> &mdash; the same way genetics works in real
            life. Eye colour, hair colour, skin tone and the shape of the face all get
            passed down, instead of being picked at random.
          </p>

          <h2 id="how">How it works (in plain English)</h2>
          <p>Cast your mind back to school biology for a second &mdash; I&rsquo;ll keep it painless.</p>
          <p>
            Everyone carries two copies of each trait, one from each parent. Some versions
            are <strong>dominant</strong> (they show up whenever they&rsquo;re present) and
            some are <strong>recessive</strong> (they only show up if you have two of them).
          </p>
          <p>
            Brown eyes are dominant; blue eyes are recessive. So a brown-eyed Sim can
            quietly carry a hidden blue gene without you ever knowing. Put two of those
            Sims together and &mdash; surprise &mdash; you can get a blue-eyed baby, even
            though both parents have brown eyes.
          </p>
          <p>
            That&rsquo;s the fun part: a trait can hide for a generation and pop back up
            later. Red hair, blue eyes, a certain skin tone &mdash; they&rsquo;re never
            truly gone, just waiting. RealisticGenetics keeps track of all of it quietly in
            the background, for every Sim in the family tree.
          </p>

          <p className="callout">
            Blue eyes can vanish for a whole generation, then reappear in a grandchild. The
            mod remembers who&rsquo;s carrying what.
          </p>

          <h2 id="passed">What gets passed down</h2>
          <ul>
            <li>
              <Plumbob className="pb pb-tick" id="t1" />
              <span><b>Eye colour</b> &mdash; with real dominant and recessive genes</span>
            </li>
            <li>
              <Plumbob className="pb pb-tick" id="t2" />
              <span><b>Hair colour</b> &mdash; including recessive shades that can skip a generation</span>
            </li>
            <li>
              <Plumbob className="pb pb-tick" id="t3" />
              <span><b>Skin tone</b> &mdash; blended from both parents and kept natural</span>
            </li>
            <li>
              <Plumbob className="pb pb-tick" id="t4" />
              <span><b>Facial features</b> &mdash; nose, jaw, eyes and mouth, inherited from parents and grandparents</span>
            </li>
          </ul>
          <p>
            Kids come out clearly related to their family &mdash; a mix of both parents,
            sometimes with a grandparent&rsquo;s feature showing through &mdash; without
            being identical clones of each other.
          </p>

          <h2 id="results">See it across a family</h2>
          <p>
            Here are real families built with the mod. Every child&rsquo;s features trace
            back to a specific parent or grandparent &mdash; and two siblings from the exact
            same parents still turn out as their own people.
          </p>
          <figure>
            <img
              className="shot"
              src="/rg-tree-sisters.webp"
              alt="Family tree of two sisters, Janet and Colleen, showing which facial feature each inherited from their parents and grandparents."
              width={1080}
              height={1125}
              loading="lazy"
            />
            <figcaption>
              Two sisters, same parents &mdash; each inherits a different mix, with every
              feature traced to a real ancestor.
            </figcaption>
          </figure>
          <figure>
            <img
              className="shot"
              src="/rg-tree-4gen.png"
              alt="Four-generation family tree showing traits passed down from the founders to the heirs, including recessive red hair and blue eyes resurfacing."
              width={1541}
              height={1600}
              loading="lazy"
            />
            <figcaption>
              Four generations deep &mdash; recessive traits like red hair and blue eyes
              resurface from founders further up the tree.
            </figcaption>
          </figure>

          <h2 id="ingame">What you&rsquo;ll see in the game</h2>
          <p>
            When a baby is born, you&rsquo;ll get a little notification, and then a pop-up
            that shows you exactly what they inherited and from whom. Don&rsquo;t love the
            result? There&rsquo;s a <strong>reroll</strong> button. Happy with it? It locks
            in and sticks &mdash; even when they grow up into a child, teen or adult. No
            trip into Create-a-Sim required.
          </p>

          <div className="shots-2">
            <figure>
              <img
                className="shot"
                src="/rg-menu-actions.png"
                alt="In-game Realistic Genetics menu with options: recalculate genetics, view inheritance, save genetics, refresh look."
                width={984}
                height={1164}
                loading="lazy"
              />
              <figcaption>The menu for any Sim &mdash; recalculate, view, save, or refresh.</figcaption>
            </figure>
            <figure>
              <img
                className="shot"
                src="/rg-menu-inheritance.png"
                alt="Inheritance breakdown showing which parent or grandparent each of a Sim's features came from."
                width={988}
                height={1164}
                loading="lazy"
              />
              <figcaption>The breakdown &mdash; exactly who they got each feature from.</figcaption>
            </figure>
          </div>

          <div className="dl">
            <h3>Download the beta</h3>
            <p>Free &middot; The Sims&nbsp;4 base game &middot; safe to remove any time</p>
            <a className="btn btn-primary" href={DOWNLOAD_URL}>Download RealisticGenetics</a>
          </div>

          <h2 id="install">Installing it</h2>
          <ol className="steps">
            <li>Download the file above.</li>
            <li>
              Drop <code>RealisticGenetics.ts4script</code> into your Mods folder &mdash;{" "}
              <em>Documents &rsaquo; Electronic&nbsp;Arts &rsaquo; The&nbsp;Sims&nbsp;4 &rsaquo; Mods</em>.
            </li>
            <li>
              In the game, open <em>Options &rsaquo; Game&nbsp;Options &rsaquo; Other</em> and
              tick both <strong>Enable Custom Content and Mods</strong> and{" "}
              <strong>Script Mods Allowed</strong>.
            </li>
            <li>Restart the game. That&rsquo;s it &mdash; new babies inherit automatically.</li>
          </ol>

          <h2 id="using">Using it</h2>
          <p>
            For the beta, the menu opens through the cheat console. Press{" "}
            <code>Ctrl+Shift+C</code>, type a command, and hit Enter:
          </p>
          <ul className="cmd-list">
            <li>
              <code>realisticgenetics</code> &mdash; opens the menu for the selected Sim:
              recalculate their genetics, see what they inherited, save their look, or
              refresh their appearance.
            </li>
            <li>
              <code>rg.ping</code> &mdash; a quick check that the mod loaded correctly.
            </li>
          </ul>
          <p>A proper click-menu is on the way &mdash; the console is just the beta shortcut.</p>

          <h2 id="safe">Is it safe for my save?</h2>
          <p>
            Short version: yes. It keeps its genetics data in its <strong>own separate
            file</strong>, and the only game data it touches is the same facial information
            Create-a-Sim already uses. It doesn&rsquo;t jam anything strange into your save,
            and you can remove it at any time with no lasting damage. I&rsquo;m a software
            engineer by day, and it runs in my own game before it ever reaches yours.
          </p>

          <h2 id="faq">Questions</h2>
          <details className="faq">
            <summary>Do I need any other mods?</summary>
            <div className="ans">No. A lot of genetics mods need a separate framework or core library to run &mdash; this one stands on its own. Just the one file.</div>
          </details>
          <details className="faq">
            <summary>Will it work with Sims I already have?</summary>
            <div className="ans">Yes. Open the menu on any existing Sim and choose recalculate, and it&rsquo;ll work out their genetics from their family.</div>
          </details>
          <details className="faq">
            <summary>Does it fix faces drifting to the same look over generations?</summary>
            <div className="ans">That&rsquo;s the whole point. Features come from real ancestors, so a family keeps its look across generations instead of sliding back toward the same default face.</div>
          </details>
          <details className="faq">
            <summary>What about ghosts or ancestors who&rsquo;ve died?</summary>
            <div className="ans">Their stored genetics still get used, so a grandchild can inherit from a grandparent who has already passed on.</div>
          </details>
          <details className="faq">
            <summary>It&rsquo;s a beta &mdash; what does that mean?</summary>
            <div className="ans">It works, and I play with it every day. I&rsquo;m still smoothing rough edges, so if you hit a bug I&rsquo;d love to hear it &mdash; there&rsquo;s a box below.</div>
          </details>

          <div className="support" id="support">
            <h2>It&rsquo;s just me &mdash; Fox</h2>
            <p>
              I&rsquo;m a 28-year-old simmer &mdash; I&rsquo;ve been part of the community
              for almost twenty years. These days I&rsquo;m a software engineer, and
              I&rsquo;m back in school for genetic engineering, so I wanted to update the
              Sims&nbsp;4&rsquo;s twelve-year-old genetics system with something real. If
              something breaks, tell me &mdash; I read every message.
            </p>
            <p style={{ marginBottom: 18 }}>
              <strong>Want to know when the next mod or update lands?</strong> Drop your
              email &mdash; no spam, no schedule. You can leave a bug or a request here too.
            </p>
            <SignupForm />
          </div>
        </div>
      </article>

      <footer>
        <div className="foot-in">
          <div className="foot-brand">
            <Plumbob className="pb pb-foot" id="foot" />
            <b>FoxMade&nbsp;Mods</b>
          </div>
          <div className="foot-links">
            <a href="#how">How it works</a>
            <a href="#install">Install</a>
          </div>
          <p className="disclaimer">
            The Sims&trade; is a trademark of Electronic Arts Inc. FoxMade is an independent
            fan project and is not affiliated with or endorsed by EA or Maxis.
          </p>
        </div>
      </footer>
    </div>
  );
}
