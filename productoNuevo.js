function agregarProducto() {
    const nuevoProducto = Store.agregarProducto({
        nombre: document.getElementById("nombre").value,
        categoria: document.getElementById("categoria").value,
        precio: parseFloat(document.getElementById("precio").value)
    });
    
}