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

// Escucha el clic en el ícono del carrito
document.getElementById("icono-carrito").addEventListener("click", function(event) {
    // Aquí puedes agregar lógica para validar
    window.location.href = "carrito.html";
  });
  
// Filtrar por categoría
function filtrarPor(categoria) {
  const productos = document.querySelectorAll(".product");

  productos.forEach((producto) => {
    const categoriaProducto = producto.getAttribute("data-category");

    if (categoria === "Todos" || categoriaProducto === categoria) {
      producto.classList.remove("hidden"); // Mostrar
    } else {
      producto.classList.add("hidden"); // Ocultar
    }
  });


}

// Ordenar por nombre
function ordenarPor(orden) {
  const contenedor = document.querySelector(".gallery"); // Contenedor de los productos
  const productos = Array.from(contenedor.querySelectorAll(".product"));

  productos.sort((a, b) => {
    const nombreA = a.querySelector("h3").textContent.toLowerCase();
    const nombreB = b.querySelector("h3").textContent.toLowerCase();

    if (orden === "asc") {
      return nombreA.localeCompare(nombreB);
    } else {
      return nombreB.localeCompare(nombreA);
    }
  });

  // Vaciar el contenedor y volver a agregar los productos en el nuevo orden
  contenedor.innerHTML = "";
  productos.forEach((producto) => contenedor.appendChild(producto));


}

document.addEventListener('DOMContentLoaded', function() {
  const selectCakeButtons = document.querySelectorAll('.select-cake');
  const modalImage = document.getElementById('cake-image');
  const modalName = document.getElementById('cake-name');
  const modalPrice = document.getElementById('cake-price');
  const modalQuantity = document.getElementById('quantity');
  
  selectCakeButtons.forEach(button => {
      button.addEventListener('click', function() {
          const cakeId = this.getAttribute('data-cake-id');
          const cakeName = this.getAttribute('data-cake-name');
          const cakeImg = this.getAttribute('data-cake-img');
          const cakePrice = this.getAttribute('data-cake-price');

          modalImage.src = cakeImg;
          modalName.textContent = cakeName;
          modalPrice.textContent = `Precio: $${cakePrice}`;
          modalQuantity.value = 1; // Reset quantity to 1
      });
  });
});




  document.addEventListener("DOMContentLoaded", () => {
    const agregarCarritoBtn = document.getElementById("agregarCarritoBtn");
    const carritoKey = "carrito";
  
    if (!agregarCarritoBtn) {
      console.error("Botón 'Agregar al carrito' no encontrado.");
      return;
    }
  
    agregarCarritoBtn.addEventListener("click", () => {
      // Validar que los elementos existen
      const nombre = document.getElementById("pastelModalLabel")?.textContent || "Producto sin nombre";
      const cantidadInput = document.getElementById("quantity");
      const sizeSelect = document.getElementById("size");
  
      if (!cantidadInput || !sizeSelect) {
        console.error("Faltan elementos en el modal");
        return;
      }
  
      const cantidad = parseInt(cantidadInput.value, 10);
      const tamano = sizeSelect.value;
      const precioBase = 150;
      const precioTotal = cantidad * precioBase;
  
      const producto = { nombre, cantidad, tamano, precioTotal };
  
      // Guardar en el carrito
      const carrito = JSON.parse(localStorage.getItem(carritoKey)) || [];
      carrito.push(producto);
      localStorage.setItem(carritoKey, JSON.stringify(carrito));
  
      // Mostrar mensaje de éxito
      alert("¡Producto agregado al carrito con éxito!");
    });
  });
  