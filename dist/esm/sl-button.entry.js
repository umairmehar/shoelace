import { r as registerInstance, c as createEvent, h } from './index-d587ef97.js';

const buttonCss = ":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:inline-block;width:auto;cursor:pointer}.button{display:inline-flex;align-items:stretch;justify-content:center;width:100%;border-style:solid;border-width:var(--sl-input-border-width);font-family:var(--sl-input-font-family);font-weight:var(--sl-font-weight-semibold);text-decoration:none;user-select:none;white-space:nowrap;vertical-align:middle;transition:var(--sl-transition-fast) background-color, var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow;cursor:inherit}.button::-moz-focus-inner{border:0}.button:focus{outline:none}.button[disabled]{opacity:0.5;cursor:not-allowed}.button ::slotted(sl-icon){pointer-events:none}.button__prefix,.button__suffix{flex:0 0 auto;display:flex;align-items:center}.button__prefix ::slotted(:first-child){margin-left:calc(-1 * var(--sl-spacing-x-small));margin-right:var(--sl-spacing-x-small)}.button__suffix ::slotted(:last-child){margin-left:var(--sl-spacing-x-small);margin-right:calc(-1 * var(--sl-spacing-x-small))}.button__label ::slotted(sl-icon){vertical-align:-2px}.button.button--default{background-color:var(--sl-color-white);border-color:var(--sl-color-gray-80);color:var(--sl-color-gray-40)}.button.button--default:hover:not(.button--disabled){background-color:var(--sl-color-primary-95);border-color:var(--sl-color-primary-80);color:var(--sl-color-primary-40)}.button.button--default:focus:not(.button--disabled){background-color:var(--sl-color-primary-95);border-color:var(--sl-color-primary-70);color:var(--sl-color-primary-40);box-shadow:0 0 0 var(--sl-focus-ring-width) hsla(var(--sl-color-primary-hue), var(--sl-color-primary-saturation), 50%, var(--sl-focus-ring-alpha))}.button.button--default:active:not(.button--disabled){background-color:var(--sl-color-primary-95);border-color:var(--sl-color-primary-50);color:var(--sl-color-primary-30)}.button.button--primary{background-color:var(--sl-color-primary-50);border-color:var(--sl-color-primary-50);color:var(--sl-color-primary-text)}.button.button--primary:hover:not(.button--disabled){background-color:var(--sl-color-primary-60);border-color:var(--sl-color-primary-60);color:var(--sl-color-primary-text)}.button.button--primary:focus:not(.button--disabled){background-color:var(--sl-color-primary-60);border-color:var(--sl-color-primary-60);color:var(--sl-color-primary-text);box-shadow:0 0 0 var(--sl-focus-ring-width) hsla(var(--sl-color-primary-hue), var(--sl-color-primary-saturation), 50%, var(--sl-focus-ring-alpha))}.button.button--primary:active:not(.button--disabled){background-color:var(--sl-color-primary-50);border-color:var(--sl-color-primary-50);color:var(--sl-color-primary-text)}.button.button--success{background-color:var(--sl-color-success-50);border-color:var(--sl-color-success-50);color:var(--sl-color-success-text)}.button.button--success:hover:not(.button--disabled){background-color:var(--sl-color-success-60);border-color:var(--sl-color-success-60);color:var(--sl-color-success-text)}.button.button--success:focus:not(.button--disabled){background-color:var(--sl-color-success-60);border-color:var(--sl-color-success-60);color:var(--sl-color-success-text);box-shadow:0 0 0 var(--sl-focus-ring-width) hsla(var(--sl-color-success-hue), var(--sl-color-success-saturation), 50%, var(--sl-focus-ring-alpha))}.button.button--success:active:not(.button--disabled){background-color:var(--sl-color-success-50);border-color:var(--sl-color-success-50);color:var(--sl-color-success-text)}.button.button--info{background-color:var(--sl-color-info-50);border-color:var(--sl-color-info-50);color:var(--sl-color-info-text)}.button.button--info:hover:not(.button--disabled){background-color:var(--sl-color-info-60);border-color:var(--sl-color-info-60);color:var(--sl-color-info-text)}.button.button--info:focus:not(.button--disabled){background-color:var(--sl-color-info-60);border-color:var(--sl-color-info-60);color:var(--sl-color-info-text);box-shadow:0 0 0 var(--sl-focus-ring-width) hsla(var(--sl-color-info-hue), var(--sl-color-info-saturation), 50%, var(--sl-focus-ring-alpha))}.button.button--info:active:not(.button--disabled){background-color:var(--sl-color-info-50);border-color:var(--sl-color-info-50);color:var(--sl-color-info-text)}.button.button--warning{background-color:var(--sl-color-warning-50);border-color:var(--sl-color-warning-50);color:var(--sl-color-warning-text)}.button.button--warning:hover:not(.button--disabled){background-color:var(--sl-color-warning-60);border-color:var(--sl-color-warning-60);color:var(--sl-color-warning-text)}.button.button--warning:focus:not(.button--disabled){background-color:var(--sl-color-warning-60);border-color:var(--sl-color-warning-60);color:var(--sl-color-warning-text);box-shadow:0 0 0 var(--sl-focus-ring-width) hsla(var(--sl-color-warning-hue), var(--sl-color-warning-saturation), 50%, var(--sl-focus-ring-alpha))}.button.button--warning:active:not(.button--disabled){background-color:var(--sl-color-warning-50);border-color:var(--sl-color-warning-50);color:var(--sl-color-warning-text)}.button.button--danger{background-color:var(--sl-color-danger-50);border-color:var(--sl-color-danger-50);color:var(--sl-color-danger-text)}.button.button--danger:hover:not(.button--disabled){background-color:var(--sl-color-danger-60);border-color:var(--sl-color-danger-60);color:var(--sl-color-danger-text)}.button.button--danger:focus:not(.button--disabled){background-color:var(--sl-color-danger-60);border-color:var(--sl-color-danger-60);color:var(--sl-color-danger-text);box-shadow:0 0 0 var(--sl-focus-ring-width) hsla(var(--sl-color-danger-hue), var(--sl-color-danger-saturation), 50%, var(--sl-focus-ring-alpha))}.button.button--danger:active:not(.button--disabled){background-color:var(--sl-color-danger-50);border-color:var(--sl-color-danger-50);color:var(--sl-color-danger-text)}.button--text{background-color:transparent;border-color:transparent;color:var(--sl-color-primary-50)}.button--text:hover:not(.button--disabled){background-color:transparent;border-color:transparent;color:var(--sl-color-primary-60)}.button--text:focus:not(.button--disabled){background-color:transparent;border-color:transparent;color:var(--sl-color-primary-60);box-shadow:0 0 0 var(--sl-focus-ring-width) hsla(var(--sl-color-primary-hue), var(--sl-color-primary-saturation), 50%, var(--sl-focus-ring-alpha))}.button--text:active:not(.button--disabled){background-color:transparent;border-color:transparent;color:var(--sl-color-primary-40)}.button--small{font-size:var(--sl-button-font-size-small);height:var(--sl-input-height-small);line-height:calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);border-radius:var(--sl-input-border-radius-small);padding:0 var(--sl-spacing-medium)}.button--medium{font-size:var(--sl-button-font-size-medium);height:var(--sl-input-height-medium);line-height:calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);border-radius:var(--sl-input-border-radius-medium);padding:0 var(--sl-spacing-large)}.button--large{font-size:var(--sl-button-font-size-large);height:var(--sl-input-height-large);line-height:calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);border-radius:var(--sl-input-border-radius-large);padding:0 var(--sl-spacing-x-large)}.button--pill.button--small{border-radius:var(--sl-input-height-small)}.button--pill.button--medium{border-radius:var(--sl-input-height-medium)}.button--pill.button--large{border-radius:var(--sl-input-height-large)}.button--circle{padding-left:0;padding-right:0}.button--circle.button--small{width:var(--sl-input-height-small);border-radius:50%}.button--circle.button--medium{width:var(--sl-input-height-medium);border-radius:50%}.button--circle.button--large{width:var(--sl-input-height-large);border-radius:50%}.button--circle .button__prefix,.button--circle .button__suffix,.button--circle .button__caret{display:none}.button--caret .button__suffix{display:none}.button--caret .button__caret{display:flex;align-items:center;margin-left:var(--sl-spacing-xx-small);margin-right:calc(-1 * var(--sl-spacing-xx-small))}.button--caret .button__caret svg{width:1em;height:1em}.button--loading{position:relative;cursor:wait}.button--loading .button__prefix,.button--loading .button__label,.button--loading .button__suffix,.button--loading .button__caret{visibility:hidden}.button--loading sl-spinner{--indicator-color:currentColor;--stroke-width:1px;position:absolute;height:1em;width:1em;top:calc(50% - 0.5em);left:calc(50% - 0.5em)}.button ::slotted(sl-badge){position:absolute;top:0;right:0;transform:translateY(-50%) translateX(50%);pointer-events:none}";

const Button = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.slBlur = createEvent(this, "slBlur", 7);
        this.slFocus = createEvent(this, "slFocus", 7);
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
            }, disabled: this.disabled, type: isButton ? (this.submit ? 'submit' : 'button') : null, name: isButton ? this.name : null, value: isButton ? this.value : null, href: isLink && this.href, target: isLink && this.target ? this.target : null, download: isLink && this.download ? this.download : null, rel: isLink && this.target ? 'noreferrer noopener' : null, onBlur: this.handleBlur, onFocus: this.handleFocus, onClick: this.handleClick }, h("span", { part: "prefix", class: "button__prefix" }, h("slot", { name: "prefix" })), h("span", { part: "label", class: "button__label" }, h("slot", null)), h("span", { part: "suffix", class: "button__suffix" }, h("slot", { name: "suffix" })), this.caret && (h("span", { part: "caret", class: "button__caret" }, h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, h("polyline", { points: "6 9 12 15 18 9" })))), this.loading && h("sl-spinner", null)));
    }
};
Button.style = buttonCss;

export { Button as sl_button };
