import { Component, Prop, h } from '@stencil/core';
/**
 * @since 2.0
 * @status stable
 *
 * @part base - The component's base wrapper.
 * @part indicator - The skeleton's indicator which is responsible for its color and animation.
 */
export class Skeleton {
    constructor() {
        /** Determines which effect the skeleton will use. */
        this.effect = 'sheen';
    }
    render() {
        return (h("div", { part: "base", class: {
                skeleton: true,
                'skeleton--pulse': this.effect === 'pulse',
                'skeleton--sheen': this.effect === 'sheen'
            }, "aria-busy": true, "aria-live": "polite" },
            h("div", { part: "indicator", class: "skeleton__indicator" })));
    }
    static get is() { return "sl-skeleton"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["skeleton.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["skeleton.css"]
    }; }
    static get properties() { return {
        "effect": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'pulse' | 'sheen' | 'none'",
                "resolved": "\"none\" | \"pulse\" | \"sheen\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Determines which effect the skeleton will use."
            },
            "attribute": "effect",
            "reflect": false,
            "defaultValue": "'sheen'"
        }
    }; }
}
