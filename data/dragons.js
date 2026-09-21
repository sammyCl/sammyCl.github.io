// Dragons category data. Each entry either has an `images` sequence (a real
// portrait plus a scroll-fade sequence keyed to the Lore/Story landmarks in
// the detail panel) or a `portraitColor` fallback for creatures that don't
// have art yet. `protagonistGender` records the story's named individual so
// write-creature-content can keep the category's roster balanced.

const CREATURES = {
  gold: {
    label: "Gold",
    name: "Gold Dragon",
    portraitAlt:
      "A gold dragon with folded wings perched on a ruined stone monument at dusk, golden light catching its scales.",
    images: [
      "assets/portraits/dragons/gold/portrait.png",
      "assets/portraits/dragons/gold/img_1.png",
      "assets/portraits/dragons/gold/character.png",
    ],
    mbti: "ENTJ (Commander)",
    quick:
      "Gold dragons are the self-appointed arbiters of dragonkind, keeping ledgers of favors and grudges longer than most kingdoms keep history.",
    lore:
      "Where other dragons hoard coin, gold dragons hoard obligation. A gold dragon's lair holds records: scrolls of debts owed and promises broken, kept alongside struck coin marked with a debtor's seal. They rarely take by force what can be extracted through a decade of patient interest. Most kingdoms bordering a gold dragon's territory eventually discover that the dragon has quietly become their largest creditor, and that calling in the debt was never really the threat. Younger dragons of other colors regard gold dragons with a mix of respect and unease, since a gold dragon is the rare kind of hoarder who remembers exactly what every visitor has ever owed it.",
    story: [
      "Cathaya Emberledger has held court on a peak called the Scales for two centuries, and every barony within three days' ride knows the way up. She does not demand tribute to hear a case. She asks only that both sides agree, before she speaks, to honor whatever she decides.",
      "When the baronies of Ashford and Merrow came to blows over a river that had quietly moved its own bank after a flood, both sent envoys up the mountain rather than lose a season to war. Cathaya listened to both accounts twice, asked for the old survey stones on each bank, and said nothing for three days.",
      "Her ruling split the river's yield down the middle, as everyone expected. What no one expected was the second half of it: both baronies now owed her a season's labor, to be called in whenever she chose, for however long the peace held. Neither has been foolish enough to test how long that will be.",
    ],
    protagonistGender: "female",
  },
  silver: {
    label: "Silver",
    name: "Silver Dragon",
    portraitAlt:
      "A silver dragon perched on a moonlit peak, wings spread against snow-capped mountains and a full moon.",
    images: [
      "assets/portraits/dragons/silver/portrait.png",
      "assets/portraits/dragons/silver/img_1.png",
      "assets/portraits/dragons/silver/character.png",
    ],
    mbti: "ISFJ (Defender)",
    quick:
      "Silver dragons choose one thing to guard and hold that post for centuries, whether anyone asked them to or not.",
    lore:
      "A silver dragon rarely claims territory the way other dragons do. Instead it claims a duty: a mountain pass, a lighthouse coast, sometimes a single bloodline it has decided is worth outliving. Once chosen, the post is rarely abandoned, and a silver dragon's watch tends to outlast the reason it started. Villages built near a silver dragon's post grow up with the dragon as a fixture of the landscape, more weather than neighbor, until the day its help is needed and everyone remembers exactly who lives on the ridge.",
    story: [
      "Ilyria Nightwatch has held the Karnow Pass for a little over a century, alone since her clutch-siblings scattered to posts of their own. Caravans crossing at dusk have learned to look for her outline against the last light before they make camp.",
      "The autumn a rockslide sealed the pass, it trapped a column of refugees on the wrong side of the mountain with winter closing in behind them and nowhere to turn back to. They had no coin for a dragon's help and nothing to offer but the asking.",
      "Ilyria spent two nights clearing stone that would have taken a work crew a season, then refused every offer of payment they scraped together. She told them only to keep the pass clear when they had the chance, in whatever winter she wasn't watching, and went back to her ledge above the road.",
    ],
    protagonistGender: "female",
  },
  green: {
    label: "Green",
    name: "Green Dragon",
    portraitAlt:
      "A green dragon standing in a moss-covered forest clearing, its scales patterned like overlapping leaves, wings folded, watching a stream at its feet.",
    images: [
      "assets/portraits/dragons/green/portrait.png",
      "assets/portraits/dragons/green/img_1.png",
      "assets/portraits/dragons/green/character.png",
    ],
    mbti: "ISTJ (Logistician)",
    quick:
      "Green dragons treat a claimed stretch of land as an extension of themselves, and know every boundary stone and treeline within it more precisely than most kingdoms know their own borders.",
    lore:
      "A green dragon's territory is rarely marked by fire or fear; it is marked by an intimate, almost bureaucratic knowledge of the land itself. A green dragon can describe the boundary of its territory tree by tree, boulder by boulder, and will notice within a season if a stream shifts its course or a fence line creeps a few feet the wrong way. Disputes are settled less by violence than by walking a neighbor along the actual boundary and asking them to look at what's there. Farmers and woodcutters who share a border with a green dragon learn quickly that the arrangement, once agreed, is kept exactly, no more and no less than what was granted. What looks like territorial hoarding from outside is, up close, closer to stewardship: a green dragon defends its ground the way a gardener defends a well-tended plot, not the way a miser defends a coin.",
    story: [
      "Ossian Thornmark spent his first fifty years within sight of his mother's ridge, marking nothing of his own. The day he finally claimed the tangled valley beneath Fenwood Hollow, he did not roar or burn a single tree. He walked its edges for nine straight days, scoring a shallow groove into stone and bark everywhere the land changed character, until the whole valley wore his signature.",
      "A logging crew from Millbrook crossed that line within the month, unaware a boundary existed at all, and cleared two acres before Ossian found the stumps. He did not attack. He returned every log to where its tree had stood, stacked them into a wall along his scored line, and left the crew's tools untouched on top of it.",
      "Millbrook sent an apology and a formal request to lease the valley's northern third for timber, an arrangement Ossian accepted only after inspecting three separate maps to be sure of exactly what he was granting. The lease is renewed every spring, and no Millbrook crew has crossed the scored line since without asking first.",
    ],
    protagonistGender: "male",
  },
  red: {
    label: "Red",
    name: "Red Dragon",
    portraitAlt:
      "A close-up of a red dragon's head and neck in profile, jagged horns and dark red scales lit by firelight, a burning city visible in the background.",
    images: [
      "assets/portraits/dragons/red/portrait.png",
      "assets/portraits/dragons/red/img_1.png",
      "assets/portraits/dragons/red/character.png",
    ],
    mbti: "ESTP (Entrepreneur)",
    quick:
      "Red dragons take what they want the moment they want it, and rarely bother explaining why to anyone left standing afterward.",
    lore:
      "A red dragon's reputation precedes it by design: villages within two valleys of a known red dragon's roost keep a standing tally of what has already been taken, updated after every visit, because there is rarely warning before the next one. A red dragon does not negotiate for tribute the way a gold dragon does, and it does not walk a boundary line the way a green dragon might. It simply lands, takes what interests it that day, a granary, a herd, sometimes a single object it decided it wanted mid-flight, and leaves before anyone has finished shouting. What looks like carelessness is closer to impatience: a red dragon has calculated, correctly, that the cost of taking now is lower than the cost of asking, and has never yet been proven wrong by the numbers.",
    story: [
      "Wren Ashtaker doesn't scout before a raid the way older reds claim to. They circle a valley once at dusk, pick whatever catches the last light, a full granary at Dunmoor, a string of warhorses at Cairnholt, and take it before the ground crew has finished counting torches. Neighboring reds call this reckless. Wren has never lost a haul to it.",
      "The one time it went wrong was Dunmoor's second granary, guarded that season by a militia dug in with pitch and long spears after the first raid. Wren took one look from altitude, banked away without landing, and returned three nights later to the unguarded third granary instead, emptying it by moonrise.",
      "Dunmoor's council still argues over whether losing two granaries in a season counts as bad luck or a lesson about spreading a militia too thin. Wren has no opinion on the matter. They took what was easiest to take, the same as always, and left the well-guarded granary standing untouched, exactly as they found it.",
    ],
    protagonistGender: "nonbinary",
  },
};
