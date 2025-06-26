import '../components/espe-product-card.js';
// Ejemplo: cambiar estados dinámicamente después de 2 s
const card = document.getElementById('dinamica');

setTimeout(() => {
  card.loading = true;     // muestra spinner
}, 2000);

setTimeout(() => {
  card.loading = false;    // quita spinner
  card.agotado  = true;    // desactiva botón
}, 4000);

// Captura del evento personalizado
document.addEventListener('product-selected', (e) => {
  console.log('Producto seleccionado →', e.detail);
});