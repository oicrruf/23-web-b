const screen = document.querySelector(".atm-system__screen");
const inputCard = document.querySelector(".atm-system__card");

screen.innerText = "Bienvenido al ATM";

inputCard.addEventListener("click", function () {
  alert("Insertó tarjeta");
});
