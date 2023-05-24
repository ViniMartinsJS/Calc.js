const calculate = () => {
  const resultInput = document.getElementById("result");
  const input = document.getElementById("input");

  resultInput.value = "ERROR";
  resultInput.classList.add("error");

  const result = eval(input.value);

  if (isNaN(result)) {
    resultInput.value = "Invalid input";
    resultInput.classList.add("error");
  } else {
    resultInput.value = result;
    resultInput.classList.remove("error");
  }
};

export default calculate;
