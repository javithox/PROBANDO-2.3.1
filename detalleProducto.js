        document.addEventListener('DOMContentLoaded', () => {
            
            function actualizarTotales() {
                let totalAcumulado = 0;
                // Buscamos las tarjetas con la clase nueva Lu-product-card
                const productos = document.querySelectorAll('.Lu-product-card');
                
                productos.forEach(producto => {
                    const precio = parseFloat(producto.getAttribute('data-precio'));
                    const cantidad = parseInt(producto.querySelector('.input-cantidad').value);
                    totalAcumulado += precio * cantidad;
                });

                document.getElementById('subtotal').textContent = `$${totalAcumulado.toFixed(2)}`;
                document.getElementById('total-final').textContent = `$${totalAcumulado.toFixed(2)}`;
            }

            document.querySelectorAll('.btn-sumar').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const input = e.target.closest('.input-group').querySelector('.input-cantidad');
                    let valor = parseInt(input.value);
                    input.value = valor + 1;
                    actualizarTotales();
                });
            });

            document.querySelectorAll('.btn-restar').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const input = e.target.closest('.input-group').querySelector('.input-cantidad');
                    let valor = parseInt(input.value);
                    if (valor > 1) {
                        input.value = valor - 1;
                        actualizarTotales();
                    }
                });
            });

            document.querySelectorAll('.btn-eliminar').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    if(confirm('¿Eliminar este item?')) {
                        const productoCard = e.target.closest('.Lu-product-card');
                        productoCard.remove();
                        actualizarTotales();
                    }
                });
            });

        });