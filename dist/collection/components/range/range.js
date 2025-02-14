import { Component, Event, Method, Prop, State, h } from '@stencil/core';
import ResizeObserver from 'resize-observer-polyfill';
/**
 * @since 2.0
 * @status stable
 *
 * @part base - The component's base wrapper.
 * @part input - The native range input.
 * @part tooltip - The range tooltip.
 */
export class Range {
    constructor() {
        this.hasFocus = false;
        this.hasTooltip = false;
        /** The input's name attribute. */
        this.name = '';
        /** Set to true to disable the input. */
        this.disabled = false;
        /** The input's min attribute. */
        this.min = 0;
        /** The input's max attribute. */
        this.max = 100;
        /** The input's step attribute. */
        this.step = 1;
        /** The preferred placedment of the tooltip. */
        this.tooltip = 'top';
        /** A function used to format the tooltip's value. */
        this.tooltipFormatter = (value) => value.toString();
    }
    connectedCallback() {
        this.handleInput = this.handleInput.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleTouchStart = this.handleTouchStart.bind(this);
    }
    componentWillLoad() {
        if (this.value === undefined || this.value === null)
            this.value = this.min;
        if (this.value < this.min)
            this.value = this.min;
        if (this.value > this.max)
            this.value = this.max;
    }
    componentDidLoad() {
        this.syncTooltip();
        this.resizeObserver = new ResizeObserver(() => this.syncTooltip());
    }
    /** Sets focus on the input. */
    async setFocus() {
        this.input.focus();
    }
    /** Removes focus from the input. */
    async removeFocus() {
        this.input.blur();
    }
    handleInput() {
        this.value = Number(this.input.value);
        this.slChange.emit();
        requestAnimationFrame(() => this.syncTooltip());
    }
    handleBlur() {
        this.hasFocus = false;
        this.hasTooltip = false;
        this.slBlur.emit();
        this.resizeObserver.unobserve(this.input);
    }
    handleFocus() {
        this.hasFocus = true;
        this.hasTooltip = true;
        this.slFocus.emit();
        this.resizeObserver.observe(this.input);
    }
    handleTouchStart() {
        this.setFocus();
    }
    syncTooltip() {
        if (this.tooltip !== 'none') {
            const percent = Math.max(0, (this.value - this.min) / (this.max - this.min));
            const inputWidth = this.input.offsetWidth;
            const tooltipWidth = this.output.offsetWidth;
            const thumbSize = getComputedStyle(this.input).getPropertyValue('--thumb-size');
            const x = `calc(${inputWidth * percent}px - calc(calc(${percent} * ${thumbSize}) - calc(${thumbSize} / 2)))`;
            this.output.style.transform = `translateX(${x})`;
            this.output.style.marginLeft = `-${tooltipWidth / 2}px`;
        }
    }
    render() {
        return (h("div", { part: "base", class: {
                range: true,
                // States
                'range--disabled': this.disabled,
                'range--focused': this.hasFocus,
                'range--tooltip-visible': this.hasTooltip,
                'range--tooltip-top': this.tooltip === 'top',
                'range--tooltip-bottom': this.tooltip === 'bottom'
            }, onTouchStart: this.handleTouchStart },
            h("input", { part: "input", ref: el => (this.input = el), type: "range", class: "range__control", name: this.name, disabled: this.disabled, min: this.min, max: this.max, step: this.step, value: this.value, onInput: this.handleInput, onFocus: this.handleFocus, onBlur: this.handleBlur }),
            this.tooltip !== 'none' && (h("output", { part: "tooltip", ref: el => (this.output = el), class: "range__tooltip" }, this.tooltipFormatter(this.value)))));
    }
    static get is() { return "sl-range"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["range.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["range.css"]
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
                "text": "The input's name attribute."
            },
            "attribute": "name",
            "reflect": false,
            "defaultValue": "''"
        },
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
                "text": "The input's value attribute."
            },
            "attribute": "value",
            "reflect": false
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
                "text": "Set to true to disable the input."
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        },
        "min": {
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
                "text": "The input's min attribute."
            },
            "attribute": "min",
            "reflect": false,
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
                "text": "The input's max attribute."
            },
            "attribute": "max",
            "reflect": false,
            "defaultValue": "100"
        },
        "step": {
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
                "text": "The input's step attribute."
            },
            "attribute": "step",
            "reflect": false,
            "defaultValue": "1"
        },
        "tooltip": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'top' | 'bottom' | 'none'",
                "resolved": "\"bottom\" | \"none\" | \"top\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The preferred placedment of the tooltip."
            },
            "attribute": "tooltip",
            "reflect": false,
            "defaultValue": "'top'"
        },
        "tooltipFormatter": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(value: number) => string",
                "resolved": "(value: number) => string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "A function used to format the tooltip's value."
            },
            "defaultValue": "(value: number) => value.toString()"
        }
    }; }
    static get states() { return {
        "hasFocus": {},
        "hasTooltip": {}
    }; }
    static get events() { return [{
            "method": "slChange",
            "name": "slChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the control's value changes."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "slBlur",
            "name": "slBlur",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the control loses focus."
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
                "text": "Emitted when the control gains focus."
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
                "text": "Sets focus on the input.",
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
                "text": "Removes focus from the input.",
                "tags": []
            }
        }
    }; }
}
