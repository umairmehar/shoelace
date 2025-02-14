'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9b0ec98d.js');

const progressRingCss = ":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{--track-color:var(--sl-color-gray-90);--indicator-color:var(--sl-color-primary-50);display:inline-flex}.progress-ring{display:inline-flex;align-items:center;justify-content:center;position:relative}.progress-ring__track{stroke:var(--track-color)}.progress-ring__indicator{stroke:var(--indicator-color);transition:0.35s stroke-dashoffset, 0.35s stroke;transform:rotate(-90deg);transform-origin:50% 50%}.progress-ring__label{display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;user-select:none}";

const Progress = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** The size of the progress ring in pixels. */
        this.size = 128;
        /** The stroke width of the progress ring in pixels. */
        this.strokeWidth = 4;
    }
    handlePercentageChange() {
        this.updateProgress();
    }
    componentDidLoad() {
        this.updateProgress();
    }
    updateProgress() {
        const radius = this.indicator.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        const offset = circumference - (this.percentage / 100) * circumference;
        this.indicator.style.strokeDasharray = `${circumference} ${circumference}`;
        this.indicator.style.strokeDashoffset = `${offset}`;
    }
    render() {
        return (index.h("div", { part: "base", class: "progress-ring" }, index.h("svg", { class: "progress-ring__image", width: this.size, height: this.size }, index.h("circle", { class: "progress-ring__track", "stroke-width": this.strokeWidth, "stroke-linecap": "round", fill: "transparent", r: this.size / 2 - this.strokeWidth * 2, cx: this.size / 2, cy: this.size / 2 }), index.h("circle", { ref: (el) => (this.indicator = el), class: "progress-ring__indicator", "stroke-width": this.strokeWidth, "stroke-linecap": "round", fill: "transparent", r: this.size / 2 - this.strokeWidth * 2, cx: this.size / 2, cy: this.size / 2 })), index.h("span", { part: "label", class: "progress-ring__label" }, index.h("slot", null))));
    }
    static get watchers() { return {
        "percentage": ["handlePercentageChange"]
    }; }
};
Progress.style = progressRingCss;

exports.sl_progress_ring = Progress;
