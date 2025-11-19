import { LitElement, html, css } from 'lit-element';

class EspeProductCard extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      border: 2px solid #003C71;
      border-radius: 10px;
      padding: 16px;
      max-width: 300px;
      background-color: white;
    }

    .nombre {
      font-size: 1.2em;
      color: #003C71;
      margin-bottom: 8px;
    }

    .precio {
      color: #FFD700;
      font-weight: bold;
      margin-bottom: 12px;
    }

    button {
      background-color: #003C71;
      color: white;
      padding: 8px 16px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button[disabled] {
      background-color: gray;
      cursor: not-allowed;
    }

    .spinner {
      border: 3px solid #f3f3f3;
      border-top: 3px solid #003C71;
      border-radius: 50%;
      width: 14px;
      height: 14px;
      animation: spin 1s linear infinite;
      display: inline-block;
      vertical-align: middle;
      margin-left: 8px;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `;

  static get properties() {
    return {
      nombre: { type: String },
      precio: { type: Number },
      loading: { type: Boolean },
      agotado: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.nombre = 'Producto ESPE';
    this.precio = 0.0;
    this.loading = false;
    this.agotado = false;
  }

  handleClick() {
    if (this.agotado || this.loading) return;
    this.dispatchEvent(new CustomEvent('product-selected', {
      detail: {
        nombre: this.nombre,
        precio: this.precio
      },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="nombre">${this.nombre}</div>
      <div class="precio">$${this.precio.toFixed(2)}</div>
      <button 
        ?disabled=${this.agotado || this.loading}
        @click=${this.handleClick}
        role="button"
        tabindex="0"
        aria-label="Seleccionar ${this.nombre}"
      >
        ${this.agotado ? 'Agotado' : 'Seleccionar'}
        ${this.loading ? html`<span class="spinner"></span>` : ''}
      </button>
    `;
  }
}

customElements.define('espe-product-card', EspeProductCard);
