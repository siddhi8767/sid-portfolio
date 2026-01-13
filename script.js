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
