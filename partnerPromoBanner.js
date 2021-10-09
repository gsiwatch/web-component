class PartnerPromoBanner extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        // we can make use of <slot> too if we want to pass verbiage
        this.shadowRoot.innerHTML = `
            <style>
                p {
                    background-color: orange;
                    color: yellow;
                }
            </style>
            <p> hello world!! </p>
        `
    }
}

customElements.define('rocket-partner-promo-banner', PartnerPromoBanner);
