# Design QA

## Source of truth

- Requirements: `docs/Tandum_サンプルLP_要件定義書_v1.1.md`
- Design definition: `docs/Tandum_サンプルLP_デザイン定義書_v1.1.md`
- Section references: `references/sections/`
- Full-page references: `references/desktop/desktop-full-reference.jpg`, `references/mobile/mobile-full-reference.jpg`
- Page imagery: `public/images/` only

## Capture conditions

- Target: static export served from `out/`
- Viewports: 375, 390, 430, 768, 1024, and 1440 CSS px
- Capture height: 1000 CSS px; full-page capture enabled
- Device scale factor: 1
- Media: screen, `prefers-reduced-motion: reduce`
- Implementation captures: `/tmp/tandum-{width}.png`
- Focused captures: Hero, Problem, Gray Hair Design, Style, First Visit, and Reservation at 390px and 1440px
- Comparison composites: `/tmp/tandum-compare-{desktop,mobile}-*.png`

## Comparison coverage

- Full view: desktop and mobile full-page references compared with 1440px and 390px implementation captures.
- Focused view: all five sections with individual references compared independently at desktop and mobile sizes.
- Reservation: compared against the design definition and full-page references because no individual section reference exists.

## Required surface review

- Typography: Noto Serif JP and Noto Sans JP produce the requested editorial serif/sans contrast. Body copy remains at least 16px at primary breakpoints.
- Spacing and layout: generous whitespace and asymmetric image/text compositions follow the section references while retaining the required content order.
- Color: warm off-white, deep brown, and warm-neutral palette is consistent across all sections.
- Imagery: all fourteen rendered images resolve from `public/images/`; no image under `references/` is rendered. Aspect ratios are preserved with deliberate `object-fit` and `object-position` settings.
- Copy and disclosure: Style and First Visit carry adjacent image-disclosure notes. Gray Hair Design imagery is presented as conceptual imagery rather than evidence of a specific service result.
- Interaction and accessibility: mobile menu supports Escape, FAQ is keyboard-operable, focus-visible styles are present, and motion is disabled under reduced-motion preferences.

## Findings and iterations

1. P1 — The mobile menu initially appeared visible because its layout rule overrode the HTML `hidden` attribute. Added an explicit `[hidden]` rule and verified the state sequence `closed → open → closed` with Escape.
2. P1 — First Visit, FAQ, and Access images inherited fixed intrinsic heights at narrow widths. Added responsive automatic height handling and re-captured all target widths.
3. P2 — Hero and Style headings wrapped more aggressively than their references. Tuned type scale and available text width to restore the intended editorial rhythm.
4. P2 — The mobile Style image order produced unintended blank grid areas. Explicitly placed the two portrait tiles side by side and the wider back-view tile below.
5. P3 — The mobile sticky reservation bar overlaps the lower edge of the active viewport by design. It does not cause horizontal overflow or hide the document ending because footer spacing compensates for it; a final device check is still recommended.
6. P3 — The implementation is longer than the compact conceptual full-page reference because it preserves all required sections, confirmed copy, accessible type sizes, and disclosure notes. This is accepted under the higher-priority requirements and design definition.

## Automated verification

- No horizontal overflow at any target width (`clientWidth === scrollWidth`).
- 14 images loaded at every target width; 0 broken images.
- One `h1` and 12 ordered `main > section` elements; Header and Footer remain outside `main`.
- Mobile sticky CTA visible below 768px and hidden from 768px upward.
- FAQ keeps a single expanded item after interaction.
- No captured browser runtime errors.

previous full-page result: passed

## Header / Hero focused pass — 2026-09-14

- Source visuals: `references/sections/01_hero_desktop_reference.jpg` (1672 × 941), `references/sections/01_hero_mobile_reference.jpg` (941 × 1672), plus the desktop and mobile full-page references.
- Implementation captures: `/tmp/tandum-hero-375.png`, `/tmp/tandum-hero-390.png`, `/tmp/tandum-hero-1440.png` at device scale factor 1.
- Viewports: 375 × 1000, 390 × 1000, and 1440 × 1000 CSS px; static export, initial page state, reduced motion enabled.
- Full-view comparison: Header and complete above-the-fold Hero composition were compared at all three widths.
- Focused comparison: image crop, organic transition, image-overlay copy, headline wrapping, station line, Quiet Confidence block, and sticky CTA clearance were inspected independently.
- P2 finding: the earlier desktop image retained a card-like inset and the mobile order was copy-first. Fixed by extending the desktop image to the Hero edges, removing its radius, and switching mobile to image-first flow.
- P2 finding: the earlier Hero lacked the reference's supporting brand copy and curved transition. Added short overlay copy, small brand information, desktop arc lines, and a mobile off-white curved boundary.
- Post-fix evidence: all three captures have no horizontal overflow, the supplied Hero image remains undistorted, the removed `HAIR DESIGN IMAGE` label count is zero, and no browser runtime errors were captured.
- Residual P3: the mobile implementation is vertically more spacious than the source artwork because it retains the project requirement for readable body text and touch-target sizing.

## Problem focused pass — 2026-09-14

- Source visuals: `references/sections/08_problem_desktop_reference.jpg` and `references/sections/09_problem_mobile_reference.jpg`.
- Implementation captures: `/tmp/tandum-problem-375.png`, `/tmp/tandum-problem-390.png`, and `/tmp/tandum-problem-1440.png` at device scale factor 1.
- Combined comparison evidence: `/tmp/tandum-problem-desktop-comparison.png` and `/tmp/tandum-problem-mobile-comparison.png`, normalized to equal widths.
- P2 finding: the earlier image was portrait-like and card-shaped. Fixed with a wider editorial crop, minimal radius, and a larger right-hand desktop column.
- P2 finding: the earlier list lacked the reference's number rules and had heavier spacing. Added short accent rules, lighter dividers, and tighter mobile item spacing.
- Post-fix evidence: the requested content order is preserved, the supplied image remains undistorted, the image label is absent, no horizontal overflow occurs at 375 / 390 / 1440px, and no browser runtime errors were captured.
- Residual P3: text remains slightly larger and the mobile section therefore longer than the source artwork in order to preserve the project's readability requirements.

## Hero → Problem mobile flow pass — 2026-09-14

- Implementation captures: `/tmp/tandum-mobile-flow-375.png` and `/tmp/tandum-mobile-flow-390.png`, device scale factor 1, reduced motion enabled.
- P2 finding: the Hero overlay copy approached the subject's face at narrow widths. Shifted the image crop toward the right-side subject position and tightened the overlay typography to preserve a clean left-side text area.
- P2 finding: the image curve and combined Hero/Problem spacing created excessive vertical air. Lowered and flattened the curve, reduced Hero bottom spacing, and added a subtle Problem divider with tighter top spacing.
- Post-fix evidence: overlay copy remains intact without unwanted wrapping, CTA/station/Quiet Confidence remain readable, the transition is continuous, and both widths have `clientWidth === scrollWidth` with no runtime errors.

final result: passed
