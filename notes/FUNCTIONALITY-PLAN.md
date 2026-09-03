# Project plan: what the site does

Working notes on the site's behavior and structure. This is a draft to revise as we go, not a locked spec. Design choices (vibe, color, imagery style) live separately in `DESIGN-PLAN.md`.

## Concept

A personal site organized as a bestiary. A landing page links out to a handful of creature-category pages (dragons, merpeople, griffins, phoenixes). Each category page shows a grid of that creature's subtypes as labeled portraits. Clicking a portrait slides its image to the left side of the page and opens an info panel on the right, which reads in this order:

1. A quick description of the subtype.
2. The lore around it.
3. A short story about one named individual of that subtype (e.g. an aggressive, tyrannical silver dragon; a young green dragon establishing her first hoard).

## Site map

- `index.html` - landing page, links to the four category pages.
- `dragons.html`
- `merpeople.html`
- `griffins.html`
- `phoenixes.html`
- `style.css` - shared styling.
- `script.js` - shared interaction logic (the click-to-reveal behavior).

## Per-category page structure

- An overall description of the creature category at the top of the page (what dragons are, as a whole, before getting into any specific subtype) - a few sentences to a short paragraph, above the grid.
- A grid of portraits, each with its subtype's name labeled above the image.
- Clicking a portrait: that image moves to the left side of the page (layout shifts from a grid to a two-column view), and the right column fills in with the description, lore, and story for that subtype.
- Some way back to the full grid (a "back to all dragons" control, or clicking the image again).

## Subtypes per category

- **Dragons:** silver, green, red, gold
- **Merpeople:** shallow-water/reef, deep-sea/abyssal, siren-kin, freshwater/river
- **Griffins:** mountain, storm, desert/sand, cloud/high-altitude
- **Phoenixes:** sun, ash, ember (young), eclipse

## Content needed per category

- Overall description of the creature type as a whole, for the top of the page (a few sentences to a short paragraph)

## Content needed per creature (subtype)

- Name
- Portrait image
- Quick description (1-2 sentences)
- Lore (a paragraph or two)
- Short story featuring one named individual of that subtype (a few paragraphs)

## Decided

- **Shared nav:** yes. Every page (landing + all 4 category pages) carries the same header/nav bar (Home, Dragons, Merpeople, Griffins, Phoenixes) so visitors can jump between sections from anywhere.
- **Subtype count:** varies by category. Dragons has 4 (silver, green, red, gold); the others don't need to match that number, whatever fits each creature naturally.
- **Responsive behavior:** desktop-focused. The site is built and tested for a normal laptop/desktop browser window; mobile is not a target for this project.

Code-level decisions (how the interaction is actually built) live in `IMPLEMENTATION-PLAN.md`, not here.

## Build order

1. Site skeleton: `index.html` with nav, and one category page (`dragons.html`) as the template for the others.
2. Prove out the interaction end to end on a single creature: click a portrait, image slides left, text panel appears on the right with real content for just that one subtype.
3. Extend that pattern to the full grid on the dragons page (all four subtypes clickable).
4. Repeat the page pattern for merpeople, griffins, and phoenixes once the dragons page is solid.
5. Write the real content (description, lore, story) for every creature.
6. Replace placeholder images with real ones, once the image-sourcing question in `DESIGN-PLAN.md` is settled.
7. Polish: styling pass, responsive layout, alt text, a working "back to grid" control on every page.
8. P1 verification: screenshot of the live site with the URL bar visible, a fetch result for the live URL, and the three-line note in `verification/`.
9. Fill in `DECISIONS.md` as the choices above actually get made, not after the fact.
