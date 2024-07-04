const historyFace = document.getElementById("historyFace");
const resultFace = document.getElementById("resultFace");
const percentBtn = document.getElementById("percentBtn");

const multiplyBtn = document.getElementById("multiplyBtn");
const divideBtn = document.getElementById("divideBtn");
const minusBtn = document.getElementById("minusBtn");
const equalBtn = document.getElementById("equalBtn");
const plusBtn = document.getElementById("plusBtn");

const neeltSymbolBtn = document.getElementById("neeltSymbolBtn");
const haaltSymbolBtn = document.getElementById("haaltSymbolBtn");
const dotBtn = document.getElementById("dotBtn");
const deleteBtn = document.getElementById("deleteBtn");

const btns = document.getElementsByClassName("btn-num");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    resultFace.textContent += btns[i].textContent;
  });
}

// plusBtn.addEventListener("click", function () {
//   resultFace.textContent += this.textContent;
// });

// equalBtn.addEventListener("click", function () {
//   resultFace.textContent = eval(resultFace.textContent);
// });

const symbol = [multiplyBtn, divideBtn, minusBtn, plusBtn];

for (let i = 0; i < symbol.length; i++) {
  symbol[i].addEventListener("click", () => {
    resultFace.textContent += symbol[i].textContent;
    resultFace.textContent = eval(resultFace.textContent);
  });
}

equalBtn.addEventListener("click", function () {
  resultFace.textContent = eval(resultFace.textContent);
});

deleteBtn.addEventListener("click", function () {
  resultFace.textContent = "";
  console.log(resultFace);
});
