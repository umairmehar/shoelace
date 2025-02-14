import { Component, Event, Prop, h } from '@stencil/core';
/**
 * @since 2.0
 * @status stable
 *
 * @slot - The tag's content.
 *
 * @part base - The component's base wrapper.
 * @part content - The tag content.
 * @part clear-button - The clear button.
 */
export class Tag {
    constructor() {
        /** The tag's type. */
        this.type = 'primary';
        /** The tag's size. */
        this.size = 'medium';
        /** Set to true to draw a pill-style tag with rounded edges. */
        this.pill = false;
        /** Set to true to make the tag clearable. */
        this.clearable = false;
    }
    connectedCallback() {
        this.handleClearClick = this.handleClearClick.bind(this);
    }
    handleClearClick() {
        this.slClear.emit();
    }
    render() {
        return (h("span", { ref: el => (this.tag = el), part: "base", class: {
                tag: true,
                // Types
                'tag--primary': this.type === 'primary',
                'tag--success': this.type === 'success',
                'tag--info': this.type === 'info',
                'tag--warning': this.type === 'warning',
                'tag--danger': this.type === 'danger',
                'tag--text': this.type === 'text',
                // Sizes
                'tag--small': this.size === 'small',
                'tag--medium': this.size === 'medium',
                'tag--large': this.size === 'large',
                // Modifers
                'tag--pill': this.pill,
                'tag--clearable': this.clearable
            } },
            h("span", { part: "content", class: "tag__content" },
                h("slot", null)),
            this.clearable && (h("sl-icon-button", { part: "clear-button", name: "x", class: "tag__clear", onClick: this.handleClearClick }))));
    }
    static get is() { return "sl-tag"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["tag.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["tag.css"]
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
                "text": "The tag's type."
            },
            "attribute": "type",
            "reflect": true,
            "defaultValue": "'primary'"
        },
        "size": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'small' | 'medium' | 'large'",
                "resolved": "\"large\" | \"medium\" | \"small\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The tag's size."
            },
            "attribute": "size",
            "reflect": true,
            "defaultValue": "'medium'"
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
                "text": "Set to true to draw a pill-style tag with rounded edges."
            },
            "attribute": "pill",
            "reflect": true,
            "defaultValue": "false"
        },
        "clearable": {
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
                "text": "Set to true to make the tag clearable."
            },
            "attribute": "clearable",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get events() { return [{
            "method": "slClear",
            "name": "slClear",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the clear button is activated."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
