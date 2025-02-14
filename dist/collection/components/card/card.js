import { Component, Element, State, h } from '@stencil/core';
import { hasSlot } from '../../utilities/slot';
/**
 * @since 2.0
 * @status stable
 *
 * @slot - The card's body.
 * @slot header - The card's header.
 * @slot footer - The card's footer.
 * @slot image - The card's image.
 *
 * @part base - The component's base wrapper.
 * @part image - The card's image, if present.
 * @part header - The card's header, if present.
 * @part body - The card's body.
 * @part footer - The card's footer, if present.
 */
export class Card {
    constructor() {
        this.hasFooter = false;
        this.hasImage = false;
        this.hasHeader = false;
    }
    componentWillLoad() {
        this.updateSlots();
        this.host.shadowRoot.addEventListener('slotchange', this.updateSlots);
    }
    disconnectedCallback() {
        this.host.shadowRoot.removeEventListener('slotchange', this.updateSlots);
    }
    updateSlots() {
        this.hasFooter = hasSlot(this.host, 'footer');
        this.hasImage = hasSlot(this.host, 'image');
        this.hasHeader = hasSlot(this.host, 'header');
    }
    render() {
        return (h("div", { part: "base", class: {
                card: true,
                'card--has-footer': this.hasFooter,
                'card--has-image': this.hasImage,
                'card--has-header': this.hasHeader
            } },
            h("div", { part: "image", class: "card__image" },
                h("slot", { name: "image" })),
            h("div", { part: "header", class: "card__header" },
                h("slot", { name: "header" })),
            h("div", { part: "body", class: "card__body" },
                h("slot", null)),
            h("div", { part: "footer", class: "card__footer" },
                h("slot", { name: "footer" }))));
    }
    static get is() { return "sl-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["card.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["card.css"]
    }; }
    static get states() { return {
        "hasFooter": {},
        "hasImage": {},
        "hasHeader": {}
    }; }
    static get elementRef() { return "host"; }
}
