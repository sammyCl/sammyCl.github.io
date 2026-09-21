# Expected audio files

The code in `script.js` looks for these exact filenames. Drop trimmed,
loopable exports here with these names and everything works with no
further code changes.

| File | Used on |
|---|---|
| `landing_page.mp3` | index.html |
| `dragon_background.mp3` | dragons.html |
| `griffin_background.mp3` | griffins.html |
| `merfolk_background.mp3` | merpeople.html |
| `phoenix_background.mp3` | phoenixes.html |
| `click.mp3` | every page, on button/link clicks |

Background tracks should be short, seamless loops (15-30s of steady
middle section, no build-up or fade at the edges) since they play on
`loop`. The click sound should be under half a second.
