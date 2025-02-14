'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9b0ec98d.js');

const menuDividerCss = ":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:block}.menu-divider{border-top:solid 1px var(--sl-panel-border-color);margin:var(--sl-spacing-x-small) 0}";

const MenuDivider = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return index.h("div", { part: "base", class: "menu-divider", role: "separator" });
    }
};
MenuDivider.style = menuDividerCss;

exports.sl_menu_divider = MenuDivider;
