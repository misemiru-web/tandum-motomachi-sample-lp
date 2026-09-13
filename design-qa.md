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

final result: passed
