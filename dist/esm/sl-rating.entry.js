import { r as registerInstance, c as createEvent, h, g as getElement } from './index-d587ef97.js';
import { c as clamp } from './math-d699f2ce.js';
import { f as focusVisible } from './focus-visible-54f27856.js';

const ratingCss = ":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{--symbol-color:var(--sl-color-gray-85);--symbol-color-active:#ffbe00;--symbol-size:1.2rem;--symbol-spacing:var(--sl-spacing-xxx-small);display:inline-flex}.rating{position:relative;display:inline-flex;border-radius:var(--sl-border-radius-medium);vertical-align:middle}.rating:focus{outline:none}.rating.focus-visible:focus{box-shadow:var(--sl-focus-ring-box-shadow)}.rating__symbols{display:inline-flex;position:relative;font-size:var(--symbol-size);line-height:0;color:var(--symbol-color);white-space:nowrap;cursor:pointer}.rating__symbols>*{padding:var(--symbol-spacing)}.rating__symbols--indicator{position:absolute;top:0;left:0;color:var(--symbol-color-active);pointer-events:none}.rating__symbol{transition:var(--sl-transition-fast) transform}.rating__symbol--hover{transform:scale(1.2)}.rating--disabled .rating__symbols,.rating--readonly .rating__symbols{cursor:default}.rating--disabled .rating__symbol--hover,.rating--readonly .rating__symbol--hover{transform:none}.rating--disabled{opacity:0.5}.rating--disabled .rating__symbols{cursor:not-allowed}";

const Rating = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.slChange = createEvent(this, "slChange", 7);
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
            }, "aria-disabled": this.disabled, "aria-readonly": this.readonly, "aria-value": this.value, "aria-valuemin": 0, "aria-valuemax": this.max, tabIndex: this.disabled ? -1 : 0, onClick: this.handleClick, onKeyDown: this.handleKeyDown, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave, onMouseMove: this.handleMouseMove }, h("span", { class: "rating__symbols rating__symbols--inactive" }, counter.map(index => (h("span", { class: {
                rating__symbol: true,
                'rating__symbol--hover': this.isHovering && Math.ceil(displayValue) === index + 1
            }, role: "presentation",
            // Users can click the current value to clear the rating. When this happens, we set this.isHovering to
            // false to prevent the hover state from confusing them as they move the mouse out of the control. This
            // extra mouseenter will reinstate it if they happen to mouse over an adjacent symbol.
            onMouseEnter: this.handleMouseEnter, innerHTML: this.getSymbol(index + 1) })))), h("span", { class: "rating__symbols rating__symbols--indicator" }, counter.map(index => (h("span", { class: {
                rating__symbol: true,
                'rating__symbol--hover': this.isHovering && Math.ceil(displayValue) === index + 1
            }, style: {
                clipPath: displayValue > index + 1 ? null : `inset(0 ${100 - ((displayValue - index) / 1) * 100}% 0 0)`
            }, role: "presentation", innerHTML: this.getSymbol(index + 1) }))))));
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "value": ["handleValueChange"]
    }; }
};
Rating.style = ratingCss;

export { Rating as sl_rating };
