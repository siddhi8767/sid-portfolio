document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  if (header) {
    header.style.cursor = "pointer";

    header.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});
document.querySelectorAll("h2").forEach((heading) => {
  heading.addEventListener("click", () => {
    const section = heading.nextElementSibling;
    if (!section) return;

    section.style.backgroundColor = "#F2F0EA";
    section.style.padding = "8px";

    setTimeout(() => {
      section.style.backgroundColor = "transparent";
      section.style.padding = "0";
    }, 600);
  });
});
