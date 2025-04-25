const agregarAlContenedor = require("./AgregarAct");
const funcionHandlerSend = require("./funcionHandlerSend");
const axios = require("axios");

const fetchMovies = async () => {
  try {
    const data = await axios.get("http://localhost:3000/movies");
    agregarAlContenedor(data.data);
  } catch (err) {
    throw Error("este es tu error: ", err);
  }
};
fetchMovies();

const movieForm = document.querySelector("#movieForm");
const botonLimpiar = document.querySelector("#botonLimpiar");

if (movieForm) {
  movieForm.addEventListener("submit", funcionHandlerSend);
}

if (botonLimpiar) {
  botonLimpiar.addEventListener("click", () => {
    movieForm.reset();
  });
}

// function getData () {
//   $.get("https://students-api.up.railway.app/movies", (data) => {
//     agregarAlContenedor(data);
//   });
// }

// getData();

// const promise = axios("https://students-api.up.railway.app/movies");

// promise
// .then((res) => {
//    agregarAlContenedor(res.data)
// })

// .catch((err) => {
//    alert("No se pudo realizar la carga de las imagenes con fetchMoviesPromise!");
// })
