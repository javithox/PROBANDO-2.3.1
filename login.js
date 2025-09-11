import Store from './login.js'; // importa el módulo que definimos antes

    window.loginUser = function(event) {
      event.preventDefault(); // evita que recargue la página

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const resultado = Store.Auth.login({ email, password });

      const msg = document.getElementById("mensaje");
      if (resultado.success) {
        msg.style.color = "green";
        msg.textContent = `✅ Bienvenido ${resultado.user.name || resultado.user.email}`;
      } else {
        msg.style.color = "red";
        msg.textContent = `❌ Error: ${resultado.error}`;
      }
    }