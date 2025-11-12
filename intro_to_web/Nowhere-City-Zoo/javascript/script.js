document.getElementById("animateBtn").addEventListener("click", function() {
  let box = document.getElementById("box");
  let arm = document.getElementById("arm");
  let turd = document.getElementById("turd");
  let input = document.getElementById("animalInput").value.trim().toLowerCase(); // get input
  
  if (input === "baboon") {
    // Restart animation by removing/adding the class
    box.classList.remove("animate");
    void box.offsetWidth; // reflow trick
    box.classList.add("animate");
    arm.classList.remove("thrower");
    void arm.offsetWidth; // reflow trick
    arm.classList.add("thrower");
    turd.classList.remove("thrown");
    void turd.offsetWidth; // reflow trick
    turd.classList.add("thrown");
  } else {
    alert("Only a baboon can escape! 🐒");
  }
});