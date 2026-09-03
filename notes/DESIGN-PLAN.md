# Project plan: design choices

Working notes on the site's visual and tonal direction. This is a draft to revise as we go, not a locked spec. What the site does (pages, interaction, content) lives separately in `FUNCTIONALITY-PLAN.md`.

## Vibe / visual direction

- **Landing page (`index.html`):** dark bestiary. Moody, grimoire-like: dark background, muted tones, feels like the cover and table of contents of an old book of monsters. This is the frame the whole site sits inside.
- **Category pages each fully re-theme around their element, but keep motifs from the dark base** (the grimoire feel, typography, layout bones) so a page never feels like it belongs to a different site:
  - **Dragons:** earth/treasure - deep greens, browns, gold accents, a hoard-and-stone feel.
  - **Merpeople:** water - blues and teals, flowing/wave motifs.
  - **Griffins:** sky/wind - airy, cloud and storm colors.
  - **Phoenixes:** fire - warm oranges and reds, ember/glow accents.
- Practically, this likely means: one base stylesheet with the shared dark-bestiary tokens (typography, spacing, borders, texture), and a per-page accent layer (a CSS class on `<body>` or a small per-page stylesheet) that swaps in that page's elemental palette and imagery style.

## Decided

- **Images:** AI-generated portraits, credited as such (worth a line in `DECISIONS.md` and/or a `CREDITS.md` noting the tool used). Keeps a consistent style across every creature and avoids any licensing question, since the repo is public.

## Open questions to settle before or during the build

- **Accessibility:** alt text for every portrait, since the images are the whole interaction, not decoration.
