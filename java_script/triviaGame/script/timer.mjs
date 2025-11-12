let timerInterval;

function startTimer(duration, onEnd) {
  let timeLeft = duration;
  const timeDisplay = document.getElementById("time");
  timeDisplay.textContent = timeLeft;

  clearInterval(timerInterval); // stop old timer if any
  timerInterval = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      if (typeof onEnd === "function") onEnd();
    }
  }, 1000);
}

export {startTimer};