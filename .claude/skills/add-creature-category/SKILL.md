---
name: add-creature-category
description: Scaffold a new creature category page (like dragons.html) for the bestiary - the HTML page, its CSS theme block, its empty data file, and updated nav links across every existing page. Code and structure only; the category's overview paragraph is written by calling write-creature-content. Use when the student says "add the merpeople page", "scaffold griffins", "start the phoenixes category", or "/add-creature-category <category>".
argument-hint: "<category-name> (e.g. merpeople, griffins, phoenixes)"
---

# Add creature category

Builds the structural half of a new category page, mirroring
`dragons.html` exactly, so every category page behaves identically and any
future skill or agent can rely on that consistency. Subtypes are not added
here; run `add-creature-subtype` once per subtype afterward.

## Before you start

- Confirm `<category>.html` doesn't already exist. If it does, stop and
  report that instead of overwriting it.
- Read `notes/DESIGN-PLAN.md` for this category's element and palette
  (the earth/treasure, water, sky/wind, or fire section).
- Read `notes/FUNCTIONALITY-PLAN.md` for this category's planned subtype
  list, for reference only; subtypes themselves are added later by
  `add-creature-subtype`.

## What to build

1. **`<category>.html`**, structurally identical to `dragons.html`: the same
   `<head>` (Google Fonts links, `style.css`), the same header/nav markup,
   `<main>` containing a `.category-intro` section and an empty
   `.creature-stage` (`#creature-grid` as an empty `<div>`,
   `#creature-detail` with the same skeleton as `dragons.html`, including
   `id="lore-heading"` and `id="story-heading"` on the two `<h3>`s, since
   the scroll-fade engine in `script.js` depends on those exact ids). Body
   gets `class="theme-<category>"`. Before the closing `</body>`, load
   `data/<category>.js` then `script.js`, in that order.
2. **`.category-intro` content**: call `write-creature-content` with
   `category: <category>`, `scope: category-intro`, and place the returned
   text as the `<h1>` and paragraph.
3. **`data/<category>.js`**: `const CREATURES = {};`, empty, ready for
   `add-creature-subtype` to fill in.
4. **A new theme block in `style.css`**, placed after the existing theme
   blocks, in the same shape as `.theme-dragons`: `--color-accent`,
   `--panel-bg`, a `background` combining a dark gradient scrim over
   `url("assets/backgrounds/<category>.jpg")` (colors drawn from
   `DESIGN-PLAN.md`'s palette for this category), a
   `.theme-<category> .site-header` scrim rule, and a
   `.theme-<category> .creature-portrait, .theme-<category> .detail-portrait`
   border-color rule.
5. **Navigation, everywhere**: in every existing page's `<ul class="site-nav">`
   (including the new page itself), replace that category's
   `<span class="nav-soon">CategoryName</span>` with
   `<a href="<category>.html">CategoryName</a>` (the new page's own nav item
   gets `aria-current="page"` instead). In `index.html`'s `.category-shelf`,
   turn that category's `<div class="category-card is-soon" ...>` into an
   `<a class="category-card" href="<category>.html" ...>`, the same
   transformation Dragons already went through, keeping its existing accent
   color.

## Rules

- Structural and data-wiring work only. Never write the category's overview
  paragraph directly; it always comes from `write-creature-content`.
- Never add any subtype cards or data entries here; that's
  `add-creature-subtype`'s job, run once per subtype afterward.
- Never touch a category that already has a page; report back and stop
  instead of overwriting existing work.

## Reporting back

State the category built, the files touched, the exact filename the
background image should be saved as (`assets/backgrounds/<category>.jpg`),
and that the next step is running `add-creature-subtype` once per subtype.
