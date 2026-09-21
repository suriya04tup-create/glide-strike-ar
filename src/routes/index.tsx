import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowDown, ArrowRight, Asterisk, ExternalLink, MoveDown, Play, Plus } from "lucide-react";
import { AirHockeyTable } from "../components/AirHockeyTable";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Air Hockey — Lens Studio AR Mini-Game | Suriya N" },
      { name: "description", content: "A game design and creative technology case study exploring script-driven AR gameplay in Snapchat Lens Studio." },
      { property: "og:title", content: "Air Hockey — Lens Studio AR Mini-Game" },
      { property: "og:description", content: "A premium case study in AR interaction, gameplay programming, collision mathematics, and game feel." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const systems = ["Script-driven puck movement", "Touch-controlled paddle", "AI opponent", "Mathematical collision detection", "Wall boundaries", "Goal detection", "Score system", "Game-start interaction", "Real-time UI feedback"];
const contributions = ["Game design", "Gameplay programming", "Collision systems", "Puck movement", "AI paddle behavior", "Scoring system", "Interaction logic", "Gameplay tuning", "Lens Studio implementation"];

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry?.isIntersecting) node.classList.add("is-visible"); }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

function SectionHead({ number, eyebrow, title, copy }: { number: string; eyebrow: string; title: string; copy?: string }) {
  return <Reveal className="section-head"><div className="section-index">({number})</div><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div></Reveal>;
}

function Flow({ items, horizontal = false }: { items: string[]; horizontal?: boolean }) {
  return <div className={`flow ${horizontal ? "flow--horizontal" : ""}`}>{items.map((item, index) => <div className="flow-step" key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong>{index < items.length - 1 && <MoveDown className="flow-arrow" aria-hidden="true" />}</div>)}</div>;
}

function MediaPlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return <div className={`media-placeholder ${className}`}><span className="media-cross" /><span>{label}</span><small>PROJECT MEDIA</small></div>;
}

function Index() {
  const [progress, setProgress] = useState(0);
  const [tuning, setTuning] = useState({ speed: 64, bounce: 82, reaction: 48 });
  useEffect(() => {
    const update = () => setProgress(Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - innerHeight)) * 100));
    addEventListener("scroll", update, { passive: true }); update();
    return () => removeEventListener("scroll", update);
  }, []);

  return <main>
    <div className="progress-line" style={{ width: `${progress}%` }} />
    <nav className="top-nav"><a href="#top" className="monogram">SN<span>•</span>AH</a><div className="nav-center">CASE STUDY <span>2026</span></div><a href="#credits" className="nav-jump">CREDITS <ArrowDown size={13} /></a></nav>

    <section id="top" className="hero">
      <div className="hero-kicker"><span>GAME DESIGN</span><span>AR / INTERACTIVE</span><span>LENS STUDIO</span></div>
      <div className="hero-title-wrap"><p className="hero-mini">A SCRIPT-DRIVEN</p><h1><span>AIR</span><span>HOCKEY</span></h1><p className="hero-subtitle">Lens Studio AR Mini-Game</p></div>
      <div className="hero-stage"><AirHockeyTable /></div>
      <Reveal className="hero-bottom"><p>A script-driven air hockey experience built in Lens Studio, combining touch interaction, custom gameplay logic, collision systems, AI behavior, scoring, and real-time visual feedback.</p><div className="meta-grid"><div><span>ROLE</span><strong>Game Designer & Developer</strong></div><div><span>PLATFORM</span><strong>Snapchat Lens Studio</strong></div><div><span>PROJECT TYPE</span><strong>AR Game / Interactive Experience</strong></div></div></Reveal>
    </section>

    <section className="intro section-shell">
      <SectionHead number="01" eyebrow="THE PROJECT" title="An arcade classic, rebuilt for an AR canvas." />
      <Reveal className="intro-grid"><p className="lead-copy">This project explores how a simple arcade game can be recreated as an interactive AR experience using Lens Studio.</p><p>Rather than relying on traditional Rigidbody physics to drive the gameplay, the core systems were built primarily through scripting and transform-based movement.</p></Reveal>
      <Reveal className="systems-marquee">{systems.map((system, i) => <div key={system}><span>{String(i + 1).padStart(2,"0")}</span>{system}<Plus size={18}/></div>)}</Reveal>
    </section>

    <section className="role section-shell accent-band">
      <SectionHead number="02" eyebrow="MY ROLE" title="Primary creator. End-to-end gameplay ownership." />
      <Reveal className="role-statement"><Asterisk /><p>I designed and developed the core gameplay experience, including the puck movement, collision logic, goal detection, scoring flow, AI behavior, gameplay tuning, and overall interaction design.</p></Reveal>
      <Reveal className="contribution-grid"><div className="contribution-title"><span>PRIMARY</span><span>CONTRIBUTION</span></div><div className="contribution-list">{contributions.map((item,i)=><div key={item}><span>{String(i+1).padStart(2,"0")}</span><strong>{item}</strong></div>)}</div></Reveal>
      <Reveal className="process-note"><span>DEVELOPMENT PROCESS</span><p>The scripting and gameplay implementation were developed primarily by me, with limited assistance from AI during parts of the development and debugging process.</p></Reveal>
    </section>

    <section className="architecture section-shell">
      <SectionHead number="03" eyebrow="HOW IT WORKS" title="One input. A chain of responsive systems." copy="The player’s touch begins a carefully coordinated loop—from paddle movement to the next round." />
      <Reveal className="flow-wrap"><Flow items={["Touch Input","Player Paddle","Puck Movement","Collision Detection","Goal Detection","Score Event","Scoreboard","Puck Reset","Next Round"]}/></Reveal>
    </section>

    <section className="gameplay section-shell pale-band">
      <SectionHead number="04" eyebrow="BUILDING THE GAMEPLAY" title="Physics, written by hand." copy="The game does not depend on Rigidbody physics to control the gameplay." />
      <Reveal className="equation"><span>VELOCITY</span><ArrowRight/><span>MOVEMENT</span><ArrowRight/><span>COLLISION</span><ArrowRight/><span>REFLECTION</span></Reveal>
      <Reveal className="split-copy"><p className="lead-copy">The puck is driven through scripted movement.</p><p>A velocity vector is updated every frame, while collision checks determine how the puck interacts with the arena boundaries and paddles.</p></Reveal>
      <Reveal className="tech-strip">{["World-space velocity","Frame-based movement","Substeps / anti-tunneling","Wall clamping","Velocity reflection","Paddle circle collision"].map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong></div>)}</Reveal>
    </section>

    <section className="paddles section-shell">
      <SectionHead number="05" eyebrow="TOUCH-DRIVEN PADDLES" title="Direct input. Precise response." />
      <Reveal className="paddle-layout"><div><p className="lead-copy">The drag system projects touch movement into the table’s XZ plane and directly positions the paddle.</p><div className="mini-hierarchy"><div>drag_Paddle</div><ArrowDown/><div>Paddle <small>VISUAL CHILD</small></div></div></div><div className="insight"><span>DESIGN / DEBUGGING INSIGHT</span><h3>The visible object is the true collision center.</h3><p>The visual Paddle has a local transform offset from its drag parent. Using the parent transform caused early collisions, so the collision system uses the visual Paddle’s world position instead.</p></div></Reveal>
    </section>

    <section className="collision section-shell electric-band">
      <SectionHead number="06" eyebrow="COLLISION SYSTEM" title="Collision without Rigidbody physics." copy="The puck and paddles are represented as circles in the XZ plane." />
      <Reveal className="collision-stage"><div className="collision-paddle">PADDLE</div><div className="normal-line"><span>NORMAL</span></div><div className="collision-puck">PUCK</div><div className="radius-label radius-label--a">leftPaddleRadius</div><div className="radius-label radius-label--b">puckHitRadius</div></Reveal>
      <Reveal className="collision-copy"><p>When the distance between centers becomes smaller than the combined collision radii, the puck is pushed out of the paddle.</p><strong>Its velocity reflects along the collision normal.</strong><div className="parameter-row"><span>puckHitRadius</span><span>leftPaddleRadius</span><span>rightPaddleRadius</span></div></Reveal>
    </section>

    <section className="walls section-shell">
      <SectionHead number="07" eyebrow="ARENA BOUNDARIES" title="Four walls define the field." copy="World position and scale calculate the minimum and maximum X/Z boundaries." />
      <Reveal className="walls-grid"><div className="arena-diagram"><span className="wall-label wall-top">TOP</span><span className="wall-label wall-left">LEFT</span><span className="wall-label wall-right">RIGHT</span><span className="wall-label wall-bottom">BOTTOM</span><div className="bounce-trace"/><div className="bounce-puck"/></div><div className="walls-copy"><span className="axis">XZ PLANE / WORLD SPACE</span><p>The boundary is both a limit and a response: clamp the position, then reverse the relevant velocity component.</p><div className="formula">V<sub>x</sub> = −V<sub>x</sub></div></div></Reveal>
    </section>

    <section className="scoring section-shell red-band">
      <SectionHead number="08" eyebrow="GOAL + SCORING" title="Making scoring reliable." copy="Goals are detected using Axis-Aligned Bounding Boxes in the XZ plane." />
      <Reveal className="score-display"><div><span>PLAYER</span><strong>03</strong></div><div className="goal-flash">GOAL</div><div><span>AI</span><strong>02</strong></div></Reveal>
      <Reveal className="score-flow"><Flow items={["Goal Detected","goalCount++","lastGoal = L / R","BasicScore","Scoreboard Update","Puck Reset"]} horizontal /></Reveal>
      <Reveal className="key-insight"><span>KEY TECHNICAL HIGHLIGHT</span><p>Because the puck resets immediately after entering a goal, relying only on its current position can miss the score. A global goal event makes the scoring flow reliable.</p></Reveal>
    </section>

    <section className="ai section-shell">
      <SectionHead number="09" eyebrow="AI OPPONENT" title="Teaching the opponent to react." />
      <Reveal className="ai-stage"><div className="ai-track"><div className="ai-puck">PUCK</div><div className="prediction">PREDICTED TARGET</div><div className="ai-paddle">AI</div><svg viewBox="0 0 800 220" preserveAspectRatio="none"><path d="M100 160 C280 10 490 200 700 70"/></svg></div><p>The AI paddle tracks the puck and moves toward a target position while respecting a maximum movement speed and its permitted area.</p></Reveal>
      <Reveal className="ai-params">{["Reaction Delay","Maximum Speed","Dead Zone","Movement Bounds"].map((x,i)=><div key={x}><span>{i === 0 ? "0.18s" : i === 1 ? "4.2" : i === 2 ? "0.08" : "XZ"}</span><strong>{x}</strong></div>)}</Reveal>
      <Reveal className="tuning-note">Reaction delay was intentionally tuned to make the opponent feel <em>beatable</em>, rather than perfectly reactive.</Reveal>
    </section>

    <section className="tuning section-shell pale-band">
      <SectionHead number="10" eyebrow="GAME FEEL" title="Tuning the feel." copy="Small numerical changes dramatically affect the feel of an arcade game." />
      <Reveal className="tuning-console"><div className="tuning-visual" style={{ "--demo-speed": `${3.5 - tuning.speed/30}s`, "--demo-bounce": `${tuning.bounce}%` } as React.CSSProperties}><AirHockeyTable compact /></div><div className="controls"><label><span>PUCK / SPEED</span><output>{tuning.speed}</output><input aria-label="Puck speed" type="range" min="20" max="100" value={tuning.speed} onChange={e=>setTuning({...tuning,speed:+e.target.value})}/></label><label><span>PUCK / BOUNCE</span><output>{tuning.bounce}</output><input aria-label="Puck bounce" type="range" min="20" max="100" value={tuning.bounce} onChange={e=>setTuning({...tuning,bounce:+e.target.value})}/></label><label><span>AI / REACTION DELAY</span><output>{tuning.reaction}</output><input aria-label="AI reaction delay" type="range" min="10" max="90" value={tuning.reaction} onChange={e=>setTuning({...tuning,reaction:+e.target.value})}/></label></div></Reveal>
      <Reveal className="variable-bands"><div><strong>PUCK</strong><span>speed</span><span>substeps</span><span>bounce</span><span>resetPause</span></div><div><strong>PADDLE</strong><span>puckHitRadius</span><span>leftPaddleRadius</span><span>rightPaddleRadius</span></div><div><strong>AI</strong><span>reactionDelay</span><span>maxSpeed</span><span>deadZone</span></div></Reveal>
      <p className="closing-copy">Much of the final development process involved tuning movement speed, collision radii, AI response, and reset timing until the interactions felt responsive and readable.</p>
    </section>

    <section className="debug section-shell">
      <SectionHead number="11" eyebrow="DEBUGGING + ITERATION" title="Problems became design decisions." />
      <div className="problem-list">{[
        ["01","Puck bounced before touching the paddle","The collision center was being calculated from the drag parent rather than the visual paddle. The collision system was updated to use the child Paddle object’s world position."],
        ["02","Puck jittered","Collision radii and duplicate visual/collision objects were checked, and the paddle collision radius was separated from other puck radius values."],
        ["03","Score sometimes failed to register","Goal detection was separated from score updating using a global event counter."],
      ].map(([n,p,s])=><Reveal className="problem" key={n}><div><span>PROBLEM {n}</span><h3>{p}</h3></div><ArrowRight/><div><span>SOLUTION</span><p>{s}</p></div></Reveal>)}</div>
    </section>

    <section className="start section-shell accent-band">
      <SectionHead number="12" eyebrow="START INTERACTION" title="From world-space button to live gameplay." />
      <Reveal className="start-flow"><div className="play-orbit"><Play fill="currentColor"/><span>PLAY</span></div><Flow items={["Touch","Raycast","Play Button","PlayBehavior.trigger()","Enable Gameplay"]} horizontal /></Reveal>
      <p className="closing-copy">A world-space Play button uses raycasting to detect interaction. When triggered, gameplay objects are enabled and the start interface is hidden.</p>
    </section>

    <section className="technical section-shell">
      <SectionHead number="13" eyebrow="TECHNICAL ARCHITECTURE" title="A compact system of connected responsibilities." />
      <Reveal className="architecture-map"><div className="map-node touch">Touch Input</div><div className="map-node player">Player Paddle</div><div className="map-node ai-node">AI Paddle</div><div className="map-node puck-node">SoloPuck</div><div className="map-node wall-node">Wall System</div><div className="map-node goal-node">Goal Detection</div><div className="map-node bus-node">Global Event Bus</div><div className="map-node basic-node">BasicScore</div><div className="map-node board-node">Scoreboard</div><div className="map-lines">↓<br/>↓<br/><span>→ &nbsp;&nbsp;&nbsp; ←</span><br/>↓<br/>↓<br/>↓<br/>↓</div></Reveal>
      <Reveal className="scripts">{[["SoloPuck.js","Puck movement, collision, walls, goals and reset."],["AIPaddleSideways.js","AI paddle movement and reaction."],["BasicScore.js","Score management and scoreboard updates."],["PlayBehavior","Game-start interaction."]].map(([name,desc],i)=><div key={name}><span>0{i+1}</span><strong>{name}</strong><p>{desc}</p></div>)}</Reveal>
    </section>

    <section className="final section-shell electric-band">
      <SectionHead number="14" eyebrow="FINAL RESULT" title="The final experience." />
      <Reveal className="final-copy">What started as a simple air-hockey concept became a compact exploration of interaction design, gameplay programming, collision mathematics, AI behavior, and real-time AR development.</Reveal>
      <Reveal className="final-table"><AirHockeyTable compact /></Reveal>
      <div className="media-mosaic"><MediaPlaceholder label="GAMEPLAY SCREENSHOT" className="wide"/><MediaPlaceholder label="LENS STUDIO VIEWPORT"/><MediaPlaceholder label="PUCK / PADDLE INTERACTION"/><MediaPlaceholder label="SCOREBOARD"/><MediaPlaceholder label="AI GAMEPLAY" className="wide"/></div>
    </section>

    <section className="learning section-shell">
      <SectionHead number="15" eyebrow="REFLECTION" title="What I learned." />
      <Reveal className="learning-list">{["Building gameplay without relying on a physics engine","Translating physical interactions into mathematical systems","Designing responsive touch controls","Tuning AI behavior for player experience","Separating gameplay logic from UI and scoring","Debugging transform and collision issues","Iterating on game feel"].map((x,i)=><div key={x}><span>{String(i+1).padStart(2,"0")}</span><p>{x}</p></div>)}</Reveal>
      <Reveal className="reflection-quote">The project was a hands-on exploration of how far <em>simple systems</em>, thoughtful interaction design, and scripting can go when building an AR game experience.</Reveal>
    </section>

    <section id="credits" className="credits section-shell">
      <SectionHead number="16" eyebrow="CREDITS / ASSETS" title="Built with credited production resources." />
      <p className="credits-intro">The visual assets used in the experience were sourced from Sketchfab and the Lens Studio Asset Library. These assets were used as production resources while the gameplay systems and interaction logic were developed specifically for this project.</p>
      <div className="credit-grid"><div><span>SOURCE 01</span><h3>Sketchfab</h3><p>Used for selected 3D/game assets.</p><div className="credit-placeholder">[ Sketchfab asset links / creator credits ]<ExternalLink size={16}/></div></div><div><span>SOURCE 02</span><h3>Lens Studio<br/>Asset Library</h3><p>Used for selected assets and resources available within Lens Studio.</p></div></div>
    </section>

    <footer><div className="footer-kicker">AIR HOCKEY / AR MINI-GAME</div><div className="footer-title">THANKS<br/>FOR <em>PLAYING.</em></div><div className="footer-meta"><span>GAME DESIGN + DEVELOPMENT</span><span>SURIYA N © 2026</span><a href="#top">BACK TO TOP ↑</a></div></footer>
  </main>;
}
