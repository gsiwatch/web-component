class Tooltip extends HTMLElement { // every component has to extend to it
    constructor() {
        super(); // have to call it first and it is required
        console.log('custom component is working!!');
    }
}

customElements.define('demo-tooltip', Tooltip); // to define the custom element
/**
 * rules: 
 *   1. custom component name has to have two name separated by dash so that we can distinguish 
 *      it with build in elements, underscore is not allowed
 *   2. it has to have the unique tag
 *   3. idea: use prefix that might go with your organization name 
 */
