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


document.addEventListener('DOMContentLoaded', () => {
    
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que la página se recargue

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const msg = document.getElementById("mensaje");

        // Llamamos a la lógica de store.js
        const resultado = Store.Auth.login({ email, password });

        if (resultado.success) {
            // ÉXITO
            msg.style.color = "#39FF14"; // Verde neón
            msg.innerHTML = `<i class="bi bi-check-circle"></i> Bienvenido, ${resultado.user.name}`;
            
            // Redireccionar después de 1.5 segundos
            setTimeout(() => {
                window.location.href = "detalleProducto.html"; 
            }, 1500);

        } else {
            // ERROR
            msg.style.color = "#ff3333"; // Rojo
            msg.innerHTML = `<i class="bi bi-exclamation-triangle"></i> ${resultado.error}`;
            
            // Animación simple de error (sacudida)
            const card = document.querySelector('.Lu-product-card');
            card.style.transform = 'translateX(10px)';
            setTimeout(() => card.style.transform = 'translateX(-10px)', 100);
            setTimeout(() => card.style.transform = 'translateX(0)', 200);
        }
    });
});
