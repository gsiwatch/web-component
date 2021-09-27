class Tooltip extends HTMLElement {
    constructor() {
        super();
        this._tooltipcontainer;
    }

    connectedCallback() {
        const tooltipicon = document.createElement('span');
        tooltipicon.textContent = ' (?)';
        // bind it just to make sure that this is referred to this class only
        tooltipicon.addEventListener('mouseenter', this._showTooltip.bind(this));
        tooltipicon.addEventListener('mouseleave', this._hideTooltip.bind(this));
        this.appendChild(tooltipicon);
    }

    // convention indicating that I am calling it inside this class
    _showTooltip() {
        this._tooltipcontainer = document.createElement('div');
        this._tooltipcontainer.textContent = 'This is the tooltip text!';
        this.appendChild(this._tooltipcontainer);
    }
    
    _hideTooltip() {
        this.removeChild(this._tooltipcontainer);
    }
}

customElements.define('demo-tooltip', Tooltip); // to define the custom element
