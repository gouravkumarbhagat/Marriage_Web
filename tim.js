
const events = document.querySelectorAll(".event");
const timeline = document.querySelector(".timeline");

window.addEventListener("scroll", () => {
  let visibleCount = 0;

  events.forEach((event) => {
    const position = event.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {
      event.style.opacity = "1";
      event.style.transform = "translateY(0)";
      visibleCount++;
    }
  });

  const total = events.length;
  const percent = (visibleCount / total) * 100;
  timeline.style.setProperty("--line-height", percent + "%");
});

let music, btn;

window.onload = () => {
  music = document.getElementById("music");
  btn = document.getElementById("sound");

  // start icon (OFF)
  btn.style.backgroundImage = "url('no_sound.png')";
  btn.style.backgroundSize = "cover";
  btn.style.backgroundPosition = "center";

};


function toggleSound() {
  if (music.paused) {
    music.play();
    btn.style.backgroundImage = "url('volume_up.png')"; // ON icon
  } else {
    music.pause();
    btn.style.backgroundImage = "url('no_sound.png')"; // OFF icon
  }
}
// window.addEventListener("load", toggleSound());

function lastclick() {
  window.location.href = "last.html";
}

// flower code
const container = document.querySelector(".flowers");

function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");

  flower.innerHTML = "🌸";

  flower.style.left = Math.random() * 100 + "vw";

  const size = Math.random() * 20 + 20;
  flower.style.fontSize = size + "px";

  const duration = Math.random() * 5 + 5;
  flower.style.animationDuration = duration + "s";

  container.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, duration * 1000);
}

setInterval(createFlower, 300);
