class Tooltip extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const tooltipicon = document.createElement('span');
        tooltipicon.textContent = ' (?)';
        this.appendChild(tooltipicon);
    }
}

customElements.define('demo-tooltip', Tooltip); // to define the custom element

/**
 * webComponent lifeCycle::
 *      1. constructor() called when the element is created - it is good for basic initializing
 *             - it is wrong place to access the element as at this point the element is not added 
 *               to the DOM
 *      2. connectedCallback(): this is called when the custom element is attached to the DOM
 *          therefore this is the place for DOMInitializations so that we can now start accessing 
 *          the DOM
 *      3. disconnectedCallback(): will be called whenever we will detach the customElement 
 *          from the DOM
 *      4. attributeChangedCallback(): this will be good to listen to the changes to the attribute to
 *          our own element
 *          can be used to updating the data 
 */