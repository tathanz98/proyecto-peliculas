const { funcionHandlerModal } = require("./funcionHandlerModal");

function crearElementosHtml(pelicula) {
  const cardHtml = `
    <div class="card" style="width: 18rem;">
      <img src="${pelicula.poster}" class="card-img-top imagen" alt="${pelicula.title}">
      <div class="card-body colorCard">
        <h5 class="titulo">${pelicula.title}</h5>
      </div>
      <div class="infoPeli colorCard tituloSec">
        <p> ${pelicula.year} - ${pelicula.director} - ${pelicula.duration}</p>
      </div>
    </div>
  `;

  const boton = document.createElement("button");
  boton.innerHTML = "Ver ahora";
  boton.classList.add("btn", "btn-outline-secondary", "btn-lg");
  boton.setAttribute("data-title", pelicula.title);
  boton.setAttribute("data-year", `Año de estreno: ${pelicula.year}`);
  boton.setAttribute("data-director", `Director: ${pelicula.director}`);
  boton.setAttribute("data-duration", `Duración: ${pelicula.duration}`);
  boton.setAttribute("data-genre", `Género: ${pelicula.genre}`);
  boton.setAttribute("data-rate", `Puntuación: ${pelicula.rate}`);

  const contenedor = document.createElement("div");
  contenedor.classList.add("claseHover");
  contenedor.innerHTML = cardHtml;
  contenedor.appendChild(boton);

  boton.addEventListener("click", funcionHandlerModal);

  return contenedor;
}

module.exports = crearElementosHtml;
