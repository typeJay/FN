const timeout = 2000;
const buttons = Array.from(document.querySelectorAll(".copyButton"));

const hashtags = {
  "RED BULL RACING": ["values1", "values2", "values3"],
  FERRARI: ["values4", "values5", "values6"],
  MERCEDES: ["values7", "values8", "values9"],
  ALPINE: ["values10", "values11", "values12"],
};

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    const btnText = button.innerText;

    navigator.clipboard.writeText(hashtags[btnText]);

    button.innerText = "Copied to clipboard 📋";

    setTimeout(() => {
      button.innerText = btnText;
    }, timeout);
  })
);
