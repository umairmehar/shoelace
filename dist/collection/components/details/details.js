import { Component, Event, Method, Prop, Watch, h } from '@stencil/core';
import { focusVisible } from '../../utilities/focus-visible';
let id = 0;
/**
 * @since 2.0
 * @status stable
 *
 * @slot - The details' content.
 * @slot summary - The details' summary. Alternatively, you can use the summary prop.
 *
 * @part base - The component's base wrapper.
 * @part header - The summary header.
 * @part summary - The details summary.
 * @part summary-icon - The expand/collapse summary icon.
 * @part content - The details content.
 */
export class Details {
    constructor() {
        this.componentId = `details-${++id}`;
        this.isShowing = false;
        /** Indicates whether or not the details is open. You can use this in lieu of the show/hide methods. */
        this.open = false;
        /** The summary to show in the details header. If you need to display HTML, use the `summary` slot instead. */
        this.summary = '';
        /** Set to true to prevent the user from toggling the details. */
        this.disabled = false;
    }
    handleOpenChange() {
        this.open ? this.show() : this.hide();
    }
    connectedCallback() {
        this.handleBodyTransitionEnd = this.handleBodyTransitionEnd.bind(this);
        this.handleSummaryClick = this.handleSummaryClick.bind(this);
        this.handleSummaryKeyDown = this.handleSummaryKeyDown.bind(this);
    }
    componentDidLoad() {
        focusVisible.observe(this.details);
        // Show on init if open
        if (this.open) {
            this.show();
        }
    }
    disconnectedCallback() {
        focusVisible.unobserve(this.details);
    }
    /** Shows the alert. */
    async show() {
        // Prevent subsequent calls to the method, whether manually or triggered by the `open` watcher
        if (this.isShowing) {
            return;
        }
        const slShow = this.slShow.emit();
        if (slShow.defaultPrevented) {
            this.open = false;
            return;
        }
        if (this.body.scrollHeight === 0) {
            // When the scroll height can't be measured, use auto. This prevents a borked open state when the details is open
            // intiially, but not immediately visible (i.e. in a tab panel).
            this.body.style.height = 'auto';
            this.body.style.overflow = 'visible';
        }
        else {
            this.body.style.height = `${this.body.scrollHeight}px`;
            this.body.style.overflow = 'hidden';
        }
        this.isShowing = true;
        this.open = true;
    }
    /** Hides the alert */
    async hide() {
        // Prevent subsequent calls to the method, whether manually or triggered by the `open` watcher
        if (!this.isShowing) {
            return;
        }
        const slHide = this.slHide.emit();
        if (slHide.defaultPrevented) {
            this.open = true;
            return;
        }
        // We can't transition out of `height: auto`, so let's set it to the current height first
        this.body.style.height = `${this.body.scrollHeight}px`;
        this.body.style.overflow = 'hidden';
        requestAnimationFrame(() => {
            this.body.clientWidth; // force a reflow
            this.body.style.height = '0';
        });
        this.isShowing = false;
        this.open = false;
    }
    handleBodyTransitionEnd(event) {
        const target = event.target;
        // Ensure we only emit one event when the target element is no longer visible
        if (event.propertyName === 'height' && target.classList.contains('details__body')) {
            this.body.style.overflow = this.open ? 'visible' : 'hidden';
            this.body.style.height = this.open ? 'auto' : '0';
            this.open ? this.slAfterShow.emit() : this.slAfterHide.emit();
        }
    }
    handleSummaryClick() {
        if (!this.disabled) {
            this.open ? this.hide() : this.show();
            this.header.focus();
        }
    }
    handleSummaryKeyDown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.open ? this.hide() : this.show();
        }
        if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
            event.preventDefault();
            this.hide();
        }
        if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
            event.preventDefault();
            this.show();
        }
    }
    render() {
        return (h("div", { ref: el => (this.details = el), part: "base", class: {
                details: true,
                'details--open': this.open,
                'details--disabled': this.disabled
            } },
            h("header", { ref: el => (this.header = el), part: "header", id: `${this.componentId}-header`, class: "details__header", role: "button", "aria-expanded": this.open, "aria-controls": `${this.componentId}-content`, "aria-disabled": this.disabled, tabIndex: this.disabled ? -1 : 0, onClick: this.handleSummaryClick, onKeyDown: this.handleSummaryKeyDown },
                h("div", { part: "summary", class: "details__summary" },
                    h("slot", { name: "summary" }, this.summary)),
                h("span", { part: "summary-icon", class: "details__summary-icon" },
                    h("sl-icon", { name: "chevron-right" }))),
            h("div", { ref: el => (this.body = el), class: "details__body", onTransitionEnd: this.handleBodyTransitionEnd },
                h("div", { part: "content", id: `${this.componentId}-content`, class: "details__content", role: "region", "aria-labelledby": `${this.componentId}-header` },
                    h("slot", null)))));
    }
    static get is() { return "sl-details"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["details.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["details.css"]
    }; }
    static get properties() { return {
        "open": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Indicates whether or not the details is open. You can use this in lieu of the show/hide methods."
            },
            "attribute": "open",
            "reflect": true,
            "defaultValue": "false"
        },
        "summary": {
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
                "text": "The summary to show in the details header. If you need to display HTML, use the `summary` slot instead."
            },
            "attribute": "summary",
            "reflect": false,
            "defaultValue": "''"
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
                "text": "Set to true to prevent the user from toggling the details."
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get events() { return [{
            "method": "slShow",
            "name": "slShow",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the details opens. Calling `event.preventDefault()` will prevent it from being opened."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "slAfterShow",
            "name": "slAfterShow",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted after the details opens and all transitions are complete."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "slHide",
            "name": "slHide",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the details closes. Calling `event.preventDefault()` will prevent it from being closed."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "slAfterHide",
            "name": "slAfterHide",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted after the details closes and all transitions are complete."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "show": {
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
                "text": "Shows the alert.",
                "tags": []
            }
        },
        "hide": {
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
                "text": "Hides the alert",
                "tags": []
            }
        }
    }; }
    static get watchers() { return [{
            "propName": "open",
            "methodName": "handleOpenChange"
        }]; }
}
