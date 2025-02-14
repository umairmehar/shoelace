import { Component, Element, Event, Method, Prop, State, Watch, h } from '@stencil/core';
import { focusVisible } from '../../utilities/focus-visible';
import { clamp } from '../../utilities/math';
/**
 * @since 2.0
 * @status stable
 *
 * @part base - The component's base wrapper.
 */
export class Rating {
    constructor() {
        this.hoverValue = 0;
        this.isHovering = false;
        /** The current rating. */
        this.value = 0;
        /** The highest rating to show. */
        this.max = 5;
        /** The minimum increment value allowed by the control. */
        this.precision = 1;
        /** Makes the rating readonly. */
        this.readonly = false;
        /** Disables the rating. */
        this.disabled = false;
        /** A function that returns the symbols to display. Accepts an option `value` parameter you can use to map a specific
         * symbol to a value. */
        // @ts-ignore
        this.getSymbol = (value) => '<sl-icon name="star-fill"></sl-icon>';
    }
    handleValueChange() {
        this.slChange.emit();
    }
    connectedCallback() {
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }
    /** Sets focus on the rating. */
    async setFocus() {
        this.rating.focus();
    }
    /** Removes focus from the rating. */
    async removeFocus() {
        this.rating.blur();
    }
    componentDidLoad() {
        focusVisible.observe(this.rating);
    }
    disconnectedCallback() {
        focusVisible.unobserve(this.rating);
    }
    getValueFromMousePosition(event) {
        const containerLeft = this.rating.getBoundingClientRect().left;
        const containerWidth = this.rating.getBoundingClientRect().width;
        return clamp(this.roundToPrecision(((event.clientX - containerLeft) / containerWidth) * this.max, this.precision), 0, this.max);
    }
    handleClick(event) {
        if (this.disabled || this.readonly) {
            return;
        }
        const newValue = this.getValueFromMousePosition(event);
        this.value = newValue === this.value ? 0 : newValue;
        this.isHovering = false;
    }
    handleKeyDown(event) {
        if (this.disabled || this.readonly) {
            return;
        }
        if (event.key === 'ArrowLeft') {
            const decrement = event.shiftKey ? 1 : this.precision;
            this.value = Math.max(0, this.value - decrement);
            event.preventDefault();
        }
        if (event.key === 'ArrowRight') {
            const increment = event.shiftKey ? 1 : this.precision;
            this.value = Math.min(this.max, this.value + increment);
            event.preventDefault();
        }
        if (event.key === 'Home') {
            this.value = 0;
            event.preventDefault();
        }
        if (event.key === 'End') {
            this.value = this.max;
            event.preventDefault();
        }
    }
    handleMouseEnter() {
        this.isHovering = true;
    }
    handleMouseLeave() {
        this.isHovering = false;
    }
    handleMouseMove(event) {
        this.hoverValue = this.getValueFromMousePosition(event);
    }
    roundToPrecision(numberToRound, precision = 0.5) {
        const multiplier = 1 / precision;
        return Math.ceil(numberToRound * multiplier) / multiplier;
    }
    render() {
        const counter = Array.from(Array(this.max).keys());
        let displayValue = 0;
        if (this.disabled || this.readonly) {
            displayValue = this.value;
        }
        else {
            displayValue = this.isHovering ? this.hoverValue : this.value;
        }
        return (h("div", { ref: el => (this.rating = el), part: "base", class: {
                rating: true,
                'rating--readonly': this.readonly,
                'rating--disabled': this.disabled
            }, "aria-disabled": this.disabled, "aria-readonly": this.readonly, "aria-value": this.value, "aria-valuemin": 0, "aria-valuemax": this.max, tabIndex: this.disabled ? -1 : 0, onClick: this.handleClick, onKeyDown: this.handleKeyDown, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave, onMouseMove: this.handleMouseMove },
            h("span", { class: "rating__symbols rating__symbols--inactive" }, counter.map(index => (h("span", { class: {
                    rating__symbol: true,
                    'rating__symbol--hover': this.isHovering && Math.ceil(displayValue) === index + 1
                }, role: "presentation", 
                // Users can click the current value to clear the rating. When this happens, we set this.isHovering to
                // false to prevent the hover state from confusing them as they move the mouse out of the control. This
                // extra mouseenter will reinstate it if they happen to mouse over an adjacent symbol.
                onMouseEnter: this.handleMouseEnter, innerHTML: this.getSymbol(index + 1) })))),
            h("span", { class: "rating__symbols rating__symbols--indicator" }, counter.map(index => (h("span", { class: {
                    rating__symbol: true,
                    'rating__symbol--hover': this.isHovering && Math.ceil(displayValue) === index + 1
                }, style: {
                    clipPath: displayValue > index + 1 ? null : `inset(0 ${100 - ((displayValue - index) / 1) * 100}% 0 0)`
                }, role: "presentation", innerHTML: this.getSymbol(index + 1) }))))));
    }
    static get is() { return "sl-rating"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["rating.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["rating.css"]
    }; }
    static get properties() { return {
        "value": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The current rating."
            },
            "attribute": "value",
            "reflect": true,
            "defaultValue": "0"
        },
        "max": {
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
                "text": "The highest rating to show."
            },
            "attribute": "max",
            "reflect": false,
            "defaultValue": "5"
        },
        "precision": {
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
                "text": "The minimum increment value allowed by the control."
            },
            "attribute": "precision",
            "reflect": false,
            "defaultValue": "1"
        },
        "readonly": {
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
                "text": "Makes the rating readonly."
            },
            "attribute": "readonly",
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
                "text": "Disables the rating."
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        },
        "getSymbol": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(value?: number) => string",
                "resolved": "(value?: number) => string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "A function that returns the symbols to display. Accepts an option `value` parameter you can use to map a specific\nsymbol to a value."
            },
            "defaultValue": "(value?: number) => '<sl-icon name=\"star-fill\"></sl-icon>'"
        }
    }; }
    static get states() { return {
        "hoverValue": {},
        "isHovering": {}
    }; }
    static get events() { return [{
            "method": "slChange",
            "name": "slChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the rating's value changes."
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
                "text": "Sets focus on the rating.",
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
                "text": "Removes focus from the rating.",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "host"; }
    static get watchers() { return [{
            "propName": "value",
            "methodName": "handleValueChange"
        }]; }
}
