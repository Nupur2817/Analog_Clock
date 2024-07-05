const body = document.querySelector("body");
const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");
const modeSwitch = document.querySelector(".mode-switch");

// Improved mode handling with default value and user preference check
const storedMode = localStorage.getItem("mode");
const isDarkMode = storedMode === "Dark Mode" ||
                    (!storedMode && window.matchMedia("(prefers-color-scheme: dark)").matches);

if (isDarkMode) {
  body.classList.add("dark");
  modeSwitch.textContent = "Light Mode";
} else {
  body.classList.remove("dark");
  modeSwitch.textContent = "Dark Mode";
}


modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDarkMode = body.classList.contains("dark");
  modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
  if (isDarkMode) {
    modeSwitch.style.color = "black";
  } else {
    modeSwitch.style.color = "white";
  }
  localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
});

const updateTime = () => {
  const date = new Date();

  
   secToDeg = (date.getSeconds() / 60) * 360;
   minToDeg = (date.getMinutes() /60) * 360;
   hrToDeg = (date.getHours()  / 12) * 360;

  secondHand.style.transform = `rotate(${secToDeg}deg)`;
  minuteHand.style.transform = `rotate(${minToDeg}deg)`;
  hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};

setInterval(updateTime, 1000);
updateTime();
