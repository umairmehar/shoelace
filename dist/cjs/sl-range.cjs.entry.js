'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9b0ec98d.js');
const ResizeObserver_es = require('./ResizeObserver.es-646489f6.js');

const rangeCss = ":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{--thumb-size:20px;--tooltip-offset-y:10px;--track-color:var(--sl-color-gray-90);--track-height:6px;display:block}.range{position:relative}.range .range__control{-webkit-appearance:none;width:100%;height:var(--sl-input-height-medium);background:transparent;line-height:var(--sl-input-height-medium);vertical-align:middle}.range .range__control::-webkit-slider-runnable-track{width:100%;height:var(--track-height);background-color:var(--track-color);border-radius:3px;border:none}.range .range__control::-webkit-slider-thumb{border:none;width:var(--thumb-size);height:var(--thumb-size);border-radius:50%;background-color:var(--sl-color-primary-50);border:solid var(--sl-input-border-width) var(--sl-color-primary-50);-webkit-appearance:none;margin-top:calc(var(--thumb-size) / -2 + var(--track-height) / 2);transition:var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color, var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow, var(--sl-transition-fast) transform;cursor:pointer}.range .range__control:not(:disabled)::-webkit-slider-thumb:hover{background-color:var(--sl-color-primary-60);border-color:var(--sl-color-primary-60)}.range .range__control:not(:disabled):focus::-webkit-slider-thumb{background-color:var(--sl-color-primary-60);border-color:var(--sl-color-primary-60);box-shadow:var(--sl-focus-ring-box-shadow)}.range .range__control:not(:disabled)::-webkit-slider-thumb:active{background-color:var(--sl-color-primary-40);border-color:var(--sl-color-primary-40);cursor:grabbing}.range .range__control::-moz-focus-outer{border:0}.range .range__control::-moz-range-track{width:100%;height:var(--track-height);background-color:var(--track-color);border-radius:3px;border:none}.range .range__control::-moz-range-thumb{border:none;height:var(--thumb-size);width:var(--thumb-size);border-radius:50%;background-color:var(--sl-color-primary-50);border-color:var(--sl-color-primary-50);transition:var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color, var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow, var(--sl-transition-fast) transform;cursor:pointer}.range .range__control:not(:disabled)::-moz-range-thumb:hover{background-color:var(--sl-color-primary-60);border-color:var(--sl-color-primary-60)}.range .range__control:not(:disabled):focus::-moz-range-thumb{background-color:var(--sl-color-primary-60);border-color:var(--sl-color-primary-60);box-shadow:var(--sl-focus-ring-box-shadow)}.range .range__control:not(:disabled)::-moz-range-thumb:active{background-color:var(--sl-color-primary-40);border-color:var(--sl-color-primary-40);cursor:grabbing}.range .range__control:focus{outline:none}.range .range__control:disabled{opacity:0.5}.range .range__control:disabled::-webkit-slider-thumb{cursor:not-allowed}.range .range__control:disabled::-moz-range-thumb{cursor:not-allowed}.range__tooltip{position:absolute;z-index:var(--sl-z-index-tooltip);left:1px;border-radius:var(--sl-tooltip-border-radius);background-color:var(--sl-tooltip-background-color);font-family:var(--sl-tooltip-font-family);font-size:var(--sl-tooltip-font-size);font-weight:var(--sl-tooltip-font-weight);line-height:var(--sl-tooltip-line-height);color:var(--sl-tooltip-color);opacity:0;padding:var(--sl-tooltip-padding);transition:var(--sl-transition-fast) opacity;pointer-events:none}.range__tooltip::after{content:\"\";position:absolute;width:0;height:0;left:50%;margin-left:calc(-1 * var(--sl-tooltip-arrow-size))}.range--tooltip-visible .range__tooltip{opacity:1}.range--tooltip-top .range__tooltip{top:calc(-1 * var(--thumb-size) - var(--tooltip-offset-y))}.range--tooltip-top .range__tooltip::after{border-top:var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);border-left:var(--sl-tooltip-arrow-size) solid transparent;border-right:var(--sl-tooltip-arrow-size) solid transparent;top:100%}.range--tooltip-bottom .range__tooltip{bottom:calc(-1 * var(--thumb-size) - var(--tooltip-offset-y))}.range--tooltip-bottom .range__tooltip::after{border-bottom:var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);border-left:var(--sl-tooltip-arrow-size) solid transparent;border-right:var(--sl-tooltip-arrow-size) solid transparent;bottom:100%}";

const Range = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.slChange = index.createEvent(this, "slChange", 7);
        this.slBlur = index.createEvent(this, "slBlur", 7);
        this.slFocus = index.createEvent(this, "slFocus", 7);
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
        this.resizeObserver = new ResizeObserver_es.index(() => this.syncTooltip());
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
        return (index.h("div", { part: "base", class: {
                range: true,
                // States
                'range--disabled': this.disabled,
                'range--focused': this.hasFocus,
                'range--tooltip-visible': this.hasTooltip,
                'range--tooltip-top': this.tooltip === 'top',
                'range--tooltip-bottom': this.tooltip === 'bottom'
            }, onTouchStart: this.handleTouchStart }, index.h("input", { part: "input", ref: el => (this.input = el), type: "range", class: "range__control", name: this.name, disabled: this.disabled, min: this.min, max: this.max, step: this.step, value: this.value, onInput: this.handleInput, onFocus: this.handleFocus, onBlur: this.handleBlur }), this.tooltip !== 'none' && (index.h("output", { part: "tooltip", ref: el => (this.output = el), class: "range__tooltip" }, this.tooltipFormatter(this.value)))));
    }
};
Range.style = rangeCss;

exports.sl_range = Range;
