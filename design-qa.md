# CELCN Homepage Design QA

## Evidence

- Source structure reference: `C:\Users\Administrator\Documents\CELCN\snapshot.png`
- CELCN visual source of truth: `C:\Users\Administrator\Documents\CELCN\theme.png`
- Desktop implementation capture: `C:\Users\Administrator\Documents\CELCN\landing-page\qa-desktop.png`
- Mobile implementation capture: `C:\Users\Administrator\Documents\CELCN\landing-page\qa-mobile.png`
- Desktop viewport: 1265 × 710 CSS pixels; capture: 1265 × 710 pixels at 1× density
- Mobile viewport: 390 × 844 CSS pixels; full-page capture: 390 × 11741 pixels at 1× density
- State: homepage loaded; desktop at top; mobile at top with menu closed; Infant program open; FAQs closed

## Comparison

The implementation follows the reference site's homepage information flow: hero, access and inclusion pillars, mission and vision, age-based programs, learning approach, early-learning impact, community commitments, local network, FAQs, support statement, and closing involvement call to action.

The visual treatment follows the CELCN source: full-bleed childcare photography, dark-teal overlays, cream editorial sections, large Manrope headings, gold calls to action, fine teal rules, restrained radii, and generous vertical rhythm. Existing CELCN assets are reused; no CEY assets are hotlinked or copied.

Full-view comparison confirmed that all intended sections appear once in the DOM and follow the requested order. Focused checks covered the hero/header, mission and vision split, program accordion, impact band, commitment cards, FAQ split, local chapters, final CTA, and footer.

## Interaction and Integrity Checks

- Program accordion switches correctly between Infant, Toddler, and Preschool content.
- FAQ disclosures open and expose the correct answer content.
- Mobile navigation opens as the established left push drawer and closes with Escape.
- Desktop and mobile layouts have no horizontal overflow.
- Header, internal anchors, chapter link, contact calls to action, and footer destinations are present.
- Browser console was checked. A duplicate-key warning caused by two mobile navigation labels sharing a destination was fixed by using label-plus-destination keys.
- Production build and Sites packaging tests pass.

## Findings

No actionable P0, P1, or P2 visual or interaction issues remain.

## Comparison History

1. Initial implementation preserved the CELCN theme and introduced the new reference-derived content order.
2. Responsive review found the mobile hero, CTA pair, stacked sections, and push drawer working without overflow.
3. Navigation review found duplicate React keys for two links sharing `/how-it-works`; keys were corrected and the build was rerun.
4. The local chapter block was restored to keep Hamilton and Ottawa details visible and the Chapters anchor valid.

## Follow-up Polish

- P3: Additional CELCN-owned photography could reduce intentional image reuse if more approved assets become available.

final result: passed
