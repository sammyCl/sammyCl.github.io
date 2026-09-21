# Decisions log - 2026-09-08, creature quiz and MBTI types

Raw material for `DECISIONS.md`, captured by the `log-decisions` skill from this conversation. Facts only, not composed answers - see `.claude/skills/log-decisions/SKILL.md` for the rules this follows.

## 1. What did you set out to build, and what changed?

Set out to build: a quiz page that asks multiple-choice questions and assigns the reader a creature subtype based on their answers.

What changed during this conversation:
- Scope expanded to showing the actual portrait image for the assigned subtype on the quiz result, not just a color swatch.
- Scope expanded to a landing-page CSS fix: the category/quiz tiles wrapped to a new line but weren't centered as a group on that line.
- Scope expanded to adding a Credits section to `README.md` crediting ChatGPT for images and Gemini's Lyria for music.
- Scope expanded to wiring real portrait art (previously only placeholder colors) for all four phoenix subtypes (sun, ash, ember, eclipse) once the student generated the images.
- Scope expanded to adding a Myers-Briggs personality type to all 16 creature subtypes across all four categories.
- A separate `QUIZ-ANSWER-KEY.md` reference doc was created mid-conversation so the student could manually verify the quiz's scoring logic.

## 2. A fork in the road

Real either/or choices made so far, candidates to write about:
- Quiz scoring model: flat per-subtype scoring only, vs. each answer also giving a partial-credit bonus to a thematically paired "partner" subtype → chose the partner-bonus model (own subtype +2, partner +1) to reduce how often 16 possible outcomes would tie.
- How the quiz result's "read the full entry" link would reach real creature data: duplicating each category's creature data into the quiz's own data file, vs. adding `?open=<id>` query-param support to the existing shared `script.js` grid/detail engine → chose the query-param approach, since the four category pages each declare their own global `CREATURES` constant and can't be loaded together on one page.
- Quiz result portrait shape: keeping the circular color-swatch treatment, vs. switching to a rectangular 3:4 portrait matching the site's existing `.creature-portrait` styling → switched to rectangular to match the rest of the site.
- README credits detail level: one general statement, vs. a per-category breakdown, vs. a full per-asset table → student chose the general one-line statement (asked directly via a multiple-choice question).
- MBTI mapping: a loose or repeated mapping of types to subtypes, vs. a strict one-to-one bijection using all 16 Myers-Briggs types exactly once across the 16 subtypes → chose the strict bijection, since the counts happened to match exactly.

## 3. Where you overruled the agent

Nothing found in this conversation. No moment surfaced where the agent proposed or claimed something and the student rejected or corrected it; the requests in this conversation were mostly new feature asks the agent then designed and implemented.

## 4. How you know it works

Checks actually run in this conversation:
- `python3 -m http.server` run repeatedly to serve the site locally, with `curl -o /dev/null -w "%{http_code}"` checks against `quiz.html`, `data/quiz.js`, `dragons.html?open=gold`, `phoenixes.html`, `data/phoenixes.js`, `style.css`, and `index.html` after each change.
- Python brace/paren-balance checks on `data/quiz.js`, `script.js`, `style.css`, and all four `data/<category>.js` files after edits, since `node` was not available for an actual syntax check.
- A Python regex script that parsed `data/quiz.js` directly to confirm: each of the 16 subtypes appears as an option in exactly 2 of the 8 questions (32 total option slots), `QUIZ_PARTNERS` is a complete mutual mapping covering all 16 keys, and `QUIZ_RESULT_ORDER` and `QUIZ_SWATCH_COLORS` each cover all 16 keys with no gaps.
- `curl` HTTP status checks against all 16 `assets/portraits/<category>/<id>/portrait.png` paths to check which subtypes actually had art on disk before wiring, rather than trusting each data file's current `images`/`portraitColor` state; this found `phoenixes:sun` already had a file on disk despite its data entry still using the `portraitColor` fallback.
- After wiring phoenix images: re-ran the brace-balance check on `data/phoenixes.js` and grepped it for remaining `portraitColor` occurrences, confirming only the schema-explaining file comment still mentioned it.
- After adding MBTI types: grepped each of the four `data/<category>.js` files for `mbti:` and confirmed exactly 4 matches per file (16 total), and re-curled a deep-linked detail page (`dragons.html?open=gold`) to confirm it still served correctly.
- No visual/browser-based check was performed by the agent itself for any of this conversation's changes; a local server was opened via `osascript` to launch a browser tab once, but the agent did not report back on rendered output, and said so explicitly when reporting the quiz feature as built.

## 5. What is still wrong

- The quiz's result screen does not show the assigned subtype's MBTI type, only the four category detail pages do; explicitly left as a follow-up pending the student's decision.
- No part of this conversation's work (the quiz flow, the portrait image/fallback behavior, or the landing-page tile-centering fix) was checked in an actual rendered browser by the agent; only HTTP and structural checks were run.
- `--portrait-color-sun`, `--portrait-color-ember`, and `--portrait-color-eclipse` custom properties are still declared in `style.css` but are now unused now that those phoenix subtypes have real portrait images.
- The `add-creature-subtype` and `write-creature-content` skills were not updated to include the new `mbti` field; the agent's stated reasoning was that the 16-type/16-subtype mapping is a closed set with no room for a 17th entry, so this was a deliberate non-update rather than a caught-later gap, but it means a hypothetical future subtype would have no defined process for getting an MBTI type.
