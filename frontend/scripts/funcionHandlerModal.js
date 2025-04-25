function funcionHandlerModal() {
    const title = this.getAttribute("data-title");
    const year = this.getAttribute("data-year");
    const director = this.getAttribute("data-director");
    const duration = this.getAttribute("data-duration");
    const genre = this.getAttribute("data-genre");
    const rate = this.getAttribute("data-rate");
    mostrarModal(title, year, director, duration, genre, rate);
  }
  
  function mostrarModal(title, year, director, duration, genre, rate) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
  
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
  
    const titulo = document.createElement("h2");
    titulo.textContent = title;
  
    const año = document.createElement("p");
    año.textContent = year;
  
    const direccion = document.createElement("p");
    direccion.textContent = director;
  
    const duracion = document.createElement("p");
    duracion.textContent = duration;
  
    const genero = document.createElement("p");
    genero.textContent = genre;
  
    const puntuacion = document.createElement("p");
    puntuacion.textContent = rate;
  
    modalContent.appendChild(titulo);
    modalContent.appendChild(año);
    modalContent.appendChild(direccion);
    modalContent.appendChild(duracion);
    modalContent.appendChild(genero);
    modalContent.appendChild(puntuacion);
  
    modal.appendChild(modalContent);
  
    document.body.appendChild(modal);
  
    modal.style.display = "block";
  
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }
  
  module.exports = {
    funcionHandlerModal,
  };
  