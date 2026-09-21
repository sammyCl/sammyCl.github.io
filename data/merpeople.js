// Merpeople category data. Each entry either has an `images` sequence (a real
// portrait plus a scroll-fade sequence keyed to the Lore/Story landmarks in
// the detail panel) or a `portraitColor` fallback for creatures that don't
// have art yet. `protagonistGender` records the story's named individual so
// write-creature-content can keep the category's roster balanced.

const CREATURES = {
  reef: {
    label: "Reef",
    name: "Reef Merperson",
    portraitAlt:
      "A reef merperson with teal and coral-orange scales and a flowing crested mane, perched on a rock amid vivid coral and tropical fish with sunlight streaming down.",
    images: [
      "assets/portraits/merpeople/reef/portrait.png",
      "assets/portraits/merpeople/reef/img_1.png",
      "assets/portraits/merpeople/reef/character.png",
    ],
    mbti: "ESFJ (Consul)",
    quick:
      "Reef merfolk are the traders and builders of the merfolk world, laying claim to a garden of coral the way a river merperson claims a bend of water.",
    lore:
      "A reef settlement is easiest to spot by what surrounds it: coral trained and pruned into walls, kelp beds planted in rows, shell middens sorted by size and color for trade. Reef merfolk keep the shallows the way a farmer keeps a field, and a dispute between two settlements is as likely to be about a garden boundary as anything else. They trade constantly, with each other and with the surface when the tide allows it, using worked shell and polished stone as currency that surface merchants have learned to accept at coastal markets. A reef merperson's wealth is visible on sight: the size of the garden, the health of the coral, how many families it can support through a bad season.",
    story: [
      "Denar Shoalkeeper inherited a garden that his mother had let run wild for a decade, its coral overgrown and its boundary markers scattered by a storm. Neighboring settlements had already started harvesting from the edges, treating the neglect as an invitation.",
      "Rather than fight each claim individually, Denar spent a full season doing nothing but replanting, working from the center outward and rebuilding the boundary markers one at a time as the coral came back. He answered every challenge the same way: come back next season and see what's still standing.",
      "By the time the boundary was whole again, three of the settlements that had tested him were trading with him instead, on terms he set. He still keeps the original storm-scattered markers in a pile at the garden's heart, as a reminder of how little a boundary is worth if nobody tends what's inside it.",
    ],
    protagonistGender: "male",
  },
  abyssal: {
    label: "Abyssal",
    name: "Abyssal Merperson",
    portraitAlt:
      "A dark, fanged abyssal merperson with bioluminescent markings, trailing a glowing lure on a long barbel through the pitch-black deep.",
    images: [
      "assets/portraits/merpeople/abyssal/portrait.png",
      "assets/portraits/merpeople/abyssal/img_1.png",
      "assets/portraits/merpeople/abyssal/character.png",
    ],
    mbti: "INTJ (Architect)",
    quick:
      "Abyssal merfolk keep to lightless depths and rarely surface at all, treating a trip to shallow water as other people treat a trip abroad.",
    lore:
      "An abyssal settlement sits far below where sunlight reaches, lit by trained bioluminescent lures and the glow of the creatures they keep like livestock. Abyssal merfolk build in bone and pressure-hardened coral rather than the bright reef materials their shallow-water cousins use, and their homes are built to be found only by those who already know the way. They surface rarely, usually for a single specific reason such as trade in something the depths don't provide, and return as soon as it's settled. Sailors who claim to have seen one are usually believed, since an abyssal merperson choosing to be seen is itself the notable part of the story, not the sighting.",
    story: [
      "Nyra Duskwell surfaced once a decade, always at the same cove, always for the same reason: a trade of deep-water pearl for surface iron, brokered through a coastal family that had kept the arrangement for three generations without ever learning where she came from.",
      "The year the family's youngest inherited the trade, he tried to follow her down when she dove, more curious than his grandmother had ever let herself be. Nyra let him get exactly far enough to feel the light fail and the pressure start to close in before she turned back for him.",
      "She surfaced with him, set the iron on the rocks as always, and left without a word about it. He kept his questions to himself after that, and the trade has run smoothly ever since.",
    ],
    protagonistGender: "female",
  },
  siren: {
    label: "Siren-kin",
    name: "Siren-kin",
    portraitAlt:
      "A dark, jagged siren-kin strung with pearls rearing up on a storm-lashed rock, lightning cracking over churning black water.",
    images: [
      "assets/portraits/merpeople/siren/portrait.png",
      "assets/portraits/merpeople/siren/img_1.png",
      "assets/portraits/merpeople/siren/character.png",
    ],
    mbti: "ENTP (Debater)",
    quick:
      "Siren-kin trade in want itself, using a trained voice as currency, and a careful sailor takes their reputation seriously not because it's mystical but because it works.",
    lore:
      "A siren-kin's voice is treated as a craft, trained for years the way a reef merperson trains a garden, and what it produces is traded like any other good: a promise sung into someone until they believe it was their own idea, a debt sung loose, a crew talked into giving up a course they'd sworn to hold. Coastal captains keep lists of known siren-kin by name and by the kind of song each one favors, the same way they'd track a reef known for bad currents. The ones who make a living at it rarely bother with anything as crude as luring a ship onto rocks. A reputation, once earned, does most of the work on its own.",
    story: [
      "Kestrel Farsong worked the strait for eleven years on a simple arrangement with three shipping families: safe passage sung into any crew that paid the toll, and silence for anyone who didn't. It was a fair trade by the strait's own standards, and everyone involved understood the terms.",
      "A fourth family tried to cross without paying, betting that one refusal wouldn't be worth Kestrel's trouble. Kestrel didn't sing them onto the rocks. They simply sang the crew a very accurate account of what waited on the far side of the strait if they kept going unescorted, and let the crew decide for themselves to turn back.",
      "The family paid double the next season. Kestrel never raised their voice for it, and never had to.",
    ],
    protagonistGender: "nonbinary",
  },
  river: {
    label: "River",
    name: "River Merperson",
    portraitAlt:
      "A serpentine river merperson with sage-green and amber scales, dripping wet as it rests on a moss-covered rock in a sunlit river with a stone bridge behind it.",
    images: [
      "assets/portraits/merpeople/river/portrait.png",
      "assets/portraits/merpeople/river/img_1.png",
      "assets/portraits/merpeople/river/character.png",
    ],
    mbti: "ESTJ (Executive)",
    quick:
      "River merfolk claim a single stretch of water and hold it like a border, and most will spend a whole life within sight of the same two bends.",
    lore:
      "A river merperson's holding is usually a single family's for generations: a stretch measured not in distance but in landmarks, this fallen log to that mill wheel, marked with boundary stones set into the bank where anyone can read them. They keep a close watch on anything that changes the water, a new dam, a shifted channel, silt from an upstream clear-cut, and they are the first to know when a river is dying long before the towns along it notice. Negotiating with a river merperson means negotiating with someone who has no other territory to fall back on, which makes them cautious about trade but immovable about the water itself.",
    story: [
      "Alder Fenwarden had held the same three bends of the Kessin his whole life, same as his father and his father's mother before him, and had never had to defend the stretch against anything worse than a poacher's net.",
      "Then a mill upstream started diverting more water each season than its charter allowed, and the bend that had always run chest-deep dropped to his knees by midsummer. Alder didn't take the dispute to the mill owner. He swam the whole diverted channel to its source, counted the extra sluice gates himself, and brought the tally to the town that held the mill's charter.",
      "The town cut the mill back to its original allowance within the week, less out of concern for Alder than for the accuracy of his count. He still checks the sluice gates every spring, and the bend has run chest-deep every summer since.",
    ],
    protagonistGender: "male",
  },
};
