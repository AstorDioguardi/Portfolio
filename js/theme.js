const toggleColors = document.getElementById("toggle-colors");

const rootStyles = document.documentElement.style;

toggleColors.addEventListener("click", (e) => {
    rootStyles.setProperty('--primary-color', e.target.dataset.color);
  })