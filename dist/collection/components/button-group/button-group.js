import { Component, Prop, h } from '@stencil/core';
/**
 * @since 2.0
 * @status stable
 *
 * @slot - One or more `<sl-button>` elements to display in the button group.
 *
 * @part base - The component's base wrapper.
 */
export class ButtonGroup {
    constructor() {
        /** A label to use for the button groups `aria-label` attribute. */
        this.label = '';
    }
    connectedCallback() {
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    componentDidLoad() {
        this.buttonGroup.addEventListener('slFocus', this.handleFocus);
        this.buttonGroup.addEventListener('slBlur', this.handleBlur);
    }
    disconnectedCallback() {
        this.buttonGroup.removeEventListener('slFocus', this.handleFocus);
        this.buttonGroup.removeEventListener('slBlur', this.handleBlur);
    }
    handleFocus(event) {
        const button = event.target;
        button.classList.add('sl-focus');
    }
    handleBlur(event) {
        const button = event.target;
        button.classList.remove('sl-focus');
    }
    render() {
        return (h("div", { ref: el => (this.buttonGroup = el), part: "base", class: "button-group", "aria-label": this.label },
            h("slot", null)));
    }
    static get is() { return "sl-button-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["button-group.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["button-group.css"]
    }; }
    static get properties() { return {
        "label": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "A label to use for the button groups `aria-label` attribute."
            },
            "attribute": "label",
            "reflect": false,
            "defaultValue": "''"
        }
    }; }
}
