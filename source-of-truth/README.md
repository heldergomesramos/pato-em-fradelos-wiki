# Pato em Fradelos — Game Bible

> Start here. This file is the index and map of the entire bible.
> Paste this at the start of every conversation, then share whichever files Claude asks for.

---

## Quick Summary

**Working Title:** Pato em Fradelos (alt. _Sleep Fracture_)
**Genre:** 2D side-scroller platformer with puzzle and exploration elements
**Tone:** Grounded and realistic — except Black Matter, which is intentionally alien and physics-breaking
**Inspirations:** Outer Wilds, Echoes of the Eye
**Current Version:** Post-demo v0.13.6

---

## File Map

### Core
| File | Contents |
|------|----------|
| `duck_lore.md` | Pofinho's origin, self-observing entity theory, immortality, ending structure |
| `scientists.md` | Named scientists, what happened, PE's fate, confirmed vs unresolved |
| `upgrades.md` | All upgrades and abilities, including planned ones |
| `open_questions.md` | All TODOs and unresolved design decisions |

### Mechanics
| File | Contents |
|------|----------|
| `mechanics/black_matter.md` | All BM properties and rules — the foundation of everything |
| `mechanics/observation.md` | Observation mechanic, camera rules, screen vs duck POV |
| `mechanics/sleep.md` | Sleep mechanic, Stranger access, time-scaling |
| `mechanics/checkpoints.md` | Checkpoint behavior, death, respawn |

### Areas
| File | Contents |
|------|----------|
| `areas/island.md` | The Island surface, Black Lake, eclipse threshold |
| `areas/laboratory.md` | All lab floors, Aquarium, Floor 3 quarantine |
| `areas/energy_facility.md` | Energy Facility, Extraction Corridor, Mining Sites |
| `areas/depths.md` | Depths Chamber, Last Abyss, deep portal location |
| `areas/internull.md` | The Other Dimension, Teleporter Spheres, two-axis destination system |
| `areas/the_stranger.md` | The Stranger planet, eclipse, zone types, visual design, core ending |
| `areas/observatory.md` | Observatory location, PE's fate, ending structure role |

### Creatures
| File | Contents |
|------|----------|
| `creatures/ambient.md` | Anglerfish, Jellyfish, Fireflies, Black Whale |
| `creatures/plants.md` | Gloamvines, Black Gloamvines, Carnivorous Plants |
| `creatures/bosses.md` | The Observer, The Shadow, The Chameleon |
| `creatures/enemies.md` | Lurker, Shadow Wisp, BM Spitter (candidate) |

### Lore Delivery
| File | Contents |
|------|----------|
| _(TBD)_ `lore/consciousness_statues.md` | Statues predating the lab, stabilizer ore construction, sleep-vision function, builders unknown |

---

## Dependency Map

> When a topic is changed, these are the other files likely affected.

| Changed | Also check |
|---------|------------|
| `mechanics/black_matter.md` | Everything — BM is the foundation |
| `mechanics/observation.md` | `areas/depths.md`, `creatures/bosses.md`, `duck_lore.md` |
| `duck_lore.md` | `scientists.md`, `mechanics/black_matter.md`, `areas/the_stranger.md` |
| `scientists.md` | `duck_lore.md`, `areas/laboratory.md`, `areas/observatory.md` |
| `creatures/bosses.md` | `areas/laboratory.md`, `areas/depths.md`, `mechanics/observation.md` |
| `areas/depths.md` | `creatures/bosses.md`, `creatures/enemies.md`, `mechanics/black_matter.md`, `areas/internull.md` |
| `areas/internull.md` | `mechanics/black_matter.md`, `mechanics/sleep.md`, `upgrades.md`, `areas/the_stranger.md` |
| `areas/the_stranger.md` | `areas/internull.md`, `duck_lore.md`, `areas/observatory.md` |
| `areas/observatory.md` | `scientists.md`, `duck_lore.md`, `areas/the_stranger.md` |

---

## Website Pages

| Page | Maps to |
|------|---------|
| `index.html` | This README |
| `lore.html` | `duck_lore.md`, `scientists.md`, `areas/*.md` |
| `mechanics.html` | `mechanics/*.md`, `upgrades.md` |
| `creatures.html` | `creatures/*.md` |
| `locations.html` | `areas/*.md` |
| `upgrades.html` | `upgrades.md` |
| `characters.html` | `duck_lore.md`, `scientists.md`, `creatures/bosses.md` |
| `timeline.html` | `scientists.md`, `areas/laboratory.md` |
| `unresolved.html` | `open_questions.md` _(internal only)_ |
