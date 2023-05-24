import calculate from "./calculate.js";

const input = document.querySelector("#input");

const handleButtonPress = (ev) => {
  const value = ev.currentTarget.dataset.value;
  input.value += value;
};

const handleClear = (ev) => {
  input.value = "";
  input.focus();
};

const handleTyping = (ev) => {
  ev.preventDefault();
  const allowedKeys = [
    "(",
    ")",
    "/",
    "*",
    "-",
    "+",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "0",
    ".",
    "%",
    " ",
  ];
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === "Enter") {
    calculate();
  }
};
export { handleButtonPress, handleClear, handleTyping };
