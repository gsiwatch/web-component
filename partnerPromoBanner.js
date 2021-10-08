class PartnerPromoBanner extends HTMLElement {
    constructor() { // this will run during initializing the class 
        super();
    }

    connectedCallback() { // this hook will run custom element will be connected to DOM
        const pContainer = document.createElement("p");
        pContainer.textContent = 'Hello WebComponent';
        // right now this is a part of DOM
        this.appendChild(pContainer);
    }
}

customElements.define('rocket-partner-promo-banner', PartnerPromoBanner);
