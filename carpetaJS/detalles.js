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
  window.addEventListener("scroll", function () {
    const nav = document.querySelector(".barra-navegacion");
  
    if (window.scrollY > 50) {
      nav.classList.add("scroll-activo");
    } else {
      nav.classList.remove("scroll-activo");
    }
  });