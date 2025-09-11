// Lista de productos
const productos = [
  { id: 1, nombre: "Catan", categoria: "juegos", precio: 25000 },
  { id: 2, nombre: "PlayStation 5", categoria: "consolas", precio: 550000 },
  { id: 3, nombre: "Mouse Gamer", categoria: "accesorios", precio: 15000 },
];

let carrito = [];

// Mostrar productos
function mostrarProductos(lista) {
  const contenedor = document.getElementById("productos");
  contenedor.innerHTML = "";
  lista.forEach(p => {
    contenedor.innerHTML += `
      <div>
        <strong>${p.nombre}</strong> - $${p.precio}
        <button onclick="agregarAlCarrito(${p.id})">Agregar</button>
      </div>
    `;
  });
}
mostrarProductos(productos);

// Filtro
function filtrarProductos() {
  const filtro = document.getElementById("filtroCategoria").value;
  const filtrados = filtro ? productos.filter(p => p.categoria === filtro) : productos;
  mostrarProductos(filtrados);
}
