'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9b0ec98d.js');
const focusVisible = require('./focus-visible-535ddbb6.js');
const scroll = require('./scroll-8ad00e0e.js');
const ResizeObserver_es = require('./ResizeObserver.es-646489f6.js');

const tabGroupCss = ":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{--tabs-border-color:var(--sl-color-gray-90);display:block}.tab-group{display:flex;border:solid 1px transparent;border-radius:0}.tab-group .tab-group__tabs{display:flex;position:relative}.tab-group .tab-group__active-tab-indicator{position:absolute;transition:var(--sl-transition-fast) transform ease, var(--sl-transition-fast) width ease}.tab-group:not(.focus-visible) ::slotted(sl-tab){--focus-ring:none}.tab-group--horizontal-scroll .tab-group__nav-container{position:relative;padding:0 var(--sl-spacing-x-large)}.tab-group__scroll-button{display:flex;align-items:center;justify-content:center;position:absolute;top:0;bottom:0;width:var(--sl-spacing-x-large)}.tab-group__scroll-button--left{left:0}.tab-group__scroll-button--right{right:0}.tab-group--top{flex-direction:column}.tab-group--top .tab-group__nav{display:flex;order:1;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none}.tab-group--top .tab-group__nav::-webkit-scrollbar{width:0;height:0}.tab-group--top .tab-group__tabs{flex:1 1 auto;position:relative;flex-direction:row;border-bottom:solid 2px var(--tabs-border-color)}.tab-group--top .tab-group__active-tab-indicator{bottom:-2px;border-bottom:solid 2px var(--sl-color-primary-50)}.tab-group--top .tab-group__body{order:2}.tab-group--bottom{flex-direction:column}.tab-group--bottom .tab-group__nav{display:flex;order:2;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none}.tab-group--bottom .tab-group__nav::-webkit-scrollbar{width:0;height:0}.tab-group--bottom .tab-group__tabs{flex:1 1 auto;position:relative;flex-direction:row;border-top:solid 2px var(--tabs-border-color)}.tab-group--bottom .tab-group__active-tab-indicator{top:calc(-1 * 2px);border-top:solid 2px var(--sl-color-primary-50)}.tab-group--bottom .tab-group__body{order:1}.tab-group--left{flex-direction:row}.tab-group--left .tab-group__nav{order:1}.tab-group--left .tab-group__tabs{flex:0 0 auto;flex-direction:column;border-right:solid 2px var(--tabs-border-color)}.tab-group--left .tab-group__active-tab-indicator{right:calc(-1 * 2px);border-right:solid 2px var(--sl-color-primary-50)}.tab-group--left .tab-group__body{flex:1 1 auto;order:2}.tab-group--right{flex-direction:row}.tab-group--right .tab-group__nav{order:2}.tab-group--right .tab-group__tabs{flex:0 0 auto;flex-direction:column;border-left:solid 2px var(--tabs-border-color)}.tab-group--right .tab-group__active-tab-indicator{left:calc(-1 * 2px);border-left:solid 2px var(--sl-color-primary-50)}.tab-group--right .tab-group__body{flex:1 1 auto;order:1}";

const TabGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.slTabShow = index.createEvent(this, "slTabShow", 7);
        this.slTabHide = index.createEvent(this, "slTabHide", 7);
        this.canScrollHorizontally = false;
        /** The placement of the tabs. */
        this.placement = 'top';
    }
    handlePlacementChange() {
        this.syncActiveTabIndicator();
    }
    connectedCallback() {
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleScrollLeft = this.handleScrollLeft.bind(this);
        this.handleScrollRight = this.handleScrollRight.bind(this);
    }
    componentDidLoad() {
        // Set initial tab state when the tabs first become visible
        const observer = new IntersectionObserver((entries, observer) => {
            if (entries[0].intersectionRatio > 0) {
                this.setAriaLabels();
                this.setActiveTab(this.getActiveTab() || this.getAllTabs()[0], false);
                observer.unobserve(entries[0].target);
            }
        });
        observer.observe(this.host);
        focusVisible.focusVisible.observe(this.tabGroup);
        this.resizeObserver = new ResizeObserver_es.index(() => this.syncHorizontalScroll());
        this.resizeObserver.observe(this.nav);
        requestAnimationFrame(() => this.syncHorizontalScroll());
        // Update aria labels if the DOM changes
        this.mutationObserver = new MutationObserver(mutations => {
            if (mutations.some(mutation => {
                return !['aria-labelledby', 'aria-controls'].includes(mutation.attributeName);
            })) {
                setTimeout(() => this.setAriaLabels());
            }
        });
        this.mutationObserver.observe(this.host, { attributes: true, childList: true, subtree: true });
    }
    disconnectedCallback() {
        this.mutationObserver.disconnect();
        focusVisible.focusVisible.unobserve(this.tabGroup);
        this.resizeObserver.unobserve(this.nav);
    }
    /** Shows the specified tab panel. */
    async show(panel) {
        const tabs = this.getAllTabs();
        const tab = tabs.find(el => el.panel === panel);
        if (tab) {
            this.setActiveTab(tab);
        }
    }
    getAllTabs(includeDisabled = false) {
        const slot = this.tabs.querySelector('slot');
        return [...slot.assignedElements()].filter((el) => {
            return includeDisabled
                ? el.tagName.toLowerCase() === 'sl-tab'
                : el.tagName.toLowerCase() === 'sl-tab' && !el.disabled;
        });
    }
    getAllPanels() {
        const slot = this.body.querySelector('slot');
        return [...slot.assignedElements()].filter((el) => el.tagName.toLowerCase() === 'sl-tab-panel');
    }
    getActiveTab() {
        return this.getAllTabs().find(el => el.active);
    }
    handleClick(event) {
        const target = event.target;
        const tab = target.closest('sl-tab');
        if (tab) {
            this.setActiveTab(tab);
        }
    }
    handleKeyDown(event) {
        // Activate a tab
        if (['Enter', ' '].includes(event.key)) {
            const target = event.target;
            const tab = target.closest('sl-tab');
            if (tab) {
                this.setActiveTab(tab);
                event.preventDefault();
            }
        }
        // Move focus left or right
        if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) {
            const activeEl = document.activeElement;
            if (activeEl && activeEl.tagName.toLowerCase() === 'sl-tab') {
                const tabs = this.getAllTabs();
                let index = tabs.indexOf(activeEl);
                if (event.key === 'Home') {
                    index = 0;
                }
                else if (event.key === 'End') {
                    index = tabs.length - 1;
                }
                else if (event.key === 'ArrowLeft') {
                    index = Math.max(0, index - 1);
                }
                else if (event.key === 'ArrowRight') {
                    index = Math.min(tabs.length - 1, index + 1);
                }
                tabs[index].setFocus();
                if (['top', 'bottom'].includes(this.placement)) {
                    scroll.scrollIntoView(tabs[index], this.nav, 'horizontal');
                }
                event.preventDefault();
            }
        }
    }
    handleScrollLeft() {
        this.nav.scroll({
            left: this.nav.scrollLeft - this.nav.clientWidth,
            behavior: 'smooth'
        });
    }
    handleScrollRight() {
        this.nav.scroll({
            left: this.nav.scrollLeft + this.nav.clientWidth,
            behavior: 'smooth'
        });
    }
    setActiveTab(tab, emitEvents = true) {
        if (tab && tab !== this.activeTab && !tab.disabled) {
            const previousTab = this.activeTab;
            this.activeTab = tab;
            // Sync tabs and panels
            this.getAllTabs().map(el => (el.active = el === this.activeTab));
            this.getAllPanels().map(el => (el.active = el.name === this.activeTab.panel));
            this.syncActiveTabIndicator();
            if (['top', 'bottom'].includes(this.placement)) {
                scroll.scrollIntoView(this.activeTab, this.nav, 'horizontal');
            }
            // Emit events
            if (emitEvents) {
                if (previousTab) {
                    this.slTabHide.emit({ name: previousTab.panel });
                }
                this.slTabShow.emit({ name: this.activeTab.panel });
            }
        }
    }
    setAriaLabels() {
        const tabs = this.getAllTabs();
        const panels = this.getAllPanels();
        // Link each tab with its corresponding panel
        tabs.map(tab => {
            const panel = panels.find(el => el.name === tab.panel);
            if (panel) {
                tab.setAttribute('aria-controls', panel.getAttribute('id'));
                panel.setAttribute('aria-labelledby', tab.getAttribute('id'));
            }
        });
    }
    syncActiveTabIndicator() {
        const tab = this.getActiveTab();
        const width = tab.clientWidth;
        const height = tab.clientHeight;
        const offset = scroll.getOffset(tab, this.nav);
        const offsetTop = offset.top + this.nav.scrollTop;
        const offsetLeft = offset.left + this.nav.scrollLeft;
        switch (this.placement) {
            case 'top':
            case 'bottom':
                this.activeTabIndicator.style.width = `${width}px`;
                this.activeTabIndicator.style.height = null;
                this.activeTabIndicator.style.transform = `translateX(${offsetLeft}px)`;
                break;
            case 'left':
            case 'right':
                this.activeTabIndicator.style.width = null;
                this.activeTabIndicator.style.height = `${height}px`;
                this.activeTabIndicator.style.transform = `translateY(${offsetTop}px)`;
                break;
        }
    }
    syncHorizontalScroll() {
        this.canScrollHorizontally =
            ['top', 'bottom'].includes(this.placement) && this.nav.scrollWidth > this.nav.clientWidth;
    }
    render() {
        return (index.h("div", { part: "base", ref: el => (this.tabGroup = el), class: {
                'tab-group': true,
                // Placements
                'tab-group--top': this.placement === 'top',
                'tab-group--bottom': this.placement === 'bottom',
                'tab-group--left': this.placement === 'left',
                'tab-group--right': this.placement === 'right',
                'tab-group--horizontal-scroll': this.canScrollHorizontally
            }, onClick: this.handleClick, onKeyDown: this.handleKeyDown }, index.h("div", { class: "tab-group__nav-container" }, this.canScrollHorizontally && (index.h("sl-icon-button", { class: "tab-group__scroll-button tab-group__scroll-button--left", name: "chevron-left", onClick: this.handleScrollLeft })), index.h("div", { ref: el => (this.nav = el), key: "nav", part: "nav", class: "tab-group__nav", tabindex: "-1" }, index.h("div", { ref: el => (this.tabs = el), part: "tabs", class: "tab-group__tabs", role: "tablist" }, index.h("div", { ref: el => (this.activeTabIndicator = el), part: "active-tab-indicator", class: "tab-group__active-tab-indicator" }), index.h("slot", { name: "nav" }))), this.canScrollHorizontally && (index.h("sl-icon-button", { class: "tab-group__scroll-button tab-group__scroll-button--right", name: "chevron-right", onClick: this.handleScrollRight }))), index.h("div", { ref: el => (this.body = el), part: "body", class: "tab-group__body" }, index.h("slot", null))));
    }
    get host() { return index.getElement(this); }
    static get watchers() { return {
        "placement": ["handlePlacementChange"]
    }; }
};
TabGroup.style = tabGroupCss;

exports.sl_tab_group = TabGroup;
