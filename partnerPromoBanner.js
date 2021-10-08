class PartnerPromoBanner extends HTMLElement {
    constructor() {
        super();
        console.log('custom component is working!!');
    }
}

customElements.define('rocket-partner-promo-banner', PartnerPromoBanner);
