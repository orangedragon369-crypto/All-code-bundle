const dashboard = document.getElementById("dashboard");
const menuButton = document.getElementById("menuButton");
const closeBtn = document.getElementById("close-btn");

    
menuButton.addEventListener("click", () => {
    dashboard.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    dashboard.style.display = "none";
});