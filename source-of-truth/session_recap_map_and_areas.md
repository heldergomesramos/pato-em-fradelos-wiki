# Session Recap — Map, Areas & New Decisions
> For a future Claude instance that hasn't read this conversation.
> This file captures everything decided, likely, or discarded in this session.
> Use this to update existing bible files. Do NOT treat this as a final bible file itself.

---

## Context You Need First

### What the game is
2D side-scroller platformer. The player character is a duck made of Black Matter (BM), containing the consciousness of a scientist named Pofinho. He is immortal. The world is built around the "Vanishing Principle" — BM only exists when observed (visible on the player's screen). This is not just a puzzle mechanic, it's the philosophical spine of the game.

### Black Matter — visual rules (NOT in existing files, important)
- BM is rendered as **pure solid black** (0 light value). No color, no gradient, no texture inside.
- BM is identified by its **borders** — rough, spilly/liquid-looking edges where it meets the non-BM environment. Think ink spilling outward. These borders have remnants and drips of BM bleeding into the surrounding area.
- In **lit environments**: borders are clearly visible, BM reads instantly as a solid material.
- In **dark environments**: borders are still faintly present on walls/surfaces but unreliable. You genuinely can't always tell where BM ends. This ambiguity is intentional — it serves the vanishing principle.
- The border treatment IS the visual identity of BM. Do not add color or glow to BM itself.

### Black Matter — light rules (clarified, replaces any previous version)

**The core rule:** BM absorbs all incoming external light. It does not reflect it. This is why BM appears black — no light bounces back to your eyes from its surface. The absorbed light is stored internally (this is what the BM Generator harvests).

**Light from internal sources exits freely.** Fireflies, Gloamvine Core balls, creature bioluminescence — anything generating its own light from inside BM — is visible from outside. The absorption is inward only. This is why the BM Generator can harvest stored light and why an entire ecosystem can exist inside BM.

**The Gloamvine Core reveals roots** by injecting a powerful light source into the BM. Once inside, it illuminates the roots, and the reflected light from the roots exits back outward to the player's eyes. Without the Core, roots are invisible — not because BM blocks the view but because there is no light source inside to reflect off them. Ordinary ambient light enters BM but gets absorbed before reflecting off anything. The Core is powerful enough that secondary reflections escape.

**This is NOT a contradiction** — you are not "seeing through" BM when you see internal light. Seeing a glow emanating from a black mass does not make the mass invisible. The BM is still perceived, still exists, still solid.

### The Vanishing Principle — fully clarified (important, update `black_matter.md` and `observation.md`)

**BM exists if and only if a conscious observer perceives it.** This is the complete rule. Not physics, not photons hitting retinas — conscious perception.

Implications that follow from this:
- A blind person with eyes open would not perceive BM → it vanishes for them
- Lights off, eyes open, black BM against black background → cannot be distinguished → not perceived → vanishes. The mechanism is indistinguishability, not darkness itself.
- Two observers looking simultaneously → BM exists. Both must stop perceiving it for it to vanish.
- A person who is cognitively unable to process visual information → BM vanishes for them regardless of lighting.

**Why the 2D screen = observation rule works:** The player's screen represents Pofinho's conscious perception. This was always about consciousness, not cameras. The 2D framing is a natural fit, not a workaround.

**Why Pofinho never vanishes:** He is conscious of his own existence. His self-awareness IS the observation. Other BM has no consciousness and depends entirely on external observers. He is the only BM entity that observes itself — which is the most profound thing about him mechanically and thematically.

**Why deep ocean BM is the real threat:** Not just darkness — the complete absence of conscious observers. Nothing in the deep ocean has the cognitive complexity to truly perceive BM. It spreads freely because nothing down there is conscious enough to collapse it back. This reframes the ocean threat as a consciousness problem, not just a light problem.

**On first-person simulation paradoxes:** When you try to simulate the vanishing principle from a first-person 3D perspective (e.g. standing inside BM looking out, or a corridor with BM filling the end), apparent paradoxes emerge quickly. These do not need to be resolved. The rule rests on conscious perception, not on closed-loop physics. Scientists in-universe found this maddening too. The paradox is intentional — it is the philosophical question the game is built on.

### The duck's visual identity
- Body is **pure black** (BM)
- **Gold/yellow trim only** — stabilizer ore edges, bill, eye ring. Not a yellow body.
- The gold trim is the same material as checkpoint borders and stabilizer ore in the mines.
- Inside The Stranger's Void Zones: duck is the warmest, most visible thing in frame.
- Inside The Stranger's Radiant Zones: duck's gold competes with the amber background glow.

### Area color palette — the "everything is black" problem
The game risks feeling visually monotonous because BM is everywhere. Each area needs its identity in the **non-BM elements** (walls, ground, fog, ambient creatures, background details):

| Area | Color Identity |
|------|---------------|
| Surface / Island | Blues, greens, natural light |
| Mines | Brown rock, black BM, purple fog, **light blue glowing mushrooms** |
| Deep Mines (stabilizer ore zone) | Dark, mostly black, **small golden pixel-light ore fragments in walls** |
| Lab | Greenish walls (lab lighting), black when lights are off for puzzles |
| Aquarium | Black BM filling the tank, sea floor with blue-green undertones and sea plants visible at edges/through gaps |
| Depths | **Purple-blue darkness**, creatures, designed space, lab-adjacent feel |
| Last Abyss | **Near-total black**, almost no light, eldritch scale, your Gloamvine Core barely illuminates anything |
| The Stranger — Void Zones | Pure black, warm gold from Pofinho, faint dark teal edge on BM structures, cold blue-white on frozen creatures |
| The Stranger — Radiant Zones | Amber-gold core bleeding to burnt orange to magenta-purple to black at edges |

**Key principle:** When inside BM you lose the area's color references entirely — which is itself the signal that you're inside it. Emerging back into the colored environment reorients the player immediately.

---

## Keybindings (current — do not add more if possible)

| Key | Action |
|-----|--------|
| WASD | Movement |
| Space | Jump / Double Jump / Hold = Glide (wings upgrade) |
| LShift | Dash / Sprint / Dive (Dash+S) |
| Ctrl + W/S | Camera pan up/down |
| E | Teleport shadow (drop / recall) |
| Q | Quack → **Dark Duck toggle** (see below) |
| W | Also used for Interact (no conflict since W for movement only goes up) |
| Mouse Left Click | Tongue grab |
| Mouse Right Click | Gloamvine Core shoot |

Q and Ctrl are intentionally non-platforming keys — no conflict with movement.

---

## Confirmed Decisions This Session

### 1. Depths and Last Abyss are two separate areas
Previously the files used "Depths" and "Last Abyss" somewhat interchangeably or as sub-zones. They are now **two distinct areas** with different visual design, different purposes, and different emotional registers.

### 2. The Depths (formerly "Depths Chamber")
- **Visual:** Purple-blue darkness, creature-populated, designed space
- **Feel:** Hostile but knowable. PE was here. Humans pushed into this.
- **Contains:** The Shadow boss, Lurkers, Shadow Wisps, **and the portal PE built**
- **Access:** Mid-to-late game. The Shadow boss sequence is the final challenge before reaching the portal.
- **Portal access specifically:** Portal room is sealed until the player has the coordinates from the observatory. Player can reach and explore the Depths, fight the Shadow, without accessing the portal yet. Returning after the observatory with coordinates unlocks it. This gives the Depths a meaningful second visit.
- **Portal location:** The Depths. Not the Last Abyss. PE built it here because BM concentration is highest and oldest here — the membrane to The Stranger is thinnest. PE could physically reach this area. PE could not reach the Last Abyss.

**FILES TO UPDATE:** `depths.md` — rename/clarify "Depths Chamber" vs "Last Abyss" split. `internull.md` — remove the "below lab floor OR beneath Black Lake — pick one" ambiguity. Portal is in the Depths.

### 3. The Last Abyss
- **Visual:** Near-total black. Almost no light. Your Gloamvine Core barely works here. Creatures are enormous and you sense their scale without ever fully seeing them.
- **Feel:** Inhuman. Ancient. No human has ever been here. Not a designed space — a geological void.
- **Contains:** The Black Whale (insta-kill), other eldritch-scale creatures, and at the very bottom: **the BM seed** (origin point of all Black Matter on the island / Earth)
- **The BM seed:** Not a dramatic set piece. A faint amber glow in absolute darkness. Ancient and quiet. Has been here forever. Pofinho may be the first conscious thing to ever reach it.
- **Purpose:** Lore reveal (origin of BM) + optional late-game challenge + Dark Duck upgrade acquisition
- **Virgin territory:** No scientist logs reference this place. PE never reached it. It predates the research team entirely.

**FILES TO UPDATE:** `depths.md` — add Last Abyss as a separate section, not a sub-zone of the Depths.  `ambient.md` — move Black Whale to Last Abyss specifically, not just "below the lab."

### 4. How the player first encounters the Last Abyss
**Confirmed structure — glimpse early, access late:**
1. **First glimpse:** Bottom of the mines, where the player finds the stabilizer ore. An open shaft leads down into void. The player can fall in and die (whale or something else kills them). They leave with the image.
2. **Second hint:** Somewhere else on the map — a thin cracked wall, a sound, something that confirms this void connects areas underground. Exact location TBD pending map layout.
3. **Full access:** Late game, with Gloamvine Core + Teleporter + whatever else is needed. Intentional descent.

This is the Outer Wilds "glimpse and return" pattern. The world doesn't lock you out — knowledge and capability gate you.

### 5. Dark Duck upgrade (replaces unresolved "Conceal" concept)
- **Acquired:** By touching the BM seed at the bottom of the Last Abyss
- **Toggled:** Q key (replaces the Quack, which previously did nothing)
- **What it does:** Suppresses Pofinho's internal light. Allows passing through BM that his light would otherwise make solid/visible.
- **Hard limitation:** Cannot use Gloamvine Core while Dark Duck is active. Internal light is fully suppressed — shooting light balls is impossible. Forces meaningful choice in puzzles.
- **No time limit** — late game, player has already seen most content, no need to restrict.
- **Lore basis:** Touching the origin of all BM unlocks something in Pofinho's BM nature. "Full control of the matter inside you." No need to over-explain this.
- **Do NOT add lore flavor about quacking** — Pofinho wasn't always a duck, the quack is just a duck thing. The Q key repurposing is mechanically elegant, not lore-significant.

**FILES TO UPDATE:** `upgrades.md` — replace the "Conceal — Unresolved Design" section with Dark Duck as a confirmed upgrade. `open_questions.md` — remove Conceal from unresolved design questions.

### 6. Dive is not a separate upgrade
Dive (Dash+S) is an extension of Dash, same as Sprint. It does not need its own upgrade slot. It is available as soon as Dash is acquired. Locking content behind Dive is technically possible but not a strong gate since Dash comes very early.

**FILES TO UPDATE:** `upgrades.md` — clarify Dive is part of the Dash upgrade, not standalone.

---

## Likely / In-Progress Decisions (not yet confirmed)

### Aquarium access and layout
- Player travels **right to left** through the Aquarium (lab entrance is right side, Aquarium is the left boundary of the known lab)
- What's left of the Aquarium is currently **unknown territory** in the map
- **Likely:** Pre-Observer area introduces Observer-mechanic enemies gradually before the boss escape sequence. Small eye-like creatures/robots that try to look at the player. Player hides behind objects to avoid their gaze. Lore: these are early prototype automated observers the scientists built before creating The Observer — iterating toward a solution for keeping BM creatures "locked in existence" without constant human presence.
- **Likely:** This pre-Observer section comes BEFORE the escape sequence (introduces mechanics slowly), even if current levels lean toward after. Rework is on the table.
- **Status:** Needs map layout decision before finalizing.

### Portal room access structure
- Current problem: Portal is in the Depths, sealed until coordinates acquired at observatory. Player goes to Depths → doesn't know what to do → leaves → gets coordinates → returns. This back-and-forth feels slightly awkward.
- **Proposed solution (likely but not confirmed):** The portal room connects to somewhere the player has been trying to reach all game from the other side. Opening it from the inside is the payoff — a door that finally opens. This would require entering via teleport/other means and exiting through a previously locked door.
- There may be a **locked lab door** that connects to this. Needs the full map layout to resolve.
- **Status: DEFER until map is available.**

### Teleport shadow momentum mechanic
- Original idea: Use E to drop shadow, build momentum, recall with E again. If vertical velocity above threshold, break glass.
- The Aquarium glass-break application is **discarded** — the Aquarium travels right-to-left and there's no natural setup to build upward momentum from below.
- The mechanic itself is still valid and interesting. Needs a new location where setup is natural (vertical shaft, mining area, etc.)
- **Status:** Keep mechanic, find better home for it. TBD pending map.

---

## Discarded Ideas

| Idea | Why Discarded |
|------|--------------|
| Breaking Aquarium glass from below with teleport momentum | No natural way to build upward momentum from below in current layout. Aquarium travels right-to-left, nothing below it in the player's natural path. |
| BM origin / portal both in Last Abyss | Conflicting ideas — Abyss as virgin territory vs PE having built a portal there. PE couldn't reach the Abyss. Separated into two locations. |
| Plants/sea life visible beneath floating BM in Aquarium | BM fills the tank completely like water. There are no gaps. Creatures and plants live inside it. |
| Light bending / heat shimmer at BM borders | Overcomplicating something already solved by the spilly border treatment. |
| Lore flavor connecting Quack to Pofinho's personality | Pofinho was not always a duck. The quack is just a duck thing. No lore significance needed. |
| Conceal as an activated upgrade (original design) | Didn't respect the principle of upgrades having interesting multiple functionalities. Felt arbitrary. Replaced by Dark Duck acquired naturally at BM seed. |
| The Stranger growing visibly during normal play / bad ending easter egg | Removed. The Stranger has been in orbit for thousands of years and looks stable from Earth. PE's precision instruments detect internal destabilization. A different easter egg may replace it later. |
| Post-Teleporter Blackout mechanic | Superseded by Sleep + Teleporter = enter The Stranger. |

---

## Tasks for Updating Existing Files

| File | What to change |
|------|---------------|
| `depths.md` | Split into two clear sections: The Depths (purple-blue, PE's portal, Shadow boss) and The Last Abyss (pure black, eldritch, BM seed, Dark Duck upgrade). Remove any language treating them as one zone. Add first-glimpse-in-mines note. |
| `internull.md` | Remove "below lab floor OR beneath Black Lake — pick one" ambiguity. Portal is in The Depths, confirmed. |
| `upgrades.md` | Replace "Conceal — Unresolved Design" with Dark Duck (confirmed). Clarify Dive is part of Dash, not standalone upgrade. |
| `open_questions.md` | Remove Conceal from unresolved. Remove The Stranger growth easter egg TBD (discarded). Update "hidden portal location" from unresolved to confirmed (The Depths). |
| `ambient.md` | Specify Black Whale lives in the Last Abyss, not just generically "below the lab." |
| `black_matter.md` | Add visual rules section (border treatment) + fully rewrite light rules (absorption, internal emission, Gloamvine Core secondary reflection). Also update the Vanishing Principle section to reflect that observation = conscious perception, not just "on screen." Add deep ocean threat reframe — consciousness absence, not just darkness. |
| `observation.md` | Update the observation rule to state it is conscious perception, not screen pixels. The screen is a representation of Pofinho's perception, not the mechanism itself. Add note that first-person paradoxes are intentional and unresolved by design. |
| `README.md` | No immediate changes needed, but note that `depths.md` now covers two distinct areas. |

---

## Open Questions Remaining After This Session

- **What is left of the Aquarium** — what territory opens up after the player exits left? Needs map.
- **Portal room connection** — does it open into a previously locked lab door? Needs map.
- **Teleport shadow momentum mechanic** — where does it live if not the Aquarium glass? Needs map.
- **Second hint location for Last Abyss** — thin wall, sound, crack somewhere. Needs map.
- **What specifically is inside the Last Abyss** beyond the whale and BM seed — any other creatures, obstacles, traversal challenges? Needs design session.
- **Dark Duck + optional ending connection** — the Last Abyss and Dark Duck may connect to the third hidden ending layer. Deferred.
- **Three tongues** — still unresolved lore reason. Intentional mystery or needs explanation?
- **Exact timeline** — how many years since the team was on the island. Unresolved, needs a decision.
- **BM infection vector** — wound contact is working theory, not confirmed.
- **Who built the consciousness statues** — may remain unanswered in-game but worth deciding internally.
- **PE's final log personal detail** — what specifically confirms Pofinho's identity? Needs to be written.
- **Death inside The Stranger** — respawn location. Decide after Stranger gameplay is defined.
- **Third hidden ending** — what does the core ending leave open? Deferred.
