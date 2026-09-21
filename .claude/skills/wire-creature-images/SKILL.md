---
name: wire-creature-images
description: Check whether a subtype's three expected portrait images (portrait.png, img_1.png, character.png) exist in its asset folder, and if so, switch that entry from its placeholder color swatch to a real images array in the exact order the scroll-fade engine expects, and write real alt text by looking at the portrait. Use when the student says "wire up the green dragon images", "check for new creature images", "the pictures are ready", or "/wire-creature-images <category> [subtype]".
argument-hint: "<category> [subtype] (omit subtype to check every subtype in that category)"
---

# Wire creature images

Switches a subtype from its placeholder color swatch to real portrait art,
once the three images for it have been generated. Preserves the exact
scroll-fade behavior already built into `script.js`: the portrait shows on
the grid card and at the top of the detail view, `img_1` fades in at the
Lore heading, `character` fades in at the Story heading and holds through
the rest of the story. This is a code/data-wiring skill; it never
generates or edits image files, and it never rewrites the quick/lore/story
text.

## Before you start

- Confirm `data/<category>.js` exists. If a subtype was given, confirm it's
  already a key in `CREATURES` (added by `add-creature-subtype`); if no
  subtype was given, check every key in that category's `CREATURES` object.
- For each subtype being checked, look for exactly these three files at
  `assets/portraits/<category>/<subtype>/`: `portrait.png`, `img_1.png`,
  `character.png` (accept `.jpg` instead if that's what the student actually
  used, but all three need to share the same extension before proceeding).
- If a subtype already has an `images` array, skip it and report that it's
  already wired rather than touching it again.
- If a subtype is missing one or more of the three files, skip it and
  report exactly which filenames are still missing, at the exact path
  they're expected.

## What to build, per subtype that has all three files

1. Look at `<subtype>/portrait.png` directly, the grid card and initial
   detail image, and write a real, specific `portraitAlt` describing what's
   actually in it: the creature, its pose, and the setting, in the same
   plain style as the existing gold and silver alt text.
2. Replace that entry's `portraitColor` line in `data/<category>.js` with:

   ```js
   images: [
     "assets/portraits/<category>/<subtype>/portrait.png",
     "assets/portraits/<category>/<subtype>/img_1.png",
     "assets/portraits/<category>/<subtype>/character.png",
   ],
   ```

   in exactly this order and no other. `script.js`'s scroll-fade engine
   maps image index 0/1/2 to the name/Lore/Story headings by position, not
   by filename, so the order is what makes "the same method of appearing"
   actually happen.
3. Add the `portraitAlt` line from step 1 to that same entry.
4. Leave that subtype's `--portrait-color-<subtype>` custom property in
   `style.css` alone; it's harmless once unused, and removing it isn't
   necessary.

## Rules

- Never place, generate, or rename image files. This skill only checks
  whether the three expected files already exist, and reads them to write
  alt text.
- Never touch a subtype's `quick`, `lore`, or `story` text.
- The `images` array must always be exactly `[portrait, img_1, character]`
  in that order; `script.js` has no other way to know which image belongs
  at which scroll position.

## Reporting back

For each subtype checked, report one of: "wired" (and show the alt text
written), "already wired" (no change made), or "still missing
<filenames>" so the student knows exactly what's left to generate.
