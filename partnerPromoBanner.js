class PartnerPromoBanner extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const pContainer = document.createElement("p");
        // to get attribute value
        pContainer.textContent = this.getAttribute('name') || 'Hello WebComponent';
        this.appendChild(pContainer);
    }
}

customElements.define('rocket-partner-promo-banner', PartnerPromoBanner);
