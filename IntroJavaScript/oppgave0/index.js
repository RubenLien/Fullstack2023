//oppgave 1

let btn = document.querySelector("#remove-btn");
let removeText = document.querySelector("#remove");

btn.addEventListener("click", () => {
  removeText.remove();
});

// Oppgave 2

let btn1 = document.querySelector("#change-btn");
let changeText = document.querySelector("#change");

btn1.addEventListener("click", () => {
  changeText.textContent = "Text has been changed";
});

// Oppgave 3

let input = document.querySelector("#input");
let output = document.querySelector("#input-text");

input.addEventListener("input", () => {
  const inputValue = input.value;

  output.textContent = inputValue;
});

// Oppgave 4

let btn2 = document.querySelector("#write-list");
let outputList = document.querySelector("#ul");
const myList = ["item one", "item two", "item three"];

btn2.addEventListener("click", () => {
  outputList.innerHTML = "";
  for (const item of myList) {
    const li = document.createElement("li");
    li.textContent = item;
    outputList.appendChild(li);
  }
});

// Oppgave 5

const btn3 = document.querySelector("#create");
const select = document.querySelector("#select");
const textInput = document.querySelector("#text");
const placeholder = document.querySelector("#placeholder");

btn3.addEventListener("click", () => {
  const selectedTag = select.value;
  const inputText = textInput.value;

  if (selectedTag && inputText) {
    const newElement = document.createElement(selectedTag);
    newElement.textContent = inputText;
    placeholder.appendChild(newElement);

    textInput.value = "";
  }
});

// Oppgave 6

const btn4 = document.querySelector("#remove-li");
const list = document.querySelector("#list");

btn4.addEventListener("click", () => {
  const li = list.querySelector("li");
  if (li) {
    list.removeChild(list.childNodes[0]);
  }
});

// Oppgave 7

const nameInput = document.querySelector("#name");
const btn5 = document.querySelector("#order");

nameInput.addEventListener("input", () => {
  const nameValue = nameInput.value;
  if (nameValue.length > 4) {
    btn5.disabled = true;
    btn5.classList.add("red-border");
  } else {
    btn5.disabled = false;
    btn5.classList.remove("red-border");
  }
});

// Oppgave 8

const color = document.querySelector("#color");
const listItems = document.querySelectorAll(".children li");

color.addEventListener("click", () => {
  listItems.forEach((item, i) => {
    if (i % 2 === 0) {
      item.style.border = "4px solid green";
    } else {
      item.style.border = "4px solid pink";
    }
  });
});
