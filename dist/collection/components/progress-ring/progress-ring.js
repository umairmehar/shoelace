import { Component, Prop, Watch, h } from '@stencil/core';
/**
 * @since 2.0
 * @status stable
 *
 * @slot - A label to show inside the ring.
 *
 * @part base - The component's base wrapper.
 * @part label - The progress ring label.
 */
export class Progress {
    constructor() {
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
        return (h("div", { part: "base", class: "progress-ring" },
            h("svg", { class: "progress-ring__image", width: this.size, height: this.size },
                h("circle", { class: "progress-ring__track", "stroke-width": this.strokeWidth, "stroke-linecap": "round", fill: "transparent", r: this.size / 2 - this.strokeWidth * 2, cx: this.size / 2, cy: this.size / 2 }),
                h("circle", { ref: (el) => (this.indicator = el), class: "progress-ring__indicator", "stroke-width": this.strokeWidth, "stroke-linecap": "round", fill: "transparent", r: this.size / 2 - this.strokeWidth * 2, cx: this.size / 2, cy: this.size / 2 })),
            h("span", { part: "label", class: "progress-ring__label" },
                h("slot", null))));
    }
    static get is() { return "sl-progress-ring"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["progress-ring.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["progress-ring.css"]
    }; }
    static get properties() { return {
        "size": {
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
                "text": "The size of the progress ring in pixels."
            },
            "attribute": "size",
            "reflect": false,
            "defaultValue": "128"
        },
        "strokeWidth": {
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
                "text": "The stroke width of the progress ring in pixels."
            },
            "attribute": "stroke-width",
            "reflect": false,
            "defaultValue": "4"
        },
        "percentage": {
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
                "text": "The current progress percentage, 0 - 100."
            },
            "attribute": "percentage",
            "reflect": false
        }
    }; }
    static get watchers() { return [{
            "propName": "percentage",
            "methodName": "handlePercentageChange"
        }]; }
}
