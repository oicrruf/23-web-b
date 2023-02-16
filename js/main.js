const screen = document.querySelector(".atm-system__screen");
const inputCard = document.querySelector(".atm-system__card");

// const key = document.querySelectorAll(".atm-system__keys");
// key[0].addEventListener("click", (event) => console.log(event.target.id));
// key[4].addEventListener("click", (event) => console.log(event.target.id));

const keys = document.querySelector(".atm-system__input-keys");
let pin = [];
let state = "";

const validatePin = (pin_keys) => {
  if (pin_keys.toLocaleString().replaceAll(",", "") === "0000") {
    // Convertimos el array a string y reemplazamos las , (comas) y validamos que el resultado sea igual a 0000
    console.log(pin_keys)
    screen.innerText = "Pin ingresado es correcto";
  } else {
    console.log(pin_keys)
    screen.innerText = "Pin ingresado es incorrecto";
  }
};

keys.addEventListener("click", (event) => {
  if (event.target.id) {
    // Sí tiene id va a entrar
    // Recogemos el valor de el id y hacemos push al array pin
    if (state === "login" && pin.length <= 4) {
      pin.push(event.target.id);
      // Ejecutamos la función para validar el pin
      if (pin.length === 4) {
        // Validamos la longitud
        validatePin(pin);
      }
    }
  } else {
    console.log("Tecla sin función");
  }
});

inputCard.addEventListener("click", function () {
  screen.innerText = "Validando tarjeta...";
  setTimeout(() => {
    screen.innerText = "Ingrese su pin";
    state = "login";
  }, 2500);
});

window.addEventListener("load", () => {
  screen.innerText = "Bienvenido al ATM";
});

// function awake(parametro) {
//   console.log(parametro);
// }

// const sleep = (parametro) => {
//   console.log(parametro);
// };

// const sum = (a, b) => {
//   return a + b;
// };

// const sum = (a, b) => a + b;
// const sum = (a, b) => (a + b);

// awake("awake");
// sleep("sleep");
// sum(3, 5);

// console.log(sum(4, 8))

// PascalCase -> para clases
// camelCase -> para variables
// snake_case -> keys en un objeto

// const arr = ['victor', 37]
// const obj = {name: 'victor', age: 37}
// console.log(obj.name, obj.age)
