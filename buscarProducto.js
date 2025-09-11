function mostrarCatalogo(productos) {
  console.log("📋 Catálogo de Productos:");
  productos.forEach((p, i) => {
    console.log(`${i + 1}. ${p.name} | Categoría: ${p.category} | Precio: $${p.price} | Stock: ${p.stock}`);
  });
  return productos;
}