import {
  CheckCircle2,
  ShieldCheck,
  Hash,
  Ban,
  Lock,
  Link as LinkIcon,
  GitMerge,
  Activity,
  AlertTriangle,
  Type,
  CalendarClock,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import { LightboxImage } from "./Lightbox";

import twoKindsOfDriftImg from "../../assets/amazon/code-connect-01-two-kinds-of-drift.png";
import threeChecksImg from "../../assets/amazon/code-connect-02-three-checks.png";
import slackLogImg from "../../assets/amazon/code-connect-03-slack-log.png";
import progressTrackerImg from "../../assets/amazon/code-connect-04-progress-tracker.png";
import docsitePageImg from "../../assets/amazon/docsite-01-component-page.png";
import stickerSheetImg from "../../assets/amazon/docsite-02-sticker-sheet.png";
import namingTableImg from "../../assets/amazon/audits-01-naming-table.png";
import iconDescriptionsImg from "../../assets/amazon/audits-02-icon-descriptions.png";
import libraryFeedImg from "../../assets/amazon/library-feed-01-slack-post.png";
import handoffImg from "../../assets/amazon/handoff-01-document.png";

/* ─── Shared building blocks (match the Gap / Vistaprint case studies) ─── */

function SectionHeader({ label, heading }: { label: string; heading: string }) {
  return (
    <div className="mb-10">
      <p className="text-xs uppercase tracking-[0.2em] text-yellow-400/60 mb-3">{label}</p>
      <h3 className="text-xl md:text-2xl text-white">{heading}</h3>
    </div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-4">{children}</p>
  );
}

function Para({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-neutral-300 leading-relaxed max-w-2xl ${className}`}>{children}</p>
  );
}

function Cards({
  items,
}: {
  items: { icon: ComponentType<{ className?: string }>; title: string; body: string }[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {items.map((c) => (
        <div
          key={c.title}
          className="bg-neutral-900/40 border border-neutral-800 rounded-xl px-6 py-6 hover:border-neutral-700 transition-colors duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-yellow-400/5 border border-yellow-400/10 shrink-0 mt-0.5">
              <c.icon className="w-4 h-4 text-yellow-400/60" />
            </div>
            <div>
              <p className="text-white mb-2">{c.title}</p>
              <p className="text-sm text-neutral-400 leading-relaxed">{c.body}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Text on the left, a narrow image on the right (stacks on mobile). */
function TextImageRow({ children, image }: { children: ReactNode; image: ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(0,22rem)] gap-8 md:gap-10 items-start">
      <div className="space-y-5">{children}</div>
      <div>{image}</div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
 Section 1: System Context
 ═══════════════════════════════════════════════════ */

export function AmazonContext() {
  return (
    <div>
      <SectionHeader label="System Context" heading="Links Nobody Was Checking" />

      <div className="mb-12">
        <Eyebrow>Snapshot</Eyebrow>
        <ul className="space-y-3">
          {[
            "A few links made by hand, with nothing checking them.",
            "Three of five pointed at components deleted months earlier.",
            "Developers couldn't tell good code from stale code.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-neutral-300">
              <CheckCircle2 className="w-4 h-4 text-yellow-400/60 mt-0.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <Para className="mb-6">
        Figma's Code Connect attaches real code to design components. A developer selects a star
        rating in Figma and sees our actual web component, with the right settings filled in.
        Without it, Figma shows a generated guess.
      </Para>
      <Para className="mb-12">
        A link is a promise that two things match. Engineers own the code. Designers own the Figma
        components. Nobody owns both, so the promise can stop being true while everyone does their
        job well. A designer renames a setting and developers see an error. Or the setting quietly
        drops out of the code, and nothing looks wrong at all.
      </Para>

      <div className="mb-10">
        <Eyebrow>Before / After</Eyebrow>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-800 rounded-xl overflow-hidden">
          <div className="bg-neutral-950 px-6 py-7">
            <p className="text-xs text-neutral-500 mb-3 uppercase tracking-[0.15em]">Before</p>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>Links made by hand, with nothing checking them</li>
              <li>Broken links went unnoticed for months</li>
              <li>Uploads relied on someone remembering</li>
              <li>No way to tell good code from stale</li>
            </ul>
          </div>
          <div className="bg-neutral-950 px-6 py-7">
            <p className="text-xs text-yellow-400/60 mb-3 uppercase tracking-[0.15em]">After</p>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>Every link reviewed like any other code change</li>
              <li>A check before any link change merges</li>
              <li>Uploads only from reviewed, committed code</li>
              <li>A daily log of what's wrong, and for how long</li>
            </ul>
          </div>
        </div>
      </div>

      <Para>
        All of this is built and merged. It runs on its own once the release pipeline has its own
        Figma login.
      </Para>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
 Section 2: System Intervention
 ═══════════════════════════════════════════════════ */

export function AmazonDrift() {
  return (
    <div>
      <SectionHeader label="System Intervention" heading="Two Kinds of Drift, Two Fixes" />

      <Para className="mb-6">
        At first I treated every mismatch as one problem. Mapping out how each one happens showed
        two, with different owners and different fixes.
      </Para>
      <Para className="mb-6">
        <span className="text-white">Code drift.</span> Engineers changed the code, and Figma still
        shows the old version. The fix is to upload again, so the upload runs on its own after every
        merge. No designer needs to act.
      </Para>
      <Para className="mb-12">
        <span className="text-white">Component drift.</span> A designer renamed or removed a
        setting, or deleted a component. Uploading again can't fix this, because the code is still
        right. Figma has to be put back and the library published, and only a signed-in person can
        do that. So the daily log sends a designer straight to the component.
      </Para>

      <div className="mb-14">
        <LightboxImage
          src={twoKindsOfDriftImg}
          alt="Diagram of two flows. Code drift: an engineer merges a change, the upload runs on its own, and Figma shows the new code. Component drift: a designer changes a setting in Figma, the morning check spots it, the log links the designer to the component, and the designer puts it back and publishes the library."
          caption="Two kinds of drift. Code changes fix themselves. Figma changes go to a person."
        />
      </div>

      <Cards
        items={[
          {
            icon: ShieldCheck,
            title: "Code Is the Source of Truth",
            body: "When Figma and code disagree, Figma gets put back. The code is what customers get.",
          },
          {
            icon: Hash,
            title: "Count What's Wrong",
            body: "The headline number counts mismatches, not coverage. Coverage only goes up and says nothing about whether the work is right. The first count found 12.",
          },
          {
            icon: Ban,
            title: "Never Guess a Repair",
            body: "Nothing picks a replacement for a broken link on its own. A confident wrong guess looks healthy and hides the problem.",
          },
          {
            icon: Lock,
            title: "Safe by Default",
            body: "The daily check holds a read-only key, so it can't overwrite the iOS team's links on the same components, even by mistake.",
          },
        ]}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════
 Section 3: Automation
 ═══════════════════════════════════════════════════ */

export function AmazonChecks() {
  return (
    <div>
      <SectionHeader label="Automation" heading="Three Checks, Three Moments" />

      <Para className="mb-12">
        Each check runs at a different moment and behaves differently on purpose. The check before
        merge blocks a broken link, because a gate that only warns doesn't gate. The morning check
        only reports, because a daily report that turns the build red is a report someone switches
        off.
      </Para>

      <div className="mb-12">
        <LightboxImage
          src={threeChecksImg}
          alt="Diagram of three checks. Before a change merges: checks the links it touches against live Figma, and a broken link fails the build. After it merges: uploads committed, reviewed code only, and never overwrites another team's links. Every morning: checks every link, posts the log to Slack, and never fails the build."
          caption="Three checks. Each one fails, or doesn't, for a reason."
        />
      </div>

      <div className="flex items-start gap-4 border-l-2 border-yellow-400/30 pl-5 max-w-2xl">
        <p className="text-neutral-300 leading-relaxed">
          One rule runs through all three. A check that couldn't run must never look like a check
          that passed. If Figma is down or a key has expired, the result says "couldn't check", not
          "all clear".
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
 Section 4: Communication
 ═══════════════════════════════════════════════════ */

export function AmazonSlackLog() {
  return (
    <div>
      <SectionHeader label="Communication" heading="A Log Written for Designers" />

      <TextImageRow
        image={
          <LightboxImage
            src={slackLogImg}
            alt="A Slack-style daily log with three messages: a component that needs fixing in Figma, a note that Figma now shows the latest code, and a list of open items with how many days each has waited."
            caption="The daily log, recreated with sample content."
          />
        }
      >
        <Para>
          The first Slack message was accurate, and nobody would have acted on it. It named code
          settings and ended with a terminal command that most designers can't run. I rewrote it
          after reading it in Slack the way a designer would.
        </Para>
        <ul className="space-y-5">
          {[
            {
              icon: AlertTriangle,
              title: "Lead with the consequence.",
              body: '"The star count and the half star are no longer being set" became "Anyone building from this component today gets a rating with no half star."',
            },
            {
              icon: Type,
              title: "Use design names.",
              body: "Settings appear the way designers know them, and each item links to the component in Figma.",
            },
            {
              icon: CalendarClock,
              title: "Post every day.",
              body: "I first had it stay quiet when nothing changed. A quiet channel looks the same as a job that has stopped, so I reversed that. The log posts every morning, and each open item shows how long it has waited.",
            },
          ].map((c) => (
            <li key={c.title} className="flex items-start gap-3">
              <c.icon className="w-4 h-4 text-yellow-400/60 mt-1 shrink-0" />
              <p className="text-sm text-neutral-400 leading-relaxed">
                <span className="text-white">{c.title}</span> {c.body}
              </p>
            </li>
          ))}
        </ul>
        <Para>
          Nobody is assigned to an item. Anyone in the channel can fix anything in it. That only
          works when the queue is visible, so every item carries its age.
        </Para>
        <Para>
          For the Figma side, I also designed a small plugin with one button, "Match the code", that
          puts renamed settings back in one press. It needs Amazon's security review before
          designers can use it.
        </Para>
      </TextImageRow>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
 Section 5: Impact & Outcomes
 ═══════════════════════════════════════════════════ */

export function AmazonImpact() {
  return (
    <div>
      <SectionHeader label="Impact & Outcomes" heading="Built, Reviewed and Handed Over" />

      <div className="mb-12">
        <Eyebrow>Metrics</Eyebrow>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: LinkIcon, metric: "43 links", label: "Across two Figma libraries, covering 10 web components" },
            { icon: Activity, metric: "8 live", label: "In Figma's Dev Mode, checked variant by variant" },
            { icon: GitMerge, metric: "3 checks", label: "Before merge, after merge, every morning" },
          ].map((m) => (
            <div key={m.metric} className="bg-neutral-900/40 border border-neutral-800 rounded-xl px-5 py-6">
              <div className="p-2 rounded-lg bg-yellow-400/5 border border-yellow-400/10 w-fit mb-3">
                <m.icon className="w-4 h-4 text-yellow-400/60" />
              </div>
              <p className="text-xl text-yellow-400 mb-2">{m.metric}</p>
              <p className="text-sm text-neutral-400">{m.label}</p>
            </div>
          ))}
        </div>
      </div>

      <Para className="mb-12">
        All of the code is merged. The first eight links are live in Figma's Dev Mode. The other 35
        upload once the pipeline has its own Figma login, which is in progress.
      </Para>

      <div className="mb-16">
        <LightboxImage
          src={progressTrackerImg}
          alt="A progress tracker with a headline score, a progress bar and six phase cards, from manual authoring to drift detection and repair, each with a status chip."
          caption="The progress tracker I kept for leadership, October 2026. It scores pipeline phases, not coverage."
          lightBg
        />
      </div>

      <div className="mb-10">
        <Eyebrow>Decision-Making & Tradeoffs</Eyebrow>
        <Para className="mb-4">
          I kept every build as simple as I could: no new services to host, and links in messages
          instead of buttons. A Slack button for approving fixes would have needed an always-on
          service and another security review, so I dropped it. I also dropped a standalone
          dashboard I'd built, because a dashboard belongs on the docs site, where people already
          look.
        </Para>
        <Para>
          The tradeoff: nothing in the system edits Figma on its own, so a person still makes every
          Figma fix. The payoff: no automated job can damage a design file, and nothing new needs an
          owner.
        </Para>
      </div>

      <div>
        <Eyebrow>Role & Ownership</Eyebrow>
        <Para>
          I led this from the first audit to the handover. I designed how it works, set the rules it
          follows and wrote every message a designer sees. I built it with an AI coding assistant,
          and engineers reviewed every change before it merged. To hand it over, I wrote two guides:
          one for designers on why it works this way, and one page for the pipeline engineers with
          the three steps and what not to change.
        </Para>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
 Section 6: Also at Amazon
 ═══════════════════════════════════════════════════ */

export function AmazonAlso() {
  return (
    <div>
      <div className="mb-14">
        <p className="text-xs uppercase tracking-[0.2em] text-yellow-400/60 mb-3">Also at Amazon</p>
        <Para>Code Connect was one part of the year. These ran alongside it.</Para>
      </div>

      {/* 6a. Documentation */}
      <div className="mb-20">
        <SectionHeader label="Documentation" heading="Docs Organized by Surface" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start mb-12">
          <div className="space-y-5">
            <Para>
              The Amazon Books docs site covers every component on each surface it ships on: the
              Kindle apps, Kindle E-Reader devices and Amazon Shopping on the web. Readers pick a
              surface and see the guidance for it. My work made those pages easier to use and
              easier to write.
            </Para>
            <ul className="space-y-3">
              {[
                "Shared guidance is written once, and each surface overrides only what's different.",
                "An examples panel sits beside the guidance, with surface and light or dark switches.",
                "Pages gained anatomy, related components and alternatives. Each card comes from a Figma sticker sheet I built, with a card for every live component.",
                "Search finds a component by any of its names.",
                "I added 36 example images to the web tab of 23 pages, one component per image.",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-neutral-400 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400/60 mt-0.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <LightboxImage
            src={docsitePageImg}
            alt="A component documentation page for Button, with a surface switch, overview text and an examples panel showing filled, outline and reading buttons."
            caption="A component page. Pick a surface, read the guidance, see the examples beside it."
            lightBg
          />
        </div>
        <LightboxImage
          src={stickerSheetImg}
          alt="Eight sticker sheet cards in a grid, each with a component preview, a name, a one-line description and a link to its docs page."
          caption="The sticker sheet behind every related-component card."
          lightBg
        />
      </div>

      {/* 6b. Audits */}
      <div className="mb-20">
        <SectionHeader label="Audits" heading="Icons and Names" />
        <div className="mb-12">
          <TextImageRow
            image={
              <LightboxImage
                src={iconDescriptionsImg}
                alt="Two lookalike arrow icons, restart and undo, with the old description for restart and the new one that points to undo for reversing the last action."
                caption="The description pattern: what an icon is for, and which lookalike to use instead."
              />
            }
          >
            <Para>
              <span className="text-white">Icon library.</span> I reviewed all 204 icons against
              their one-line descriptions. Some drawings didn't match their words, and many icons
              had a lookalike with no guidance on which to pick. I proposed one pattern for every
              line: "Use for…", then "For…, use…" wherever a lookalike exists. The findings went to
              the team's icon review.
            </Para>
            <Para>
              <span className="text-white">Naming.</span> The same component often had a different
              name on the docs site, in each Figma library and in code. I laid out 11 of them side by
              side, with each version's picture and description and one question to settle. My
              recommendation: the docs site name becomes official and Figma follows. Code names
              stay, and the docs site lists them as "also known as", because renaming code would
              break the teams using it.
            </Para>
          </TextImageRow>
        </div>
        <LightboxImage
          src={namingTableImg}
          alt="A table of component names: each row lists the component, the names in use across the docs site, Figma and code, and the one question to decide."
          caption="The naming audit. The names in use, and the one question to settle for each."
          lightBg
        />
      </div>

      {/* 6c. Library changes in Slack */}
      <div className="mb-20">
        <SectionHeader label="Design Ops" heading="Library Changes, Posted to Slack" />
        <TextImageRow
          image={
            <LightboxImage
              src={libraryFeedImg}
              alt="A Slack-style post announcing that a component's status moved from Beta to Ready, with its latest log note and a link to open it in Figma, followed by a daily roundup of changed components."
              caption="A library change in Slack, recreated with sample content."
            />
          }
        >
          <Para>
            Designers log component changes in a small widget inside our Figma libraries: a status,
            a date and a note. Those notes stayed in Figma, seen only by people who opened the file.
          </Para>
          <Para>
            I designed a feed that reads every widget across two libraries and posts status changes
            and new entries to a team Slack channel, plus a daily roundup. It's merged and demoed to
            the team, and deployment is the next step.
          </Para>
        </TextImageRow>
      </div>

      {/* 6d. Handoff */}
      <div>
        <SectionHeader label="Handoff" heading="A Handoff Someone Can Run" />
        <Para className="mb-10">
          At the end of my time on the team, I gathered everything I'd built into one handoff
          document in Figma, for the designer taking it over and our manager. It opens with what
          breaks if nobody picks it up, each item with a date, an owner and the one thing to do.
          Each area then gets a summary and step-by-step instructions, written for someone who
          wasn't there.
        </Para>
        <LightboxImage
          src={handoffImg}
          alt="Four pages of a handoff document side by side, with everything but the page titles blurred: a start page, a list of dated risks, a summary and step-by-step instructions."
          caption="The handoff document, with its content blurred."
        />
      </div>
    </div>
  );
}
