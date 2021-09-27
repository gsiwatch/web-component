class Tooltip extends HTMLElement {
    constructor() {
        super();
        this._tooltipcontainer;
        this._tooltipText;
    }

    connectedCallback() {
        const tooltipicon = document.createElement('span');
        this._tooltipText = this.getAttribute('text');
        tooltipicon.textContent = ' (?)';
        tooltipicon.addEventListener('mouseenter', this._showTooltip.bind(this));
        tooltipicon.addEventListener('mouseleave', this._hideTooltip.bind(this));
        this.appendChild(tooltipicon);
    }

    _showTooltip() {
        this._tooltipcontainer = document.createElement('div');
        this._tooltipcontainer.textContent = 
            this._tooltipText ?? 'provide some text';
        this.appendChild(this._tooltipcontainer);
    }
    
    _hideTooltip() {
        this.removeChild(this._tooltipcontainer);
    }
}

customElements.define('demo-tooltip', Tooltip);
