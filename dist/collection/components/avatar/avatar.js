import { Component, Prop, State, h } from '@stencil/core';
/**
 * @since 2.0
 * @status stable
 *
 * @slot icon - The default icon to use when no image or initials are present.
 *
 * @part base - The component's base wrapper.
 * @part icon - The container that wraps the avatar icon.
 * @part initials - The container that wraps the avatar initials.
 * @part image - The avatar image.
 */
export class Avatar {
    constructor() {
        this.hasError = false;
        /** The image source to use for the avatar. */
        this.image = '';
        /** Alternative text for the image. */
        this.alt = '';
        /** Initials to use as a fallback when no image is available (1-2 characters max recommended). */
        this.initials = '';
        /** The shape of the avatar. */
        this.shape = 'circle';
    }
    connectedCallback() {
        this.handleImageError = this.handleImageError.bind(this);
    }
    handleImageError() {
        this.hasError = true;
    }
    render() {
        return (h("div", { part: "base", class: {
                avatar: true,
                'avatar--circle': this.shape === 'circle',
                'avatar--rounded': this.shape === 'rounded',
                'avatar--square': this.shape === 'square'
            }, role: "image", "aria-label": this.alt },
            !this.initials && (h("div", { part: "icon", class: "avatar__icon" },
                h("slot", { name: "icon" },
                    h("sl-icon", { name: "person-fill" })))),
            this.initials && (h("div", { part: "initials", class: "avatar__initials" }, this.initials)),
            this.image && !this.hasError && (h("img", { part: "image", class: "avatar__image", src: this.image, onError: this.handleImageError }))));
    }
    static get is() { return "sl-avatar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["avatar.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["avatar.css"]
    }; }
    static get properties() { return {
        "image": {
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
                "text": "The image source to use for the avatar."
            },
            "attribute": "image",
            "reflect": false,
            "defaultValue": "''"
        },
        "alt": {
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
                "text": "Alternative text for the image."
            },
            "attribute": "alt",
            "reflect": false,
            "defaultValue": "''"
        },
        "initials": {
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
                "text": "Initials to use as a fallback when no image is available (1-2 characters max recommended)."
            },
            "attribute": "initials",
            "reflect": false,
            "defaultValue": "''"
        },
        "shape": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'circle' | 'square' | 'rounded'",
                "resolved": "\"circle\" | \"rounded\" | \"square\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The shape of the avatar."
            },
            "attribute": "shape",
            "reflect": false,
            "defaultValue": "'circle'"
        }
    }; }
    static get states() { return {
        "hasError": {}
    }; }
}
