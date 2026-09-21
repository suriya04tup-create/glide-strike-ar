# AR Air Hockey Studio

Create a high-end Behance-style portfolio case study website for my Lens Studio project: an Air Hockey-style AR mini-game.

The website should feel like a polished creative technology / game design portfolio case study, not like technical documentation or a generic SaaS website.

Project

Title: Air Hockey — Lens Studio AR Mini-Game

Project Type: Game Design / AR / Lens Studio / Interactive Experience

Role: Game Designer & Developer

Platform: Snapchat Lens Studio

1. Overall Visual Direction

Design the website like a premium Behance project presentation.

The visual language should be:

Modern

Editorial

Minimal but visually rich

Experimental

Game/technology focused

Strong typography

Large visual compositions

Generous whitespace

Smooth scrolling

Subtle animations

Dark or dark-neutral background with strong contrast

Occasional electric/arcade-inspired accent colors

Avoid making it look like:

A SaaS dashboard

A corporate website

A documentation website

A generic developer portfolio

A template with lots of cards

It should feel like someone is presenting a finished interactive design project on Behance.

2. Hero Section

Create a large immersive hero section.

Display:

AIR HOCKEY

Lens Studio AR Mini-Game

Then a short description:

A script-driven air hockey experience built in Lens Studio, combining touch interaction, custom gameplay logic, collision systems, AI behavior, scoring, and real-time visual feedback.

Include large visual space for the game.

The hero should have a strong visual treatment inspired by an air-hockey table.

Add metadata:

Role
Game Designer & Developer

Platform
Snapchat Lens Studio

Project Type
AR Game / Interactive Experience

3. Project Introduction

Create an editorial section explaining the project.

Use this concept:

This project explores how a simple arcade game can be recreated as an interactive AR experience using Lens Studio. Rather than relying on traditional Rigidbody physics to drive the gameplay, the core systems were built primarily through scripting and transform-based movement.

Highlight the main systems:

Script-driven puck movement

Touch-controlled paddle

AI opponent

Mathematical collision detection

Wall boundaries

Goal detection

Score system

Game-start interaction

Real-time UI feedback

Present these visually rather than as a boring technical list.

4. My Role

Create a dedicated "My Role" section.

Make it clear that I was the primary creator of the project.

Text:

I designed and developed the core gameplay experience, including the puck movement, collision logic, goal detection, scoring flow, AI behavior, gameplay tuning, and overall interaction design.

Then add:

Primary Contribution

Game design

Gameplay programming

Collision systems

Puck movement

AI paddle behavior

Scoring system

Interaction logic

Gameplay tuning

Lens Studio implementation

Make the wording communicate that the majority of the scripting and implementation was done by me.

5. AI Assistance Disclosure

Include a small but professional section titled:

Development Process

Use this wording or something very close:

The scripting and gameplay implementation were developed primarily by me, with limited assistance from AI during parts of the development and debugging process.

The tone should be transparent but should not make AI the focus of the project.

The project should clearly communicate that I was the primary designer and developer.

6. Asset Credits

Create a dedicated Credits / Assets section.

Explain:

The visual assets used in the experience were sourced from Sketchfab and the Lens Studio Asset Library. These assets were used as production resources while the gameplay systems and interaction logic were developed specifically for this project.

Show two visual credit blocks:

Sketchfab

Source: Sketchfab

Used for selected 3D/game assets.

Include a placeholder for:

[Sketchfab asset links / creator credits]

Do not invent creator names or links.

Lens Studio Asset Library

Source: Lens Studio Asset Library

Used for selected assets and resources available within Lens Studio.

Make this section visually secondary to the project itself.

7. How the Game Works

Create a visually engaging section explaining the game architecture.

Use a large diagram-like presentation:

Touch Input

↓

Player Paddle

↓

Puck Movement

↓

Collision Detection

↓

Goal Detection

↓

Score Event

↓

Scoreboard

↓

Puck Reset

↓

Next Round

Make this feel like a designed infographic rather than raw technical documentation.

8. Gameplay System

Create a section called:

Building the Gameplay

Explain that the game does not depend on Rigidbody physics to control the gameplay.

Use:

The puck is driven through scripted movement. A velocity vector is updated every frame, while collision checks determine how the puck interacts with the arena boundaries and paddles.

Visually show:

Velocity → Movement → Collision → Reflection

Explain:

World-space velocity

Frame-based movement

Substeps for reducing tunneling

Wall clamping

Velocity reflection

Paddle circle collision

Use small diagrams and animations where appropriate.

9. Paddle System

Create a section called:

Touch-Driven Paddles

Explain:

The paddles are controlled directly through touch input. Instead of relying on physics forces, the drag system projects touch movement into the table's XZ plane and directly positions the paddle.

Show the hierarchy:

drag_Paddle
      ↓
   Paddle


Explain the important collision detail:

The visual Paddle object has a local transform offset from its drag parent. Using the parent transform as the collision center caused early collisions, so the collision system uses the visual Paddle's world position instead.

This should be presented as a design/debugging insight, not just a technical note.

10. Collision System

Create a visually strong section titled:

Collision Without Rigidbody Physics

Explain that the puck and paddles are represented as circles in the XZ plane.

Show a simple diagram:

        Paddle
       (     )
          ↑
        Normal
          ↑
      (  Puck  )


Explain:

When the distance between the puck and paddle centers becomes smaller than the combined collision radii, the puck is pushed out of the paddle and its velocity is reflected along the collision normal.

Highlight:

puckHitRadius

leftPaddleRadius

rightPaddleRadius

Use interactive hover states or subtle motion to demonstrate the collision.

11. Wall System

Create a section showing the four arena walls.

Explain:

The four walls define the playable XZ rectangle. Their world position and scale are used to calculate the minimum and maximum X/Z boundaries.

Show:

        TOP
 ┌─────────────────┐
 │                 │
 │                 │
LEFT             RIGHT
 │                 │
 │                 │
 └─────────────────┘
       BOTTOM


Then show the puck hitting a boundary and reflecting.

12. Goal & Scoring System

Create a section titled:

Making Scoring Reliable

Explain the goal system:

Goals are detected using Axis-Aligned Bounding Boxes (AABBs) in the XZ plane.

Then explain the event system.

Show:

Goal Detected
      ↓
goalCount++
      ↓
lastGoal = "L" / "R"
      ↓
BasicScore
      ↓
Scoreboard Update
      ↓
Puck Reset


Explain why the event system exists:

Because the puck is reset immediately after entering a goal, relying only on its current position can cause the scoring system to miss the goal. A global goal event makes the scoring flow reliable.

Make this one of the key technical highlights of the case study.

13. AI Opponent

Create a section titled:

Teaching the Opponent to React

Explain:

The AI paddle tracks the puck and moves toward a target position while respecting a maximum movement speed and its permitted area.

Show the parameters:

Reaction Delay

Maximum Speed

Dead Zone

Movement Bounds

Create an animated visualization of:

Puck → Prediction/Target → AI Paddle

Explain that reactionDelay was intentionally tuned to make the opponent feel beatable rather than perfectly reactive.

14. Game Feel & Tuning

Create a section called:

Tuning the Feel

Present the main gameplay variables as large visual controls:

Puck

speed

substeps

bounce

resetPause

Paddle

puckHitRadius

leftPaddleRadius

rightPaddleRadius

AI

reactionDelay

maxSpeed

deadZone

Explain:

Small numerical changes dramatically affect the feel of an arcade game. Much of the final development process involved tuning movement speed, collision radii, AI response, and reset timing until the interactions felt responsive and readable.

15. Debugging & Iteration

Create a visually interesting "Problems → Solutions" section.

Use cards or horizontal transitions.

Problem 01

Puck bounced before touching the paddle

Solution:

The collision center was being calculated from the drag parent rather than the visual paddle. The collision system was updated to use the child Paddle object's world position.

Problem 02

Puck jittered

Solution:

Collision radii and duplicate visual/collision objects were checked, and the paddle collision radius was separated from other puck radius values.

Problem 03

Score sometimes failed to register

Solution:

Goal detection was separated from score updating using a global event counter.

Make this section feel like a genuine development journey.

16. Start Game Interaction

Show the optional Start Game system.

Explain:

A world-space Play button can use raycasting to detect interaction. When triggered, the gameplay objects are enabled and the start interface is hidden.

Visual flow:

Touch
 ↓
Raycast
 ↓
Play Button
 ↓
PlayBehavior.trigger()
 ↓
Enable Gameplay


17. Technical Architecture

Create a clean visual architecture section.

Show:

                  ┌───────────────┐
                  │ Touch Input   │
                  └───────┬───────┘
                          ↓
                  ┌───────────────┐
                  │ Player Paddle │
                  └───────┬───────┘
                          │
                          ↓
┌──────────────┐   ┌───────────────┐   ┌──────────────┐
│ AI Paddle    │ → │   SoloPuck    │ ← │ Wall System  │
└──────────────┘   └───────┬───────┘   └──────────────┘
                            ↓
                     Goal Detection
                            ↓
                     Global Event Bus
                            ↓
                       BasicScore
                            ↓
                       Scoreboard


Under the diagram, list the scripts:

SoloPuck.js

Puck movement, collision, walls, goals and reset.

AIPaddleSideways.js

AI paddle movement and reaction.

BasicScore.js

Score management and scoreboard updates.

PlayBehavior

Game-start interaction.

18. Final Result

Create a large visual section showcasing the finished game.

Title:

The Final Experience

Text:

What started as a simple air-hockey concept became a compact exploration of interaction design, gameplay programming, collision mathematics, AI behavior, and real-time AR development.

Use the strongest game visuals here.

Include space for:

Gameplay screenshot

Lens Studio viewport

Puck/paddle interaction

Scoreboard

AI gameplay

Use large images rather than small cards.

19. Reflection

Create a short closing section.

Title:

What I Learned

Focus on practical learning:

Building gameplay without relying on a physics engine

Translating physical interactions into mathematical systems

Designing responsive touch controls

Tuning AI behavior for player experience

Separating gameplay logic from UI/scoring

Debugging transform and collision issues

Iterating on game feel

End with:

The project was a hands-on exploration of how far simple systems, thoughtful interaction design, and scripting can go when building an AR game experience.

20. Portfolio Presentation Requirements

The final website should feel like a Behance case study, not a conventional website.

Use:

Full-width sections

Large typography

Large project imagery

Editorial layouts

Asymmetric compositions

Scroll-based reveals

Subtle parallax

Smooth transitions

Micro-interactions

Technical diagrams

Before/after comparisons

Animated arrows and system flows

Carefully controlled whitespace

Use a strong visual hierarchy.

The project should feel premium, experimental, and personal.

21. Important Content Rules

Do NOT exaggerate my role.

Clearly communicate:

I designed and implemented the gameplay systems myself, with limited AI assistance.

Also clearly credit:

3D/assets: Sketchfab + Lens Studio Asset Library

Do not claim that I created the original 3D assets.

Do not invent Sketchfab creator names, asset names, licenses, or URLs.

Instead, create editable placeholders where I can later add the exact asset credits and links.

22. UX Goal

The viewer should understand the project in this order:

WHAT IS IT?
     ↓
WHY DID I MAKE IT?
     ↓
WHAT DID I DO?
     ↓
HOW DOES IT WORK?
     ↓
WHAT PROBLEMS DID I SOLVE?
     ↓
HOW DID I TUNE IT?
     ↓
WHAT DID I LEARN?


The website should tell a visual story of the development process, rather than simply displaying technical information.

Make the final result feel like a polished Game Design + Creative Technology portfolio piece suitable for Behance.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/fbb5f112-d536-4446-b51a-01c839e25da2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
