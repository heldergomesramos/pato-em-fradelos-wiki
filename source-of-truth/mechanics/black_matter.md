# Black Matter — Properties & Rules

> The foundation of everything. Every mechanic, puzzle, and lore beat connects back to this file.

---

## BM Visual Rules

> These rules define how BM looks — critical for consistent art direction.

- BM is rendered as **pure solid black** (0 light value). No color, no gradient, no texture inside.
- BM is identified by its **borders** — rough, spilly/liquid-looking edges where it meets the non-BM environment. Think ink spilling outward. These borders have remnants and drips of BM bleeding into the surrounding area.
- In **lit environments**: borders are clearly visible, BM reads instantly as a solid material.
- In **dark environments**: borders are still faintly present on walls/surfaces but unreliable. You genuinely can't always tell where BM ends. This ambiguity is intentional — it serves the vanishing principle.
- The border treatment IS the visual identity of BM. Do not add color, glow, or gradient to BM itself.

---

## Core Properties

| Property | Detail |
|----------|--------|
| Absorbs all incoming light | Appears completely black from outside |
| Internal light is visible | Creatures/light sources inside BM can be seen from outside |
| Hollow interior | Traversable from within |
| Silent | Makes no sound on contact |
| Solid when observed | Disappears when not observed (→ relocates to The Stranger) |
| Spreads in water | Spreads extremely fast when in contact with water |
| Modifies living beings | Contact via wounds or water in the body causes corruption/modification |

---

## The Vanishing Principle

**BM exists if and only if a conscious observer perceives it.** This is the complete rule. Not physics, not photons hitting retinas — conscious perception.

The player's screen represents Pofinho's conscious perception. The 2D framing is a natural fit, not a workaround. “What is on screen” is a proxy for “what Pofinho consciously perceives.”

**What counts as “observed”:** Conscious perception. The player's screen is the representation of this, not the mechanism itself.

**Conditions that cause BM to vanish:**
- Off-screen (out of conscious perception range)
- In complete darkness — **not because of darkness itself**, but because of **indistinguishability**: black BM against a black background cannot be perceived and distinguished from the background, so it vanishes. The mechanism is indistinguishability, not darkness.
- Player looks away (camera pans)
- A blind person with eyes open: cannot perceive BM → it vanishes for them
- A person cognitively unable to process visual information: BM vanishes regardless of lighting
- Certain angles where BM vanishes even under light (angle-based observation — TBD full rules)

**Why two observers prevents vanishing:** BM exists if *any* conscious observer perceives it. Both must stop perceiving it for it to vanish.

**Why Pofinho never vanishes:** His consciousness IS the observation. His self-awareness observes him into existence. Other BM has no consciousness and depends entirely on external observers. He is the only BM entity that observes itself.

**Why deep ocean BM is the real threat:** Not just darkness — the complete absence of conscious observers. Nothing in the deep ocean has the cognitive complexity to truly perceive BM. It spreads freely because nothing down there is conscious enough to collapse it back. This reframes the ocean threat as a consciousness problem, not just a light problem.

When unobserved, BM disappears — not destroyed, but relocated to The Stranger (what the scientists called “Internull” before understanding what The Stranger was).

→ See `mechanics/observation.md` for full camera and screen rules.
→ See `areas/internull.md` for Internull / The Stranger relationship.

---

## BM + Water

- BM spreads instantly and extremely fast when in contact with water
- When BM enters the bloodstream of a living being (via wounds making contact with BM) it causes **modification and corruption** of that being
- **⚠️ Working theory — infection vector:** Physical contact between an open wound and Black Matter. Simple, grounded, consistent with established BM properties. The island is full of BM — accidents happen. (Previously: the Chameleon attack was attributed as the cause. That is discarded. The Chameleon may still be present on Floor 3, but it is not responsible for the outbreak. See `scientists.md`.)
- Possible implication: BM may be spreading through the deep ocean (see below)

---

## BM Infection — Clarified Mechanics

BM spreads **when unobserved**. Observation collapses it back into existence in its new more-spread state.

Inside the bloodstream: BM enters through a wound, goes unobserved in the body's dark interior, spreads there, then when any part becomes observed again it snaps back into existence already more spread. The person didn't feel it growing because while growing it didn't exist. They only feel the consequences when exposed to light.

**The act of treating a wound makes infection worse** — examining it collapses a more-spread state into existence. Fully consistent with the rules.

---

## The Existential Threat — Ocean Floor Spread

The actual existential threat is BM spreading through the deep ocean. On the surface and in shallow water, BM is constantly observed — by creatures, by humans, by light — and collapses back before spreading far. But the deep ocean is one of the least observed environments on Earth. In permanent darkness, with almost nothing to collapse it back, BM spreads freely and has been doing so for decades.

The surface spread on the island is visible and documented but manageable in isolation. It is the indicator of something much larger moving below — already vast, accelerating in the dark, invisible to standard monitoring.

Once deep ocean BM spread reaches populated coastlines and enters water infrastructure, the spread becomes exponential and unstoppable. PE's instruments on the island detected it because they were specifically looking for it. No one else has instruments sensitive enough or positioned correctly to see it.

**Why the world isn't mobilizing:** The team reported the deep ocean spread. They weren't believed — an extraordinary claim from a remote island team already in crisis, partially corrupted, with no physical evidence anyone could safely examine. The report exists in a filing cabinet somewhere. Nobody followed up. The world was told once, by people who couldn't prove it, and then those people disappeared.

This is why Pofinho matters — the only surviving entity with both the knowledge and physical capability to act.

---

## Light & BM Interaction

**The core rule:** BM absorbs all incoming external light. It does not reflect it — which is why BM appears black; no light bounces back to your eyes from its surface. The absorbed light is stored internally (this is what the BM Generator harvests).

**Light from internal sources exits freely.** Fireflies, Gloamvine Core balls, creature bioluminescence — anything generating its own light from inside BM — is visible from outside. The absorption is inward only. This is why an entire ecosystem can exist inside BM and be perceived externally.

**The Gloamvine Core reveals roots** by injecting a powerful light source into the BM. Once inside, it illuminates the roots, and the reflected light exits back outward to the player's eyes. Without the Core, roots are invisible — not because BM blocks the view, but because there is no light source inside to reflect off them. Ordinary ambient light enters BM but gets absorbed before reflecting off anything. The Core is powerful enough that secondary reflections escape.

**This is NOT a contradiction.** Seeing a glow emanating from a black mass does not make the mass invisible or transparent. BM is still perceived, still solid, still present.

Summary:
- BM absorbs **all** external light — nothing reflects back from its surface
- Light generated **from within** BM is visible from outside (fireflies, Gloamvine Core balls, creature bioluminescence)
- BM **stores** absorbed light energy — harvested by the BM Generator
- The Gloamvine Core is powerful enough to generate secondary reflections that escape outward

---

## Physical Distortion

Black Gloamvines that grow through BM-infused material cause a zone where the intersection point **does not physically exist**. Objects and characters can pass through. Spikes interaction at these zones is a known design problem (TBD fix).

→ See `creatures/plants.md` for full Gloamvine / Black Gloamvine details.

---

## BM as Construction Material

- Checkpoint platforms are made of BM with stabilizer ore borders
- The duck (Pofinho) is made of BM, stabilized with **stabilizer ore** — the same material as checkpoint borders
- The Observer is a BM entity
- Teleporter Spheres are large BM spheres

---

## Origin

The Stranger — a moon-sized planet orbiting between Earth and the Moon — is the origin point of all Black Matter, and the dimension where unobserved BM relocates. It is an ancient planet or moon entirely consumed by BM. What the scientists called "Internull" is the interior of The Stranger. They named it before they understood what they were describing.

→ See `areas/the_stranger.md`
