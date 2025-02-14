'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9b0ec98d.js');
const slot = require('./slot-e9b13625.js');

const menuCss = ":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:block}.menu{padding:var(--sl-spacing-x-small) 0}.menu:focus{outline:none}";

const Menu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.slFocus = index.createEvent(this, "slFocus", 7);
        this.slBlur = index.createEvent(this, "slBlur", 7);
        this.slSelect = index.createEvent(this, "slSelect", 7);
        this.typeToSelectString = '';
        this.hasFocus = false;
    }
    connectedCallback() {
        this.handleBlur = this.handleBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }
    /** Sets focus on the menu. */
    async setFocus() {
        this.hasFocus = true;
        this.menu.focus();
    }
    /** Removes focus from the menu. */
    async removeFocus() {
        this.hasFocus = false;
        this.menu.blur();
    }
    /**
     * Initiates type-to-select logic, which automatically selects an option based on what the user is currently typing.
     * The key passed will be appended to the internal query and the selection will be updated. After a brief period, the
     * internal query is cleared automatically. This method is intended to be used with the keydown event. Useful for
     * enabling type-to-select when the menu doesn't have focus.
     */
    async typeToSelect(key) {
        clearTimeout(this.typeToSelectTimeout);
        this.typeToSelectTimeout = setTimeout(() => (this.typeToSelectString = ''), 750);
        this.typeToSelectString += key.toLowerCase();
        const items = this.getItems();
        for (const item of items) {
            const slot$1 = item.shadowRoot.querySelector('slot:not([name])');
            const label = slot.getTextContent(slot$1).toLowerCase().trim();
            if (label.substring(0, this.typeToSelectString.length) === this.typeToSelectString) {
                items.map(i => (i.active = i === item));
                break;
            }
        }
    }
    getItems() {
        const slot = this.menu.querySelector('slot');
        return [...slot.assignedElements({ flatten: true })].filter((el) => el.tagName.toLowerCase() === 'sl-menu-item' && !el.disabled);
    }
    getActiveItem() {
        return this.getItems().find(i => i.active);
    }
    setActiveItem(item) {
        this.getItems().map(i => (i.active = i === item));
    }
    handleFocus() {
        const item = this.getActiveItem();
        if (!item) {
            this.setActiveItem(this.getItems()[0]);
        }
        this.slFocus.emit();
    }
    handleBlur() {
        this.setActiveItem();
        this.slBlur.emit();
    }
    handleClick(event) {
        const target = event.target;
        const item = target.closest('sl-menu-item');
        if (item && !item.disabled) {
            this.slSelect.emit({ item });
        }
    }
    handleKeyDown(event) {
        // Make a selection when pressing enter
        if (event.key === 'Enter') {
            const item = this.getActiveItem();
            event.preventDefault();
            if (item) {
                this.slSelect.emit({ item });
            }
        }
        // Prevent scrolling when space is pressed
        if (event.key === ' ') {
            event.preventDefault();
        }
        // Move the selection when pressing down or up
        if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
            const items = this.getItems();
            const selectedItem = this.getActiveItem();
            let index = items.indexOf(selectedItem);
            if (items.length) {
                event.preventDefault();
                if (event.key === 'ArrowDown') {
                    index++;
                }
                else if (event.key === 'ArrowUp') {
                    index--;
                }
                else if (event.key === 'Home') {
                    index = 0;
                }
                else if (event.key === 'End') {
                    index = items.length - 1;
                }
                if (index < 0)
                    index = 0;
                if (index > items.length - 1)
                    index = items.length - 1;
                this.setActiveItem(items[index]);
                return;
            }
        }
        this.typeToSelect(event.key);
    }
    handleMouseDown(event) {
        event.preventDefault();
    }
    handleMouseOver(event) {
        const target = event.target;
        const item = target.closest('sl-menu-item');
        this.setActiveItem(item);
    }
    handleMouseOut() {
        this.setActiveItem(null);
    }
    render() {
        return (index.h("div", { ref: el => (this.menu = el), part: "base", class: {
                menu: true,
                'menu--has-focus': this.hasFocus
            }, tabIndex: 0, role: "menu", onClick: this.handleClick, onFocus: this.handleFocus, onBlur: this.handleBlur, onKeyDown: this.handleKeyDown, onMouseDown: this.handleMouseDown, onMouseOver: this.handleMouseOver, onMouseOut: this.handleMouseOut }, index.h("slot", null)));
    }
};
Menu.style = menuCss;

const tagCss = ":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:inline-block}.tag{display:flex;align-items:center;border:solid 1px;line-height:1;white-space:nowrap;user-select:none;cursor:default}.tag__clear::part(base){color:inherit;padding:0}.tag--primary{background-color:var(--sl-color-primary-95);border-color:var(--sl-color-primary-80);color:var(--sl-color-primary-35)}.tag--success{background-color:var(--sl-color-success-95);border-color:var(--sl-color-success-80);color:var(--sl-color-success-30)}.tag--info{background-color:var(--sl-color-info-95);border-color:var(--sl-color-info-80);color:var(--sl-color-info-40)}.tag--warning{background-color:var(--sl-color-warning-95);border-color:var(--sl-color-warning-80);color:var(--sl-color-warning-30)}.tag--danger{background-color:var(--sl-color-danger-95);border-color:var(--sl-color-danger-80);color:var(--sl-color-danger-40)}.tag--small{font-size:var(--sl-button-font-size-small);height:calc(var(--sl-input-height-small) * 0.8);line-height:calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);border-radius:var(--sl-input-border-radius-small);padding:0 var(--sl-spacing-x-small)}.tag--small .tag__clear{margin-left:var(--sl-spacing-xx-small);margin-right:calc(-1 * var(--sl-spacing-xxx-small))}.tag--medium{font-size:var(--sl-button-font-size-medium);height:calc(var(--sl-input-height-medium) * 0.8);line-height:calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);border-radius:var(--sl-input-border-radius-medium);padding:0 var(--sl-spacing-small)}.tag--medium .tag__clear{margin-left:var(--sl-spacing-xx-small);margin-right:calc(-1 * var(--sl-spacing-xx-small))}.tag--large{font-size:var(--sl-button-font-size-large);height:calc(var(--sl-input-height-large) * 0.8);line-height:calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);border-radius:var(--sl-input-border-radius-large);padding:0 var(--sl-spacing-medium)}.tag--large .tag__clear{margin-left:var(--sl-spacing-xx-small);margin-right:calc(-1 * var(--sl-spacing-x-small))}.tag--pill{border-radius:var(--sl-border-radius-pill)}";

const Tag = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.slClear = index.createEvent(this, "slClear", 7);
        /** The tag's type. */
        this.type = 'primary';
        /** The tag's size. */
        this.size = 'medium';
        /** Set to true to draw a pill-style tag with rounded edges. */
        this.pill = false;
        /** Set to true to make the tag clearable. */
        this.clearable = false;
    }
    connectedCallback() {
        this.handleClearClick = this.handleClearClick.bind(this);
    }
    handleClearClick() {
        this.slClear.emit();
    }
    render() {
        return (index.h("span", { ref: el => (this.tag = el), part: "base", class: {
                tag: true,
                // Types
                'tag--primary': this.type === 'primary',
                'tag--success': this.type === 'success',
                'tag--info': this.type === 'info',
                'tag--warning': this.type === 'warning',
                'tag--danger': this.type === 'danger',
                'tag--text': this.type === 'text',
                // Sizes
                'tag--small': this.size === 'small',
                'tag--medium': this.size === 'medium',
                'tag--large': this.size === 'large',
                // Modifers
                'tag--pill': this.pill,
                'tag--clearable': this.clearable
            } }, index.h("span", { part: "content", class: "tag__content" }, index.h("slot", null)), this.clearable && (index.h("sl-icon-button", { part: "clear-button", name: "x", class: "tag__clear", onClick: this.handleClearClick }))));
    }
};
Tag.style = tagCss;

exports.sl_menu = Menu;
exports.sl_tag = Tag;
