import { Component, Prop, h } from '@stencil/core';
/**
 * @since 2.0
 * @status stable
 *
 * @slot - The badge's content.
 *
 * @part base - The base wrapper
 */
export class Badge {
    constructor() {
        /** The badge's type. */
        this.type = 'primary';
        /** Set to true to draw a pill-style badge with rounded edges. */
        this.pill = false;
        /** Set to true to make the badge pulsate to draw attention. */
        this.pulse = false;
    }
    render() {
        return (h("span", { ref: el => (this.badge = el), part: "base", class: {
                badge: true,
                // Types
                'badge--primary': this.type === 'primary',
                'badge--success': this.type === 'success',
                'badge--info': this.type === 'info',
                'badge--warning': this.type === 'warning',
                'badge--danger': this.type === 'danger',
                'badge--text': this.type === 'text',
                'badge--pill': this.pill,
                'badge--pulse': this.pulse
            }, role: "status" },
            h("slot", null)));
    }
    static get is() { return "sl-badge"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["badge.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["badge.css"]
    }; }
    static get properties() { return {
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'primary' | 'success' | 'info' | 'warning' | 'danger' | 'text'",
                "resolved": "\"danger\" | \"info\" | \"primary\" | \"success\" | \"text\" | \"warning\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The badge's type."
            },
            "attribute": "type",
            "reflect": false,
            "defaultValue": "'primary'"
        },
        "pill": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Set to true to draw a pill-style badge with rounded edges."
            },
            "attribute": "pill",
            "reflect": false,
            "defaultValue": "false"
        },
        "pulse": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Set to true to make the badge pulsate to draw attention."
            },
            "attribute": "pulse",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
