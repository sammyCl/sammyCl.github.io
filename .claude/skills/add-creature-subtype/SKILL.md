---
name: add-creature-subtype
description: Add one subtype to an existing creature category page (like adding "gold" to dragons.html) - its grid card, its asset folder, and its entry in that category's data file, with the actual description/lore/story written by calling write-creature-content. Use when the student says "add the gold dragon", "add a green dragon subtype", "add the reef merfolk", or "/add-creature-subtype <category> <subtype>".
argument-hint: "<category> <subtype> (e.g. dragons green)"
---

# Add creature subtype

Adds one subtype to a category page already scaffolded by
`add-creature-category`. Mirrors exactly how gold and silver were added to
`dragons.html`: a grid card, a data entry, and an asset folder waiting for
three images. Code and data-wiring only; the actual words come from
`write-creature-content`.

## Before you start

- Confirm `<category>.html` and `data/<category>.js` exist. If not, stop and
  tell the student to run `add-creature-category` first.
- Confirm this subtype isn't already a key in that category's `CREATURES`
  object. If it is, stop and say so rather than overwriting it.

## What to build

1. Create `assets/portraits/<category>/<subtype>/`, an empty folder, ready
   to receive `portrait.png`, `img_1.png`, and `character.png`, the same
   three-image convention already used by `dragons/gold/` and
   `dragons/silver/`.
2. Call `write-creature-content` with `category: <category>`,
   `subtype: <subtype>`, `scope: subtype`. It returns a display label, a
   quick description, a lore paragraph, a story (an array of short
   paragraphs), and a `protagonistGender`.
3. Pick a placeholder swatch color for this subtype: a variation on the
   category's `--color-accent` that reads as belonging to the theme but is
   visually distinct from sibling subtypes already in the grid. Add it to
   that category's theme block in `style.css` as a new custom property,
   `--portrait-color-<subtype>`.
4. Add a new entry to `CREATURES` in `data/<category>.js`, in exactly this
   shape (matching the existing gold and silver entries in
   `data/dragons.js`):

   ```js
   <subtype>: {
     label: "<Label>",
     name: "<Label> <Category singular>",
     portraitColor: "var(--portrait-color-<subtype>)",
     quick: "<from write-creature-content>",
     lore: "<from write-creature-content>",
     story: ["<paragraph 1>", "<paragraph 2>", "<paragraph 3>"],
     protagonistGender: "<male|female|nonbinary, from write-creature-content>",
   },
   ```

   No `images` key yet, there's no art. The entry runs on the
   `portraitColor` fallback until the three images exist, the same way
   every subtype starts out.

5. Leave `script.js` untouched. It already reads any entry in `CREATURES`
   generically; nothing about the shared engine changes when a subtype is
   added.

## Rules

- Never generate or place image files. Sourcing the three portraits is the
  student's own step, using whatever tool produced the existing dragon art.
- Never write the quick/lore/story text directly; it always comes from
  `write-creature-content`, never invented inline in this skill.
- Keep the new entry's shape identical to existing sibling entries so
  `script.js` keeps working without any changes.

## Reporting back

Name the subtype added and where, state the exact three asset filenames
still needed and the folder they belong in, and remind the student the
entry is running on a placeholder color swatch until those images exist and
get wired in (the same follow-up step gold and silver went through).
