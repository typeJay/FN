const timeout = 2000;
const copyButtons = Array.from(document.querySelectorAll(".copyButton"));

copyButtons.forEach((button) =>
  button.addEventListener("click", () => {
    const btnText = button.innerText;

    navigator.clipboard.writeText(btnText);
    output.innerText = btnText + " copied to clipboard";

    button.innerText = "Copied to clipboard 📋";

    setTimeout(() => {
      button.innerText = btnText;
    }, timeout);
  })
);
