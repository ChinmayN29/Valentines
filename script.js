/* =========================
   INTRO FLOW
========================= */

const introTexts = [
  "Hey ❤️",
  "I made something for you",
  "Because you’re special to me",
  "And I wanted to ask you something..."
];

const subTexts = [
  "",
  "Hope this makes you smile 😊",
  "You really mean a lot 💕",
  "So here it goes..."
];

let step = 0;

const introTextEl = document.getElementById("introText");
const subTextEl = document.getElementById("subText");
const nextBtn = document.getElementById("nextBtn");

function updateIntro() {
  introTextEl.textContent = introTexts[step];
  subTextEl.textContent = subTexts[step];
}

updateIntro();

nextBtn.addEventListener("click", () => {
  step++;

  if (step < introTexts.length) {
    updateIntro();
  } else {
    showValentinePage();
  }
});

/* =========================
   SHOW FINAL PAGE
========================= */

function showValentinePage() {
  document.getElementById("main").style.display = "none";
  document.getElementById("valentineSection").style.display = "block";
}

/* =========================
   VALENTINE LOGIC
========================= */

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const messageEl = document.getElementById("message");

let noClicks = 0;

const cuteMessages = [
  "Are you sure? 🥺",
  "Think again 💗",
  "I promise it'll be fun 🌸",
  "One cute date please? 😌",
  "You’re breaking my heart 💔",
  "I’ll bring chocolates 🍫",
  "I’ll plan everything 💐",
  "Just say yes already 😳"
];

noBtn.addEventListener("click", () => {
  noClicks++;

  // Grow Yes, Shrink No
  yesBtn.style.transform = `scale(${1 + noClicks * 0.15})`;
  noBtn.style.transform = `scale(${Math.max(1 - noClicks * 0.1, 0.35)})`;

  // Loop cute messages
  messageEl.textContent =
    cuteMessages[noClicks % cuteMessages.length];
});

yesBtn.addEventListener("click", () => {
  document.getElementById("valentineSection").innerHTML = `
    <h1>YAYYYY 💖🥰</h1>
    <p>I’m so happy you said yes 💕</p>
    <p>Can’t wait for our date 💐</p>
  `;
});
