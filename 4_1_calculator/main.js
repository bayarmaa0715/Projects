const historyFace = document.getElementById("historyFace");
const resultFace = document.getElementById("resultFace");
const percentBtn = document.getElementById("percentBtn");
const neeltSymbolBtn = document.getElementById("neeltSymbolBtn");
const haaltSymbolBtn = document.getElementById("haaltSymbolBtn");
const dotBtn = document.getElementById("dotBtn");
const deleteBtn = document.getElementById("deleteBtn");
const btns = document.getElementsByClassName("btn-num");
const opBtns = document.getElementsByClassName("operator");

let a = 0;
let opValue = 0;

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    resultFace.textContent += btns[i].textContent;
  });
}

for (let i = 0; i < opBtns.length; i++) {
  opBtns[i].addEventListener("click", () => {
    a = resultFace.textContent;
    console.log(a);
    opValue = opBtns[i].innerText;

    resultFace.textContent = "";
  });
}

equalBtn.addEventListener("click", function () {
  let hariu = 0;
  if (opValue === "+") {
    hariu = parseFloat(a) + parseFloat(resultFace.textContent);
  } else if (opValue === "-") {
    hariu = parseFloat(a) - parseFloat(resultFace.textContent);
  } else if (opValue === "*") {
    hariu = parseFloat(a) * parseFloat(resultFace.textContent);
  } else if (opValue === "/") {
    hariu = parseFloat(a) / parseFloat(resultFace.textContent);
  }

  // let hariu = a + resultFace.textContent;
  console.log(hariu);
  resultFace.textContent = hariu;
});

deleteBtn.addEventListener("click", function () {
  resultFace.textContent = "";
  console.log(resultFace);
});
