import { Component, h } from '@stencil/core';
/**
 * @since 2.0
 * @status stable
 *
 * @slot - The menu label's content.
 *
 * @part base - The component's base wrapper.
 */
export class MenuLabel {
    render() {
        return (h("div", { part: "base", class: "menu-label" },
            h("slot", null)));
    }
    static get is() { return "sl-menu-label"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["menu-label.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["menu-label.css"]
    }; }
}
