# Creatures — Enemies

---

## Lurker

**Location:** Depths Chamber

Completely flat and 2D — lives on surfaces (walls, ceilings, floors). Part of the environment, not a mobile chaser.

### Detection
Invisible under normal conditions. Only its outline is visible under **Gloamvine Core light** — an irregular, organic silhouette pressed against the surface.

### Behavior
Does not chase or directly damage the duck. When the duck enters its radius, it **absorbs the nearest Gloamvine Core charge** — either an active ball in the environment or an unspent charge. Silent and immediate.

### Placement
Positioned at mandatory chokepoints with enough space to dodge if spotted in time. During the Shadow boss chase sequence, Lurkers become extremely dangerous — losing a charge at the wrong moment can be fatal.

---

## Shadow Wisp

**Location:** Depths Chamber (pre-boss area)

A smaller, undeveloped form of the same entity as The Shadow. Floats erratically. Does not pursue the duck.

### Behavior
Reacts to light with recoil — any light source (duck's natural glow or Gloamvine Core balls) causes it to freeze for ~1 second then redirect away. If the duck **extinguishes all light entirely**, Shadow Wisps ignore it completely.

### Purpose
Teaches the player that **darkness = safety** before that knowledge becomes critical in The Shadow boss fight. The player must internalize this from the Wisps before they can apply it under pressure in the chase sequence.

→ See `creatures/bosses.md` for The Shadow

---

## BM Spitter (Candidate)

Spits Black Matter projectiles at light sources. If it hits the duck, the duck is coated in BM and temporarily loses its own light emission — causing it to sink through BM platforms.

**Status:** TBD whether this makes the final design. The sinking-through-BM penalty is interesting but overlaps with the Sleep mechanic's function.
