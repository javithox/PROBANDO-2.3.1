function editarProducto() {
    const productoeditado=Store.editarProducto({
        id: document.getElementById("id").value,
        nombre: document.getElementById("nombre").value, 

        categoria: document.getElementById("categoria").value,
        precio: parseFloat(document.getElementById("precio").value)
        });
    }