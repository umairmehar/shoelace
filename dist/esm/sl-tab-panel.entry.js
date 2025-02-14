import { r as registerInstance, h, H as Host, g as getElement } from './index-d587ef97.js';

const tabPanelCss = ":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:block}.tab-panel{border:solid 1px transparent;padding:20px 20px}";

let id = 0;
const TabPanel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.componentId = `tab-panel-${++id}`;
        /** The tab panel's name. */
        this.name = '';
        /** When true, the tab panel will be shown. */
        this.active = false;
    }
    render() {
        return (
        // If the user didn't provide an ID, we'll set one so we can link tabs and tab panels with aria labels
        h(Host, { id: this.host.id || this.componentId, style: { display: this.active ? 'block' : 'none' } }, h("div", { part: "base", class: "tab-panel", role: "tabpanel", "aria-selected": this.active, "aria-hidden": !this.active }, h("slot", null))));
    }
    get host() { return getElement(this); }
};
TabPanel.style = tabPanelCss;

export { TabPanel as sl_tab_panel };
