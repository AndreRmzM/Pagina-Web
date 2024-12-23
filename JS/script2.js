// Función para mostrar/ocultar el menú desplegable
function toggleMenu() {
    const menu = document.getElementById('userMenu');
    menu.classList.toggle('show');
}

// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', (event) => {
    const menu = document.getElementById('userMenu');
    const userButton = document.querySelector('.user-button');
    if (!menu.contains(event.target) && !userButton.contains(event.target)) {
        menu.classList.remove('show');
    }
});

// Asignar el evento al botón del usuario
document.querySelector('.user-button').addEventListener('click', (event) => {
    event.stopPropagation(); // Evitar que el evento cierre el menú
    toggleMenu();
});

document.addEventListener("DOMContentLoaded", () => {
  const carritoTabla = document.getElementById("carritoTabla");
  const carritoKey = "carrito";
  const carrito = JSON.parse(localStorage.getItem(carritoKey)) || [];

  if (!carritoTabla) {
    console.error("Tabla del carrito no encontrada");
    return;
  }

  if (carrito.length === 0) {
    carritoTabla.innerHTML = "<tr><td colspan='4'>El carrito está vacío.</td></tr>";
    return;
  }

  carrito.forEach((producto) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${producto.nombre}</td>
      <td>${producto.cantidad}</td>
      <td>${producto.tamano}</td>
      <td>$${producto.precioTotal}</td>
    `;
    carritoTabla.appendChild(row);
  });
});
