# S1CK Video Generation Prompts

Prompts for generating every video asset referenced in the homepage plan. Each entry has three parts:

1. **First Frame Prompt** — paste into an image model (Midjourney v7, Flux 1.1 Pro, Imagen 4, Nano Banana Pro, Seedream 4).
2. **Last Frame Prompt** — same, for the end keyframe.
3. **Animation Prompt** — paste into a video model that supports first+last frame conditioning (Runway Gen-4 / Aleph, Kling 2.1 Master, Luma Ray 2, Veo 3, Pika 2.2, Seedance 1.0 Pro).

**Global visual rules for every video:**

- Anamorphic cinematic aspect (2.39:1) for hero + lifestyle, vertical 9:16 for UGC, 1:1 for vibe loops.
- Base palette: deep carbon black, soft gold (#C9A961), muted ivory highlights, occasional crimson spark.
- Lighting: hard directional key + soft ambient fill + warm gold rim. Never flat studio lighting.
- Lens: 50–85mm equivalent, T1.4–T2.0 shallow DOF. Anamorphic flare on strong highlights.
- Texture: subtle film grain, imperceptible gate weave, zero digital sharpening.
- No text, no logos, no watermarks in generated footage — typography is overlaid in the browser.
- Camera is always handheld-smooth on a gimbal, never locked-off unless specified (turntables).
- Color grade: Kodak 2383 print emulation, slight teal shadow lift, golden highlight roll-off.

---

## VIDEO 01 — Liquid Silver 360° Turntable

**Purpose:** Frame-scrub sequence for bestsellers section (GSAP ScrollTrigger).
**Duration:** 4.0s at 30fps → export 120 PNG/WebP frames.
**Aspect:** 4:5 portrait (1080×1350), bottle fills ~65% of frame height, dead-centered.

### First Frame Prompt

A tall, rectangular luxury fragrance bottle photographed dead-center on pitch-black seamless backdrop. The bottle is clear glass with silvered liquid inside, faintly iridescent chrome-silver that shifts from platinum to cool pearl. Minimalist square cap in polished brushed steel. Front label is a matte obsidian rectangle with a single debossed capital "S1CK" in metallic silver foil, subtle enough to catch light rather than dominate. Studio product photography: hard key light at 45° camera-left throwing a sharp specular highlight down the right shoulder of the bottle, warm gold rim light at 120° behind camera-right edge-lighting the bottle's silhouette, soft fill at 2% to barely lift the shadow side. Floor catches a thin, wet-looking gold reflection under the bottle, fading to pure black within 15% of frame height. Razor-sharp focus on the label. Shot on Phase One XT with 120mm Schneider lens. Hasselblad product-campaign aesthetic. 8K, crisp micro-detail on the glass, liquid inside showing faint convection swirls frozen in time.

### Last Frame Prompt

Same bottle, same lighting, same framing — but the bottle has rotated 355° clockwise around its vertical axis (viewed from above). The label is now almost back to the starting front-facing position but offset by a hair, so the specular highlight sits one degree short of where it started. All other elements — key, rim, fill, floor reflection, backdrop, grain, focus plane — are pixel-identical to the first frame. Same camera, same lens, same exposure, same color.

### Animation Prompt

The bottle rotates smoothly clockwise around its vertical axis at a constant angular velocity, completing 355 degrees across the full clip length. The camera does not move — it is locked on a tripod. Lighting is fixed in world space, so specular highlights and the gold rim light sweep visibly across the glass as the bottle turns. The silver liquid inside gently sloshes from the rotational inertia, catching light as it moves. No acceleration, no deceleration — perfectly linear rotation from frame one to frame last so the sequence can loop seamlessly when scrubbed. Background stays pure black throughout. No camera shake, no zoom, no focus pulls.

---

## VIDEO 02 — Alpha Q 360° Turntable

**Purpose:** Frame-scrub sequence for bestsellers section.
**Duration:** 4.0s at 30fps → 120 frames.
**Aspect:** 4:5 portrait.

### First Frame Prompt

Tall, square-shouldered fragrance bottle dead-center on pitch-black seamless. Bottle is smoked obsidian glass — nearly opaque, with the interior liquid only suggested as a deeper void within the dark glass. Cap is solid 24k gold, cube-cut with hand-polished bevels that throw multiple point-sources of specular light. Front face of the bottle carries a single deep-etched capital alpha symbol "α" in gold leaf inlay, roughly 30mm tall, catching light with mirror-finish precision. Under-label in tiny spaced caps reads nothing — just clean negative space. Hard key light at 30° camera-right creating a sharp rectangular highlight down the left shoulder, warm gold rim at 150° wrapping the right silhouette, tiny accent spot from above catching the top facet of the gold cap. Zero fill on the shadow side — the left half of the bottle dissolves into backdrop black. Floor catches a single razor-thin gold highlight. Dark, masculine, expensive, unapologetic. Shot on Phase One XT, 120mm, f/11. Tom Ford campaign aesthetic. 8K.

### Last Frame Prompt

Identical composition, lighting, and camera — bottle rotated 355° clockwise. The gold alpha symbol sits one degree short of its starting front-facing orientation. The specular highlight on the gold cap has traveled all the way around and is almost back. Backdrop, floor reflection, focus, grain — all pixel-identical.

### Animation Prompt

Constant-velocity clockwise rotation of the bottle around its vertical axis for 355 degrees. Camera and lighting locked. Watch the gold alpha inlay sweep out of view, replaced by the smooth rear facet of the obsidian glass — then back around through the side facet where a vertical strip of warm gold rim light carves the bottle's edge — continuing until the symbol returns to front just short of its starting position. No camera motion, no exposure change, no focus pull. Pure, surgical, luxury product turntable.

---

## VIDEO 03 — Le Toxiquè 360° Turntable (His & Hers Pair)

**Purpose:** Frame-scrub sequence for bestsellers section — dual bottle shot.
**Duration:** 4.0s at 30fps → 120 frames.
**Aspect:** 16:9 landscape (to fit both bottles side-by-side).

### First Frame Prompt

Two fragrance bottles standing side by side, dead-center, on pitch-black seamless with the bottles separated by exactly half a bottle-width of negative space. Left bottle ("Him"): apothecary-style flask with broad square shoulders, heavy base, crystal-clear glass holding a deep bloody-crimson liquid, cap is matte black onyx with a micro-gold pinstripe. Right bottle ("Hers"): same silhouette, clear glass, holding a translucent rose-gold liquid that glows faintly amber where the light catches it, cap is polished rose gold. Both front labels read "LE TOXIQUÈ" in a tall, condensed, all-caps serif foil — gold on the left bottle, jet black on the right — with a small skull-and-flower engraving beneath the wordmark, barely visible. Lighting: a single hard key light positioned dead-center behind camera, painting a bright rectangular highlight down the inner-facing edge of both bottles and silvering the top of each cap. Two warm gold rim lights, one per bottle, carving the outer silhouettes. Floor gives a wet obsidian reflection under each bottle fading to black. Shot on Phase One XT, 120mm, f/8, perfect symmetry. Dark-romantic, dangerous, cinematic. 8K.

### Last Frame Prompt

Identical symmetric composition, same lighting — both bottles have synchronously rotated 355° clockwise around their individual vertical axes. Labels are one degree short of returning to front-facing. All lighting, reflections, backdrop, focus unchanged.

### Animation Prompt

Both bottles rotate in perfect synchronized clockwise motion around their individual vertical axes, constant angular velocity, 355 degrees across the clip. The camera does not move. Fixed world-space lighting means the central key highlight sweeps across both bottles' inner faces at exactly the same moment. The crimson liquid in the left bottle sloshes gently in sync with the rose-gold liquid on the right. The two bottles feel like coupled pendulums — mirrored, inseparable, ritual. No camera motion, no zoom, no fades.

---

## VIDEO 04 — The S1CK Arsenal Bundle Turntable

**Purpose:** Hero product bundle for bestsellers section (flagship SKU).
**Duration:** 4.0s at 30fps → 120 frames.
**Aspect:** 4:5 portrait, all three bottles visible.

### First Frame Prompt

Three fragrance bottles arranged in a tight triangular formation on pitch-black seamless: the center bottle (Liquid Silver — clear glass, silver chrome liquid, brushed steel cap) stands slightly forward and 20% taller in frame than its two flanking companions, which are positioned half a step back and rotated slightly inward toward it. Left flanker: Alpha Q (smoked obsidian glass, gold cube cap). Right flanker: Le Toxiquè Him (clear glass, crimson liquid, onyx cap with gold pinstripe). The three bottles form a luxury retail hero tableau — like a watch collection displayed under museum glass. Lighting: central hard key from directly above camera painting a sharp highlight down every bottle's centerline, paired warm gold rim lights from 120° and 240° wrapping the outer silhouettes in gold edge-glow. Subtle haze in the air catches the rim light, giving atmospheric volumetrics. Floor reflection carries a faint gold shimmer beneath each bottle, fading within 20% of frame height. Phase One XT, 80mm wider lens to frame all three. Hasselblad-grade product photography. 8K.

### Last Frame Prompt

Same tight triangular arrangement, identical lighting and framing — all three bottles have rotated 355° clockwise in perfect sync around their individual vertical axes. Labels one degree short of starting orientation.

### Animation Prompt

All three bottles rotate in perfect synchronized clockwise motion, constant velocity, 355 degrees across the full clip. Camera locked, lighting locked in world space. The specular highlights sweep across all three bottles at precisely matched phase. The faint atmospheric haze drifts subtly. Liquids inside (silver in center, crimson on right) visibly slosh from rotational inertia. The composition never changes — only the bottles turn. Still, surgical, premium.

---

## VIDEO 05 — Hero Bottle Float & Tilt Loop

**Purpose:** Overlay bottle in homepage hero with CSS 3D + mouse parallax, continuous ambient motion loop.
**Duration:** 6.0s seamless loop at 30fps → 180 frames OR exported as alpha-channel WebM/HEVC.
**Aspect:** 1:1 square (1200×1200), transparent background.

### First Frame Prompt

Single Liquid Silver fragrance bottle floating dead-center on PURE BLACK (for compositing key — final delivery wants transparent alpha). Clear glass, silvered chrome liquid inside, brushed steel cap, matte obsidian front label with debossed silver "S1CK" logo. The bottle is tilted 15 degrees to camera-left and pitched 8 degrees toward camera — a casual, weightless pose as if mid-levitation. Hard key light from camera-right-high producing a sharp specular highlight along the right shoulder of the bottle. Warm gold rim light from behind carving the left silhouette. Tiny particles of gold dust drift around the bottle, caught by the rim light as pinpricks of warm glow. Faint volumetric haze. No floor. No shadow. Bottle appears to hover in void. 8K, crisp detail on the bottle, delicate soft bloom around the cap.

### Last Frame Prompt

Same bottle, same lighting in world space, but bottle now tilted 15 degrees to camera-RIGHT and pitched 8 degrees AWAY from camera — the mirrored pose. Specular highlight has shifted accordingly. Gold dust particles have drifted to slightly different positions. Otherwise identical: no floor, black void, same focus, same grain.

### Animation Prompt

The bottle performs a slow, silky pendular tilt: from 15° left-lean at frame 1, through perfectly upright at frame 90, to 15° right-lean at frame 180 (last frame). Simultaneously the bottle pitches forward then back in a gentle breathing motion with an 8° peak. The motion is sinusoidal, like a bottle suspended in honey. The gold dust particles drift upward and around the bottle in slow turbulent eddies. Specular highlights and gold rim catch the bottle differently at every moment as its surface orientation changes relative to locked world-space lighting. Loop-ready: the last frame must animate seamlessly back to the first when played head-to-tail. No camera motion, no background change. The bottle is alive but weightless.

---

## VIDEO 06 — Hero Lifestyle Film (Jonny Truelove)

**Purpose:** Autoplay muted background video in homepage hero section. Sets the S1CK lifestyle world.
**Duration:** 20s seamless-ish loop, 24fps, cinematic.
**Aspect:** 2.39:1 anamorphic (3840×1608 or similar).

### First Frame Prompt

Cinematic wide shot: a confident man in his early 30s (Jonny Truelove archetype — lean athletic build, sharp jawline, dark slicked-back hair, unlit cigarette between fingers) stands at the top of a rain-slick marble staircase at night, city lights glittering out-of-focus behind him. He wears an unbuttoned black silk shirt and tailored trousers. In his right hand, held at hip level, is a single Liquid Silver S1CK fragrance bottle, catching a glint of ambient neon. Overhead, a single warm sodium street lamp pools gold light on his face and shoulders. Behind him, a blurred high-rise cityscape with red aircraft warning lights pulsing slowly. Shot on ARRI Alexa 35 with Cooke Anamorphic 50mm, T2.0. Shallow DOF — sharp on his eyes, soft on the city. Wet ground reflects neon. Warm-to-teal split color grade. 35mm film grain, gentle anamorphic streak on the lamp. Mood: dangerous calm, quiet authority, Blade-Runner-meets-Tom-Ford. 8K.

### Last Frame Prompt

Tight cinematic medium shot: the same man now at a sleek charcoal-marble bar inside a dim high-end lounge, seated on a leather stool. The Liquid Silver S1CK bottle stands on the bar in front of him, prominently but not hero-scale. A woman across the bar, out of focus in the mid-ground, is turning her head in his direction, drawn by something unseen. Jonny's eye contact is with the bottle, not her. Warm amber bar-lighting from behind the bartender's station, single overhead pin-spot catching his shoulder and the bottle cap. Color grade matches: warm-to-teal, same grain, same anamorphic lens character.

### Animation Prompt

The clip opens on the wide rooftop-staircase shot (first frame). Camera performs a slow, smooth push-in at roughly 5% of frame width per second, drifting forward and slightly down over 8 seconds as Jonny raises the bottle from hip level to chest level, examining it. Neon signs in the background pulse subtly. His cigarette ember glows once. At the 10-second mark, a cinematic dissolve cross-fades into the bar interior — the second frame setting. Over the next 10 seconds, the camera slowly orbits 20 degrees around Jonny at the bar as the woman in the background slowly, almost imperceptibly turns her head toward him, the bottle remaining in sharp focus on the bar throughout. Ambient motion is constant but minimal — a waiter passes out of focus, a drink is poured in the far background, steam rises off a rocks glass. No sudden moves. No close-ups. No faces speaking. The entire film is a mood piece, not a narrative. Film grain and anamorphic flare remain consistent. Colors hold warm-to-teal throughout.

---

## VIDEO 07 — Vibe Loop: The Club

**Purpose:** Interactive vibe-picker module (section 4), triggered when user clicks "The Club."
**Duration:** 6s seamless loop, 24fps.
**Aspect:** 1:1 square (1080×1080).

### First Frame Prompt

Pitch-dark underground nightclub interior. Low ceiling laced with exposed blackened steel. A single stroboscopic beam of deep magenta light carves diagonally through thick atmospheric fog, illuminating a mass of silhouetted bodies mid-dance in the middle distance. Foreground left: the edge of a black leather banquette, a clear rocks glass with amber liquid and a single ice cube catching the magenta light. Foreground right: a Liquid Silver S1CK bottle standing on the banquette edge, catching a hard pink-magenta specular highlight along its shoulder. The bottle is the sharpest element in frame — everything else is deep shadow or atmospheric blur. Shot on ARRI Alexa 35, Cooke Anamorphic 40mm, T1.4, razor-shallow DOF. Heavy film grain. Anamorphic lens flare streaking horizontally across the magenta beam. Color: black void with magenta and faint electric blue accents. 8K.

### Last Frame Prompt

Same club interior, same framing, same bottle position — but the strobe beam has swept across to come from the opposite diagonal, now deep electric cyan instead of magenta. The silhouetted bodies in the background have shifted mid-dance. Anamorphic flare has rotated to match the new beam direction. The bottle still catches the sharpest highlight, this time cyan. Everything else — camera, focus, grain — identical.

### Animation Prompt

The stroboscopic beam slowly sweeps from magenta (frame 1) through deep violet (midway) to electric cyan (last frame), rotating its angle across the frame. Simultaneously, the silhouetted crowd in the mid-ground moves at half-speed in rhythmic dance motion — no cuts, no camera movement, just fluid crowd energy. The amber liquid in the rocks glass vibrates faintly from the implied bass. Atmospheric fog drifts slowly right-to-left. The bottle stays razor-still but its specular highlight shifts color with the beam. Loop-ready: last frame transitions smoothly back to first. No camera motion. Pure atmospheric mood.

---

## VIDEO 08 — Vibe Loop: The Date

**Purpose:** Vibe-picker "The Date" scenario.
**Duration:** 6s loop, 24fps, 1:1.

### First Frame Prompt

Intimate candlelit restaurant interior. Foreground: the corner of a dark walnut table, two crystal wine glasses half-filled with deep garnet red wine catching the flicker of a single candle that burns just behind them. A Liquid Silver S1CK bottle sits on the table beside the candle, its silver surface picking up warm amber firelight. Background: the blurred silhouette of a woman's bare shoulder and the curve of her neck, out of focus, suggesting presence rather than identity — she is leaning in. Far background: soft bokeh of other candles in the dining room, warm amber and gold only. Color palette is 90% warm — dark oxblood, cognac, candle gold, deep chocolate — with the silver bottle providing the only cool accent. Shot on ARRI Alexa 35, Cooke Anamorphic 75mm, T1.4. Paper-thin DOF, sharp on the bottle. 35mm grain. Anamorphic flare gentle, golden. 8K.

### Last Frame Prompt

Identical framing. The candle flame has grown slightly taller and leaned left. A hand — just the suggestion of fingers, manicured, emerging from the out-of-focus shoulder in the background — now rests lightly on the table near the wine glass, fingertips almost but not quite touching the stem. The wine has a new micro-ripple from motion. Otherwise identical.

### Animation Prompt

The candle flame dances slowly, licking left and right with natural turbulence. The wine in both glasses ripples ever so slightly, as if from a distant vibration. Over the 6-second span, a hand slowly, slowly emerges into the frame from the background bokeh on the right — first just a fingertip, then a suggestion of a palm, settling near the wine glass by the final frame. Camera stays locked. Warm firelight flickers across the silver bottle, making its surface alive with dancing amber reflection. Everything happens in extreme slow motion. Mood: intimate, inevitable, electric. Loop-ready so the hand pulls back seamlessly as the clip restarts.

---

## VIDEO 09 — Vibe Loop: The Boardroom

**Purpose:** Vibe-picker "The Boardroom" scenario.
**Duration:** 6s loop, 24fps, 1:1.

### First Frame Prompt

High-floor corporate office at dusk. Foreground: the edge of a polished black-marble boardroom table. On it: a single Liquid Silver S1CK bottle, a luxury gold fountain pen placed horizontally, and the corner of a leather portfolio. Background: floor-to-ceiling plate glass windows showing a high-rise cityscape at blue hour — silhouette of skyscrapers against a deep teal-to-indigo gradient sky, with pinprick yellow window lights scattered across the far buildings. A few aircraft warning lights blink slowly. Interior lit by a single long pendant lamp above the table that spills a pool of warm white light across the marble surface, catching the bottle dramatically. Atmosphere: quiet, powerful, post-hours — the moment after the room has emptied. Shot on ARRI Alexa 35, Cooke Anamorphic 32mm, T2.0, architectural composition. Cool-to-warm contrast: cold teal exterior, warm pendant interior. Subtle grain. 8K.

### Last Frame Prompt

Identical framing and props. The city outside is exactly one minute later in the blue hour progression — the sky is marginally darker, a few more window lights have turned on in the background towers, one aircraft warning light is now red instead of mid-blink. A single curl of steam now rises from a just-placed espresso cup that has appeared at the far edge of the frame. Otherwise identical.

### Animation Prompt

The city outside transitions imperceptibly through the blue hour — the sky darkens by one half-stop over the 6 seconds, more window lights blink on randomly across the background buildings, and aircraft warning lights pulse at natural rhythms. Inside, the pendant light is locked. A thin wisp of steam rises from an espresso cup that fades into frame at the far edge during the first two seconds. The S1CK bottle stays perfectly still, a monolith. The camera does not move. Loop-ready. Mood: control, altitude, consequence.

---

## VIDEO 10 — Vibe Loop: The Weekend

**Purpose:** Vibe-picker "The Weekend" scenario.
**Duration:** 6s loop, 24fps, 1:1.

### First Frame Prompt

Sun-drenched rooftop terrace at golden hour. Foreground: a slab of sun-warmed travertine with a small cluster of objects — a Liquid Silver S1CK bottle, a half-finished glass of pale-amber mezcal with a curl of orange peel, a pair of dark designer sunglasses folded beside them, and a set of matte-black car keys on a gold keyring. Background: soft-focus view over low-rise Mediterranean rooftops — terracotta tiles, bougainvillea, palm fronds, the hint of distant ocean — bathed in honey-gold late afternoon sun. Warm hazy light wraps every surface. Shot on ARRI Alexa 35, Cooke Anamorphic 65mm, T2.0. Shallow DOF, shimmering bokeh in the background. Film grain visible in the highlights. Golden hour color palette: sun gold, terracotta, olive green, ocean silver. 8K.

### Last Frame Prompt

Identical props, identical composition. The sun has moved — shadows are slightly longer, highlights slightly warmer and more orange. A few palm fronds in the background have shifted position. A small lizard has appeared at the far edge of the travertine slab, motionless, sunning itself.

### Animation Prompt

Golden-hour sunlight shifts slowly across the scene — shadows elongating by a few pixels, color temperature drifting warmer by 100K. Palm fronds in the mid-ground sway gently in a slow breeze. The orange peel in the mezcal glass twists almost imperceptibly. A small lizard appears at the far edge during the second half of the clip, arriving and settling perfectly still. Distant ocean shimmer animates continuously. Camera locked. Loop-ready. Mood: ease, sun on skin, earned rest.

---

## VIDEO 11 — Vibe Loop: The Gym

**Purpose:** Vibe-picker "The Gym" scenario.
**Duration:** 6s loop, 24fps, 1:1.

### First Frame Prompt

Dark industrial strength-training gym at pre-dawn. Exposed concrete floor, black steel rack structures in the background, stacks of matte-black iron weight plates. Foreground: a worn wooden bench. On the bench: a Liquid Silver S1CK bottle, a coiled black leather lifting belt, a pair of chalk-dusted leather lifting straps, and an open chalk bowl with a cloud of chalk dust hanging in the air just above it. Single hard overhead industrial sodium light source from directly above, pooling a hot circle of amber light down onto the bench and bottle, everything outside the pool dissolving to near-black. Mist of gym chalk particles drifts through the beam. Shot on ARRI Alexa 35, Cooke Anamorphic 40mm, T1.4. Hard chiaroscuro. Heavy grain. High contrast, nearly monochrome with only the amber pool for warmth. 8K.

### Last Frame Prompt

Same composition and props. The hanging cloud of chalk has drifted and slowly dispersed. A fresh pair of chalked hands (just the forearms visible at the frame edge) has entered the pool of light, palms open toward the chalk bowl. The belt has been moved half an inch. Otherwise identical.

### Animation Prompt

Chalk particles drift slowly through the amber light beam, some settling, some rising in convection. A pair of chalked hands enters the bottom of the frame during the final two seconds, palms opening over the chalk bowl. The leather belt shifts subtly as if just set down. Camera locked. The S1CK bottle stays monumentally still. Loop-ready. Mood: cold iron, heat, pre-dawn resolve.

---

## VIDEO 12 — Vibe Loop: The Bedroom

**Purpose:** Vibe-picker "The Bedroom" scenario.
**Duration:** 6s loop, 24fps, 1:1.

### First Frame Prompt

Dimly-lit bedroom interior at early morning. Foreground: the edge of a rumpled jet-black silk sheet on a low dark-wood platform bed, with a single shaft of warm morning sunlight falling diagonally across the sheet through an off-frame window. On the sheet: a Liquid Silver S1CK bottle lying on its side, a delicate gold chain necklace partially uncoiled beside it, and a single crimson silk scarf draped loosely over a corner of the pillow. Background: the out-of-focus suggestion of an unmade pillow, a curtain moving in a breeze, soft warm blur. Low-key lighting: 95% shadow, 5% hot-cut sunbeam. Motes of dust float through the sunbeam. Shot on ARRI Alexa 35, Cooke Anamorphic 85mm, T1.4. Paper-thin DOF. Warm gold and black-red palette, whisper of cool blue shadow. Film grain soft. 8K.

### Last Frame Prompt

Identical framing. The sunbeam has traveled slightly across the sheet — angle shifted by roughly 10 degrees. The crimson scarf has slipped a few inches, revealing more of the pillow beneath. The gold chain has shifted to a new uncoiled shape. Dust motes in different positions.

### Animation Prompt

The diagonal sunbeam creeps slowly across the sheet in natural sun-drift motion. The crimson silk scarf slides gently under its own weight. The curtain in the background stirs in a faint breeze. Dust motes drift through the beam in slow turbulent motion. The gold chain glints once as the sunlight crosses it. The bottle stays still, a warm anchor at the center of the shaft of light. Camera locked. Loop-ready. Mood: intimate, post-moment, unapologetic.

---

## VIDEO 13 — Mist / Smoke Reveal Loop

**Purpose:** Transition effect for vibe-picker when a fragrance is "revealed" after a scenario selection.
**Duration:** 3s one-shot (not looped), 30fps.
**Aspect:** 4:5 portrait to match product cards.

### First Frame Prompt

Pure black frame. Dense, slow-moving charcoal smoke fills the entire composition — curling, folding, atmospheric. A single hard backlight behind the smoke punches through in places, making the smoke glow gold-white in streaks while the foreground volumes stay deep black. No product visible yet — the bottle is implied to be hidden within the smoke at the center. Shot on ARRI Alexa 35, Cooke Anamorphic 85mm, T2.0. High-contrast, heavy atmosphere, cinematic. 8K.

### Last Frame Prompt

Same frame composition. The smoke has largely cleared — wisps remain at the top and bottom edges but the center is now clean black with a single Liquid Silver S1CK bottle standing dead-center, sharply in focus, fully revealed. A warm gold rim light wraps the bottle's right silhouette. A hard specular highlight runs down the right shoulder. The last trails of smoke curl away from the bottle as if it has just materialized. Same camera, same lens.

### Animation Prompt

The smoke slowly dissipates from the center outward over the full 3 seconds. At frame 1 the bottle is completely invisible behind dense smoke. By frame 45 (halfway) the silhouette of the bottle begins to emerge — a dark shape gaining definition. By frame 90 (last frame) the smoke has cleared to reveal the bottle fully, with only decorative wisps remaining at the frame edges. The backlight intensity gently stabilizes into clean product lighting as the reveal completes. The bottle does NOT move — it simply becomes visible. Slow, ceremonial, cinematic. One-shot (not looped). Mood: conjuring, ritual, arrival.

---

## VIDEO 14 — Founder Direct-to-Camera (Jonny Truelove)

**Purpose:** Founder moment in Section 6 (Work with Us / Affiliate).
**Duration:** 30–45s, 24fps, natural ambient sound (optional).
**Aspect:** 2.39:1 anamorphic cinematic.

### First Frame Prompt

Intimate medium close-up of a man in his early 30s (Jonny Truelove archetype — lean, sharp features, dark slicked hair, three-day stubble, quiet confidence in the eyes). He wears a plain black fine-knit crewneck. He is seated on a dark leather chair in what appears to be a personal study or atelier — walls in behind him are out of focus but suggest dark wood paneling, a single warm floor lamp, and the edge of a shelf holding fragrance bottles. He is looking directly into camera — calm, steady, unsmiling but warm. A Liquid Silver S1CK bottle rests on a small side table in the lower-right of frame, partially out of focus. Shot on ARRI Alexa 35, Cooke Anamorphic 75mm, T2.0. Rembrandt-style key light from camera-left producing a soft triangle of light on the right cheek. Warm tungsten practicals in the background. Color grade: warm-to-teal, earthy. Soft 35mm grain. 8K.

### Last Frame Prompt

Same man, same framing. His expression has softened into the faintest ghost of a half-smile at the corner of his mouth — barely perceptible. His right hand has moved to rest lightly on the S1CK bottle on the side table. Same camera, same lens, same lighting, same background.

### Animation Prompt

Jonny is speaking directly to camera throughout the clip — lip-sync not required for this asset; he will be dubbed with voiceover in post. His facial motion should be natural, conversational, unhurried: slow blinks, small head nods, subtle eyebrow shifts conveying sincerity and confidence. At roughly the 70% mark of the clip, he reaches out with his right hand and gently places it on the S1CK bottle on the side table — the gesture should feel unscripted and grounded, not staged. Camera is locked on sticks with the faintest sense of handheld breath — no dolly, no push-in. Warm practical lights in the background do not change. Mood: trust, ownership, calm invitation. The final frame should match the last-frame prompt closely enough to allow a natural cut point.

---

## Asset Delivery & Frame Extraction

Once generated, extract frames and compress using ffmpeg:

```bash
# Turntable / bottle-float sequences — extract to WebP for scroll-scrub
ffmpeg -i bottle_silver.mp4 -vf "fps=30,scale=1080:-1" -quality 82 public/sequences/silver/frame_%03d.webp

# Lifestyle / vibe videos — compress for autoplay
ffmpeg -i hero_lifestyle.mp4 -c:v libx264 -preset slow -crf 23 -vf "scale=1920:-2" -an -movflags +faststart public/video/hero.mp4
ffmpeg -i hero_lifestyle.mp4 -c:v libvpx-vp9 -crf 32 -b:v 0 -vf "scale=1920:-2" -an public/video/hero.webm

# Mist reveal with alpha channel
ffmpeg -i mist_reveal.mov -c:v libvpx-vp9 -pix_fmt yuva420p -auto-alt-ref 0 public/video/mist.webm
```

**Target file sizes:**
- Turntable sequence: 120 × ~40KB WebP = ~5MB per product.
- Hero lifestyle MP4: < 5MB @ 20s.
- Vibe loops: < 1.5MB each @ 6s.
- Mist reveal: < 1MB @ 3s.

**Folder structure on disk:**

```
public/
├── sequences/
│   ├── silver/        (120 frames)
│   ├── alphaq/        (120 frames)
│   ├── toxique/       (120 frames)
│   ├── arsenal/       (120 frames)
│   └── hero-float/    (180 frames)
├── video/
│   ├── hero.mp4
│   ├── hero.webm
│   ├── mist.webm
│   ├── founder.mp4
│   └── vibes/
│       ├── club.mp4
│       ├── date.mp4
│       ├── boardroom.mp4
│       ├── weekend.mp4
│       ├── gym.mp4
│       └── bedroom.mp4
```
