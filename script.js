console.log("JS connected");

const buttons = document.querySelectorAll(".project-tile");
const cards = document.querySelectorAll(".project-card");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    displayCard(i);
  });
}
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {
    cards[i].classList.add("hidden");
  });
}
function displayCard(index) {
  cards[index].classList.remove("hidden");
}
