


// Registro con validación de edad y descuento
function registrarUsuario() {
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const fecha = new Date(document.getElementById("fechaNacimiento").value);
  const password = document.getElementById("password").value;

  const edad = new Date().getFullYear() - fecha.getFullYear();
  if (edad < 18) {
    alert("Debes ser mayor de 18 años para registrarte.");
    return;
  }

  const descuento = email.includes("@duoc.cl");
  const usuario = { nombre, email, password, descuento };
  localStorage.setItem("usuario", JSON.stringify(usuario));
  alert("¡Registro exitoso!");
}
