# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Selected direction: immersive full-bleed childcare photography, deep-teal overlay, oversized mission-led type, warm yellow CTAs, and cream editorial story sections. Keep CELCN brand colours even when using CEY Childcare as structural inspiration.

The platform marketing section uses the user-supplied full dashboard image (`public/assets/celcn-dashboard.png`) in place of the original three-metric mock. Preserve the image and offer an enlarged preview; it is not a live dashboard.

Keep marketing content specific to each page, with no repeated dashboard, onboarding, or FAQ sections across routes. The landing-page dashboard uses two columns on desktop. Marketing pages share SiteHeader and SiteFooter. How it works owns the onboarding journey; Contact us owns the enquiry form. Account pages retain their dedicated authentication layout.

All accordions must be single-open: opening an item automatically closes the previous one, and the active item can still be collapsed. Use native details elements with the shared name="celcn-accordion" for current and future accordions; preserve native keyboard support.

Mobile navigation uses a hamburger to the left of the logo and a left-side push drawer: opening it smoothly shifts the page right to reveal the sidebar, with a matching closing transition and fading backdrop. Preserve tap-outside and Escape closing, focus trapping and restoration, and reduced-motion support.

The trust/information section uses the user-selected educator-and-child photograph (`public/assets/celcn-trust.png`) behind its content with a dark brand-teal overlay for text legibility.

Programs, Platform, and Chapters remain in the mobile drawer, but not the desktop header. Do not add a standalone homepage jump-button row for these links; the user removed that row.

On How it works, the journey's left introduction is sticky on desktop, bounded by the journey section while the right steps scroll. Keep the mobile stacked layout non-sticky.

The How it works hero uses celcn-daycare-dropoff.png, a generated African American parent and child daycare drop-off scene, with a readable teal overlay.

Keep the shared marketing header fixed at the top during scrolling, using solid teal once scrolled. Reserve its layout space and offset anchors and sticky section introductions below it.

About us includes Hamilton chapter directors: portrait 1 (patterned dress) is Yvonne Otiteh; portrait 2 (cream-and-black cardigan) is Jennifer Pere Ajuwa; portrait 3 (cream coat) is Isoken Sikpojie. Use the user-supplied qualifications without adding credentials. Hamilton chapter contact: 191 King Williams Street, Hamilton ON L8R 1A7; canadaearlylearning.kingwilliams@mail.com; 437 727 3420. Publishing target is Cloudflare, not GitHub Pages; GitHub remains the source repository.

Pricing has a dedicated /pricing page linked from the header, drawer, and footer. The user authorised sample rates to update later: CAD 149, 399, and 799 per month for the three organisation sizes. Keep these explicitly provisional and subject to change, with inclusions unconfirmed and enquiry-only actions (no checkout).

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
