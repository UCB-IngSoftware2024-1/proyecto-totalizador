//import sumar from "./sumador";

const input_cantidad = document.querySelector("#cantidad");
const input_precio = document.querySelector("#precio");
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadNumber = Number.parseInt(input_cantidad.value);
  const precioNumber = Number.parseInt(input_precio.value);

  div.innerHTML = "<p> cantidad:" + totalizar(cantidad, precio) + "</p>";
});
