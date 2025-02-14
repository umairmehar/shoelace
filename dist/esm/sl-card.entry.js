import { r as registerInstance, h, g as getElement } from './index-d587ef97.js';
import { h as hasSlot } from './slot-5efafe34.js';

const cardCss = ":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{--border-color:var(--sl-color-gray-90);--border-radius:var(--sl-border-radius-medium);--border-width:1px;--padding:var(--sl-spacing-large);display:inline-block}.card{display:flex;flex-direction:column;background-color:var(--sl-color-white);box-shadow:var(--sl-shadow-x-small);border:solid var(--border-width) var(--border-color);border-radius:var(--border-radius)}.card__image{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);margin:calc(-1 * var(--border-width));overflow:hidden}.card__image ::slotted(img){display:block;width:100%}.card:not(.card--has-image) .card__image{display:none}.card__header{border-bottom:solid var(--border-width) var(--border-color);padding:calc(var(--padding) / 2) var(--padding)}.card:not(.card--has-header) .card__header{display:none}.card__body{padding:var(--padding)}.card--has-footer .card__footer{border-top:solid var(--border-width) var(--border-color);padding:var(--padding)}.card:not(.card--has-footer) .card__footer{display:none}";

const Card = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            } }, h("div", { part: "image", class: "card__image" }, h("slot", { name: "image" })), h("div", { part: "header", class: "card__header" }, h("slot", { name: "header" })), h("div", { part: "body", class: "card__body" }, h("slot", null)), h("div", { part: "footer", class: "card__footer" }, h("slot", { name: "footer" }))));
    }
    get host() { return getElement(this); }
};
Card.style = cardCss;

export { Card as sl_card };
