// Griffins category data. Each entry either has an `images` sequence (a real
// portrait plus a scroll-fade sequence keyed to the Lore/Story landmarks in
// the detail panel) or a `portraitColor` fallback for creatures that don't
// have art yet. `protagonistGender` records the story's named individual so
// write-creature-content can keep the category's roster balanced.

const CREATURES = {
  mountain: {
    label: "Mountain",
    name: "Mountain Griffin",
    portraitAlt:
      "A mountain griffin with cream and dark brown feathers and tawny lion hindquarters, standing with wings folded on a rocky peak, snow-covered mountains behind it at dawn.",
    images: [
      "assets/portraits/griffins/mountain/portrait.png",
      "assets/portraits/griffins/mountain/img_1.png",
      "assets/portraits/griffins/mountain/character.png",
    ],
    mbti: "ISTP (Virtuoso)",
    quick:
      "Mountain griffins claim a single peak for the length of a lifetime and treat every ridge below it as an extension of the nest, not just a hunting ground.",
    lore:
      "A mountain griffin picks one peak in adolescence and rarely leaves it again, building a nest of switchback stone and dead pine that grows for decades until it's less a nest than a permanent structure wedged into the rock. Shepherds who graze flocks below a claimed peak learn its owner's silhouette the way they'd learn a neighbor's face, and most arrangements settle into an unspoken toll: a griffin takes the occasional stray or sick animal from the upper pastures and otherwise leaves the flock alone, so long as no one climbs past the treeline uninvited. What looks like territorial hostility from a distance is closer to homeownership; a mountain griffin defends the nest and the ridgeline around it with real force, but rarely bothers a traveler passing through the valley floor below. Trouble comes almost entirely from people who mistake the empty upper slopes for open ground and discover, partway up, that they weren't.",
    story: [
      "Rook Stonewing has held the same spire above Kessing Pass since before the shepherds who graze there now were born, and the flock owners settled his toll two generations back: one weak lamb a season, left tied at the treeline, and nothing more. He has never once taken from the pastures himself.",
      "The arrangement nearly broke the autumn a survey crew from the lowlands staked claims halfway up the spire, hunting for a vein of ore the old maps marked but never named. They pitched tents inside sight of his nest and lit fires through two full nights before he came down at all.",
      "Rook didn't burn the camp or scatter the crew. He picked up their supply cache, tents and tools together, and set it down at the treeline where the shepherds' toll usually waited, then perched on the ridge above and waited for them to take the hint. They broke camp by noon.",
    ],
    protagonistGender: "male",
  },
  storm: {
    label: "Storm",
    name: "Storm Griffin",
    portraitAlt:
      "A dark-feathered storm griffin banking through a lightning-lit thunderhead, wings swept back and talons extended, mountains and a river valley visible far below.",
    images: [
      "assets/portraits/griffins/storm/portrait.png",
      "assets/portraits/griffins/storm/img_1.png",
      "assets/portraits/griffins/storm/character.png",
    ],
    mbti: "ESFP (Entertainer)",
    quick:
      "Storm griffins fly toward a coming storm front instead of away from it, and read its edge for opportunities most creatures spend that same hour hiding from.",
    lore:
      "A storm griffin tracks weather the way other creatures track prey, watching a pressure front build for a day or more before it breaks and positioning itself along the leading edge well before the first rain falls. Riding the turbulent wall of wind ahead of a storm lets it cover distances in an afternoon that would take other griffins a week of ordinary flying, and hunters who study the type learn to watch the horizon for a shape cutting against the clouds whenever a front is due. Coastal villages that see storm griffins regularly have learned to treat their arrival as a weather warning more reliable than any lookout tower: a griffin riding in ahead of the front means the storm itself is still hours out but coming in fast. What looks like recklessness from the ground is closer to navigation, since a storm griffin knows the wind at every altitude of that front better than any sailor knows a coastline.",
    story: [
      "Isolde Galewright has ridden the leading edge of a storm front since she was old enough to leave the eyrie, and coastal watchers along the Talon Coast have learned to read her outline against the clouds as the surest sign a storm is still hours out. She banks the same three ridgelines every time, like clockwork.",
      "The autumn a fishing fleet from Corry's Landing ignored the warning and stayed out past the point, she found them well past dusk with the front already breaking overhead, boats scattered and one taking on water faster than its crew could bail.",
      "Isolde couldn't tow a boat, but she could fly low enough along the wave troughs to mark a path back through the worst of the swell, banking hard at every safe gap until the fleet's lanterns found the harbor mouth. She left before anyone thought to thank her, already climbing back into the wind.",
    ],
    protagonistGender: "female",
  },
  sand: {
    label: "Sand",
    name: "Sand Griffin",
    portraitAlt:
      "A tan sand griffin perched with wings folded on a rocky desert outcrop, looking out over sun-baked dunes and distant rock spires.",
    images: [
      "assets/portraits/griffins/sand/portrait.png",
      "assets/portraits/griffins/sand/img_1.png",
      "assets/portraits/griffins/sand/character.png",
    ],
    mbti: "ISFP (Adventurer)",
    quick:
      "Sand griffins range farther in a single flight than any other kind, chasing thermals off bare rock across distances that would strand most creatures without water.",
    lore:
      "A sand griffin rarely nests twice in the same place, since a claimed outcrop in open desert offers little to defend and less to return to once the day's heat has scoured it bare. Instead it ranges a loose circuit of watering holes and rock formations, riding thermals that rise off sun-baked stone to cover, in a single afternoon, distances that would take other griffins days of steady flying. Caravans crossing the open desert have learned to watch for a sand griffin's circling as a sign of water below, since the same thermals that carry the griffin tend to rise strongest over a hidden spring or a seasonal wash. Trading a caravan's spare water for safe passage past a nesting pair has become a common enough exchange that some routes are marked, informally, by which griffin's territory they cross. What looks like a wanderer with no fixed home is, up close, a creature whose entire territory is the circuit itself, not any single point on it.",
    story: [
      "Kestrel Duneshear holds no single outcrop, and traders along the Amber Reach have learned instead to watch the sky for their particular circling pattern, three slow loops before a straight glide toward whichever spring is running that season. It's saved more than one caravan a day of wasted searching.",
      "The drought that dried two of the usual three springs along the Reach put that knowledge to a real test, when a caravan running low on water followed Kestrel's circling toward a wash no map marked, only to find the water there barely a trickle, not the pool they'd counted on.",
      "Kestrel didn't leave them to it. They spent the better part of a day leading the caravan on to a second, smaller spring further out on their circuit, one they'd never bothered sharing before because it was barely worth the flight. The caravan filled every skin they carried and marked the spring on their own maps that night.",
    ],
    protagonistGender: "nonbinary",
  },
  cloud: {
    label: "Cloud",
    name: "Cloud Griffin",
    portraitAlt:
      "A pale white and grey cloud griffin gliding with wings spread through thick clouds, snow-capped peaks barely visible far below.",
    images: [
      "assets/portraits/griffins/cloud/portrait.png",
      "assets/portraits/griffins/cloud/img_1.png",
      "assets/portraits/griffins/cloud/character.png",
    ],
    mbti: "INTP (Logician)",
    quick:
      "Cloud griffins keep to altitudes above where weather forms, and treat coming down as low as the treeline the way most creatures treat entering open water.",
    lore:
      "A cloud griffin spends most of its life above the cloud layer itself, gliding at altitudes cold enough and thin enough that few other creatures follow, let alone challenge it there. Sightings from the ground are rare and brief, usually a pale shape crossing a gap in the clouds for a few seconds before it's gone, and most of what's known about cloud griffin behavior comes from mountaineers who've crossed a high pass and found one resting on an exposed ledge above the weather. They come down only to hunt or to nest, choosing the highest available crag and abandoning it the moment easier access draws visitors. Villages at the base of a mountain known to host cloud griffins rarely see them at all, and treat a sighting near the ground as unusual enough to remark on for weeks. What looks like aloofness is closer to simple preference: a cloud griffin finds the thin, quiet air above the weather more comfortable than anywhere within reach of the ground.",
    story: [
      "Aveline Cloudreach nests on an outcrop above the Kessa Range so high that climbers who've reached it describe the view as looking down on weather itself, storms breaking silently below like something seen from a ship's deck. She's been seen from the valley floor perhaps a dozen times in as many years.",
      "When a climbing party lost their route marker in a whiteout near her ledge, unable to tell up from down in air thin enough to blur their thinking, they stumbled onto her outcrop half by accident, too disoriented to be afraid of what they'd found.",
      "Aveline let them shelter against the leeward rock through the worst of the whiteout, said nothing, and was gone by the time they'd recovered enough to properly look at her. They found the route again at first light, and none of them ever spotted her a second time.",
    ],
    protagonistGender: "female",
  },
};
