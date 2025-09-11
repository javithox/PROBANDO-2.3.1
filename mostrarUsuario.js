
function mostrarUsuarios() {
  const usuarios = Object.values(Store.DB.users);

    if (usuarios.length === 0) {
      console.log("No hay usuarios registrados.");
      return;
    }
  }