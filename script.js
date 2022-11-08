const toggle = document.querySelector(".toggle");
const container = document.querySelector(".container-pricing");

toggle.addEventListener("change", (e) => {
  container.classList.toggle("show");
});
