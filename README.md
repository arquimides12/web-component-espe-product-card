# web-component-espe-product-card-
Componente personalizado en LitElement con integración de identidad visual de la ESPE

# <espe-product-card> – Componente Web con LitElement

## 🎯 Objetivo

Personalizar el comportamiento de un Web Componente usando **LitElement**, integrando:

- Estados dinámicos con `@property`
- Temas y estilos alineados al **Manual de Imagen de la ESPE**
- Eventos personalizados para la comunicación entre componentes
- Buenas prácticas de desarrollo sin dependencia de código generado por IA

---

## 🧩 Estructura del Proyecto

📦 web-component-espe-product-card/
├── 📁 components/
│ └── espe-product-card.js
├── 📄 README.md

## 🖼️ Descripción del Componente

`<espe-product-card>` es una tarjeta de producto que representa información básica como nombre y precio, con opción de seleccionarlo. Adapta su comportamiento visual y funcional según el estado:

- Si el producto está **agotado**, se desactiva el botón.
- Si el estado es **loading**, se muestra un spinner.
- Los eventos permiten comunicar que un producto fue seleccionado.

---

## 🔧 Uso

### HTML

```html
<espe-product-card 
  nombre="Camiseta ESPE" 
  precio="19.99" 
  loading 
  agotado
></espe-product-card> 


``` JS (escuchar eventos)
js
Copiar
Editar
document.querySelector('espe-product-card')
  .addEventListener('product-selected', e => {
    console.log(e.detail); // { nombre: "Camiseta ESPE", precio: 19.99 }
  });  ``` 