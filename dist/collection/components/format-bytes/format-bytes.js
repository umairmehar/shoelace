import { Component, Prop } from '@stencil/core';
import { formatBytes } from '../../utilities/number';
/**
 * @since 2.0
 * @status stable
 */
export class FormatBytes {
    constructor() {
        /** The number to format in bytes. */
        this.value = 0;
        /** The unit to display. */
        this.unit = 'bytes';
    }
    render() {
        return formatBytes(this.value, {
            unit: this.unit,
            locale: this.locale
        });
    }
    static get is() { return "sl-format-bytes"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "value": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The number to format in bytes."
            },
            "attribute": "value",
            "reflect": false,
            "defaultValue": "0"
        },
        "unit": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'bytes' | 'bits'",
                "resolved": "\"bits\" | \"bytes\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The unit to display."
            },
            "attribute": "unit",
            "reflect": false,
            "defaultValue": "'bytes'"
        },
        "locale": {
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
                "text": "The locale to use when formatting the number."
            },
            "attribute": "locale",
            "reflect": false
        }
    }; }
}
