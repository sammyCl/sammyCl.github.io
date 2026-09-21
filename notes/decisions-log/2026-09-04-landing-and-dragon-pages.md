# Decisions log - 2026-09-04, landing and dragon pages

Raw material for `DECISIONS.md`, captured by the `log-decisions` skill from this conversation. Facts only, not composed answers - see `.claude/skills/log-decisions/SKILL.md` for the rules this follows.

## 1. What did you set out to build, and what changed?

Set out to build: the landing page and one dragon page with a single dragon, to establish the visual and interaction design before building skills to generate the rest of the site.

What changed during this conversation:
- Scope grew from one dragon to two (gold, then silver).
- The open CSS-vs-JavaScript question from `IMPLEMENTATION-PLAN.md` was resolved: JavaScript.
- Portraits started as solid-color placeholder boxes (a deliberate first-pass decision), then were fully replaced with real AI-generated art for both dragons, using a three-image scroll-fade sequence (portrait, img_1, character) instead of a single static image.
- The scroll-fade sequence was originally discussed as a 4-image idea (portrait, img_1, img_2, character); img_2 was dropped mid-build, reducing it to three images and two scroll-trigger points.
- Backgrounds were explicitly deferred early on ("waiting for now sounds like a good idea"), then added once `landing_page.png` and `dragon_background.png` were supplied. The CSS treatment changed once already: from one large panel over `<main>` to separate, smaller panels per element, after the first version covered too much of the background image.
- Page-building scope expanded into four reusable skills (`add-creature-category`, `add-creature-subtype`, `write-creature-content`, `wire-creature-images`), not part of the original ask for this conversation but built to support the stated next phase (agents building merpeople, griffins, phoenixes).
- A code refactor (splitting the single `script.js` + inline `dragons` object into a shared `script.js` engine plus a per-category `data/dragons.js`) was done mid-conversation, prompted by the skills needing a page structure that could actually be reused across categories.
- Skills were relocated from `skills/` to `.claude/skills/` mid-conversation, including moving the pre-existing `log-decisions` skill, once it was confirmed the old location wasn't discoverable by Claude Code's Skill tool.

## 2. A fork in the road

Real either/or choices made so far, candidates to write about:
- CSS-only (checkbox/`:target` hack) vs. JavaScript for the click-to-reveal interaction → chose JavaScript.
- Solid-color placeholder vs. a real placeholder image for the first portrait pass → chose solid-color placeholder.
- CSS-coded backgrounds vs. AI-generated background images → the agent initially recommended CSS-only for pipeline-scaling reasons; the student pushed back given portraits were being AI-generated anyway; landed on AI-generated backgrounds with a CSS panel-over-image treatment for text legibility.
- Fable 5 vs. Opus 5 vs. staying on Sonnet 5 for writing creature content → stayed on Sonnet 5 (Fable would have required usage credits on this account, and its in-app description didn't actually confirm creative-writing specialization the way its name implied).
- `.claude/skills/` vs. keeping the existing `skills/` location for the new skills → chose `.claude/skills/`, and moved `log-decisions` there too.

## 3. Where you overruled the agent

Candidate moments from this conversation (facts only - the reasoning behind each is yours to write):
- The agent recommended Fable 5 partly because its name suggested creative-writing specialization. The student ran `/model` and reported back the actual in-app description ("Most capable for your hardest and longest-running tasks · Requires usage credits"), which didn't support that claim. The agent acknowledged the original recommendation wasn't well founded and revised it.
- The agent's first background treatment wrapped all of `<main>` in one large solid panel over the dragon background image. The student said too much of the background was covered and asked for separate panels per element instead; the agent rebuilt it as individual panels (intro block, each creature card, the detail text column) with the background showing through the gaps.
- The agent recommended coding backgrounds in CSS rather than using AI-generated images, citing pipeline-scaling concerns. The student pointed out AI images were already required for the portraits regardless, so the added cost was small; the agent agreed the scaling argument was weaker than presented and changed its recommendation to AI-generated backgrounds with a legibility-focused panel treatment.

## 4. How you know it works

Checks actually run in this conversation:
- `curl` requests confirming HTTP 200 and correct served content (matching `<title>` tags) for new and changed files against the local `python3 -m http.server` throughout the build.
- A 14-point manual browser checklist the student ran by hand (landing page layout, nav states, grid-to-detail interaction, back button, keyboard tabbing, browser console), which caught one real issue (the category intro text not being centered) that was then fixed and not re-verified by the student afterward.
- A Python brace-count check (`{` vs `}`) on `style.css` after a multi-step edit, which caught a real syntax error, a `--panel-bg` declaration left outside any rule block, before the page was ever loaded again.
- A Python paren/brace-count check on `script.js` after the scroll-fade rewrite, since `node` wasn't available for an actual syntax check.
- `curl` re-checks confirming `dragons.html`, `data/dragons.js`, and `script.js` all still served correctly after splitting the data out of the engine file.
- Running `wire-creature-images`'s logic by hand against gold and silver: it correctly reported both as "already wired" and made no changes. This only exercised the skip-path, not the actual wiring or missing-files paths, since no un-wired subtype exists yet.
- Directly invoking the `Skill` tool with `log-decisions` to confirm the real error message ("Unknown skill") rather than assuming why it wasn't working.

## 5. What is still wrong

- `wire-creature-images` has not been tested against a subtype that actually needs wiring, only against two that were already done by hand.
- A stray file, `assets/backgrounds/ChatGPT Image Sep 3, 2026, 11_43_53 PM.png` (appears to be a duplicate of silver's `img_1.png`), is still sitting in the backgrounds folder; flagged to the student, not yet resolved either way.
- The portrait alt-text convention was raised as an open question early on but was only ever settled ad hoc, per image, never written down as a repeatable rule.
- No page or content exists yet for merpeople, griffins, or phoenixes; the four skills meant to generate them have been discussed and lightly tested but not run for real.
- Checklist items 13 (keyboard tabbing) and 14 (browser console) were explained to the student but the results were never reported back.
