'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9b0ec98d.js');
const popover = require('./popover-bb4b2f57.js');

const tooltipCss = ":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{--max-width:20rem;--hide-delay:0s;--hide-duration:0.125s;--hide-timing-function:ease;--show-delay:0.125s;--show-duration:0.125s;--show-timing-function:ease;display:contents}.tooltip-positioner{position:absolute;z-index:var(--sl-z-index-tooltip);pointer-events:none}.tooltip{max-width:var(--max-width);border-radius:var(--sl-tooltip-border-radius);background-color:var(--sl-tooltip-background-color);font-family:var(--sl-tooltip-font-family);font-size:var(--sl-tooltip-font-size);font-weight:var(--sl-tooltip-font-weight);line-height:var(--sl-tooltip-line-height);color:var(--sl-tooltip-color);opacity:0;padding:var(--sl-tooltip-padding);transform:scale(0.8);transform-origin:bottom;transition-property:opacity, transform;transition-delay:var(--hide-delay);transition-duration:var(--hide-duration);transition-timing-function:var(--hide-timing-function)}.tooltip::after{content:\"\";position:absolute;width:0;height:0}.tooltip-positioner[data-popper-placement^=top] .tooltip{transform-origin:bottom}.tooltip-positioner[data-popper-placement^=bottom] .tooltip{transform-origin:top}.tooltip-positioner[data-popper-placement^=left] .tooltip{transform-origin:right}.tooltip-positioner[data-popper-placement^=right] .tooltip{transform-origin:left}.tooltip-positioner.popover-visible .tooltip{opacity:1;transform:scale(1);transition-delay:var(--show-delay);transition-duration:var(--show-duration);transition-timing-function:var(--show-timing-function)}.tooltip-positioner[data-popper-placement^=bottom] .tooltip::after{bottom:100%;left:calc(50% - var(--sl-tooltip-arrow-size));border-bottom:var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);border-left:var(--sl-tooltip-arrow-size) solid transparent;border-right:var(--sl-tooltip-arrow-size) solid transparent}.tooltip-positioner[data-popper-placement=bottom-start] .tooltip::after{left:var(--sl-tooltip-arrow-start-end-offset)}.tooltip-positioner[data-popper-placement=bottom-end] .tooltip::after{right:var(--sl-tooltip-arrow-start-end-offset);left:auto}.tooltip-positioner[data-popper-placement^=top] .tooltip::after{top:100%;left:calc(50% - var(--sl-tooltip-arrow-size));border-top:var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);border-left:var(--sl-tooltip-arrow-size) solid transparent;border-right:var(--sl-tooltip-arrow-size) solid transparent}.tooltip-positioner[data-popper-placement=top-start] .tooltip::after{left:var(--sl-tooltip-arrow-start-end-offset)}.tooltip-positioner[data-popper-placement=top-end] .tooltip::after{right:var(--sl-tooltip-arrow-start-end-offset);left:auto}.tooltip-positioner[data-popper-placement^=left] .tooltip::after{top:calc(50% - var(--sl-tooltip-arrow-size));left:100%;border-left:var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);border-top:var(--sl-tooltip-arrow-size) solid transparent;border-bottom:var(--sl-tooltip-arrow-size) solid transparent}.tooltip-positioner[data-popper-placement=left-start] .tooltip::after{top:var(--sl-tooltip-arrow-start-end-offset)}.tooltip-positioner[data-popper-placement=left-end] .tooltip::after{top:auto;bottom:var(--sl-tooltip-arrow-start-end-offset)}.tooltip-positioner[data-popper-placement^=right] .tooltip::after{top:calc(50% - var(--sl-tooltip-arrow-size));right:100%;border-right:var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);border-top:var(--sl-tooltip-arrow-size) solid transparent;border-bottom:var(--sl-tooltip-arrow-size) solid transparent}.tooltip-positioner[data-popper-placement=right-start] .tooltip::after{top:var(--sl-tooltip-arrow-start-end-offset)}.tooltip-positioner[data-popper-placement=right-end] .tooltip::after{top:auto;bottom:var(--sl-tooltip-arrow-start-end-offset)}";

let id = 0;
const Tooltip = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.slShow = index.createEvent(this, "slShow", 7);
        this.slAfterShow = index.createEvent(this, "slAfterShow", 7);
        this.slHide = index.createEvent(this, "slHide", 7);
        this.slAfterHide = index.createEvent(this, "slAfterHide", 7);
        this.componentId = `tooltip-${++id}`;
        this.isShowing = false;
        /** The tooltip's content. */
        this.content = '';
        /**
         * The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip
         * inside of the viewport.
         */
        this.placement = 'top';
        /** Set to true to disable the tooltip so it won't show when triggered. */
        this.disabled = false;
        /** The distance in pixels from which to offset the tooltip away from its target. */
        this.distance = 10;
        /** Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods. */
        this.open = false;
        /** The distance in pixels from which to offset the tooltip along its target. */
        this.skidding = 0;
        /**
         * Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`. Multiple
         * options can be passed by separating them with a space. When manual is used, the tooltip must be activated
         * programmatically.
         */
        this.trigger = 'hover focus';
    }
    handleOpenChange() {
        this.open ? this.show() : this.hide();
    }
    connectedCallback() {
        this.handleBlur = this.handleBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleSlotChange = this.handleSlotChange.bind(this);
    }
    componentDidLoad() {
        const slot = this.host.shadowRoot.querySelector('slot');
        this.target = this.getTarget();
        this.popover = new popover.Popover(this.target, this.tooltipPositioner);
        this.syncOptions();
        this.host.addEventListener('blur', this.handleBlur, true);
        this.host.addEventListener('click', this.handleClick, true);
        this.host.addEventListener('focus', this.handleFocus, true);
        slot.addEventListener('slotchange', this.handleSlotChange);
        // Show on init if open
        this.tooltipPositioner.hidden = !this.open;
        if (this.open) {
            this.show();
        }
    }
    componentDidUpdate() {
        this.syncOptions();
    }
    disconnectedCallback() {
        this.popover.destroy();
        this.host.removeEventListener('blur', this.handleBlur, true);
        this.host.removeEventListener('click', this.handleClick, true);
        this.host.removeEventListener('focus', this.handleFocus, true);
        this.host.shadowRoot.querySelector('slot').removeEventListener('slotchange', this.handleSlotChange);
    }
    /** Shows the tooltip. */
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
        this.isShowing = true;
        this.open = true;
        this.popover.show();
    }
    /** Shows the tooltip. */
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
        this.isShowing = false;
        this.open = false;
        this.popover.hide();
    }
    getTarget() {
        const target = this.host.querySelector('*:not(style)');
        if (!target) {
            throw new Error('Invalid tooltip target: no child element was found.');
        }
        return target;
    }
    handleBlur() {
        if (this.hasTrigger('focus')) {
            this.hide();
        }
    }
    handleClick() {
        if (this.hasTrigger('click')) {
            this.open ? this.hide() : this.show();
        }
    }
    handleFocus() {
        if (this.hasTrigger('focus')) {
            this.show();
        }
    }
    handleMouseOver() {
        if (this.hasTrigger('hover')) {
            this.show();
        }
    }
    handleMouseOut() {
        if (this.hasTrigger('hover')) {
            this.hide();
        }
    }
    handleSlotChange() {
        const oldTarget = this.target;
        const newTarget = this.getTarget();
        if (newTarget !== oldTarget) {
            oldTarget.removeAttribute('aria-describedby');
            newTarget.setAttribute('aria-describedby', this.componentId);
        }
    }
    hasTrigger(triggerType) {
        const triggers = this.trigger.split(' ');
        return triggers.includes(triggerType);
    }
    syncOptions() {
        this.popover.setOptions({
            placement: this.placement,
            distance: this.distance,
            skidding: this.skidding,
            transitionElement: this.tooltip,
            onAfterHide: () => this.slAfterHide.emit(),
            onAfterShow: () => this.slAfterShow.emit()
        });
    }
    render() {
        return (index.h(index.Host, { onMouseOver: this.handleMouseOver, onMouseOut: this.handleMouseOut }, index.h("slot", { "aria-describedby": this.componentId }), !this.disabled && (index.h("div", { ref: el => (this.tooltipPositioner = el), class: "tooltip-positioner" }, index.h("div", { part: "base", ref: el => (this.tooltip = el), id: this.componentId, class: {
                tooltip: true,
                'tooltip--open': this.open
            }, role: "tooltip", "aria-hidden": !this.open }, this.content)))));
    }
    get host() { return index.getElement(this); }
    static get watchers() { return {
        "open": ["handleOpenChange"]
    }; }
};
Tooltip.style = tooltipCss;

exports.sl_tooltip = Tooltip;
