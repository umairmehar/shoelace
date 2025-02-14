import { Component, Element, Host, Prop, h } from '@stencil/core';
let id = 0;
/**
 * @since 2.0
 * @status stable
 *
 * @slot - The tab panel's content.
 *
 * @part base - The component's base wrapper.
 */
export class TabPanel {
    constructor() {
        this.componentId = `tab-panel-${++id}`;
        /** The tab panel's name. */
        this.name = '';
        /** When true, the tab panel will be shown. */
        this.active = false;
    }
    render() {
        return (
        // If the user didn't provide an ID, we'll set one so we can link tabs and tab panels with aria labels
        h(Host, { id: this.host.id || this.componentId, style: { display: this.active ? 'block' : 'none' } },
            h("div", { part: "base", class: "tab-panel", role: "tabpanel", "aria-selected": this.active, "aria-hidden": !this.active },
                h("slot", null))));
    }
    static get is() { return "sl-tab-panel"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["tab-panel.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["tab-panel.css"]
    }; }
    static get properties() { return {
        "name": {
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
                "text": "The tab panel's name."
            },
            "attribute": "name",
            "reflect": false,
            "defaultValue": "''"
        },
        "active": {
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
                "text": "When true, the tab panel will be shown."
            },
            "attribute": "active",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get elementRef() { return "host"; }
}
