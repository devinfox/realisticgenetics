import "./foxmade.css";
import { Plumbob } from "./plumbob";
import { SignupForm } from "./signup-form";
import { Nav } from "./nav";

// Routes through /api/download, which counts the download (no personal data),
// then redirects to the file in public/. Bump the filename in app/api/download/route.ts.
const DOWNLOAD_URL = "/api/download";

// Community server for bug reports, discussion and feature suggestions.
const DISCORD_URL = "https://discord.com/invite/xv5MFKJrWd";

// FAQ answers live here so the visible <details> and the FAQPage structured data
// can never drift apart. Google penalises schema that doesn't match the page.
const FAQ = [
  {
    q: "Do I need to start a new save?",
    a: "No. You can use it with an existing save.",
  },
  {
    q: "Will it work with my current legacy family?",
    a: "Yes. The in-game tool can scan the family tree and start building genetics from the relatives already there.",
  },
  {
    q: "Does it change every Sim in my save?",
    a: "No. It isn't going to randomly remake your whole save. It runs when a new baby is born or when you manually use the tool on an existing Sim.",
  },
  {
    q: "Can Sims inherit features from their grandparents?",
    a: "Yes. That's one of the main reasons I made it.",
  },
  {
    q: "Can recessive traits skip generations?",
    a: "Yes. A Sim can carry a trait without showing it and later pass it to their child.",
  },
  {
    q: "Do babies actually look like their parents now?",
    a: "That's the whole point. Instead of relying on the game's high random mutation, this Sims 4 genetics mod builds each baby from the family's real hair color, eye color and skin tone, plus facial features pulled from parents and grandparents, so newborns read as part of the family instead of a random roll.",
  },
  {
    q: "Does it work with MC Command Center and other mods?",
    a: "Yes. Realistic Genetics is a script mod that only steps in when a baby is born or when you open its menu, so it runs alongside MC Command Center (MCCC) and CAS custom content like custom skins, eyes, hair and other Create-a-Sim mods, without taking them over.",
  },
  {
    q: "Does it invent traits that aren't in the family?",
    a: "It won't invent wild or unnatural traits. Recessive traits come from the bloodline, and when an ancestor is missing from the tree, the mod can assume a realistic hidden carrier, which is how recessive genes resurface in real life.",
  },
  {
    q: "What does beta mean?",
    a: "It means the main mod is working, but I'm still finding edge cases and testing it on more complicated saves.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Realistic Genetics",
      alternateName: "Realistic Genetics Sims 4 Mod",
      applicationCategory: "GameApplication",
      applicationSubCategory: "The Sims 4 Mod",
      operatingSystem: "Windows, macOS",
      softwareVersion: "Beta 2.9.72",
      description:
        "A Sims 4 genetics mod that passes hair color, eye color, skin tone and facial features down the whole family tree, with dominant and recessive traits that can skip generations.",
      url: "https://foxmademods.com",
      image: "https://foxmademods.com/opengraph-image",
      screenshot: [
        "https://foxmademods.com/rg-menu-inheritance.png",
        "https://foxmademods.com/rg-tree-4gen.png",
      ],
      keywords:
        "sims 4 genetics mod, realistic genetics, sims 4 inheritance mod, sims 4 recessive genes, grandparent genetics, sims 4 family tree, babies look like parents",
      author: { "@type": "Person", name: "Fox", url: "https://foxmademods.com" },
      publisher: { "@type": "Organization", name: "Fox Made Mods", url: "https://foxmademods.com" },
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <div className="fm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Nav />

      <article id="top">
        <header className="post-head">
          <div className="article">
            <Plumbob className="pb pb-hero" id="hero" />
            <div className="eyebrow">A genetics mod for The&nbsp;Sims&nbsp;4</div>
            <h1>Realistic Genetics</h1>
            <p className="deck">
              A Sims&nbsp;4 genetics mod that actually remembers the whole family.
            </p>
            <div className="hero-copy">
              <p>
                The game already passes down DNA from the parents. The problem is, it only
                looks at the parents.
              </p>
              <p>
                Grandparents aren&rsquo;t part of the genetics system, and Sims don&rsquo;t
                carry hidden recessive traits. So if blue eyes disappear for one generation,
                they can&rsquo;t randomly come back in the next one, even if the
                grandparent had them.
              </p>
              <p>
                <strong>Realistic Genetics fixes that.</strong>
              </p>
            </div>
            <div className="dl-hero">
              <a className="btn btn-primary" href={DOWNLOAD_URL}>
                Download the beta
              </a>
              <p>Free &middot; Works with existing saves &middot; Made for legacy players</p>
            </div>
            <div className="byline">
              <span className="avatar">
                <Plumbob className="pb pb-av" id="av" />
              </span>
              <span>
                <span className="who">Fox</span>
                <br />
                <span className="meta">
                  Fox&nbsp;Made&nbsp;Mods &middot; Beta release &middot; July&nbsp;2026
                </span>
              </span>
            </div>
          </div>
        </header>

        <div className="article">
          <a
            className="community"
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="community-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.369a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.6 12.6 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.891.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.028zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.211 0 2.176 1.096 2.157 2.42 0 1.333-.955 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.211 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </span>
            <span className="community-txt">
              <b>Join the community on Discord</b>
              <span>
                Report bugs, ask questions, share your families and suggest
                features.
              </span>
            </span>
            <span className="community-go" aria-hidden="true">
              &rarr;
            </span>
          </a>
        </div>

        <div className="article prose">
          <h2 id="what">What this does, in one line</h2>
          <p className="lead">It gives your Sims an actual genetic history.</p>

          <h2 id="problem">What&rsquo;s wrong with the genetics in the game?</h2>
          <p>
            The genetics in The Sims&nbsp;4 aren&rsquo;t completely random. Kids do inherit
            features from their parents, but the base game has{" "}
            <a
              href="https://sims.fandom.com/wiki/Genetics"
              target="_blank"
              rel="noopener noreferrer"
            >
              no real dominant or recessive genes
            </a>{" "}
            and a high random mutation rate, so children often drift away from the family
            they were born into.
          </p>
          <p>The issue is that the game stops there.</p>
          <p>
            It doesn&rsquo;t remember what the parents inherited from <em>their</em>{" "}
            parents. There are no hidden genes being carried through the family, so traits
            can&rsquo;t properly skip generations.
          </p>
          <p>
            A Sim with brown eyes can&rsquo;t carry blue eyes from their mother and later
            pass them to their own child. Once the blue eyes are no longer visible,
            they&rsquo;re basically gone.
          </p>
          <p>That&rsquo;s what I wanted to fix.</p>

          <h2 id="how">How it works</h2>
          <p>
            When a baby is born, the mod looks at the actual family tree instead of only
            using the two parents.
          </p>
          <p>
            Hair and eye color are passed down using dominant and recessive genetics. A
            Sim can carry a color without showing it, then pass it on to a later generation.
          </p>
          <p>
            Skin tone works a little differently. It blends the parents&rsquo; tones, with
            some influence from further up the family, so children land in a natural range
            for their family rather than a random shade.
          </p>
          <p>
            Facial features can also come from different relatives. A child might get their
            mom&rsquo;s eyes, their dad&rsquo;s mouth and their grandmother&rsquo;s nose.
          </p>
          <p>
            Nothing unnatural appears out of nowhere. If a trait shows up, it traces back
            to the family.
          </p>

          <p className="callout">
            A trait can disappear for a generation and come back later because the Sim was
            still carrying it.
          </p>

          <h2 id="passed">What gets passed down?</h2>
          <ul>
            <li>
              <Plumbob className="pb pb-tick" id="t1" />
              <span>Eye color</span>
            </li>
            <li>
              <Plumbob className="pb pb-tick" id="t2" />
              <span>Hair color</span>
            </li>
            <li>
              <Plumbob className="pb pb-tick" id="t3" />
              <span>Skin tone</span>
            </li>
            <li>
              <Plumbob className="pb pb-tick" id="t4" />
              <span>Eyes</span>
            </li>
            <li>
              <Plumbob className="pb pb-tick" id="t5" />
              <span>Nose</span>
            </li>
            <li>
              <Plumbob className="pb pb-tick" id="t6" />
              <span>Mouth</span>
            </li>
            <li>
              <Plumbob className="pb pb-tick" id="t7" />
              <span>Jaw and face shape</span>
            </li>
            <li>
              <Plumbob className="pb pb-tick" id="t8" />
              <span>Other facial features</span>
            </li>
          </ul>
          <p>
            Every feature is rolled separately, so siblings won&rsquo;t all look the same.
          </p>
          <p>
            One child might look mostly like their dad. Another might look more like their
            mom. Another might randomly look exactly like a grandparent.
          </p>
          <p>
            The point isn&rsquo;t to make every Sim look identical. It&rsquo;s to make them
            look like they came from the same family.
          </p>

          <h2 id="difference">See the difference</h2>
          <p>
            This is one baby, generated twice. On the left is the game&rsquo;s version. On
            the right is the mod&rsquo;s version, built from the family underneath. Look at
            the family, then look again.
          </p>
          <div className="compare">
            <figure className="cmp">
              <div className="cmp-img">
                <img
                  src="/rg-diff-nomod.png"
                  alt="A Sims 4 baby generated by the base game, looking unrelated to the rest of the family."
                  loading="lazy"
                />
              </div>
              <figcaption>
                <span className="tag off">Without the mod</span>
                The game&rsquo;s random roll.
              </figcaption>
            </figure>
            <figure className="cmp">
              <div className="cmp-img">
                <img
                  src="/rg-diff-mod.png"
                  alt="The same Sims 4 baby generated by Realistic Genetics, clearly resembling the parents and grandparents."
                  loading="lazy"
                />
              </div>
              <figcaption>
                <span className="tag on">With the mod</span>
                Inherited from the family below.
              </figcaption>
            </figure>
          </div>

          <div className="fam-tree">
            <ul>
              <li>
                <span className="node baby">
                  <span className="ava">
                    <img src="/rg-diff-mod.png" alt="The baby, built by the mod" loading="lazy" />
                  </span>
                  <span className="lbl">The baby</span>
                </span>
                <ul>
                  <li>
                    <span className="node">
                      <span className="ava">
                        <img src="/rg-anc-mom.png" alt="The baby's mother" loading="lazy" />
                      </span>
                      <span className="lbl">Mom</span>
                    </span>
                    <ul>
                      <li>
                        <span className="node sm">
                          <span className="ava">
                            <img src="/rg-anc-mat-gma.png" alt="Maternal grandmother" loading="lazy" />
                          </span>
                          <span className="lbl">Grandma</span>
                        </span>
                      </li>
                      <li>
                        <span className="node sm">
                          <span className="ava">
                            <img src="/rg-anc-mat-gpa.png" alt="Maternal grandfather" loading="lazy" />
                          </span>
                          <span className="lbl">Grandpa</span>
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="node">
                      <span className="ava">
                        <img src="/rg-anc-dad.png" alt="The baby's father" loading="lazy" />
                      </span>
                      <span className="lbl">Dad</span>
                    </span>
                    <ul>
                      <li>
                        <span className="node sm">
                          <span className="ava">
                            <img src="/rg-anc-pat-gma.png" alt="Paternal grandmother" loading="lazy" />
                          </span>
                          <span className="lbl">Grandma</span>
                        </span>
                      </li>
                      <li>
                        <span className="node sm">
                          <span className="ava">
                            <img src="/rg-anc-pat-gpa.png" alt="Paternal grandfather" loading="lazy" />
                          </span>
                          <span className="lbl">Grandpa</span>
                        </span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <p className="tree-note">The parents and grandparents the mod pulled from.</p>

          <h2 id="results">See it across a family</h2>
          <p>This is where the mod gets interesting.</p>
          <p>
            You might notice a grandchild has the same nose as their grandmother. Two
            cousins might have the same eyes. A hair or eye color can disappear and then
            show up again a generation later.
          </p>
          <figure>
            <img
              className="shot"
              src="/rg-tree-sisters.webp"
              alt="Sims 4 family tree of two sisters showing which facial feature each inherited from their parents and grandparents with the Realistic Genetics mod."
              width={1080}
              height={1125}
              loading="lazy"
            />
            <figcaption>
              Two sisters, same parents. Each inherits a different mix, with every
              feature traced to a real ancestor.
            </figcaption>
          </figure>
          <p>
            The longer you play the family, the more you can actually see traits moving
            through it.
          </p>
          <figure>
            <img
              className="shot"
              src="/rg-tree-4gen.png"
              alt="Four-generation Sims 4 legacy family tree showing recessive red hair and blue eyes skipping a generation and resurfacing in the heirs."
              width={1541}
              height={1600}
              loading="lazy"
            />
            <figcaption>
              Four generations deep. Recessive traits like red hair and blue eyes
              resurface from founders further up the tree.
            </figcaption>
          </figure>
          <p>You can look at a Sim and tell where they came from.</p>

          <h2 id="ingame">What you&rsquo;ll see in the game</h2>
          <p>
            When a baby is born, you&rsquo;ll get a genetics report showing what they
            inherited and which side of the family it came from.
          </p>
          <p>
            You can also open the genetics menu to see the family members the system used.
          </p>
          <p>
            It&rsquo;s basically a breakdown of how the Sim ended up looking the way they
            do.
          </p>

          <div className="shots-2">
            <figure>
              <img
                className="shot"
                src="/rg-menu-inheritance.png"
                alt="Realistic Genetics birth report in The Sims 4 showing which features the baby inherited and which parent or grandparent each came from."
                width={988}
                height={1164}
                loading="lazy"
              />
              <figcaption>
                <b>Inheritance breakdown</b>. Exactly which parent or grandparent each
                feature came from.
              </figcaption>
            </figure>
            <figure>
              <img
                className="shot"
                src="/rg-menu-actions.png"
                alt="Realistic Genetics in-game menu in The Sims 4 with options to recalculate genetics, view inheritance, save genetics and refresh a Sim's look."
                width={984}
                height={1164}
                loading="lazy"
              />
              <figcaption>
                <b>The genetics menu</b>. Recalculate, view inheritance, save the look,
                or refresh a Sim&rsquo;s appearance.
              </figcaption>
            </figure>
          </div>

          <h2 id="whatsnew">Fixed in this update (Beta 2.9.72)</h2>
          <p>
            The newborn card now tells you who each feature came from, and the mod
            plays better alongside MC Command Center.
          </p>
          <ul>
            <li>
              <Plumbob className="pb pb-tick" id="g1" />
              <span>
                <b>The newborn card tells you who each feature came from.</b> When a
                baby was born the card said no features against everyone &ndash; the
                parents included &ndash; and only read properly once the Sim grew up.
                Sometimes it showed the previous Sim&rsquo;s relatives instead, which
                is why it seemed to work now and then. The inheritance itself was
                always correct; only the card was wrong. The baby&rsquo;s face still
                changes at the teen birthday as before, so the card is a preview of
                what&rsquo;s coming.
              </span>
            </li>
            <li>
              <Plumbob className="pb pb-tick" id="g2" />
              <span>
                <b>Better behaved with MC Command Center.</b> Realistic Genetics and
                MCCC both adjust the same part of the game when a baby is created.
                Depending on which of them the game loaded first, that could fail
                &ndash; and when it did, the baby was never finished being made: no
                baby, the mother acting strangely, and the child missing from the
                family tree. It now works whichever order they load in.
              </span>
            </li>
          </ul>

          <div className="callout">
            <p>
              <b>Used an earlier beta?</b> Run <code>rg.clearmemory</code> once in the
              cheat console after updating, or pick <b>Clear saved faces</b> from the
              Realistic Genetics menu.
            </p>
            <p>
              Earlier betas saved their own copies of your Sims&rsquo; faces, and an old
              copy can override the new results &ndash; a Sim keeps snapping back to an
              odd face no matter what you do. This clears them out across every save
              folder, and backs them up first. This version also merges those folders
              into one by itself when you first load a save.
            </p>
            <p>
              It&rsquo;s safe. Your Sims keep the faces they already have &ndash; that
              lives in your save, not in the mod&rsquo;s folder. Re-roll a Sim to give
              them the improved genetics. Installing for the first time? You can ignore
              this.
            </p>
          </div>

          <h3>Earlier in this beta</h3>
          <div className="chg-wrap">
            <table className="chg">
              <thead>
                <tr>
                  <th>Version</th>
                  <th>What changed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>2.9.68</th>
                  <td>Faces stopped resetting after a trip through CAS, edits made in CAS stick, bodies are no longer exaggerated, and the mod keeps its data in one folder.</td>
                </tr>
                <tr>
                  <th>2.9.64</th>
                  <td>Chins and cheeks pass down between sons and daughters. Seven sliders were filed under the wrong part of the face. Stopped a Sim snapping back to the same odd face.</td>
                </tr>
                <tr>
                  <th>2.9.62</th>
                  <td>Kids look like the relative they got each feature from. Re-rolling a face works properly. Noses, lips and jaws come out right.</td>
                </tr>
                <tr>
                  <th>2.9.46</th>
                  <td>Sims keep their own hairstyle. Much better hair colour matching. Grey hair from aging isn&rsquo;t inherited. Better cross-gender features. Fixed births failing with MC Command Center. Occult eye colours stay occult.</td>
                </tr>
                <tr>
                  <th>2.9.30</th>
                  <td>Much faster loading, and no more save or CAS freeze. Same-sex and gallery-parent births inherit properly. Hospital births work. Twins and triplets each handled. Babies no longer look off, and grown-up looks stick.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dl">
            <h3>Download the beta</h3>
            <p>
              The main system is working, but this is still a beta. I&rsquo;ve tested it on
              a lot of different families, but Sims players make some extremely complicated
              family trees, so I&rsquo;m sure there are situations I haven&rsquo;t run into
              yet.
            </p>
            <p>
              Back up your save, try it out and send me anything that looks wrong.
            </p>
            <a className="btn btn-primary" href={DOWNLOAD_URL}>
              Download Realistic Genetics
            </a>
          </div>

          <h2 id="install">Installing it</h2>
          <ol className="steps">
            <li>Download and unzip the file.</li>
            <li>
              Put <code>RealisticGenetics.ts4script</code> in{" "}
              <em>
                Documents &rsaquo; Electronic&nbsp;Arts &rsaquo; The&nbsp;Sims&nbsp;4
                &rsaquo; Mods
              </em>
              . It&rsquo;s the only file. There&rsquo;s no <code>.package</code>.
              Don&rsquo;t place it more than one folder deep.
            </li>
            <li>
              Make sure <strong>Custom Content and Mods</strong> and{" "}
              <strong>Script Mods Allowed</strong> are turned on in your game settings.
            </li>
            <li>Restart the game.</li>
          </ol>

          <h2 id="using">Using it</h2>
          <p>
            For new babies, you don&rsquo;t have to do anything. The genetics system runs
            automatically when they&rsquo;re born.
          </p>
          <p>
            You can also use the tool with an existing multigenerational legacy. It scans up
            the family tree, captures the parents and grandparents it can find, and builds
            the genetics from there.
          </p>
          <p>
            <strong>You do not need to start a new save.</strong>
          </p>

          <h2 id="safe">Is it safe for my save?</h2>
          <p>
            It shouldn&rsquo;t delete Sims, change relationships or rebuild your whole
            family.
          </p>
          <p>
            That being said, it is still a beta, so please back up your save before testing
            it, especially if it&rsquo;s a legacy you&rsquo;ve been playing for
            years.
          </p>
          <p>
            The system is doing a lot behind the scenes, and there may be weird family
            setups or mod conflicts I haven&rsquo;t seen yet.
          </p>

          <h2 id="compat">Compatibility &amp; other Sims 4 mods</h2>
          <p>
            Realistic Genetics is a lightweight <em>script mod</em> for The Sims&nbsp;4. It
            only runs when a baby is born or when you open its menu, so it sits happily
            alongside the mods most simmers already run, including{" "}
            <a
              href="https://deaderpool-mccc.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              MC&nbsp;Command&nbsp;Center (MCCC)
            </a>{" "}
            and Create-a-Sim custom content like custom skins, eyes and hair.
          </p>
          <p>
            New to Sims&nbsp;4 mods, or looking for more to pair with it? These are the
            trusted communities simmers download from:{" "}
            <a
              href="https://modthesims.info"
              target="_blank"
              rel="noopener noreferrer"
            >
              ModTheSims
            </a>
            ,{" "}
            <a
              href="https://www.curseforge.com/sims4"
              target="_blank"
              rel="noopener noreferrer"
            >
              CurseForge
            </a>{" "}
            and{" "}
            <a
              href="https://www.nexusmods.com/games/thesims4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nexus&nbsp;Mods
            </a>
            . And if you want the full detail on how the base game handles inheritance and
            its random mutation rate, the{" "}
            <a
              href="https://sims.fandom.com/wiki/Genetics"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sims Wiki genetics page
            </a>{" "}
            is worth a read.
          </p>

          <h2 id="faq">Questions</h2>
          {FAQ.map((item) => (
            <details className="faq" key={item.q}>
              <summary>{item.q}</summary>
              <div className="ans">{item.a}</div>
            </details>
          ))}

          <div className="support" id="support">
            <h2>Any bugs to report?</h2>
            <p style={{ marginBottom: 18 }}>Let me know here!</p>
            <SignupForm />
          </div>
        </div>
      </article>

      <footer>
        <div className="foot-in">
          <div className="foot-brand">
            <Plumbob className="pb pb-foot" id="foot" />
            <b>Fox&nbsp;Made&nbsp;Mods</b>
          </div>
          <div className="foot-links">
            <a href="#how">How it works</a>
            <a href="#install">Install</a>
            <a href="#faq">FAQ</a>
          </div>
          <p className="disclaimer">
            The Sims&trade; is a trademark of Electronic Arts Inc. Fox Made is an independent
            fan project and is not affiliated with or endorsed by EA or Maxis.
          </p>
        </div>
      </footer>
    </div>
  );
}
