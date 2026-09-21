---
name: write-creature-content
description: Write the actual prose for the bestiary - a category's overview paragraph, or one subtype's quick description, lore, and story - in the site's established voice, and track gender balance across each category's named story protagonists (male, female, and nonbinary all represented over the course of a category). Called by add-creature-category and add-creature-subtype; not normally run on its own. Use when the student says "write the merpeople intro", "write the story for the green dragon", or another skill needs creature prose.
argument-hint: "<category> [subtype] scope:category-intro|subtype"
---

# Write creature content

Writes the prose half of a category or a subtype. Never the HTML, CSS, or
data-file wiring; that belongs to `add-creature-category` and
`add-creature-subtype`, which call this skill and place whatever it
returns. This skill only produces text (and, for a subtype, a chosen
`protagonistGender`) for the calling skill to use.

## Before writing

Read one or two existing entries in the target category's `data/<category>.js`
(or `data/dragons.js` if this is the first category being written) so the new
text matches established length and register. If the category page already
has an intro paragraph, or `notes/FUNCTIONALITY-PLAN.md` describes this
subtype in passing (for example "Red dragons take what they want"), build
from that one-line trait instead of inventing a new angle for the subtype.

## Voice, established by the dragons page

- **Quick description** (1-2 sentences): a behavioral truth about the
  subtype, not a physical description. What does this kind of creature *do*,
  or value, that others in its category don't? ("Gold dragons are the
  self-appointed arbiters of dragonkind, keeping ledgers of favors and
  grudges longer than most kingdoms keep history.")
- **Lore** (one paragraph, roughly 120-180 words): the pattern of behavior as
  the wider world experiences it, grounded in specific, almost mundane
  detail, concrete objects and places, not mystical hand-waving. Nothing
  like "ancient and wise" or "fierce and cunning."
- **Story** (three short paragraphs, roughly 60-90 words each, one named
  individual): a real named character with an evocative two-part name
  fitting the subtype (Emberledger, Nightwatch), one specific situation, and
  a resolution that shows character through what they do rather than
  stating it. End on a concrete detail, not a stated moral.
- **Category-intro** (a few sentences to a short paragraph, for
  `add-creature-category`): what the category is as a whole, and how its
  subtypes differ from each other in one line each, the same shape as the
  existing "Silver dragons keep watch. Green dragons claim territory..."
  paragraph on `dragons.html`.

## Gender balance across a category's stories

Every story has exactly one named individual, so this requirement is
tracked across a category's full set of subtypes, not inside a single
story.

1. Before writing a subtype's story, read every sibling entry already in
   that category's data file and tally their `protagonistGender` values.
2. Write this story's protagonist as whichever of `male`, `female`, or
   `nonbinary` is least represented so far; on a tie, prefer whichever
   hasn't appeared at all yet.
3. Let gender show through the name and pronouns naturally, the way Cathaya
   Emberledger ("she") and Ilyria Nightwatch ("she") already do. Never
   announce it explicitly in the prose.
4. Return the chosen value as `protagonistGender` alongside the text, for
   the calling skill to store in that subtype's data entry.

Gold and silver are both already `female`; the next subtypes written for
dragons should weight toward `male` and `nonbinary` to bring the category
into balance.

## Rules

- Text only. Never edit `data/<category>.js`, `style.css`, or any HTML file
  directly; return the content to whichever skill called this one.
- Keep length and register consistent with sibling entries already in the
  category; don't let one subtype's entry run noticeably longer or shorter
  than its neighbors.
- Nothing gets invented wholesale if the category material already implies
  it; ground new content in what `FUNCTIONALITY-PLAN.md` or the page's own
  intro already says about this subtype.

## Reporting back

Return the requested fields, `quick`/`lore`/`story` for a subtype, or the
intro paragraph text for a category, plus `protagonistGender` for subtype
scope, to the calling skill. This skill does not report anything to the
student directly.
