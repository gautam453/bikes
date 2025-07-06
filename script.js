const toggleBtn = document.getElementById("toggleDetails");
const extraDetails = document.getElementById("extraDetails");

toggleBtn.addEventListener("click", () => {
  extraDetails.classList.toggle("hidden");
  toggleBtn.textContent = extraDetails.classList.contains("hidden")
    ? "Show More"
    : "Show Less";
});