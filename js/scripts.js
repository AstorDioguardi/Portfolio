const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");

const toggleColors = document.getElementById("toggle-colors");

const skillsImgs = document.querySelectorAll(".skills__img");

const rootStyles = document.documentElement.style;

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (toggleIcon.src.includes("moon.svg")) {
    toggleIcon.src = "./assets/icons/sun.svg";
    toggleText.textContent = "Light Mode";
    skillsImgs.forEach(img => {
      img.style.filter = "invert(100%)";
    });
  } else {
    toggleIcon.src = "./assets/icons/moon.svg";
    toggleText.textContent = "Dark Mode";
    skillsImgs.forEach(img => {
      img.style.filter = "none";
    });
  }
});

toggleColors.addEventListener("click", (e) => {
  rootStyles.setProperty('--primary-color', e.target.dataset.color);
})