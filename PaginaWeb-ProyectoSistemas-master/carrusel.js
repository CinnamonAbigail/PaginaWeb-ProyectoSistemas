
const data = [
  {
    titulo: "Guerra del Pacífico",
    descripcion: "Conflicto entre Bolivia, Perú y Chile por el control del litoral y recursos minerales. Bolivia perdió su salida al mar tras la derrota.",
    fecha: "1879/02/19 – 1883/10/20",
    imagenes: ["img/pacifico1.jpg", "img/pacifico2.jpg"]
  },
  {
    titulo: "Guerra del Chaco",
    descripcion: "Conflicto entre Bolivia y Paraguay por el control del Chaco Boreal, zona rica en petróleo.",
    fecha: "1932/06/15 – 1935/06/12",
    imagenes: ["img/chaco1.jpg", "img/chaco2.jpg"]
  }
];

let indice = 0;

function mostrarDatos() {
  const guerra = data[indice];
  document.getElementById("titulo").textContent = guerra.titulo;
  document.getElementById("descripcion").textContent = guerra.descripcion;
  document.getElementById("fecha").textContent = guerra.fecha;
  document.getElementById("img-principal").src = guerra.imagenes[0];
  document.getElementById("img-secundaria").src = guerra.imagenes[1];
}

function siguiente() {
  indice = (indice + 1) % data.length;
  mostrarDatos();
}

function anterior() {
  indice = (indice - 1 + data.length) % data.length;
  mostrarDatos();
}

document.addEventListener("DOMContentLoaded", mostrarDatos);

