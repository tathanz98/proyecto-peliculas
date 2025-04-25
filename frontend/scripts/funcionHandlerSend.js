const crearMovie = require("./indexPost.js");

function funcionHandlerSend(event) {
  event.preventDefault();

  const { title, year, director, duration, rate, poster } = movieForm;

  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  const genreSelect = [];
  checkboxes.forEach((checkbox) => {
    genreSelect.push(checkbox.value);
  });

  const movieData = {
    title: title.value,
    year: year.value,
    director: director.value,
    duration: duration.value,
    genre: genreSelect,
    rate: rate.value,
    poster: poster.value,
  };

  if (
    !movieData.title ||
    !movieData.year ||
    !movieData.director ||
    !movieData.duration ||
    !movieData.genre ||
    !movieData.rate ||
    !movieData.poster
  ) {
    alert("Por favor, complete todos los campos.");
    return;
  }
  crearMovie(movieData);
}

module.exports = funcionHandlerSend;
