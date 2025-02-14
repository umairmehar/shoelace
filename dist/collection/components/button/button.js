import { Component, Event, Method, Prop, State, h } from '@stencil/core';
/**
 * @since 2.0
 * @status stable
 *
 * @slot - The button's label.
 * @slot prefix - Used to prepend an icon or similar element to the button.
 * @slot suffix - Used to append an icon or similar element to the button.
 *
 * @part base - The component's base wrapper.
 * @part prefix - The prefix container.
 * @part label - The button's label.
 * @part suffix - The suffix container.
 * @part caret - The button's caret.
 */
export class Button {
    constructor() {
        this.hasFocus = false;
        /** The button's type. */
        this.type = 'default';
        /** The button's size. */
        this.size = 'medium';
        /** Set to true to draw the button with a caret for use with dropdowns, popovers, etc. */
        this.caret = false;
        /** Set to true to disable the button. */
        this.disabled = false;
        /** Set to true to draw the button in a loading state. */
        this.loading = false;
        /** Set to true to draw a pill-style button with rounded edges. */
        this.pill = false;
        /** Set to true to draw a circle button. */
        this.circle = false;
        /** Indicates if activating the button should submit the form. Ignored when `href` is set. */
        this.submit = false;
    }
    connectedCallback() {
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    /** Sets focus on the button. */
    async setFocus() {
        this.button.focus();
    }
    /** Removes focus from the button. */
    async removeFocus() {
        this.button.blur();
    }
    handleBlur() {
        this.hasFocus = false;
        this.slBlur.emit();
    }
    handleFocus() {
        this.hasFocus = true;
        this.slFocus.emit();
    }
    handleClick(event) {
        if (this.disabled || this.loading) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
    render() {
        const isLink = this.href ? true : false;
        const isButton = !isLink;
        const Button = isLink ? 'a' : 'button';
        return (h(Button, { ref: el => (this.button = el), part: "base", class: {
                button: true,
                // Types
                'button--default': this.type === 'default',
                'button--primary': this.type === 'primary',
                'button--success': this.type === 'success',
                'button--info': this.type === 'info',
                'button--warning': this.type === 'warning',
                'button--danger': this.type === 'danger',
                'button--text': this.type === 'text',
                // Sizes
                'button--small': this.size === 'small',
                'button--medium': this.size === 'medium',
                'button--large': this.size === 'large',
                // Modifiers
                'button--caret': this.caret,
                'button--circle': this.circle,
                'button--disabled': this.disabled,
                'button--focused': this.hasFocus,
                'button--loading': this.loading,
                'button--pill': this.pill
            }, disabled: this.disabled, type: isButton ? (this.submit ? 'submit' : 'button') : null, name: isButton ? this.name : null, value: isButton ? this.value : null, href: isLink && this.href, target: isLink && this.target ? this.target : null, download: isLink && this.download ? this.download : null, rel: isLink && this.target ? 'noreferrer noopener' : null, onBlur: this.handleBlur, onFocus: this.handleFocus, onClick: this.handleClick },
            h("span", { part: "prefix", class: "button__prefix" },
                h("slot", { name: "prefix" })),
            h("span", { part: "label", class: "button__label" },
                h("slot", null)),
            h("span", { part: "suffix", class: "button__suffix" },
                h("slot", { name: "suffix" })),
            this.caret && (h("span", { part: "caret", class: "button__caret" },
                h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
                    h("polyline", { points: "6 9 12 15 18 9" })))),
            this.loading && h("sl-spinner", null)));
    }
    static get is() { return "sl-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["button.css"]
    }; }
    static get properties() { return {
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'text'",
                "resolved": "\"danger\" | \"default\" | \"info\" | \"primary\" | \"success\" | \"text\" | \"warning\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The button's type."
            },
            "attribute": "type",
            "reflect": true,
            "defaultValue": "'default'"
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
                "text": "The button's size."
            },
            "attribute": "size",
            "reflect": true,
            "defaultValue": "'medium'"
        },
        "caret": {
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
                "text": "Set to true to draw the button with a caret for use with dropdowns, popovers, etc."
            },
            "attribute": "caret",
            "reflect": false,
            "defaultValue": "false"
        },
        "disabled": {
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
                "text": "Set to true to disable the button."
            },
            "attribute": "disabled",
            "reflect": true,
            "defaultValue": "false"
        },
        "loading": {
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
                "text": "Set to true to draw the button in a loading state."
            },
            "attribute": "loading",
            "reflect": true,
            "defaultValue": "false"
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
                "text": "Set to true to draw a pill-style button with rounded edges."
            },
            "attribute": "pill",
            "reflect": true,
            "defaultValue": "false"
        },
        "circle": {
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
                "text": "Set to true to draw a circle button."
            },
            "attribute": "circle",
            "reflect": true,
            "defaultValue": "false"
        },
        "submit": {
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
                "text": "Indicates if activating the button should submit the form. Ignored when `href` is set."
            },
            "attribute": "submit",
            "reflect": true,
            "defaultValue": "false"
        },
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
                "text": "An optional name for the button. Ignored when `href` is set."
            },
            "attribute": "name",
            "reflect": false
        },
        "value": {
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
                "text": "An optional value for the button. Ignored when `href` is set."
            },
            "attribute": "value",
            "reflect": false
        },
        "href": {
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
                "text": "When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`."
            },
            "attribute": "href",
            "reflect": false
        },
        "target": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'_blank' | '_parent' | '_self' | '_top'",
                "resolved": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Tells the browser where to open the link. Only used when `href` is set."
            },
            "attribute": "target",
            "reflect": false
        },
        "download": {
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
                "text": "Tells the browser to download the linked file as this filename. Only used when `href` is set."
            },
            "attribute": "download",
            "reflect": false
        }
    }; }
    static get states() { return {
        "hasFocus": {}
    }; }
    static get events() { return [{
            "method": "slBlur",
            "name": "slBlur",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the button loses focus."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "slFocus",
            "name": "slFocus",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the button gains focus."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "setFocus": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Sets focus on the button.",
                "tags": []
            }
        },
        "removeFocus": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Removes focus from the button.",
                "tags": []
            }
        }
    }; }
}
