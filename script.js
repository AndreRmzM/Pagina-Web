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