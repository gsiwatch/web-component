class PartnerPromoBanner extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const pContainer = document.createElement("p");
        pContainer.textContent = this.getAttribute('name') || 'Hello WebComponent';
        pContainer.style.backgroundColor = 'yellow';
        this.shadowRoot.appendChild(pContainer);
    }
}

customElements.define('rocket-partner-promo-banner', PartnerPromoBanner);
