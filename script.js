const footerYear = document.querySelector(".dynamic-year");
const currentYear = new Date().getFullYear();
footerYear.textContent = `© 2011-${currentYear} Oh My Brush`;

const langBtn = document.querySelector("#langToggle");
const hu = document.querySelector(".hungarian");
const en = document.querySelector(".english");

langBtn.addEventListener("click", () => {
  const showHungarian = !hu.classList.contains("invisible");

  if (showHungarian) {
    hu.classList.add("invisible");
    en.classList.remove("invisible");
    langBtn.textContent = "Váltás magyarra";
  } else {
    en.classList.add("invisible");
    hu.classList.remove("invisible");
    langBtn.textContent = "Switch to English";
  }
});
