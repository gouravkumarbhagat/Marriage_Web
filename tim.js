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

  // Optional: grow the line based on how many events are visible
  const total = events.length;
  const percent = (visibleCount / total) * 100;
  timeline.style.setProperty("--line-height", percent + "%");
});
