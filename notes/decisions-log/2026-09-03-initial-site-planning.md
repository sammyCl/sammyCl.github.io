# Decisions log - 2026-09-03, initial site planning

Raw material for `DECISIONS.md`, captured by the `log-decisions` skill from this conversation. Facts only, not composed answers - see `skills/log-decisions/SKILL.md` for the rules this follows.

## 1. What did you set out to build, and what changed?

Set out to build: a personal site organized as a bestiary - a landing page plus one page per creature category (dragons, merpeople, griffins, phoenixes), portraits per subtype, and a click-to-slide-left interaction that opens a right-hand panel with a description, lore, and a short story.

What changed during this conversation:
- Added: each category page opens with an overall description of the creature type as a whole, before the portrait grid - not in the original idea.
- Vibe direction settled partway through: started as a single open question (dark fantasy bestiary vs. bright storybook vs. clean minimal), landed on a mixed approach - dark bestiary landing page, each category page fully re-themed by its element, with dark-base motifs carried through everywhere.
- Planning documentation structure changed twice: one combined `PROJECT-PLAN.md` was split into `FUNCTIONALITY-PLAN.md` and `DESIGN-PLAN.md`; a third file, `IMPLEMENTATION-PLAN.md`, was added afterward specifically to hold code-level questions apart from the other two.

## 2. A fork in the road

Real either/or choices made so far, candidates to write about:
- Desktop-only layout vs. a responsive/mobile-adapted layout → chose desktop-only.
- AI-generated images vs. public-domain/CC-licensed art vs. drawing original artwork → chose AI-generated, credited.
- Every category page keeping one dark palette with accents only vs. each page fully re-theming around its element → chose full re-theme, dark-bestiary motifs carried through.
- Forcing 4 subtypes on every category vs. letting the count vary naturally → chose to let it vary (landed at 4 everywhere anyway, but wasn't forced).

## 3. Where you overruled the agent

Candidate moments from this conversation (facts only - the reasoning behind each is yours to write):
- The agent bundled a code-level question (CSS vs. JavaScript for the click interaction) into a batch of functionality/design questions and asked it directly. You stopped this, said code-related decisions weren't in scope yet and should live in a separate file. The agent then created `IMPLEMENTATION-PLAN.md` and moved that question there.
- The agent's first version of the decisions-record file mostly restated content already in `FUNCTIONALITY-PLAN.md` and `DESIGN-PLAN.md`. You said it was repetitive and redirected its purpose: raw material organized under `DECISIONS.md`'s five prompts, not a summary of the other files.
- The agent's first draft of the reusable skill documented the planning-file workflow itself (splitting plans, batching questions). You redirected the whole concept: the skill should instead run mid-conversation, scanning the conversation to capture material for `DECISIONS.md`.
- The agent's second draft of that skill used one continuously-appended file with a "Last captured" marker. You redirected again: one new file per conversation under `notes/decisions-log/`, not a single running file.

## 4. How you know it works

Nothing built or checked yet - this conversation was planning only, no code written.

## 5. What is still wrong

- Alt text conventions for the portrait images are noted as still open in `DESIGN-PLAN.md`, not yet decided.
