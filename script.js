//const inputStr = document.getElementById("text-input").value;
const checkButton = document.getElementById("check-btn");
const showResult = document.getElementById("result");
 

const isNullValue = (string) => {
  return string === "";
}
 
const cleanInputValue = (string) => {
  const regex = /[\W]/g;
  return string.replace(regex, "");
} 

const noUnderscore = (string) => {
  const regex = /[_]/g;
  return string.replace(regex, "");
}
 
const reverse = (array) => { 
  const reverseArr = [];
  const count = array.length - 1;
  for (let i = 0; i <= count; i++) {
  reverseArr.unshift(array[i]);
  }
  let reverseStr = "";
  for (const character of reverseArr) {
    reverseStr = reverseStr + character;
  }
  return reverseStr;
}

const displayResults = (string) => {
  if (isNullValue(string)) {
    alert("Please input a value");
    showResult.innerText = "";
  } else {
    const stringLower = string.toLowerCase();
    const noUnderscoreInput = noUnderscore(stringLower);
    const characters = cleanInputValue(noUnderscoreInput).split("");
    if (reverse(characters) === cleanInputValue(noUnderscoreInput)) {
      showResult.innerText = `${string} is a palindrome`;
  } else {
    showResult.innerText = `${string} is not a palindrome`
  }
  console.log(string + "\n" + reverse(characters).split("") + "\n" + characters);
  }
}

checkButton.addEventListener("click", () => {
displayResults(document.getElementById("text-input").value);
  }
);