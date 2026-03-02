# Observation Mechanic

> The core puzzle and traversal system. Everything that involves BM visibility flows through here.

---

## The Rule

Black Matter is solid and exists **only when observed**. When unobserved, it vanishes to The Stranger.

**Critical distinction:** Observation is determined by the **player's screen**, not the duck's in-world point of view. The duck character does not have a separate vision cone. What is rendered on screen = what exists.

This is intentional and deliberate. It enables perspective-based puzzles impossible in any other framing.

---

## What Triggers Vanishing

- BM scrolls off-screen (camera movement)
- BM enters complete darkness (no light source)
- Player pans camera away from BM
- Specific angles where BM vanishes even under light (angle-based observation — exact rules TBD)

---

## Camera Rules

- Player can pan the camera slightly up/down independently of the duck
- This independent pan is a puzzle tool — panning away from a BM platform intentionally removes it
- The camera pan range is deliberately limited to control what the player can and cannot de-observe at any time

---

## Sleep & Observation

The duck's Sleep ability speeds time to 150x and — critically — stops the duck from observing. This allows BM platforms to vanish even while the duck is present on them, enabling time-based and traversal puzzles.

**Note:** Sleeping does not dissolve Pofinho. The stabilizer ore maintains his physical form passively, and his self-observation is an internalized property of his BM — not something actively performed. Sleep interrupts neither. He stays solid and can die to hazards while asleep.

→ See `mechanics/sleep.md`

---

## Darkness as Observation Blocker

If BM is in complete darkness, it is not observed and vanishes. This is used in:
- The Depths Chamber (teaching "darkness = safety" via Shadow Wisps)
- The Shadow boss fight (voluntarily extinguishing light to defeat it)
- Puzzle zones where the player must manage light sources carefully

---

## Puzzle Design Implications

- **Off-screen removal:** Move camera away → BM disappears → duck falls or passes through
- **Darkness removal:** Extinguish light → BM in that area vanishes
- **Angle-based:** Specific camera angles cause BM to vanish even in light — used for advanced puzzles
- **Sleep-based:** Duck sleeps → stops observing → falls through BM platforms (but stays physically solid due to stabilizer ore)
- **Gloamvine Core:** Illuminates BM interiors, making hidden things observable (roots, creatures, contents)
- **Observation shadow puzzles (TBD):** Design puzzles where the player controls which part of a structure they observe to sculpt geometry with camera position
- **Self-observation paradox (TBD):** A room where Pofinho's reflection counts as observation, locking his BM form in a specific state

---

## In-World Justification

Why is it the player's screen and not the duck's eyes? The strongest candidate: **the player IS Pofinho's consciousness** — the duck's consciousness is the observation source, and the game quietly makes the player and Pofinho the same entity. This is the direction that best fits the game's themes.

Intentional ambiguity is left in place — the game never explicitly addresses it. The philosophical weight is in the implication, not the explanation.

→ See `duck_lore.md` for the self-observing entity theory
