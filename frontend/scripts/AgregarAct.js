const crearElementosHtml = require("./crearElementosHtml");

const container = document.getElementById("container");

function agregarAlContenedor(data) {
  if (container) {
    const elementosHtml = data.map(crearElementosHtml);
    elementosHtml.forEach((movieCard) => container.appendChild(movieCard));
  }
}

module.exports = agregarAlContenedor;
