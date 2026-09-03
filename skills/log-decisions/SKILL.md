---
name: log-decisions
description: Sweep the current conversation for anything that belongs in DECISIONS.md - a scope change, a real fork taken, a moment Claude Code got overruled, a check that was run, something left rough - and file it as raw material into a new file under notes/decisions-log/, one file per conversation, organized under DECISIONS.md's five prompts. Never writes DECISIONS.md itself. Use when the student says "run the decisions skill", "log that for my decisions file", "capture what just happened", "what should I remember for DECISIONS.md", or periodically during/at the end of a work session.
argument-hint: "[optional: what to focus on]"
---

# Log decisions

Runs mid-project, any time the student asks, to sweep the current conversation and file anything decision-relevant into `notes/decisions-log/`, organized under `DECISIONS.md`'s five actual prompts. The point is to catch things while they are fresh - a fork taken, a moment the agent was overruled, a check that passed or failed - instead of trying to reconstruct all of it the night the project is due.

This skill never writes to `DECISIONS.md` itself. That file is the student's own words, in their own time.

## One file per conversation

`notes/decisions-log/` holds one Markdown file per conversation, not one file appended to forever:

- On this skill's first run in a conversation, create a new file named `notes/decisions-log/YYYY-MM-DD-<short-topic-slug>.md` (today's date, plus a few words for whatever this conversation is mostly about, e.g. `2026-09-05-dragon-page-styling.md`). Seed it with the five headings below, empty.
- If this skill already created a file earlier in this same conversation, keep using that same file for the rest of the conversation - do not create a second one.
- A new conversation always gets its own new file, even on the same day, even about the same topic. Nothing is ever appended across conversations.
- At the end of the project, the full set of files in `notes/decisions-log/` is the raw material for writing `DECISIONS.md` - expect several of them by the time the project wraps up, one per work session.

## Before scanning

Look back over everything in the current conversation (there is no earlier run to resume from, since each conversation gets its own file).

## What to look for, per heading

- **What was set out to build, and what changed.** Any point where the plan's scope shifted - something added, dropped, or redefined mid-build. Record the change and roughly when.
- **A fork in the road.** Any real either/or choice made in the conversation. Flag it as a candidate: note both options and which was picked. Leave the "what I gave up, and why" reasoning for the student to write themselves; do not draft it.
- **Where the agent was overruled.** The one heading where watching the live conversation actually earns its keep: the moment Claude Code proposed, wrote, or claimed something and the student rejected, corrected, or changed it. Record only the facts - what was proposed, what the student did instead, how they noticed. Never write the reflective "why it mattered" framing; that stays the student's.
- **How you know it works.** Any check actually run - a test, `check.py`, a manual verification, a fetch of the live URL - and its result. Record the check and the outcome, not a narrative about what it proves.
- **What is still wrong.** Anything flagged mid-conversation as rough, deferred, or not fully understood - a TODO, a known bug, a "come back to this later."

## Rules

- Within one conversation's file, append, don't rewrite: a second run in the same conversation adds new findings under the existing heading; entries already logged are never edited or removed.
- Raw material only, never a composed answer. If a line reads like it could be pasted straight into `DECISIONS.md`, it went too far - back it off to the underlying fact.
- Nothing gets invented. If a heading has nothing to add, leave it empty; an empty heading is honest, a padded one is not.
- Never merge, rename, or clean up other files already in `notes/decisions-log/` - each belongs to its own conversation and is left as that conversation wrote it.

## Reporting back

After creating or updating the file, tell the student its filename and, in one or two sentences, what got added and under which headings - not the full file contents, just enough for them to see what was caught this run.
