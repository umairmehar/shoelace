import { Component, h } from '@stencil/core';
/**
 * @since 2.0
 * @status stable
 *
 * @part base - The component's base wrapper.
 */
export class Spinner {
    render() {
        return h("span", { part: "base", class: "spinner", "aria-busy": "true", "aria-live": "polite" });
    }
    static get is() { return "sl-spinner"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["spinner.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["spinner.css"]
    }; }
}
