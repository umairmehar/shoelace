import { Component, Element, Event, Method, Prop, Watch, h } from '@stencil/core';
import { scrollIntoView } from '../../utilities/scroll';
import Popover from '../../utilities/popover';
let id = 0;
/**
 * @since 2.0
 * @status stable
 *
 * @slot trigger - The dropdown's trigger, usually a `<sl-button>` element.
 * @slot - The dropdown's content.
 *
 * @part base - The component's base wrapper.
 * @part trigger - The container that wraps the trigger.
 * @part panel - The panel that gets shown when the dropdown is open.
 */
export class Dropdown {
    constructor() {
        this.componentId = `dropdown-${++id}`;
        this.isShowing = false;
        /** Indicates whether or not the dropdown is open. You can use this in lieu of the show/hide methods. */
        this.open = false;
        /**
         * The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel
         * inside of the viewport.
         */
        this.placement = 'bottom-start';
        /** Determines whether the dropdown should hide when a menu item is selected. */
        this.closeOnSelect = true;
        /** The distance in pixels from which to offset the panel away from its trigger. */
        this.distance = 2;
        /** The distance in pixels from which to offset the panel along its trigger. */
        this.skidding = 0;
        /**
         * Enable this option to prevent the panel from being clipped when the component is placed inside a container with
         * `overflow: auto|scroll`.
         */
        this.hoist = false;
    }
    handleOpenChange() {
        this.open ? this.show() : this.hide();
    }
    handlePopoverOptionsChange() {
        this.popover.setOptions({
            strategy: this.hoist ? 'fixed' : 'absolute',
            placement: this.placement,
            distance: this.distance,
            skidding: this.skidding
        });
    }
    connectedCallback() {
        if (!this.containingElement) {
            this.containingElement = this.host;
        }
        this.handleDocumentKeyDown = this.handleDocumentKeyDown.bind(this);
        this.handleDocumentMouseDown = this.handleDocumentMouseDown.bind(this);
        this.handleMenuItemActivate = this.handleMenuItemActivate.bind(this);
        this.handlePanelSelect = this.handlePanelSelect.bind(this);
        this.handleTriggerKeyDown = this.handleTriggerKeyDown.bind(this);
        this.togglePanel = this.togglePanel.bind(this);
    }
    componentDidLoad() {
        this.popover = new Popover(this.trigger, this.positioner, {
            strategy: this.hoist ? 'fixed' : 'absolute',
            placement: this.placement,
            distance: this.distance,
            skidding: this.skidding,
            transitionElement: this.panel,
            onAfterHide: () => this.slAfterHide.emit(),
            onAfterShow: () => this.slAfterShow.emit(),
            onTransitionEnd: () => {
                if (!this.open) {
                    this.panel.scrollTop = 0;
                }
            }
        });
        // Show on init if open
        if (this.open) {
            this.show();
        }
    }
    disconnectedCallback() {
        this.hide();
        this.popover.destroy();
    }
    /** Shows the dropdown panel */
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
        this.panel.addEventListener('slActivate', this.handleMenuItemActivate);
        this.panel.addEventListener('slSelect', this.handlePanelSelect);
        document.addEventListener('mousedown', this.handleDocumentMouseDown);
        document.addEventListener('keydown', this.handleDocumentKeyDown);
        this.isShowing = true;
        this.open = true;
        this.popover.show();
    }
    /** Hides the dropdown panel */
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
        this.panel.removeEventListener('slActivate', this.handleMenuItemActivate);
        this.panel.removeEventListener('slSelect', this.handlePanelSelect);
        document.removeEventListener('mousedown', this.handleDocumentMouseDown);
        document.removeEventListener('keydown', this.handleDocumentKeyDown);
        this.isShowing = false;
        this.open = false;
        this.popover.hide();
    }
    focusOnTrigger() {
        const slot = this.trigger.querySelector('slot');
        const trigger = slot.assignedElements({ flatten: true })[0];
        if (trigger) {
            if (typeof trigger.setFocus === 'function') {
                trigger.setFocus();
            }
            else if (typeof trigger.focus === 'function') {
                trigger.focus();
            }
        }
    }
    getMenu() {
        return this.panel
            .querySelector('slot')
            .assignedElements({ flatten: true })
            .filter(el => el.tagName.toLowerCase() === 'sl-menu')[0];
    }
    handleDocumentKeyDown(event) {
        const menu = this.getMenu();
        // Close when escape is pressed
        if (event.key === 'Escape') {
            this.hide();
            this.focusOnTrigger();
            return;
        }
        // Close when tabbing results in the focus leaving the containing element
        if (event.key === 'Tab') {
            setTimeout(() => {
                if (document.activeElement &&
                    document.activeElement.closest(this.containingElement.tagName.toLowerCase()) !== this.containingElement) {
                    this.hide();
                    return;
                }
            });
        }
        // Prevent the page from scrolling when certain keys are pressed
        if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
            event.preventDefault();
        }
        // If a menu is present, focus on it when certain keys are pressed
        if (menu && ['ArrowDown', 'ArrowUp'].includes(event.key)) {
            event.preventDefault();
            menu.setFocus();
        }
    }
    handleDocumentMouseDown(event) {
        // Close when clicking outside of the close element
        const path = event.composedPath();
        if (!path.includes(this.containingElement)) {
            this.hide();
            return;
        }
    }
    handleMenuItemActivate(event) {
        const item = event.target;
        scrollIntoView(item, this.panel);
    }
    handlePanelSelect(event) {
        const target = event.target;
        // Hide the dropdown when a menu item is selected
        if (this.closeOnSelect && target.tagName.toLowerCase() === 'sl-menu') {
            this.hide();
            this.focusOnTrigger();
        }
    }
    handleTriggerKeyDown(event) {
        // Open the panel when pressing down or up while focused on the trigger
        if (!this.open && ['ArrowDown', 'ArrowUp'].includes(event.key)) {
            this.show();
            event.preventDefault();
            event.stopPropagation();
        }
        // All other keys focus the menu and initiate type-to-select
        const menu = this.getMenu();
        if (menu && event.target !== menu) {
            menu.setFocus();
            menu.typeToSelect(event.key);
            return;
        }
    }
    togglePanel() {
        this.open ? this.hide() : this.show();
    }
    render() {
        return (h("div", { part: "base", id: this.componentId, class: {
                dropdown: true,
                'dropdown--open': this.open
            }, "aria-expanded": this.open, "aria-haspopup": "true" },
            h("span", { part: "trigger", class: "dropdown__trigger", ref: el => (this.trigger = el), onKeyDown: this.handleTriggerKeyDown, onClick: this.togglePanel },
                h("slot", { name: "trigger" })),
            h("div", { ref: el => (this.positioner = el), class: "dropdown__positioner" },
                h("div", { ref: el => (this.panel = el), part: "panel", class: "dropdown__panel", role: "menu", "aria-hidden": !this.open, "aria-labelledby": this.componentId },
                    h("slot", null)))));
    }
    static get is() { return "sl-dropdown"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["dropdown.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["dropdown.css"]
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
                "text": "Indicates whether or not the dropdown is open. You can use this in lieu of the show/hide methods."
            },
            "attribute": "open",
            "reflect": true,
            "defaultValue": "false"
        },
        "placement": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "| 'top'\n    | 'top-start'\n    | 'top-end'\n    | 'bottom'\n    | 'bottom-start'\n    | 'bottom-end'\n    | 'right'\n    | 'right-start'\n    | 'right-end'\n    | 'left'\n    | 'left-start'\n    | 'left-end'",
                "resolved": "\"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel\ninside of the viewport."
            },
            "attribute": "placement",
            "reflect": false,
            "defaultValue": "'bottom-start'"
        },
        "closeOnSelect": {
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
                "text": "Determines whether the dropdown should hide when a menu item is selected."
            },
            "attribute": "close-on-select",
            "reflect": false,
            "defaultValue": "true"
        },
        "containingElement": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "HTMLElement",
                "resolved": "HTMLElement",
                "references": {
                    "HTMLElement": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The dropdown will close when the user interacts outside of this element (e.g. clicking)."
            }
        },
        "distance": {
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
                "text": "The distance in pixels from which to offset the panel away from its trigger."
            },
            "attribute": "distance",
            "reflect": false,
            "defaultValue": "2"
        },
        "skidding": {
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
                "text": "The distance in pixels from which to offset the panel along its trigger."
            },
            "attribute": "skidding",
            "reflect": false,
            "defaultValue": "0"
        },
        "hoist": {
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
                "text": "Enable this option to prevent the panel from being clipped when the component is placed inside a container with\n`overflow: auto|scroll`."
            },
            "attribute": "hoist",
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
                "text": "Emitted when the dropdown opens. Calling `event.preventDefault()` will prevent it from being opened."
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
                "text": "Emitted after the dropdown opens and all transitions are complete."
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
                "text": "Emitted when the dropdown closes. Calling `event.preventDefault()` will prevent it from being closed."
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
                "text": "Emitted after the dropdown closes and all transitions are complete."
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
                "text": "Shows the dropdown panel",
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
                "text": "Hides the dropdown panel",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "host"; }
    static get watchers() { return [{
            "propName": "open",
            "methodName": "handleOpenChange"
        }, {
            "propName": "distance",
            "methodName": "handlePopoverOptionsChange"
        }, {
            "propName": "hoist",
            "methodName": "handlePopoverOptionsChange"
        }, {
            "propName": "placement",
            "methodName": "handlePopoverOptionsChange"
        }, {
            "propName": "skidding",
            "methodName": "handlePopoverOptionsChange"
        }]; }
}
