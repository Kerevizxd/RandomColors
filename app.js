const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// background color changer
btn.addEventListener("click", function () {
  // get random number between 0 and 3 because we got an array that has 4 items
  const randomNumber = getRandomNumber();
  console.log(randomNumber)
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
