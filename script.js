const copyButton1 = document.getElementById("copyButton1");
const copyButton2 = document.getElementById("copyButton2");
const copyButton3 = document.getElementById("copyButton3");
const copyButton4 = document.getElementById("copyButton4");
const copyButton5 = document.getElementById("copyButton5");
const copyButton6 = document.getElementById("copyButton6");
const copyButton7 = document.getElementById("copyButton7");
const copyButton8 = document.getElementById("copyButton8");
const copyButton9 = document.getElementById("copyButton9");
const copyButton10 = document.getElementById("copyButton10");
const output = document.getElementById("output");
    
    copyButton1.addEventListener("click", () => {
      navigator.clipboard.writeText("Text 1");
      output.innerText = "Text 1 copied to clipboard";
    });
    
    copyButton2.addEventListener("click", () => {
      navigator.clipboard.writeText("Text 2");
      output.innerText = "Text 2 copied to clipboard";
    });
    
    copyButton3.addEventListener("click", () => {
      navigator.clipboard.writeText("Text 3");
      output.innerText = "Text 3 copied to clipboard";
    });
    
    copyButton4.addEventListener("click", () => {
      navigator.clipboard.writeText("Text 4");
      output.innerText = "Text 4 copied to clipboard";
    });
    
    copyButton5.addEventListener("click", () => {
      navigator.clipboard.writeText("Text 5");
      output.innerText = "Text 5 copied to clipboard";
    });
    
    copyButton6.addEventListener("click", () => {
      navigator.clipboard.writeText("Text 6");
      output.innerText = "Text 6 copied to clipboard";
    });
    
    copyButton7.addEventListener("click", () => {
      navigator.clipboard.writeText("Text 7");
      output.innerText = "Text 7 copied to clipboard";
    });
    
    copyButton8.addEventListener("click", () => {
      navigator.clipboard.writeText("Text 8");
      output.innerText = "Text 8 copied to clipboard";
    });

     copyButton9.addEventListener("click", () => {
      navigator.clipboard.writeText("Text 9");
      output.innerText = "Text 9 copied to clipboard";
    });

      copyButton10.addEventListener("click", () => {
        navigator.clipboard.writeText("Text 10");
        output.innerText = "Text 10 copied to clipboard";
    });