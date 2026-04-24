import { LightboxImage } from "./Lightbox";
import {
  Eye,
  Zap,
  Layers,
  Smartphone,
  Globe,
  Cpu,
  Box,
  Play,
  Palette,
  Repeat,
  PlusCircle,
  ExternalLink,
  Construction,
} from "lucide-react";

// Game assets
import cardsImg from "figma:asset/451b38690b69546c8d5efff6bf6803a5d7c1c61c.png";
import boardRenderImg from "figma:asset/8f64a96fb41fb9c61af4847559af9bf9911ab8be.png";

// Playtest photos
import playtestGroupImg from "figma:asset/9989da6d556d2123f6c82536f1c1d7d38b3288c1.png";
import playtestHomeImg from "figma:asset/054b53781e990ee34a68f4248f03594204a921f1.png";

// App store screenshots
import appStoreImg from "figma:asset/4eb34ae4848ed48f59d87fea86d21eeea4389789.png";
import playStoreImg from "figma:asset/419179c9fa1f6765b5663d4ddee73686c034cbd3.png";

// Marketing site
import marketingSiteImg from "figma:asset/94755aa087a1b8901d6aaf778826979765db294a.png";

// 3D product renders
import renderNetImg from "figma:asset/aea6029e8e9aba6dbc3ecc807543ffa88d50dc68.png";
import renderBoardImg from "figma:asset/9ed10bfe0eca2c5cdf12ec4c23b3aa476c7727a8.png";
import renderAppImg from "figma:asset/646c14ed9043e286c1c39eec34440e20a6e346af.png";
import renderPressureImg from "figma:asset/37284f9f237efe6af6f9371fc5afa6b583aa52ee.png";
import renderScoreboardImg from "figma:asset/b766130dad1e30becf5223df7da2f00145a8ee15.png";
import renderTrophyImg from "figma:asset/2a0845c0415af2e6fecd20a22bc48f669603b1f6.png";

// Production photos
import productionCardsImg from "figma:asset/264ef4c14241cccf872d1dae4a0495c5bb6e9311.png";
import productionMeeplesImg from "figma:asset/fc67e93677c0833887d353b16156734b91ea9c06.png";

// App screenshots
import appSplashImg from "figma:asset/6df6ea1fb93e4f7786ec1c1e80e8cb5321d61737.png";
import appModesImg from "figma:asset/0fa97b6f66b2478b291aa92a9f58f40535ac3c01.png";
import appHomeImg from "figma:asset/29f4d6701cc792d0c3bac3aa9f5effde5e8451d1.png";
import appGameplayImg from "figma:asset/22b43ee383982d81ee517f3e0f732d8eb75dfa2d.png";

// Hardware photos
import hardwareWorkbenchImg from "figma:asset/624f21cb91fde87454174bcefedda0f24359de9e.png";
import hardwareTimerImg from "figma:asset/ca4f0a46ecb5b84e4590f1413015abbe91b23fa0.png";

// Character cards
import cardYellow from "figma:asset/0596d15ea5a924ee1281fa3e81cbf5b00be69cc4.png";
import cardPink from "figma:asset/f6e656692e48a5313f301b84bc69d6cbf008bfdb.png";
import cardRed from "figma:asset/65d80c9dc699bd5cd67039ef87027bbeac005c84.png";
import cardBeige from "figma:asset/7097f05aa9bb3c7e9c97569aab6cb1bddf0edea6.png";
import cardOrange from "figma:asset/a9ca1359f5f494343902416e861bdcd0251d487e.png";
import cardGreen from "figma:asset/758500d3ed8e2f2bc5d339fee3a696969241774a.png";
import cardDark from "figma:asset/717611f17dc2f20662ffed8e21cc6ec99a755d1e.png";
import cardBlue from "figma:asset/ec144430fc60494c01d47f6b9c579a34daf235a5.png";
import cardPurple from "figma:asset/c3d409c8c12cf6aa570d5ab38a75a58c64695d20.png";

/** Section label + heading pair */
function SectionHeader({
  label,
  heading,
  id,
  labelDelay = 0,
  headingDelay = 0.08,
}: {
  label: string;
  heading: string;
  id?: string;
  labelDelay?: number;
  headingDelay?: number;
}) {
  return (
    <header className="mb-12">
      <p className="text-xs uppercase tracking-[0.2em] text-yellow-400/60 mb-3">
        {label}
      </p>
      <h3 id={id} className="text-xl md:text-2xl text-white">
        {heading}
      </h3>
    </header>
  );
}

/** Thin horizontal rule between major content blocks */
function SectionDivider({ delay = 0 }: { delay?: number }) {
  return <hr className="border-neutral-800/60 my-20 md:my-24" />;
}

/* ═══════════════════════════════════════════════════
 Section 1: The Vision
 ═══════════════════════════════════════════════════ */

export function UglyPickleVision() {
  return (
    <section aria-labelledby="vision-heading">
      <SectionHeader
        id="vision-heading"
        label="The Vision"
        heading="A Tabletop Game That Feels Like the Sport"
      />

      <div className="max-w-2xl space-y-6 mb-16">
        <p className="text-neutral-300 leading-relaxed">
          Ugly Pickle is a high-intensity tabletop game that captures the pace
          and pressure of pickleball in under 15 minutes. I took it from concept
          to live apps, physical production, and real players (solo).
        </p>

        <p className="text-neutral-300 leading-relaxed">
          Every decision, from card layout to app architecture to PCB
          prototyping, was driven by one question: does this make the game feel
          faster, clearer, and more fun?
        </p>
      </div>

      {/* Board render: hero shot */}
      <div className="mb-20">
        <LightboxImage
          src={boardRenderImg}
          alt="3D render of the Ugly Pickle game board showing the court, player meeples, spinner, and companion app on a phone"
          caption="3D-rendered prototype. Board, meeples, spinner, and companion app."
          aspectRatio="16/9"
          objectPosition="center"
        />
      </div>

      {/* What I owned: discipline cards */}
      <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-6">
        What I Owned
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20">
        {[
          {
            icon: Layers,
            title: "Product Vision",
            description:
              "Gameplay goals, player experience, and competitive positioning",
          },
          {
            icon: Eye,
            title: "Product Design",
            description:
              "Component design, layout systems, and production-ready specs",
          },
          {
            icon: Smartphone,
            title: "iOS & Android Apps",
            description: "Companion apps currently live on both app stores",
          },
          {
            icon: Globe,
            title: "Web Design",
            description:
              "Marketing site for discovery, conversion, and brand storytelling",
          },
          {
            icon: Box,
            title: "3D Modeling",
            description:
              "Blender prototypes and marketing assets for renders and animation",
          },
          {
            icon: Cpu,
            title: "Hardware Prototype",
            description:
              "Custom ATmega328P PCB with Arduino code for physical integration",
          },
        ].map((item, i) => (
          <div
            key={item.title}
            className="bg-neutral-900/40 border border-neutral-800 rounded-xl px-5 py-5 group hover:border-neutral-700 transition-colors duration-300"
          >
            <div className="p-2 rounded-lg bg-yellow-400/5 border border-yellow-400/10 w-fit mb-3">
              <item.icon className="w-4 h-4 text-yellow-400/60" />
            </div>
            <p className="text-white mb-1.5">{item.title}</p>
            <p className="text-xs text-neutral-500 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
 Section 2: Designing for Instant Clarity
 ═══════════════════════════════════════════════════ */

export function UglyPickleClarity() {
  return (
    <section aria-labelledby="clarity-heading">
      <SectionDivider />
      <SectionHeader
        id="clarity-heading"
        label="Design Philosophy"
        heading="Fast Games Need Instant Clarity"
      />

      <p className="text-neutral-300 leading-relaxed mb-14 max-w-2xl">
        The challenge was making a game where players make split-second
        decisions without confusion. Every component needed to be readable in
        under 2 seconds.
      </p>

      {/* Cards image + design principles: side by side */}
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 md:gap-12 items-start mb-20">
        <div>
          <LightboxImage
            src={cardsImg}
            alt="Ugly Pickle action cards showing colorful character illustrations with court position grids and shot direction arrows"
            caption="Action cards. Character art, court grids, and shot indicators."
            aspectRatio="4/3"
            objectPosition="center"
          />
        </div>

        <div className="flex flex-col gap-5 md:pt-2">
          {[
            {
              icon: Eye,
              title: "Designed for Fast Comprehension",
              description:
                "Consistent visuals, clear labels, and predictable layout rules. Players shouldn't have to think about how to read a card.",
            },
            {
              icon: Zap,
              title: "Immediate Feedback",
              description:
                "The physical game and companion apps provide instant response. Score a point, see it reflected. Make a move, the timer responds.",
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className="bg-neutral-900/40 border border-neutral-800 rounded-xl px-5 py-5 group hover:border-neutral-700 transition-colors duration-300"
            >
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-yellow-400/5 border border-yellow-400/10 shrink-0 mt-0.5">
                  <item.icon className="w-4 h-4 text-yellow-400/60" />
                </div>
                <div>
                  <p className="text-white mb-1.5">{item.title}</p>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Readability metric strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          {
            value: "< 2s",
            label: "Card readability",
            sub: "target comprehension time",
          },
          {
            value: "15 min",
            label: "Full game",
            sub: "matches real pickleball pace",
          },
          {
            value: "0 lag",
            label: "Action to feedback",
            sub: "physical + digital sync",
          },
        ].map((metric, i) => (
          <div
            key={metric.label}
            className="bg-neutral-900/40 border border-neutral-800 rounded-xl px-5 py-6 text-center"
          >
            <p className="text-2xl md:text-3xl text-yellow-400 mb-2">
              {metric.value}
            </p>
            <p className="text-sm text-white mb-1">{metric.label}</p>
            <p className="text-xs text-neutral-500">{metric.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
 Section 3: Design System
 ═══════════════════════════════════════════════════ */

const characterCards = [
  {
    src: cardYellow,
    alt: "Ugly Pickle character card. yellow background, diagonal shot arrows",
    name: "Lobber",
  },
  {
    src: cardPink,
    alt: "Ugly Pickle character card. pink background, lateral movement arrows",
    name: "Dinker",
  },
  {
    src: cardRed,
    alt: "Ugly Pickle character card. red background, vertical movement arrows",
    name: "Slicer",
  },
  {
    src: cardBeige,
    alt: "Ugly Pickle character card. beige background, defensive stance",
    name: "Digger",
  },
  {
    src: cardOrange,
    alt: "Ugly Pickle character card. orange background, diagonal shot",
    name: "Runner",
  },
  {
    src: cardGreen,
    alt: "Ugly Pickle character card. green background, backhand return",
    name: "Banger",
  },
  {
    src: cardDark,
    alt: "Ugly Pickle character card. dark background, lateral movement",
    name: "Poacher",
  },
  {
    src: cardBlue,
    alt: "Ugly Pickle character card. blue background, vertical positioning",
    name: "Driver",
  },
  {
    src: cardPurple,
    alt: "Ugly Pickle character card. purple background, overhead reach",
    name: "Smasher",
  },
];

export function UglyPickleSystem() {
  return (
    <section aria-labelledby="system-heading">
      <SectionDivider />
      <SectionHeader
        id="system-heading"
        label="Visual System"
        heading="One System Across Board, Cards, and Screens"
      />

      <p className="text-neutral-300 leading-relaxed mb-14 max-w-2xl">
        One visual system. Physical cards, digital screens, marketing — all speaking the same language.
      </p>

      {/* Character card grid: responsive wrap, no scrollbar */}
      <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-6">
        Character Roster: 9 Players
      </p>

      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 mb-20">
        {characterCards.map((card, i) => (
          <div key={card.name}>
            <LightboxImage
              src={card.src}
              alt={card.alt}
              caption={card.name}
              aspectRatio="3/4"
              objectPosition="top"
            />
          </div>
        ))}
      </div>

      {/* System principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
        {[
          {
            icon: Palette,
            title: "Shared Visual Language",
            description:
              "One visual language. Color, type, iconography stay consistent across the board, app, and ads.",
          },
          {
            icon: Repeat,
            title: "Reusable Patterns",
            description:
              "Reusable patterns for hierarchy, states, and player feedback. Whether you're holding a card or tapping a screen, the same information architecture applies.",
          },
          {
            icon: PlusCircle,
            title: "Designed for Scalability",
            description:
              "New modes and components can be added without redesigning the foundation. The system grows with the game.",
          },
        ].map((item, i) => (
          <div
            key={item.title}
            className="bg-neutral-900/40 border border-neutral-800 rounded-xl px-5 py-6 hover:border-neutral-700 transition-colors duration-300"
          >
            <div className="p-2 rounded-lg bg-yellow-400/5 border border-yellow-400/10 w-fit mb-4">
              <item.icon className="w-4 h-4 text-yellow-400/60" />
            </div>
            <p className="text-white mb-2">{item.title}</p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
 Section 4: The Product Ecosystem
 ═══════════════════════════════════════════════════ */

export function UglyPickleEcosystem() {
  return (
    <section aria-labelledby="ecosystem-heading">
      <SectionDivider />
      <SectionHeader
        id="ecosystem-heading"
        label="Building the Apps & Prototypes"
        heading="From Screen to Circuit Board"
      />

      <p className="text-neutral-300 leading-relaxed mb-16 max-w-2xl">
        I built and shipped companion apps for iOS and Android. Physical
        components went through rapid iteration using 3D modeling and printing.
        The apps are live in both app stores, and the physical game is in
        production.
      </p>

      {/* YouTube video embed */}
      <div className="mb-24">
        <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-5 flex items-center gap-2">
          <Play className="w-3.5 h-3.5" />
          Product Video
        </p>
        <div
          className="relative w-full rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900"
          style={{ aspectRatio: "16 / 9" }}
        >
          <iframe
            src="https://www.youtube.com/embed/sviEipWtbIk"
            title="Ugly Pickle: Product Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>
      </div>

      {/* ── Companion Apps ── */}
      <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-6">
        Companion Apps: Live on iOS & Android
      </p>

      {/* 4 app screenshots: 2×2 grid (consistent, no scrollbar) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          {
            src: appSplashImg,
            alt: "Ugly Pickle companion app splash screen. illustrated pickleball court with logo and Version 1.2 badge",
            caption: "Splash screen",
          },
          {
            src: appHomeImg,
            alt: "Ugly Pickle companion app home screen. Start, Rules, and Mailing List buttons over floating card pattern",
            caption: "Home",
          },
          {
            src: appModesImg,
            alt: "Ugly Pickle companion app mode selection. Rally mode (casual) and Countdown mode (competitive) cards",
            caption: "Mode selection",
          },
          {
            src: appGameplayImg,
            alt: "Ugly Pickle companion app gameplay screen. split-view scoreboard with timer, score counters, and Return Ball button",
            caption: "Live gameplay",
          },
        ].map((screen, i) => (
          <div key={screen.caption}>
            <LightboxImage
              src={screen.src}
              alt={screen.alt}
              caption={screen.caption}
              aspectRatio="9/16"
              objectPosition="top"
            />
          </div>
        ))}
      </div>

      {/* App narrative */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 max-w-3xl">
        <p className="text-neutral-400 leading-relaxed text-sm">
          The app mirrors the game's visual system. Same colors, same type, same
          hierarchy. One system across surfaces.
        </p>
        <p className="text-neutral-400 leading-relaxed text-sm">
          Shared rules for states, transitions, and feedback keep the physical
          components and digital UI consistent as the game scales.
        </p>
      </div>

      {/* ── Hardware Prototype ── */}
      <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-6">
        Hardware: Custom PCB Prototype
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        <div>
          <LightboxImage
            src={hardwareTimerImg}
            alt="Finished Ugly Pickle hardware timer. orange 3D-printed enclosure with OLED display showing 8:09 and 10:00, physical buttons for score and play/pause"
            caption="Finished timer. OLED display, physical controls"
            aspectRatio="4/3"
            objectPosition="center"
          />
        </div>
        <div>
          <LightboxImage
            src={hardwareWorkbenchImg}
            alt="Ugly Pickle hardware prototype workbench. orange and blue 3D-printed enclosures with exposed ATmega328P PCB, wiring harness, and Arduino components"
            caption="Workbench. 3D-printed shells, custom PCB, wiring."
            aspectRatio="4/3"
            objectPosition="center"
          />
        </div>
      </div>

      <p className="text-neutral-400 leading-relaxed mb-20 max-w-2xl text-sm">
        Custom ATmega328P PCB with Arduino firmware. The timer replaces the
        phone for groups that prefer a fully physical setup.
      </p>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
 Section 5: Research & Iteration
 ═══════════════════════════════════════════════════ */

export function UglyPickleResearch() {
  return (
    <section aria-labelledby="research-heading">
      <SectionDivider />
      <SectionHeader
        id="research-heading"
        label="Research"
        heading="We Watched People Get Confused, Then Fixed It"
      />

      <p className="text-neutral-300 leading-relaxed mb-14 max-w-2xl">
        I ran playtest sessions like UX testing. Where did players hesitate?
        What questions did they repeat? What caused the game to stall? Each
        session revealed specific friction points that led to concrete
        improvements.
      </p>

      {/* Playtest photos: side by side with consistent aspect ratio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
        <div>
          <LightboxImage
            src={playtestGroupImg}
            alt="Group of players around a table during a live Ugly Pickle playtest session, engaged and smiling"
            caption="Live playtest. observing player reactions and decision speed"
            aspectRatio="3/2"
            objectPosition="center"
          />
        </div>
        <div>
          <LightboxImage
            src={playtestHomeImg}
            alt="Intimate playtest session at home with four players around the Ugly Pickle board, cards in hand"
            caption="Home session. testing onboarding flow with new players"
            aspectRatio="3/2"
            objectPosition="center"
          />
        </div>
      </div>

      {/* What I learned */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20 max-w-3xl">
        <div className="space-y-5">
          <p className="text-neutral-300 leading-relaxed">
            Observed where players hesitated, misread state, or asked repeated
            questions. Each hesitation pointed to a design problem, not a player problem.
          </p>
          <p className="text-neutral-300 leading-relaxed">
            Iterated on rules, component clarity, and app interactions based on
            patterns across sessions. Single-session anomalies got noted;
            recurring friction got fixed.
          </p>
        </div>

        <div className="space-y-5">
          <p className="text-neutral-300 leading-relaxed">
            Validated onboarding improvements by measuring how quickly new
            players could start correctly without intervention.
          </p>
          <p className="text-neutral-300 leading-relaxed">
            Used playtest insights to prioritize what to simplify versus what to
            deepen. Not everything needs to be easier, but everything needs to
            be clear.
          </p>
        </div>
      </div>

      {/* Research loop: Observe, Identify, Redesign, Validate */}
      <div className="mb-20">
        <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-6">
          Research Loop
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-800 rounded-xl overflow-hidden">
          {[
            {
              step: "01",
              title: "Observe",
              body: "Watch real players. Note every hesitation, misread, and repeated question.",
            },
            {
              step: "02",
              title: "Identify",
              body: "Isolate the specific component, rule, or interaction that caused friction.",
            },
            {
              step: "03",
              title: "Redesign",
              body: "Change one variable at a time. Keep the fix scoped and testable.",
            },
            {
              step: "04",
              title: "Validate",
              body: "Run the same scenario with new players. Measure if the confusion is gone.",
            },
          ].map((item, i) => (
            <div key={item.step} className="bg-neutral-950 px-5 py-7">
              <p className="text-xs text-yellow-400/50 mb-3 tracking-[0.15em]">
                {item.step}
              </p>
              <p className="text-white mb-2">{item.title}</p>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
 Section 6: Shipped
 ═══════════════════════════════════════════════════ */

const renderItems = [
  {
    src: renderBoardImg,
    alt: "3D render of the Ugly Pickle game board. full pickleball court layout with card zones, Ernie markers, and Pressure-O-Meter",
    caption: "Game board",
  },
  {
    src: renderNetImg,
    alt: "3D render of the Ugly Pickle pickleball net. miniature light blue net with mesh detail",
    caption: "Pickleball net",
  },
  {
    src: renderScoreboardImg,
    alt: "3D render of the Ugly Pickle scoreboard. numbered 1-5 track in blue and gold with center trophy badge",
    caption: "Scoreboard",
  },
  {
    src: renderPressureImg,
    alt: "3D render of the Ugly Pickle pressure meter. pink gauge with needle indicator on coral background",
    caption: "Pressure-O-Meter",
  },
  {
    src: renderTrophyImg,
    alt: "3D render of the Ugly Pickle trophy. green pickleball ball on pedestal trophy",
    caption: "Trophy",
  },
  {
    src: renderAppImg,
    alt: "3D render of iPhone running the Ugly Pickle companion app in gameplay mode. split scoreboard with Even Serve indicator",
    caption: "Companion app",
  },
];

export function UglyPickleShipped() {
  return (
    <section aria-labelledby="shipped-heading">
      <SectionDivider />
      <SectionHeader
        id="shipped-heading"
        label="Shipped"
        heading="Apps Shipped, Game in Production"
      />

      <p className="text-neutral-300 leading-relaxed mb-14 max-w-2xl">
        15+ playtest cycles with iterative improvements. Physical prototypes 3D
        modeled and printed. Companion apps live on iOS and Android. Physical
        game components in production. End-to-end system built across product,
        software, and marketing. By one person.
      </p>

      {/* Outcome metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
        {[
          {
            value: "15+",
            label: "Playtest cycles",
            sub: "iterative improvements",
          },
          { value: "2", label: "Live apps", sub: "iOS & Android" },
          { value: "1", label: "Designer", sub: "end-to-end ownership" },
          { value: "6", label: "Disciplines", sub: "product to hardware" },
        ].map((metric, i) => (
          <div
            key={metric.label}
            className="bg-neutral-900/40 border border-neutral-800 rounded-xl px-5 py-6 text-center"
          >
            <p className="text-2xl md:text-3xl text-yellow-400 mb-2">
              {metric.value}
            </p>
            <p className="text-sm text-white mb-1">{metric.label}</p>
            <p className="text-xs text-neutral-500">{metric.sub}</p>
          </div>
        ))}
      </div>

      {/* 3D product renders: responsive grid, no scrollbar */}
      <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-6">
        Product Components: 3D Renders & Physical Production
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-24">
        {renderItems.map((item, i) => (
          <div key={item.caption}>
            <LightboxImage
              src={item.src}
              alt={item.alt}
              caption={item.caption}
              aspectRatio="1/1"
              objectPosition="center"
              objectFit="contain"
            />
          </div>
        ))}
        <div>
          <LightboxImage
            src={productionCardsImg}
            alt="Full set of Ugly Pickle character cards laid out on orange background. 9 unique illustrated players plus card back, showing color-coded court grids and shot direction arrows"
            caption="Production card set. 9 characters + card back"
            aspectRatio="1/1"
            objectPosition="center"
          />
        </div>
        <div>
          <LightboxImage
            src={productionMeeplesImg}
            alt="3D-printed Ugly Pickle player meeples. four teams in white, blue, yellow, and pink, each with two figures holding paddles on circular bases"
            caption="3D-printed meeples. 4 team colors with paddles"
            aspectRatio="1/1"
            objectPosition="center"
          />
        </div>
      </div>

      {/* App Store & Google Play listings */}
      <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-6 flex items-center gap-2">
        <ExternalLink className="w-3.5 h-3.5" />
        Live App Listings: iOS & Android
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        <div>
          <LightboxImage
            src={appStoreImg}
            alt="Ugly Pickle companion app listing on the Apple App Store. showing game screenshots, ratings, privacy info, and accessibility features"
            caption="Apple App Store. live listing"
            aspectRatio="16/10"
            objectPosition="top"
          />
        </div>
        <div>
          <LightboxImage
            src={playStoreImg}
            alt="Ugly Pickle companion app listing on Google Play. showing game screenshots, data safety info, and app description"
            caption="Google Play Store. live listing"
            aspectRatio="16/10"
            objectPosition="top"
          />
        </div>
      </div>

      {/* Direct download links */}
      <div className="flex flex-wrap gap-4 mb-24">
        <a
          href="https://apps.apple.com/us/app/ugly-pickle/id6745111662"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-yellow-400/20 text-yellow-400/80 text-sm hover:bg-yellow-400/5 hover:border-yellow-400/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
        >
          <Smartphone className="w-4 h-4" />
          Download on iOS
          <ExternalLink className="w-3 h-3 opacity-60" />
          <span className="sr-only">(opens in new tab)</span>
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.beestudio.ugly_pickle"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-yellow-400/20 text-yellow-400/80 text-sm hover:bg-yellow-400/5 hover:border-yellow-400/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
        >
          <Smartphone className="w-4 h-4" />
          Download on Android
          <ExternalLink className="w-3 h-3 opacity-60" />
          <span className="sr-only">(opens in new tab)</span>
        </a>
      </div>

      {/* Marketing site */}
      <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-6">
        Marketing Site
      </p>

      <div className="mb-24">
        <LightboxImage
          src={marketingSiteImg}
          alt="Ugly Pickle marketing website hero section. illustrated pickleball scene with 'A game of filthy plays and nasty winner!' tagline, Reserve the game and Follow our Journey CTAs"
          caption="uglypickle.com. marketing site hero"
          aspectRatio="16/9"
          objectPosition="top"
        />
      </div>

      {/* Rules site and playtest sessions */}
      <div className="bg-neutral-900/40 border border-neutral-800 rounded-xl px-6 py-6 mb-10">
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-lg bg-yellow-400/5 border border-yellow-400/10 shrink-0 mt-0.5">
            <Play className="w-4 h-4 text-yellow-400/60" />
          </div>
          <div className="flex-1">
            <p className="text-white mb-3">
              Interactive Rules Website & Playtest Videos
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.ugly-pickle.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400/20 text-yellow-400/80 text-sm hover:bg-yellow-400/5 hover:border-yellow-400/40 transition-all duration-200"
              >
                <Globe className="w-3.5 h-3.5" />
                View Interactive Rules
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <a
                href="https://www.youtube.com/@Wbee-Studio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400/20 text-yellow-400/80 text-sm hover:bg-yellow-400/5 hover:border-yellow-400/40 transition-all duration-200"
              >
                <Play className="w-3.5 h-3.5" />
                Playtest Sessions at GDC
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
