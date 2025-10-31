// === EFECTO EN NAVBAR AL HACER SCROLL ===
window.addEventListener("scroll", function () {
  const nav = document.querySelector(".barra-navegacion");

  if (nav) {
    if (window.scrollY > 50) {
      nav.classList.add("scroll-activo");
    } else {
      nav.classList.remove("scroll-activo");
    }
  }
});

// === CARRUSEL AUTOMÁTICO DE BIENVENIDA ===
document.addEventListener("DOMContentLoaded", () => {
  const carrusel = document.querySelector(".carrusel-imagenes");
  const imagenes = document.querySelectorAll(".carrusel-imagenes img");

  if (carrusel && imagenes.length > 0) {
    let indice = 0;

    function cambiarImagen() {
      indice = (indice + 1) % imagenes.length;
      carrusel.style.transform = `translateX(-${indice * 100}%)`;
    }

    setInterval(cambiarImagen, 3000);
  }

  // === CARRUSEL DE EXPERIENCIAS ===
  const testimonios = document.querySelectorAll(".testimonio");
  const puntos = document.querySelectorAll(".punto");
  const btnIzq = document.querySelector(".boton-carrusel.izquierda");
  const btnDer = document.querySelector(".boton-carrusel.derecha");

  let indiceActual = 0;

  function mostrarTestimonio(indice) {
    testimonios.forEach((testimonio, i) => {
      testimonio.classList.remove("activo");
      puntos[i]?.classList.remove("activo");
    });

    testimonios[indice].classList.add("activo");
    puntos[indice]?.classList.add("activo");
  }

  // Botones manuales
  if (btnIzq && btnDer) {
    btnIzq.addEventListener("click", () => {
      indiceActual = (indiceActual - 1 + testimonios.length) % testimonios.length;
      mostrarTestimonio(indiceActual);
    });

    btnDer.addEventListener("click", () => {
      indiceActual = (indiceActual + 1) % testimonios.length;
      mostrarTestimonio(indiceActual);
    });
  }

  // Puntos de navegación
  puntos.forEach((punto, i) => {
    punto.addEventListener("click", () => {
      indiceActual = i;
      mostrarTestimonio(indiceActual);
    });
  });

  // ✅ Cambio automático de testimonios
  if (testimonios.length > 0) {
    setInterval(() => {
      indiceActual = (indiceActual + 1) % testimonios.length;
      mostrarTestimonio(indiceActual);
    }, 5000); // cada 5 segundos
  }

  // === BOTÓN DE UBICACIÓN ===
  const ubicacion = document.getElementById("abrirUbicacion");
  if (ubicacion) {
    ubicacion.addEventListener("click", (e) => {
      e.preventDefault();
      window.open(
        "https://www.google.com/maps/place/Plaza+Murillo,+La+Paz,+Bolivia",
        "_blank"
      );
    });
  }
});
