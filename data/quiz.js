// "Which Creature Are You?" quiz data. Sixteen possible outcomes, one per
// subtype across all four categories. Each question offers four options,
// each tied to one subtype; every subtype appears as an option in exactly
// two of the eight questions, so no single answer can dominate. Choosing an
// option scores its own subtype +2 and its QUIZ_PARTNERS match +1 (two
// subtypes elsewhere in the bestiary that share the same underlying trait),
// so a consistent set of answers produces a clear winner instead of a
// 16-way tie. QUIZ_RESULT_ORDER breaks any remaining tie by picking whichever
// tied subtype comes first in that fixed list.

const QUIZ_QUESTIONS = [
  {
    prompt:
      "A stranger asks to cross land you consider yours. What do you actually want from them before you say yes?",
    options: [
      {
        category: "dragons",
        id: "gold",
        text: "An accounting. If I let this go, I want it remembered and repaid later, on my terms.",
      },
      {
        category: "griffins",
        id: "mountain",
        text: "Nothing, as long as they stay on the path and don't come near where I actually live.",
      },
      {
        category: "phoenixes",
        id: "sun",
        text: "To be asked properly, in the open, where everyone can see the arrangement was mine to grant.",
      },
      {
        category: "merpeople",
        id: "abyssal",
        text: "To never find out. I'd rather they didn't know I was here at all.",
      },
    ],
  },
  {
    prompt:
      "Something goes badly wrong nearby, a bridge collapses, a storm bears down. What's your instinct?",
    options: [
      {
        category: "dragons",
        id: "silver",
        text: "I stay exactly where I already committed to being useful, whether or not anyone asked me to.",
      },
      {
        category: "griffins",
        id: "storm",
        text: "I go toward it. The middle of the trouble is where I actually know what's happening.",
      },
      {
        category: "phoenixes",
        id: "ash",
        text: "I wait until the worst has passed, then go through what's left and figure out what's still salvageable.",
      },
      {
        category: "merpeople",
        id: "siren",
        text: "I find whoever's in charge and get them to believe the plan I already have in mind.",
      },
    ],
  },
  {
    prompt: "How would you describe your relationship to the place you're from?",
    options: [
      {
        category: "dragons",
        id: "green",
        text: "I could draw you its exact boundary from memory, tree by tree, and notice the day anything shifts.",
      },
      {
        category: "griffins",
        id: "sand",
        text: "I don't really have one place. I move with whatever's actually working that season.",
      },
      {
        category: "phoenixes",
        id: "ember",
        text: "I'm still deciding. I try on different versions of settling down before I commit to one.",
      },
      {
        category: "merpeople",
        id: "river",
        text: "One stretch, one bend, held for generations. I'd rather defend it forever than trade it for something bigger.",
      },
    ],
  },
  {
    prompt: "You want something someone else has. What actually happens next?",
    options: [
      {
        category: "dragons",
        id: "red",
        text: "I take it. Explaining myself afterward has never once changed the outcome.",
      },
      {
        category: "griffins",
        id: "cloud",
        text: "Probably nothing. Wanting things at ground level has never interested me much.",
      },
      {
        category: "phoenixes",
        id: "eclipse",
        text: "I wait, and reveal what I'm capable of only at the one moment it actually settles the matter.",
      },
      {
        category: "merpeople",
        id: "reef",
        text: "I trade for it. Everyone involved should end up with something they didn't have before.",
      },
    ],
  },
  {
    prompt: "Which of these is closest to what people actually say about you, behind your back?",
    options: [
      {
        category: "dragons",
        id: "gold",
        text: "That I never forget who owes me what, and that it's a mistake to assume I will.",
      },
      {
        category: "griffins",
        id: "storm",
        text: "That I show up right when things get dangerous, like I was waiting for it.",
      },
      {
        category: "phoenixes",
        id: "ember",
        text: "That I haven't figured out who I am yet, but I'm clearly working on it.",
      },
      {
        category: "merpeople",
        id: "river",
        text: "That I've never once left, and everyone's stopped expecting me to.",
      },
    ],
  },
  {
    prompt: "On an ordinary day with nothing forcing your hand, what are you actually doing?",
    options: [
      {
        category: "dragons",
        id: "silver",
        text: "The same post I've held for years, checked the same way, whether or not today needed it.",
      },
      {
        category: "griffins",
        id: "sand",
        text: "Somewhere new, because staying in one place for long starts to feel like wasted range.",
      },
      {
        category: "phoenixes",
        id: "eclipse",
        text: "Mostly invisible, keeping whatever I actually have banked and out of sight until it matters.",
      },
      {
        category: "merpeople",
        id: "reef",
        text: "Building something, trading something, making the place I'm in visibly better off.",
      },
    ],
  },
  {
    prompt: "How do you feel about being watched while you work?",
    options: [
      {
        category: "dragons",
        id: "green",
        text: "Fine, as long as they respect the line once I've shown them where it is.",
      },
      {
        category: "griffins",
        id: "cloud",
        text: "I'd rather not be. I do better work at a distance from anyone who'd comment on it.",
      },
      {
        category: "phoenixes",
        id: "sun",
        text: "Good, honestly. Being watched is most of the point; it's how the arrangement holds.",
      },
      {
        category: "merpeople",
        id: "abyssal",
        text: "Uncomfortable. If you can see me doing it, something's already gone wrong.",
      },
    ],
  },
  {
    prompt: "Two people you know are in a dispute you didn't ask to be part of. What do you do?",
    options: [
      {
        category: "dragons",
        id: "red",
        text: "Pick a side fast and act on it. Slow decisions cost more than wrong ones.",
      },
      {
        category: "griffins",
        id: "mountain",
        text: "Nothing, unless it crosses onto ground I actually care about defending.",
      },
      {
        category: "phoenixes",
        id: "ash",
        text: "Let it burn itself out, then help whoever's left figure out what's worth rebuilding.",
      },
      {
        category: "merpeople",
        id: "siren",
        text: "Talk to both of them, separately, until they land wherever I already thought they should.",
      },
    ],
  },
];

// Mutual pairs: two subtypes elsewhere in the bestiary that share a trait,
// so picking one gives a little credit to its thematic counterpart too.
const QUIZ_PARTNERS = {
  "dragons:gold": "merpeople:siren",
  "merpeople:siren": "dragons:gold",
  "griffins:mountain": "merpeople:river",
  "merpeople:river": "griffins:mountain",
  "phoenixes:sun": "merpeople:reef",
  "merpeople:reef": "phoenixes:sun",
  "merpeople:abyssal": "griffins:cloud",
  "griffins:cloud": "merpeople:abyssal",
  "dragons:silver": "phoenixes:ash",
  "phoenixes:ash": "dragons:silver",
  "griffins:storm": "dragons:red",
  "dragons:red": "griffins:storm",
  "dragons:green": "phoenixes:eclipse",
  "phoenixes:eclipse": "dragons:green",
  "griffins:sand": "phoenixes:ember",
  "phoenixes:ember": "griffins:sand",
};

// Fixed order used only to break a tied score deterministically.
const QUIZ_RESULT_ORDER = [
  "dragons:gold",
  "dragons:silver",
  "dragons:green",
  "dragons:red",
  "merpeople:reef",
  "merpeople:abyssal",
  "merpeople:siren",
  "merpeople:river",
  "griffins:mountain",
  "griffins:storm",
  "griffins:sand",
  "griffins:cloud",
  "phoenixes:sun",
  "phoenixes:ash",
  "phoenixes:ember",
  "phoenixes:eclipse",
];

const QUIZ_CATEGORY_PAGES = {
  dragons: "dragons.html",
  merpeople: "merpeople.html",
  griffins: "griffins.html",
  phoenixes: "phoenixes.html",
};

// Mirrors each subtype's --portrait-color-* value from style.css, for the
// quiz result's swatch (the quiz page has no theme of its own to inherit
// those variables from).
const QUIZ_SWATCH_COLORS = {
  "dragons:gold": "#c9a227",
  "dragons:silver": "#9aa8ad",
  "dragons:green": "#4a6741",
  "dragons:red": "#a13d2b",
  "merpeople:reef": "#2f9e8f",
  "merpeople:abyssal": "#16323f",
  "merpeople:siren": "#6fa8bd",
  "merpeople:river": "#4f8f5c",
  "griffins:mountain": "#8f8577",
  "griffins:storm": "#566073",
  "griffins:sand": "#c2a878",
  "griffins:cloud": "#cbd6e0",
  "phoenixes:sun": "#e8a13c",
  "phoenixes:ash": "#6b5850",
  "phoenixes:ember": "#e2482a",
  "phoenixes:eclipse": "#4a1220",
};

const QUIZ_RESULTS = {
  dragons: {
    gold: {
      name: "Gold Dragon",
      blurb:
        "You keep track of what's owed long after everyone else has stopped counting, and you're rarely the one who ends up on the losing side of an old favor.",
    },
    silver: {
      name: "Silver Dragon",
      blurb:
        "You chose your post a long time ago, and you're still standing it, whether or not anyone remembers asking you to.",
    },
    green: {
      name: "Green Dragon",
      blurb:
        "You know your own boundaries down to the tree and the stone, and you'd rather walk someone along the line than fight them over it.",
    },
    red: {
      name: "Red Dragon",
      blurb:
        "You take what you came for the moment you see it, and you've never lost much sleep over explaining yourself after.",
    },
  },
  merpeople: {
    reef: {
      name: "Reef Merperson",
      blurb:
        "You build, you trade, and you'd rather leave a place visibly better off than simply pass through it.",
    },
    abyssal: {
      name: "Abyssal Merperson",
      blurb:
        "You keep to depths of your own, and the fact that you're rarely seen is exactly how you prefer it.",
    },
    siren: {
      name: "Siren-kin",
      blurb:
        "You get what you want through a voice people trust more than they probably should, and your reputation does most of the work before you even show up.",
    },
    river: {
      name: "River Merperson",
      blurb:
        "You've claimed one stretch and held it for longer than most kingdoms hold anything, and you're not trading it for somewhere bigger.",
    },
  },
  griffins: {
    mountain: {
      name: "Mountain Griffin",
      blurb:
        "You picked one peak and you're not leaving it, and anyone who respects the treeline will never have a problem with you.",
    },
    storm: {
      name: "Storm Griffin",
      blurb:
        "You fly toward the trouble everyone else is fleeing, because that's where you actually know what's going on.",
    },
    sand: {
      name: "Sand Griffin",
      blurb:
        "You don't keep one home; you keep a circuit, and you cover more ground in an afternoon than most manage in a week.",
    },
    cloud: {
      name: "Cloud Griffin",
      blurb:
        "You live above where most of the weather even forms, and coming down to where everyone else is has never much appealed to you.",
    },
  },
  phoenixes: {
    sun: {
      name: "Sun Phoenix",
      blurb:
        "You burn in the open and you expect to be watched while you do it, because being seen is part of how the arrangement works.",
    },
    ash: {
      name: "Ash Phoenix",
      blurb:
        "You show up after everyone else has moved on, and you do the unglamorous work of figuring out what's still worth keeping.",
    },
    ember: {
      name: "Ember",
      blurb:
        "You haven't settled into a fixed shape yet, and you're trying on different ways of being before you commit to one, which is exactly how it's supposed to go.",
    },
    eclipse: {
      name: "Eclipse Phoenix",
      blurb:
        "You keep your flame banked low and reveal it exactly once, exactly when it counts, and never a moment before.",
    },
  },
};
