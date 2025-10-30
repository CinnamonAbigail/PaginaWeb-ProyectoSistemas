window.addEventListener("scroll", function () {
    const nav = document.querySelector(".barra-navegacion");
  
    if (window.scrollY > 50) {
      nav.classList.add("scroll-activo");
    } else {
      nav.classList.remove("scroll-activo");
    }
  });
  
  const testimonios = document.querySelectorAll('.testimonio');
  const puntos = document.querySelectorAll('.punto');
  const btnIzq = document.querySelector('.boton-carrusel.izquierda');
  const btnDer = document.querySelector('.boton-carrusel.derecha');
  
  let indiceActual = 0;
  
  function mostrarTestimonio(indice) {
    testimonios.forEach((testimonio, i) => {
      testimonio.classList.remove('activo');
      puntos[i].classList.remove('activo');
    });
  
    testimonios[indice].classList.add('activo');
    puntos[indice].classList.add('activo');
  }
  
  btnIzq.addEventListener('click', () => {
    indiceActual = (indiceActual - 1 + testimonios.length) % testimonios.length;
    mostrarTestimonio(indiceActual);
  });
  
  btnDer.addEventListener('click', () => {
    indiceActual = (indiceActual + 1) % testimonios.length;
    mostrarTestimonio(indiceActual);
  });
  
  puntos.forEach((punto, i) => {
    punto.addEventListener('click', () => {
      indiceActual = i;
      mostrarTestimonio(indiceActual);
    });
  });
  
const guerras = [
  {
    titulo: "Guerra del Pacífico",
    descripcion: "Conflicto entre Bolivia, Perú y Chile por el control del litoral y recursos minerales. Bolivia perdió su salida al mar tras la derrota.",
    fecha: "1879/02/19 - 1883/10/20",
    imgGrande: "./img/Krustytheclown.png",
    imgPequena: "./img/f1b2cd83-31b4-40df-8be3-ab295b07eb29.jpg"
  },
  {
    titulo: "Batalla de Tacna",
    imgGrande: "./img/f1b2cd83-31b4-40df-8be3-ab295b07eb29.jpg",
    imgPequena: "./img/Krustytheclown.png"
  }
];

let indiceGuerra = 0;

const textoGuerra = document.getElementById("texto-guerra");
const imgGrande = document.getElementById("imagen-grande").querySelector("img");
const imgPequena = document.getElementById("imagen-pequena").querySelector("img");

function actualizarCarrusel() {
  const guerra = guerras[indiceGuerra];

  const esPrimera = indiceGuerra === 0;
  const claseTitulo = esPrimera ? "titulo-guerra" : "titulo-batalla";
  const claseTexto = esPrimera ? "texto-guerras izquierda" : "texto-guerras centrada";

  textoGuerra.className = claseTexto;

  // html dinamico de botones según guerra
  let botonesHTML = "";
  if (esPrimera) {
    botonesHTML = `
      <button id="btn-batallas" class="btn-vermas boton-izquierda">Ver batallas</button>
      <button id="btn-tratados" class="btn-vermas boton-izquierda">Ver tratados</button>
    `;
  } else {
    botonesHTML = `
      <button id="btn-detalles" class="btn-vermas">Ver detalles</button>
      <button id="btn-personajes" class="btn-vermas">Personajes</button>
    `;
  }

  // Actualizar contenido html del carrusel
  textoGuerra.innerHTML = `
    <h2 class="${claseTitulo}">${guerra.titulo}</h2>
    ${esPrimera ? `<p class="descripcion-guerra">${guerra.descripcion}</p>` : ""}
    ${esPrimera ? `<p class="descripcion-guerra">${guerra.fecha}</p>` : ""}
    ${botonesHTML}
  `;

  // Actualizar imagenes
  imgGrande.src = guerra.imgGrande;
  imgPequena.src = guerra.imgPequena;

  // Redireccionar los botones
  if (esPrimera) {
    document.getElementById("btn-batallas").addEventListener("click", () => {
      window.location.href = "batallas.html"; // redic
    });
    document.getElementById("btn-tratados").addEventListener("click", () => {
      window.location.href = "tratados.html";
    });
  } else {
    document.getElementById("btn-detalles").addEventListener("click", () => {
      window.location.href = "detalles.html";
    });
    document.getElementById("btn-personajes").addEventListener("click", () => {
      window.location.href = "personajes.html";
    });
  }
}

// Botones de navegación
document.querySelector(".flecha-der").addEventListener("click", () => {
  indiceGuerra = (indiceGuerra + 1) % guerras.length;
  actualizarCarrusel();
});

document.querySelector(".flecha-izq").addEventListener("click", () => {
  indiceGuerra = (indiceGuerra - 1 + guerras.length) % guerras.length;
  actualizarCarrusel();
});

// Mostrar la primera guerra al cargar
actualizarCarrusel();

  

// Abrir modal al hacer clic en el ícono
document.getElementById("abrirFormulario").addEventListener("click", abrirModal);

//para abrir el modal
function abrirModal() {
  const modal = document.getElementById("modalMensaje");
  modal.classList.add("activo");
}

//para cerrar el modal
function cerrarModal() {
  const modal = document.getElementById("modalMensaje");
  modal.classList.remove("activo");
}

// Esto cierra el modal al hacer clic 
window.addEventListener("click", function(event) {
  const modal = document.getElementById("modalMensaje");
  if (event.target === modal) {
    cerrarModal();
  }
});
document.addEventListener('DOMContentLoaded', function () {
    const abrirTelefono = document.getElementById('abrirTelefono');
    const cerrarTelefono = document.getElementById('cerrarTelefono');
    const modalTelefono = document.getElementById('modalTelefono');

    abrirTelefono.addEventListener('click', function (e) {
      e.preventDefault();
      modalTelefono.classList.add('activo');
    });

    cerrarTelefono.addEventListener('click', function () {
      modalTelefono.classList.remove('activo');
    });
  });


// === CARRUSEL AUTOMÁTICO DE BIENVENIDA ===
document.addEventListener("DOMContentLoaded", () => {
  const carrusel = document.querySelector(".carrusel-imagenes");
  const imagenes = document.querySelectorAll(".carrusel-imagenes img");
  let indice = 0;

  function cambiarImagen() {
    indice = (indice + 1) % imagenes.length;
    carrusel.style.transform = `translateX(-${indice * 100}%)`;
  }

  // Cambia cada 4 segundos
  setInterval(cambiarImagen, 4000);
});
