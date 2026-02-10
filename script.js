const today = new Date();
const currentDay = today.getDate();
const month = today.getMonth(); // Feb = 1

const content = document.getElementById("content");
const buttons = document.querySelectorAll(".tabs button");

const messages = {
  7: "Garima, a rose for you — because you make my world bloom 🌹❤️",
  8: "Garima, I don’t need perfect… I just need you 💍💖",
  9: "Garima, life feels sweeter just because you exist 🍫😘",
  10: "Garima, whenever life feels heavy, I’ll be your comfort 🧸🤍",
  11: "Garima, I promise to stay — always 🤝💞",
  12: "Garima, this hug is to tell you you’re never alone 🤗💗",
  14: "Garima, forever isn’t long enough with you ❤️ Will you be my Valentine? 💍💘"
};

buttons.forEach(btn => {
  const day = btn.dataset.day;

  if (month !== 1 || currentDay < day) {
    btn.classList.add("locked");
    btn.innerHTML += " 🔒";
  }

  btn.addEventListener("click", () => {
    if (btn.classList.contains("locked")) {
      content.innerHTML = `
        <h2>🔒 Locked</h2>
        <p>This love unlocks on Feb ${day} 💌</p>
      `;
    } else {
      content.innerHTML = `
        <h2>${btn.innerText.replace(" 🔒","")}</h2>
        <p class="typewriter">${messages[day]}</p>
      `;
    }
  });
});
