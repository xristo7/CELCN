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

---

# Chapters Page Redesign QA — 2026-09-13

## Evidence

- Source visual truth: `C:\Users\Administrator\Documents\CELCN\chapters.png` and `https://www.ceychildcare.com/locations/`
- Implementation: `http://127.0.0.1:5174/chapters`
- Implementation screenshot evidence: browser-rendered inline captures from the local Chapters page; the browser did not expose a local screenshot path.
- Source image: 2830 × 16384 pixels, displayed at normalized scale in the task.
- Implementation viewports: 1424 × 809 desktop and 530 × 770 mobile at 1× browser density.
- State: page loaded, maps rendered, mobile menu closed, chapter cards at rest.

## Full-view comparison

The implementation follows the reference’s defining structure: a dark photographic title banner, followed by large chapter rows where a Google map and a compact information card alternate sides. CELCN’s established teal, cream, gold, rounded display type, header, footer, and people photography remain intact.

## Focused comparison

- The Hamilton row places the large map left and details right, matching the first reference location.
- The Ottawa row reverses the composition, matching the alternating reference rhythm.
- Cards retain the reference’s compact metadata hierarchy, thin gold divider, location/contact icons, and prominent action button.
- On mobile, each map and details card stack without horizontal overflow; contact details wrap safely.

## Required fidelity surfaces

- Fonts and typography: CELCN’s Baloo 2 display type and DM Sans body type are retained while matching the reference’s large chapter-title and compact metadata hierarchy.
- Spacing and layout rhythm: wide map/card bands, alternating tracks, generous white space, and compact details panels match the source pattern.
- Colors and visual tokens: the structure follows the reference while intentionally retaining CELCN teal, cream, gold, and white.
- Image quality and assets: existing high-resolution CELCN photography is used in the banner; real Google map embeds are used for both chapter locations; supplied director portraits remain unchanged.
- Copy and content: Hamilton and Ottawa legal names, addresses, emails, phone numbers, director names, and qualifications are preserved.

## Findings and comparison history

1. Initial P2: the Chapters page used separate introductory, address, and map sections, which did not reflect the reference’s paired location rows. Fixed by combining each location into a single map-and-details band.
2. Initial P2: both chapters followed the same left-to-right structure. Fixed by reversing the Ottawa row on desktop.
3. Post-fix evidence: desktop captures show Hamilton map-left/card-right and Ottawa card-left/map-right; mobile captures show a clean single-column stack. Both map embeds rendered and the browser console reported no warnings or errors.

## Follow-up polish

- P3: Replace the two Ottawa initial-based portrait treatments when approved director photos become available.

final result: passed
