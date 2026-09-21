// Phoenixes category data. Each entry either has an `images` sequence (a real
// portrait plus a scroll-fade sequence keyed to the Lore/Story landmarks in
// the detail panel) or a `portraitColor` fallback for creatures that don't
// have art yet. `protagonistGender` records the story's named individual so
// write-creature-content can keep the category's roster balanced.

const CREATURES = {
  sun: {
    label: "Sun",
    name: "Sun Phoenix",
    portraitAlt:
      "A sun phoenix with brilliant gold and white plumage perched atop a rocky peak, wings spread and tail feathers streaming like flame, a blazing sun haloed behind it above a sunlit mountain valley.",
    images: [
      "assets/portraits/phoenixes/sun/portrait.png",
      "assets/portraits/phoenixes/sun/img_1.png",
      "assets/portraits/phoenixes/sun/character.png",
    ],
    mbti: "ENFJ (Protagonist)",
    quick:
      "Sun phoenixes burn at the peak of their cycle for years at a stretch, and expect to be looked to while they do.",
    lore:
      "A sun phoenix in its bright years does not hide the way ash or eclipse phoenixes learn to. It nests in the open, on the tallest available point, and treats being watched as part of the arrangement: villages within sight of a sun phoenix's roost set their planting and harvest by the color of its flare, and expect a warning call before storms it senses coming days out. What looks like vanity is closer to a working contract, unspoken but consistently honored on both sides. A sun phoenix that goes quiet for more than a season is treated as news, and neighboring roosts will send scouts to check on it, because a sun phoenix's silence is rarely nothing.",
    story: [
      "Corvin Dawnflare has kept the high roost above Tallow Ridge for eleven years, visible from three valleys on a clear morning. Farmers below plant by the exact shade of orange he throws at first light, a habit none of them remember starting and none of them are willing to test by ignoring it.",
      "The spring a drought stretched past the usual planting window, half of Tallow Ridge argued for planting early anyway rather than lose the season. Corvin flared twice at dawn for four straight days, a signal no one in living memory had seen him give, and held his roost dark every evening after.",
      "The rain came on the fifth day, two weeks later than any farmer would have gambled on their own. Tallow Ridge's council added a formal line to its planting charter that year: hold for a second flare before breaking ground, credited simply to \"the ridge.\"",
    ],
    protagonistGender: "male",
  },
  ash: {
    label: "Ash",
    name: "Ash Phoenix",
    portraitAlt:
      "An ash phoenix with smoldering, ember-streaked feathers standing atop a charred, still-smoking hillside at sunrise, looking out over a burned forest of blackened tree stumps.",
    images: [
      "assets/portraits/phoenixes/ash/portrait.png",
      "assets/portraits/phoenixes/ash/img_1.png",
      "assets/portraits/phoenixes/ash/character.png",
    ],
    mbti: "INFJ (Advocate)",
    quick:
      "Ash phoenixes stay through the part of the cycle every other phoenix tries to fly past, and treat what's left after a burning as work worth doing.",
    lore:
      "Where a sun phoenix's burning is a public event, what happens after is usually left to whoever's willing to sit with it, and that is almost always an ash phoenix. It nests low, in scorched ground rather than high roosts, and spends the weeks after a burning walking the char for anything still salvageable: a scorched orchard's root systems, a burned field's seed bank, a neighbor's collapsed roof beam still sound enough to reuse. Farmers who lose a barn to lightning or a careless fire have learned to wait a few days before rebuilding, because an ash phoenix that arrives first will usually tell them what's worth keeping before they clear it all away. It is unglamorous work and an ash phoenix rarely gets credited for it, which seems, as far as anyone can tell, to suit it fine.",
    story: [
      "Maren Greywake arrived at the Coldharrow orchard three days after lightning burned half of it to the roots, before the owners had finished arguing over whether to replant or sell the land. She said nothing about the argument and started walking the rows instead, marking trunks with a claw-scratch.",
      "Of forty scorched trees, she marked eleven as dead beyond saving and the rest as burned but rootable, workable if cut back hard before the next thaw. The Coldharrow family had already priced new saplings for the whole orchard, assuming everything standing was a loss.",
      "They cut back the twenty-nine she'd marked instead of felling them, on her word alone. Eighteen months later those trees fruited again, ahead of the eleven replacements still finding their roots, and Coldharrow keeps a claw-scratched trunk section on the porch as proof of who was right.",
    ],
    protagonistGender: "female",
  },
  ember: {
    label: "Ember",
    name: "Ember Phoenix",
    portraitAlt:
      "An ember phoenix with red and gold feathers still edged in fire, perched in profile on a dark rock against a sunset sky, a misted river valley and distant ruined tower visible below.",
    images: [
      "assets/portraits/phoenixes/ember/portrait.png",
      "assets/portraits/phoenixes/ember/img_1.png",
      "assets/portraits/phoenixes/ember/character.png",
    ],
    mbti: "ENFP (Campaigner)",
    quick:
      "Embers are phoenixes still in their first cycle, and haven't settled yet into which of the other three kinds they'll grow into.",
    lore:
      "An ember is unmistakable by size and by uncertainty: barely fledged, flame still guttering rather than steady, and without the settled habits that mark a sun, ash, or eclipse phoenix as fully itself. What an ember becomes isn't fixed at birth the way some bestiaries claim; older phoenixes describe it as closer to an apprenticeship, an ember drifting between roosts of different kinds over its first years, staying weeks or months at a sun phoenix's open nest, then a season with an ash phoenix working scorched ground, watching before choosing. Roost-holders of every kind take embers in without much ceremony, feed them, and expect nothing in return except that the ember eventually leaves to become something. An ember that lingers too long in one roost past its first molt, without settling toward any kind, is treated gently but firmly as due for a nudge back out.",
    story: [
      "Vesper Kindlewing spent their first two years drifting between roosts, never staying long enough to be claimed by any one of them. They arrived at Corvin Dawnflare's sunlit ridge first, stayed through a full summer, and left before the next flare season without much explanation.",
      "From there they went low, to Maren Greywake's scorched orchard rounds, trailing her through two burnt fields and a barn roof, quiet and watchful, taking in how she read char for what could still be saved. Neither roost pushed them to decide faster than they were ready to.",
      "Vesper's flame is still unsteady, prone to guttering low for days and then flaring without warning, and no one, including Vesper, can say yet which kind they're becoming. What's certain is that both roosts still leave a place open, and Vesper still visits both, letting the question stay open a while longer.",
    ],
    protagonistGender: "nonbinary",
  },
  eclipse: {
    label: "Eclipse",
    name: "Eclipse Phoenix",
    portraitAlt:
      "An eclipse phoenix with near-black feathers shot through with molten gold, perched on a jagged rock beneath a total solar eclipse, a ruined nighttime city of waterfalls and spires spread out below.",
    images: [
      "assets/portraits/phoenixes/eclipse/portrait.png",
      "assets/portraits/phoenixes/eclipse/img_1.png",
      "assets/portraits/phoenixes/eclipse/character.png",
    ],
    mbti: "INFP (Mediator)",
    quick:
      "Eclipse phoenixes keep their flame banked low year-round, and choose exactly when to show it rather than let anyone else decide for them.",
    lore:
      "An eclipse phoenix's plumage reads as ash-dark from any distance, and most people who live near one for years never see it flare at all. That isn't dormancy; the fire is there, just controlled tighter than any other phoenix bothers to control it, and an eclipse phoenix treats revealing it as a decision, not an accident. Where a sun phoenix flares to be seen, an eclipse phoenix flares to be believed, usually once, at the exact moment a warning or a proof is needed and no other signal would do. Villages that share ground with an eclipse phoenix often go years assuming the roost sits empty, until the one night it lights up bright enough to be seen from three ridges over, and everyone finally understands what had been living there the whole time.",
    story: [
      "Isolde Duskbrand has held the black cliff above Hollow Vane for six years, and most of Hollow Vane's newer residents assumed the ledge was simply empty rock. She has never once flared during daylight, and rarely enough at night that even longtime neighbors stopped watching for it.",
      "When a raiding party moved on Hollow Vane under a moonless sky, counting on exactly that reputation for stillness to cover their approach, Isolde let them get within sight of the first houses before she lit the cliff face in full, a single sustained flare bright enough to throw every raider's shadow a hundred feet down the slope.",
      "The raid broke apart before a single arrow was loosed, no one willing to advance in that much light with their position given away so completely. Isolde dimmed back to nothing within the hour, and Hollow Vane has not seen her flare since, though nobody doubts anymore that the ledge is occupied.",
    ],
    protagonistGender: "female",
  },
};
