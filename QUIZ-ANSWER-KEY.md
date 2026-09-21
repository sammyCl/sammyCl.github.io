# Quiz answer key

Reference for checking `data/quiz.js` by hand: which answer scores which
subtype, and how the final result gets picked. Not shown to site visitors.

## How scoring works

- Each question has 4 options, each tied to one of the 16 subtypes.
- Picking an option adds **+2** to that subtype's score, and **+1** to its
  partner subtype (see the partner table below).
- Every subtype appears as an option in exactly 2 of the 8 questions, so its
  highest possible score is 4 direct (if you pick it both times) plus up to
  2 more from partner bonus (if you also pick its partner both times it
  appears) - 6 max.
- After question 8, the subtype with the highest total wins. If two or more
  subtypes are tied, whichever one comes first in `QUIZ_RESULT_ORDER` (listed
  at the bottom) wins the tie.

## Questions, in order

### Q1: "A stranger asks to cross land you consider yours. What do you actually want from them before you say yes?"

| Answer | Scores |
|---|---|
| "An accounting. If I let this go, I want it remembered and repaid later, on my terms." | Gold Dragon +2 |
| "Nothing, as long as they stay on the path and don't come near where I actually live." | Mountain Griffin +2 |
| "To be asked properly, in the open, where everyone can see the arrangement was mine to grant." | Sun Phoenix +2 |
| "To never find out. I'd rather they didn't know I was here at all." | Abyssal Merperson +2 |

### Q2: "Something goes badly wrong nearby, a bridge collapses, a storm bears down. What's your instinct?"

| Answer | Scores |
|---|---|
| "I stay exactly where I already committed to being useful, whether or not anyone asked me to." | Silver Dragon +2 |
| "I go toward it. The middle of the trouble is where I actually know what's happening." | Storm Griffin +2 |
| "I wait until the worst has passed, then go through what's left and figure out what's still salvageable." | Ash Phoenix +2 |
| "I find whoever's in charge and get them to believe the plan I already have in mind." | Siren-kin +2 |

### Q3: "How would you describe your relationship to the place you're from?"

| Answer | Scores |
|---|---|
| "I could draw you its exact boundary from memory, tree by tree, and notice the day anything shifts." | Green Dragon +2 |
| "I don't really have one place. I move with whatever's actually working that season." | Sand Griffin +2 |
| "I'm still deciding. I try on different versions of settling down before I commit to one." | Ember +2 |
| "One stretch, one bend, held for generations. I'd rather defend it forever than trade it for something bigger." | River Merperson +2 |

### Q4: "You want something someone else has. What actually happens next?"

| Answer | Scores |
|---|---|
| "I take it. Explaining myself afterward has never once changed the outcome." | Red Dragon +2 |
| "Probably nothing. Wanting things at ground level has never interested me much." | Cloud Griffin +2 |
| "I wait, and reveal what I'm capable of only at the one moment it actually settles the matter." | Eclipse Phoenix +2 |
| "I trade for it. Everyone involved should end up with something they didn't have before." | Reef Merperson +2 |

### Q5: "Which of these is closest to what people actually say about you, behind your back?"

| Answer | Scores |
|---|---|
| "That I never forget who owes me what, and that it's a mistake to assume I will." | Gold Dragon +2 |
| "That I show up right when things get dangerous, like I was waiting for it." | Storm Griffin +2 |
| "That I haven't figured out who I am yet, but I'm clearly working on it." | Ember +2 |
| "That I've never once left, and everyone's stopped expecting me to." | River Merperson +2 |

### Q6: "On an ordinary day with nothing forcing your hand, what are you actually doing?"

| Answer | Scores |
|---|---|
| "The same post I've held for years, checked the same way, whether or not today needed it." | Silver Dragon +2 |
| "Somewhere new, because staying in one place for long starts to feel like wasted range." | Sand Griffin +2 |
| "Mostly invisible, keeping whatever I actually have banked and out of sight until it matters." | Eclipse Phoenix +2 |
| "Building something, trading something, making the place I'm in visibly better off." | Reef Merperson +2 |

### Q7: "How do you feel about being watched while you work?"

| Answer | Scores |
|---|---|
| "Fine, as long as they respect the line once I've shown them where it is." | Green Dragon +2 |
| "I'd rather not be. I do better work at a distance from anyone who'd comment on it." | Cloud Griffin +2 |
| "Good, honestly. Being watched is most of the point; it's how the arrangement holds." | Sun Phoenix +2 |
| "Uncomfortable. If you can see me doing it, something's already gone wrong." | Abyssal Merperson +2 |

### Q8: "Two people you know are in a dispute you didn't ask to be part of. What do you do?"

| Answer | Scores |
|---|---|
| "Pick a side fast and act on it. Slow decisions cost more than wrong ones." | Red Dragon +2 |
| "Nothing, unless it crosses onto ground I actually care about defending." | Mountain Griffin +2 |
| "Let it burn itself out, then help whoever's left figure out what's worth rebuilding." | Ash Phoenix +2 |
| "Talk to both of them, separately, until they land wherever I already thought they should." | Siren-kin +2 |

## Partner bonus pairs (+1 each way)

Picking either subtype in a pair also gives +1 to the other.

| Subtype | Partner |
|---|---|
| Gold Dragon | Siren-kin |
| Mountain Griffin | River Merperson |
| Sun Phoenix | Reef Merperson |
| Abyssal Merperson | Cloud Griffin |
| Silver Dragon | Ash Phoenix |
| Storm Griffin | Red Dragon |
| Green Dragon | Eclipse Phoenix |
| Sand Griffin | Ember |

## Guaranteed-result recipes

Answering both of a subtype's own questions with its own option scores that
subtype 4 (its maximum from direct picks alone), which wins outright unless
another subtype also reaches 4 by the same method - in which case the tie
goes to whichever comes first below.

| Result | Pick this answer on... |
|---|---|
| Gold Dragon | Q1 "An accounting..." + Q5 "That I never forget..." |
| Silver Dragon | Q2 "I stay exactly where..." + Q6 "The same post..." |
| Green Dragon | Q3 "I could draw you..." + Q7 "Fine, as long as..." |
| Red Dragon | Q4 "I take it..." + Q8 "Pick a side fast..." |
| Reef Merperson | Q4 "I trade for it..." + Q6 "Building something..." |
| Abyssal Merperson | Q1 "To never find out..." + Q7 "Uncomfortable..." |
| Siren-kin | Q2 "I find whoever's in charge..." + Q8 "Talk to both of them..." |
| River Merperson | Q3 "One stretch, one bend..." + Q5 "That I've never once left..." |
| Mountain Griffin | Q1 "Nothing, as long as..." + Q8 "Nothing, unless it crosses..." |
| Storm Griffin | Q2 "I go toward it..." + Q5 "That I show up right when..." |
| Sand Griffin | Q3 "I don't really have one place..." + Q6 "Somewhere new..." |
| Cloud Griffin | Q4 "Probably nothing..." + Q7 "I'd rather not be..." |
| Sun Phoenix | Q1 "To be asked properly..." + Q7 "Good, honestly..." |
| Ash Phoenix | Q2 "I wait until the worst has passed..." + Q8 "Let it burn itself out..." |
| Ember | Q3 "I'm still deciding..." + Q5 "That I haven't figured out..." |
| Eclipse Phoenix | Q4 "I wait, and reveal..." + Q6 "Mostly invisible..." |

## Tie-break order (`QUIZ_RESULT_ORDER`)

If scores are tied, the first subtype in this list wins:

1. Gold Dragon
2. Silver Dragon
3. Green Dragon
4. Red Dragon
5. Reef Merperson
6. Abyssal Merperson
7. Siren-kin
8. River Merperson
9. Mountain Griffin
10. Storm Griffin
11. Sand Griffin
12. Cloud Griffin
13. Sun Phoenix
14. Ash Phoenix
15. Ember
16. Eclipse Phoenix
