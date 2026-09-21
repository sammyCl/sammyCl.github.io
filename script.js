// Generic creature grid and detail-panel engine, shared by every category
// page. Each page loads its own data/<category>.js first, which defines
// CREATURES, then this file. An entry either has an `images` sequence (a
// real portrait plus a scroll-fade sequence keyed to the Lore/Story
// landmarks in the detail panel) or a `portraitColor` fallback for
// creatures that don't have art yet.

let scrollObserver = null;

function buildGrid() {
  const grid = document.getElementById("creature-grid");
  grid.innerHTML = "";

  Object.entries(CREATURES).forEach(([id, data]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "creature-card";
    button.dataset.id = id;

    if (data.images) {
      const img = document.createElement("img");
      img.className = "creature-portrait";
      img.src = data.images[0];
      img.alt = data.portraitAlt || "";
      button.appendChild(img);
    } else {
      const swatch = document.createElement("span");
      swatch.className = "creature-portrait";
      swatch.setAttribute("aria-hidden", "true");
      swatch.style.setProperty("--portrait-color", data.portraitColor);
      button.appendChild(swatch);
    }

    const label = document.createElement("span");
    label.className = "creature-label";
    label.textContent = data.label;
    button.appendChild(label);

    button.addEventListener("click", () => openDetail(id));
    grid.appendChild(button);
  });
}

function setupScrollFade(data) {
  if (scrollObserver) {
    scrollObserver.disconnect();
    scrollObserver = null;
  }
  if (!data.images) return;

  const stack = document.getElementById("detail-portrait");
  const images = stack.querySelectorAll("img");

  const triggers = [
    { el: document.getElementById("detail-name"), index: 0 },
    { el: document.getElementById("lore-heading"), index: 1 },
    { el: document.getElementById("story-heading"), index: 2 },
  ].filter((trigger) => trigger.el);

  scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const trigger = triggers.find((t) => t.el === entry.target);
        if (!trigger) return;
        images.forEach((img, i) => {
          img.classList.toggle("is-active", i === trigger.index);
        });
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
  );

  triggers.forEach((trigger) => scrollObserver.observe(trigger.el));
}

function openDetail(id) {
  const data = CREATURES[id];
  if (!data) return;

  document.getElementById("detail-name").textContent = data.name;
  document.getElementById("detail-quick").textContent = data.quick;
  document.getElementById("detail-mbti").textContent = data.mbti
    ? `Myers-Briggs: ${data.mbti}`
    : "";
  document.getElementById("detail-lore").textContent = data.lore;

  const storyEl = document.getElementById("detail-story");
  storyEl.innerHTML = "";
  data.story.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    storyEl.appendChild(p);
  });

  const portraitEl = document.getElementById("detail-portrait");
  portraitEl.innerHTML = "";
  portraitEl.style.removeProperty("--portrait-color");

  if (data.images) {
    data.images.forEach((src, i) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "";
      if (i === 0) img.classList.add("is-active");
      portraitEl.appendChild(img);
    });
  } else {
    portraitEl.style.setProperty("--portrait-color", data.portraitColor);
  }

  const stage = document.getElementById("creature-stage");
  stage.classList.add("is-open");
  document.getElementById("back-to-grid").focus();

  setupScrollFade(data);
}

function closeDetail() {
  document.getElementById("creature-stage").classList.remove("is-open");
  if (scrollObserver) {
    scrollObserver.disconnect();
    scrollObserver = null;
  }
}

if (document.getElementById("creature-grid")) {
  buildGrid();
  // Lets the quiz's result link ("Read the full entry") open straight into
  // a specific creature's detail panel via ?open=<id>, e.g. dragons.html?open=gold.
  const openId = new URLSearchParams(window.location.search).get("open");
  if (openId && CREATURES[openId]) {
    openDetail(openId);
  }
}
document.getElementById("back-to-grid")?.addEventListener("click", closeDetail);

// "Which Creature Are You?" quiz, driven by data/quiz.js. Each answer
// scores its own subtype +2 and its QUIZ_PARTNERS match +1, then the
// highest total wins; QUIZ_RESULT_ORDER breaks any tie deterministically.

function runQuiz() {
  const stage = document.getElementById("quiz-app");
  const progressEl = document.getElementById("quiz-progress");
  const promptEl = document.getElementById("quiz-prompt");
  const optionsEl = document.getElementById("quiz-options");

  let questionIndex = 0;
  let scores = {};

  function keyOf(category, id) {
    return `${category}:${id}`;
  }

  function showQuestion() {
    const question = QUIZ_QUESTIONS[questionIndex];
    progressEl.textContent = `Question ${questionIndex + 1} of ${QUIZ_QUESTIONS.length}`;
    promptEl.textContent = question.prompt;
    optionsEl.innerHTML = "";

    question.options.forEach((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "quiz-option";
      button.textContent = option.text;
      button.addEventListener("click", () => selectOption(option));
      optionsEl.appendChild(button);
    });
  }

  function selectOption(option) {
    const key = keyOf(option.category, option.id);
    scores[key] = (scores[key] || 0) + 2;
    const partnerKey = QUIZ_PARTNERS[key];
    if (partnerKey) {
      scores[partnerKey] = (scores[partnerKey] || 0) + 1;
    }

    questionIndex += 1;
    if (questionIndex < QUIZ_QUESTIONS.length) {
      showQuestion();
    } else {
      showResult();
    }
  }

  function showResult() {
    let winner = QUIZ_RESULT_ORDER[0];
    let bestScore = -1;
    QUIZ_RESULT_ORDER.forEach((key) => {
      const score = scores[key] || 0;
      if (score > bestScore) {
        bestScore = score;
        winner = key;
      }
    });

    const [category, id] = winner.split(":");
    const result = QUIZ_RESULTS[category][id];

    // Not every subtype has real art yet (see data/phoenixes.js), so the
    // portrait is attempted and the color swatch shows through underneath
    // as a fallback if it 404s.
    const portraitEl = document.getElementById("quiz-result-portrait");
    portraitEl.style.setProperty("--swatch-color", QUIZ_SWATCH_COLORS[winner]);
    const image = document.getElementById("quiz-result-image");
    image.style.display = "";
    image.alt = `Portrait of a ${result.name}.`;
    image.onerror = () => {
      image.style.display = "none";
    };
    image.src = `assets/portraits/${category}/${id}/portrait.png`;

    document.getElementById("quiz-result-name").textContent = result.name;
    document.getElementById("quiz-result-blurb").textContent = result.blurb;
    document.getElementById("quiz-result-link").href =
      `${QUIZ_CATEGORY_PAGES[category]}?open=${id}`;

    stage.classList.add("is-done");
  }

  function restart() {
    questionIndex = 0;
    scores = {};
    stage.classList.remove("is-done");
    showQuestion();
  }

  document.getElementById("quiz-restart").addEventListener("click", restart);
  showQuestion();
}

if (document.getElementById("quiz-app")) {
  runQuiz();
}

// Site audio: one looping background track per page, set via
// data-bg-audio on <body>, plus a click sound on every button/link.
// Starts muted, since browsers block audio-with-sound until the visitor
// has interacted with the page; clicking the header toggle is that first
// interaction. The mute preference is saved in localStorage, since this
// is a multi-page site rather than a single-page app and each page load
// otherwise forgets it.

const AUDIO_MUTED_KEY = "bestiary-audio-muted";
const CLICK_SOUND_SRC = "assets/audio/click.mp3";
const CLICK_POOL_SIZE = 4;
const BG_VOLUME = 0.35;
const CLICK_VOLUME = 0.5;

let isMuted = localStorage.getItem(AUDIO_MUTED_KEY) !== "false";
let bgAudio = null;
const clickPool = [];
let clickPoolIndex = 0;

function setupBackgroundAudio() {
  const src = document.body.dataset.bgAudio;
  if (!src) return;
  bgAudio = new Audio(src);
  bgAudio.loop = true;
  bgAudio.volume = BG_VOLUME;
  if (!isMuted) {
    bgAudio.play().catch(() => {});
  }
}

function playClickSound() {
  if (clickPool.length === 0) return;
  const audio = clickPool[clickPoolIndex];
  clickPoolIndex = (clickPoolIndex + 1) % clickPool.length;
  audio.currentTime = 0;
  audio.play().catch(() => {});
}

function setupBackgroundAudioResume() {
  document.addEventListener("click", () => {
    // A blocked autoplay on page load leaves bgAudio paused even though
    // the visitor is unmuted; any click is a real user gesture, so retry.
    if (!isMuted && bgAudio && bgAudio.paused) {
      bgAudio.play().catch(() => {});
    }
  });
}

function setupClickSounds() {
  for (let i = 0; i < CLICK_POOL_SIZE; i++) {
    const audio = new Audio(CLICK_SOUND_SRC);
    audio.volume = CLICK_VOLUME;
    clickPool.push(audio);
  }

  document.addEventListener("click", (event) => {
    if (isMuted) return;
    if (!event.target.closest("button, a")) return;
    playClickSound();
  });
}

function updateAudioToggle() {
  const button = document.getElementById("audio-toggle");
  if (!button) return;
  button.textContent = isMuted ? "\u{1F507} Sound" : "\u{1F50A} Sound";
  button.setAttribute("aria-pressed", String(!isMuted));
}

function toggleAudio() {
  isMuted = !isMuted;
  localStorage.setItem(AUDIO_MUTED_KEY, String(isMuted));
  if (bgAudio) {
    if (isMuted) {
      bgAudio.pause();
    } else {
      bgAudio.play().catch(() => {});
    }
  }
  updateAudioToggle();
}

setupBackgroundAudio();
setupBackgroundAudioResume();
// setupClickSounds(); // disabled for now, testing background audio only
updateAudioToggle();
document.getElementById("audio-toggle")?.addEventListener("click", toggleAudio);
