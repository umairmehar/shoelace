'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9b0ec98d.js');

const tabPanelCss = ":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:block}.tab-panel{border:solid 1px transparent;padding:20px 20px}";

let id = 0;
const TabPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.componentId = `tab-panel-${++id}`;
        /** The tab panel's name. */
        this.name = '';
        /** When true, the tab panel will be shown. */
        this.active = false;
    }
    render() {
        return (
        // If the user didn't provide an ID, we'll set one so we can link tabs and tab panels with aria labels
        index.h(index.Host, { id: this.host.id || this.componentId, style: { display: this.active ? 'block' : 'none' } }, index.h("div", { part: "base", class: "tab-panel", role: "tabpanel", "aria-selected": this.active, "aria-hidden": !this.active }, index.h("slot", null))));
    }
    get host() { return index.getElement(this); }
};
TabPanel.style = tabPanelCss;

exports.sl_tab_panel = TabPanel;
