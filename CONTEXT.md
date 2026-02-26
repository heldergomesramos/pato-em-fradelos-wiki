# CONTEXT.md — Pato em Fradelos Game Bible

> Paste this at the start of every conversation to bring Claude up to speed.
> Keep this file updated as the game evolves.

---

## 1. Game Overview

**Working Title:** Pato em Fradelos (alt. candidates: _Sleep Fracture_)
**Genre:** 2D side-scroller platformer with puzzle and exploration elements
**Tone:** Grounded and realistic _except_ for Black Matter, which is intentionally "alien" and physics-breaking — this contrast is deliberate and central to the feel
**Primary inspirations:** Outer Wilds (knowledge-based progression, environmental storytelling), Echoes of the Eye (hidden dimension, light/dark mechanics)
**Current version:** Post-demo v0.13.6

---

## 2. Core Mechanics

### The Duck (Player Character)

- Controlled in 2D side-scroller view
- Has a **Dash** upgrade
- Has a **Wall Jump** upgrade
- Has a **Gloamvine Core** upgrade: shoots sticky glowing purple balls from its mouth that emit strong light, can interact with the environment and illuminate Black Matter contents
- Has **three tongues** used to grab sticky surfaces (gloamvine flowers, etc.) — lore reason TBD
- Can **Sleep**: speeds time up to 150x, stops the duck from observing Black Matter (allowing it to fall through solid BM platforms), useful for time-based puzzles
- **Immortal**: dies and respawns at the last checkpoint. Respawn animation = black matter forms a duck shape → gains yellow color → player regains control. Time is NOT rewound on death — lore implications TBD (duck was artificially created with Black Matter, possibly contains a human consciousness)

### Camera

- Player can pan the camera slightly up/down independently of the duck
- **Key rule:** What matters for Black Matter observation is what appears on the _player's screen_, not what the duck character "sees" in-world. This enables perspective-based puzzles.

### Checkpoints

- Black Matter platforms with gold/yellow borders
- Stepping on one saves the game and makes a sound

### Observation Mechanic (Core to Everything)

- Black Matter only exists/is solid when being observed (when visible on screen)
- If BM is off-screen, in darkness, or the player looks away → it vanishes
- This is the foundation for puzzles, traversal, and lore

---

## 3. Black Matter — Properties

- **Absorbs all incoming light** → appears completely black from outside
- **Light from within is visible from outside** (creatures inside can be seen)
- **Hollow** — interior is traversable
- **Makes no sound** on contact
- **Solid when observed**, disappears when not observed
- **Spreads extremely fast in water**
- **Modifies living beings** that come into contact with it via water in their bodies
- Can be observed at certain angles where it vanishes even under light (angle-based observation)
- **Stores absorbed light energy** — this energy is harvested by the Black Matter Generator
- When it "vanishes," it goes _somewhere_ — likely another dimension (see Teleporter / Other Dimension section)

---

## 4. World & Locations

### The Island

Remote, previously unknown island. Discovered via satellite detecting black anomalies. Currently appears abandoned. Surface has water areas with lily pads (nenúfares) — early-game zone. A new wet/green cave biome is planned below.

### The Black Lake

A lake on the surface, above the lab, between two mountains. Entirely solidified by Black Matter. Hollow inside. The entry point for the original team. Fireflies can escape it; other creatures cannot.

### The Research Laboratory (Underground)

Multi-floor facility built beneath the mountains. Floors include:

- **Creature research floors** — dedicated rooms per creature species
- **Aquarium** — large chamber for observing creatures in a simulated natural habitat; contains The Observer
- **Gloamvine research room** — studying black gloamvines; warning: 3 are growing uncontrollably
- **The Stranger floor** — dedicated to studying the planet
- **Floor 3** — permanently closed, accessible only from Floor 2 via gloamvine physical distortion. Contains dead scientists, blood. Sealed after the Chameleon incident.
- **Kinetic energy room** — where the Dash upgrade machine is found

### The Energy Facility

- Located to the right of the lab, connected by a metal bridge
- Contains the **Black Matter Generator** (processes BM into energy, powers lab and teleporters)
- Has rail-mounted **metal boxes** transporting light-reflecting crystals from the mining sites via the Extraction Corridor
- Has **lasers** (currently gameplay-only, lore TBD — candidates: cutting BM, treating BM, infusing concentrated light)
- Contains a **Teleporter Sphere**
- Has a boss at the end — TBD

### The Mining Sites

Two sites near the lab. Extract **light-reflecting crystals** transported to the facility via the Extraction Corridor. These crystals are used in the generator and enable light-redirection puzzle mechanics.

### The Extraction Corridor

Industrial transition zone between the Energy Facility and the wind zone. Features:

- Corrupted metal containers (the same ones from the facility) moving along rails — some pass through unlit zones
- **Core tension:** If a container passes through darkness, it disappears from under the duck unless the Gloamvine Core is active — "observe or fall" rhythm
- Light-reflecting crystal puzzles are introduced here
- Lore justification: the containers run from the mining sites carrying crystals to the facility

### The Depths Chamber

A sub-zone directly below the Aquarium. First hinted at early via a thick glass panel in the Aquarium floor showing total darkness below — the player cannot interact with it yet, it just sits in memory. Access requires the Teleporter: use momentum from the Facility corridor's launch platform, drop the Teleporter shadow at the peak of the jump, recall while positioned below the glass → duck slams through it. The crack becomes a permanent entrance.

Contains unique enemies (see Creatures section) and teaches the "darkness as protection" mechanic before the Shadow boss fight.

### The Last Abyss

A near-infinite black pit below the lab and everything else. Contains:

- A giant **Black Whale** (insta-kill if you fall too deep)
- Anglerfish and jellyfish in upper layers
- Meant to evoke fear of the depths

### The Stranger

A large black planet orbiting between Earth and the Moon, roughly moon-sized. Causes a **total eclipse every 3 days at midnight** (complete darkness on the island). A scout camera sent to its surface phased through it — consistent with it being made of Black Matter. Leading theory: an ancient moon/planet entirely consumed by Black Matter, possibly the _origin_ of Black Matter. Has a dedicated floor in the lab.

---

## 5. Creatures & Entities

### Anglerfish

Black, live inside Black Matter. Use a fake sticky glowing flower as bait (lures fireflies and curious explorers). First discovered when a team member nearly lost a hand. Found only within or partially within BM.

### Carnivorous Plants

Black. Found fully or partially within BM. Roots are invisible (surrounded by pure black matter) — visible only with a strong enough light source like the Gloamvine Core.

### Jellyfish

Black. Live inside Black Matter. Can swim despite no water being present inside BM.

### Fireflies

Small yellow glowing creatures. Found both inside and outside BM. Drawn to light. Possibly trapped inside BM when light sealed it. Theorized to be prey of the Anglerfish.

### Gloamvines (normal)

Green vines with purple sticky glowing flowers at the bottom. Grow from grassy ceilings and dark places.

### Black Gloamvines

Gloamvines that contacted Black Matter. Properties:

- Always grow from ceilings with Black Matter
- Roots are invisible (surrounded by BM), visible only with the Gloamvine Core light
- Cause **physical distortion**: the material they grow through appears solid but their intersection point doesn't physically exist. Objects/characters can pass through. (Note: interaction with spikes above/below this zone is a known design problem — TBD fix)

### The Observer

A perfect black sphere — literally just a giant eye. Single **red** eye. No limbs. Can float inside Black Matter. Invisible when eye is closed; visible when eye is open. Located in the Aquarium.

- **Mechanically:** Follows and stares at the duck. Continuous exposure causes rapid body heating / radiation effect with visual distortion. ~4 seconds of unbroken eye contact = duck dies.
- **Lore:** Artificially created to observe Black Matter creatures (keeping them "locked in existence" by being observed). It attacks the duck because the duck is an unrecognized intruder — not part of the Aquarium roster. Possibly has a human consciousness inside it (one interpretation — unconfirmed).
- **Reward for passing it:** Coordinates to a new location + possibly the Conceal ability upgrade

### The Chameleon (Secret Entity / Floor 3)

Highly intelligent black reptile. Can camouflage perfectly inside Black Matter. Escaped and attacked team members on Floor 3, causing Black Matter contamination through wounds entering the bloodstream. This caused the quarantine and closure of Floor 3. Detectable with the Gloamvine Core light. Floor 3 is now sealed with dead scientists inside.

### Black Whale

Enormous. Lives in the Last Abyss. Insta-kill if you fall deep enough.

### The Shadow (Boss — Depths Chamber)

A creature that only moves through darkness and dies when hit by light. Chase sequence boss. During the chase the player uses Gloamvine Core charges to repel it and activate lights to block its path temporarily. Final mechanic: voluntarily extinguishing all light at a specific moment defeats it (mirrors what Shadow Wisps teach).

### Lurker (Depths Chamber Enemy)

Completely flat and 2D — lives on surfaces (walls, ceilings, floor). Invisible normally; only its outline is visible under Gloamvine Core light (irregular organic silhouette). Does not chase or directly damage the duck. Instead, when the duck enters its radius it **absorbs the nearest Gloamvine Core charge** — consuming either an active ball in the environment or an unspent charge. Placed at mandatory chokepoints with enough space to dodge if spotted in time. Extremely dangerous during the Shadow chase.

### Shadow Wisp (Depths Chamber Enemy)

A smaller, undeveloped form of the same entity as the Shadow. Floats erratically, does not pursue the duck. **Reacts to light with recoil** — any light source (duck's glow or Gloamvine Core balls) causes it to freeze for ~1 second then redirect. If the duck extinguishes all light entirely, the Wisp ignores them completely. Purpose: teaches the player that darkness = safety, before that knowledge becomes critical in the Shadow fight.

### BM Spitter (Candidate Enemy)

Spits Black Matter projectiles at light sources. If it hits the duck, the duck is coated in BM and temporarily loses their own light emission — causing them to sink through BM platforms. TBD whether this makes the final design.

---

## 6. The Teleporter / Other Dimension

### Teleporter Spheres

Large black spheres. Enter one, input coordinates, exit from another sphere at the destination. Interior is black — standing inside means you cannot see out and outside observers cannot see in. This creates the conditions for Black Matter's vanishing principle: you disappear from the normal dimension and traverse through the "other dimension" to re-emerge elsewhere.

### The Other Dimension (Internull — working name)

Where Black Matter goes when it disappears (when not observed). Properties:

- **Time behaves differently** — a camera sent through recorded nothing because no time passed there while it was inside (time requires observation/consciousness to "render")
- A conscious being (the Observer, the duck) can traverse it
- The duck's Conceal ability (future upgrade) may allow entering/exiting BM at will
- **Sleeping** may be connected to accessing this dimension (candidate mechanic: sleeping in a portal = teleport to other dimension)

---

## 7. The Duck — Origin & Lore (Partially Unresolved)

**Most likely current canon:** The duck was artificially created during the quarantine period by infected team members. It is made of Black Matter (possibly stabilized with a golden/yellow material that can lock BM in place without observation). It contains the transferred consciousness of one of the scientists — possibly a scientist who was partially infected and chose to transfer before fully losing their human form.

**Why a duck specifically:** Unclear — possibly the scientists chose a simple, low-intelligence animal and the duck was available on the island. Or the duck imitates things and the scientist's consciousness shaped its form. **TBD.**

**Three tongues:** Unexplained. Likely a Black Matter modification effect. **TBD.**

**Immortality:** Renaturing via Black Matter checkpoint platforms. Time is not rewound. The consciousness persists.

**Possible endgame:** The duck reaches a room with a scientist in a chair, brain-computer interface, giant screen showing a live feed of what the duck sees (recursive loop). The scientist says "Unplug." Screen goes black. Duck falls. Credits or final sequence.

---

## 8. The Scientists — What Happened

### Known Named Characters

- **PE** — Physics/Environment researcher. Authored most of the core Black Matter theory logs (Vanishing Principle, BM properties, Stranger research, teleportation research). One of the lead scientists.
- **EE** — Energy/Engineering. Authored the generator log and the "lab door closed" note. Was working on the generator.
- **BIO** — Biology researcher. Authored all creature and plant logs (anglerfish, jellyfish, gloamvines, gloamvine core).
- **EX** — Explorer/field member. Authored more personal/reactive notes (Observer encounter warning, crossing BM difficulties, lost keycard). Likely the one doing fieldwork and expeditions.
- **Shaduru** — Mentioned by name. EX asked Shaduru for a replacement keycard. PE mentions "Shaduru and I" in the teleportation research log. Likely a close collaborator of PE, possibly an engineer.
- **Pofinho** — Authored the satellite photo log about BM expanding on the island. This is also the name used in the game's own notes for the scientist whose consciousness may be in the duck — significant.

**Confirmed:**

- A team was sent to the island and built the lab and energy facility
- BM is confirmed to be expanding on the island surface (Pofinho's satellite log)
- The Chameleon escaped on Floor 3 and infected multiple team members by wounding them (BM entering bloodstream)
- Quarantine was declared, parts of the facility shut down, some members left the island
- At least one member stayed and transferred their consciousness into the duck

**Unresolved:**

- Where did the others go?
- What was the full scope of the quarantine?
- Was the Black Matter contamination spreading beyond the island (to the ocean)?
- Who is still potentially alive off-island?
- Is Pofinho the consciousness inside the duck? (his name appears both in the logs and in the design notes as the candidate)

---

## 9. Key Lore Concepts & Rules

| Concept             | Rule                                                                                                                                                                                                   |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Observation         | BM only exists when observed. What counts is the player's screen, not the duck's POV.                                                                                                                  |
| Physical Distortion | Gloamvines phase through materials — intersection points don't physically exist                                                                                                                        |
| The Vanishing       | BM disappears when unobserved → goes to the Other Dimension (Internull)                                                                                                                                |
| Time in Internull   | Requires observation/consciousness to pass. A camera recorded nothing inside.                                                                                                                          |
| Light & BM          | BM absorbs all external light. Internal light is visible from outside. Plants store this energy.                                                                                                       |
| BM + Water          | Spreads instantly. Also: BM + water in living beings = modification/corruption                                                                                                                         |
| Sleeping            | Crossing BM requires full unconsciousness — closing eyes alone isn't sufficient because light still enters. Sleep/unconscious state is the reliable method. Also possibly related to Internull access. |
| Checkpoints         | Death doesn't rewind time. Duck is immortal. Consciousness persists.                                                                                                                                   |

---

## 10. Upgrades (Current)

| Upgrade           | Function                                                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Dash              | Horizontal burst movement. Unlocks Dash, Sprint, and Dive all together.                                                              |
| Dash + S          | Dash downward                                                                                                                        |
| Dash + S (hold)   | **Dive** — at surface, increases max fall speed                                                                                      |
| Underwater Dash   | Single use only; goes forward or downward                                                                                            |
| Wall Jump         | Stick to and jump off walls                                                                                                          |
| Gloamvine Core    | Shoot glowing purple sticky balls; strong light reveals BM contents (roots, creatures). Max 5 charges, regenerate 1 every 3 seconds. |
| Conceal (planned) | Turn fully black; become undetectable; possibly phase into/out of BM                                                                 |

### Post-Teleporter Effect (Candidate Mechanic)

After using a large teleporter, the duck temporarily turns fully black and can traverse Black Matter without sleeping. Duration TBD. Could enable unique puzzle sequences.

---

## 11. Website Structure (Wiki)

> Pages that exist or are planned for the game wiki:

- `index.html` — Home / overview
- `lore.html` — World lore and story summary
- `mechanics.html` — Core gameplay mechanics explained
- `creatures.html` — All creatures and entities

---

## 12. UI Features — Home Page

### Global Observer Follower

The home page (`index.html`) features an **Observer eye sprite** that follows the mouse cursor across the entire page.

**Visual Design:**
- **Outer layer:** `ObserverRedFront.png` — red exterior part that rotates continuously
- **Pupil:** `ObserverRedFrontPupil.png` — red inner pupil that tracks subtle mouse movements
- **Glow effect:** Pulsing drop-shadow (red + orange) that cycles every 3 seconds
- **Position:** Fixed to viewport, centered on mouse position
- **Cursor:** Page maintains crosshair cursor (`+`) at all times for consistency

**Implementation:**
- Observer element is positioned at `fixed` with pointer-events none to avoid interference
- Placed in z-index 9999 to render on top of all page content
- Animation runs continuously with `requestAnimationFrame` for smooth 60fps
- Pupil has subtle oscillation (not locked to exact mouse position) for a living, eerie feel

**Technical Notes:**
- Built with vanilla JavaScript in a self-contained IIFE in `index.html`
- Uses `mousemove` event on document to track global cursor position
- No external dependencies beyond the sprite images
- `locations.html` — All named locations
- `upgrades.html` — Upgrades and abilities
- `characters.html` — The Duck, scientists, The Observer
- `timeline.html` — In-world event chronology
- `unresolved.html` — Open questions and design TODOs _(internal use)_

---

## 12. Open Questions & Unresolved Design (TODOs)

- What do the facility lasers do lore-wise?
- Why does the duck have three tongues?
- Why is observation tied to the _player's screen_ rather than the duck's vision? (needs in-world justification or intentional ambiguity)
- Full backstory of the scientist whose consciousness is in the duck
- What happened to the rest of the team?
- Is Black Matter spreading to the ocean? Is there urgency?
- Is The Stranger the origin of Black Matter or just a casualty of it?
- Can you reach The Stranger via teleporter? What's inside?
- What is the satisfying ending?
- Energy Facility boss — what creature/entity and what does it reward?
- The Observer: fully artificial, or does it contain a human consciousness? (both versions exist in notes)
- Is Pofinho (who authored the satellite expansion log) the consciousness inside the duck? His name appears in both the in-game logs and the design notes as the leading candidate.
- Bones in background — aesthetic or lore?
