import { Component, Element, Event, Method, Prop, Watch, h } from '@stencil/core';
import animations from './animations';
import easings from './easings';
/**
 * @since 2.0
 * @status experimental
 *
 * @slot - The element to animate. If multiple elements are to be animated, wrap them in a single container.
 */
export class Animate {
    constructor() {
        this.hasStarted = false;
        /** The name of the animation to use. */
        this.name = 'none';
        /** The number of milliseconds to delay the start of the animation. */
        this.delay = 0;
        /** Determines the direction of playback as well as the behavior when reaching the end of an iteration. */
        this.direction = 'normal';
        /** The number of milliseconds each iteration of the animation takes to complete. */
        this.duration = 1000;
        /** The rate of the animation's change over time. */
        this.easing = 'linear';
        /** The number of milliseconds to delay after the active period of an animation sequence. */
        this.endDelay = 0;
        /** Sets how the animation applies styles to its target before and after its execution. */
        this.fill = 'auto';
        /** The number of iterations to run before the animation completes. Defaults to `Infinity`, which loops. */
        this.iterations = Infinity;
        /** The offset at which to start the animation, usually between 0 (start) and 1 (end). */
        this.iterationStart = 0;
        /**
         * Sets the animation's playback rate. The default is `1`, which plays the animation at a normal speed. Setting this
         * to `2`, for example, will double the animation's speed. A negative value can be used to reverse the animation. This
         * value can be changed without causing the animation to restart.
         */
        this.playbackRate = 1;
        /** Pauses the animation. The animation will resume when this prop is removed. */
        this.pause = false;
    }
    get element() {
        const slot = this.host.shadowRoot.querySelector('slot');
        return slot.assignedElements({ flatten: true })[0];
    }
    // Restart the animation when any of these properties change
    handleRestartAnimation() {
        this.createAnimation();
    }
    handlePauseChange() {
        this.pause ? this.animation.pause() : this.animation.play();
        if (!this.pause && !this.hasStarted) {
            this.hasStarted = true;
            this.slStart.emit();
        }
    }
    handlePlaybackRateChange() {
        this.animation.playbackRate = this.playbackRate;
    }
    connectedCallback() {
        this.handleAnimationFinish = this.handleAnimationFinish.bind(this);
        this.handleAnimationCancel = this.handleAnimationCancel.bind(this);
    }
    componentDidLoad() {
        this.createAnimation();
    }
    disconnectedCallback() {
        this.destroyAnimation();
    }
    handleAnimationFinish() {
        this.slFinish.emit();
    }
    handleAnimationCancel() {
        this.slCancel.emit();
    }
    createAnimation() {
        const easing = easings.hasOwnProperty(this.easing) ? easings[this.easing] : this.easing;
        const keyframes = this.keyframes ? this.keyframes : animations[this.name];
        this.destroyAnimation();
        this.animation = this.element.animate(keyframes, {
            delay: this.delay,
            direction: this.direction,
            duration: this.duration,
            easing,
            endDelay: this.endDelay,
            fill: this.fill,
            iterationStart: this.iterationStart,
            iterations: this.iterations
        });
        this.animation.playbackRate = this.playbackRate;
        this.animation.addEventListener('cancel', this.handleAnimationCancel);
        this.animation.addEventListener('finish', this.handleAnimationFinish);
        if (this.pause) {
            this.animation.pause();
        }
        else {
            this.hasStarted = true;
            this.slStart.emit();
        }
    }
    destroyAnimation() {
        if (this.animation) {
            this.animation.cancel();
            this.animation.removeEventListener('cancel', this.handleAnimationCancel);
            this.animation.removeEventListener('finish', this.handleAnimationFinish);
            this.animation = null;
            this.hasStarted = false;
        }
    }
    /** Clears all KeyframeEffects caused by this animation and aborts its playback. */
    async cancel() {
        try {
            this.animation.cancel();
        }
        catch (_a) { }
    }
    /** Sets the playback time to the end of the animation corresponding to the current playback direction. */
    async finish() {
        try {
            this.animation.finish();
        }
        catch (_a) { }
    }
    /** Gets a list of all supported animation names. */
    async getAnimationNames() {
        return Object.entries(animations).map(([name]) => name);
    }
    /** Gets a list of all supported easing function names. */
    async getEasingNames() {
        return Object.entries(easings).map(([name]) => name);
    }
    /** Gets the current time of the animation in milliseconds. */
    async getCurrentTime() {
        return this.animation.currentTime;
    }
    /** Sets the current time of the animation in milliseconds. */
    async setCurrentTime(time) {
        this.animation.currentTime = time;
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "sl-animation"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["animation.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["animation.css"]
    }; }
    static get properties() { return {
        "name": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The name of the animation to use."
            },
            "attribute": "name",
            "reflect": false,
            "defaultValue": "'none'"
        },
        "delay": {
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
                "text": "The number of milliseconds to delay the start of the animation."
            },
            "attribute": "delay",
            "reflect": false,
            "defaultValue": "0"
        },
        "direction": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "PlaybackDirection",
                "resolved": "\"alternate\" | \"alternate-reverse\" | \"normal\" | \"reverse\"",
                "references": {
                    "PlaybackDirection": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Determines the direction of playback as well as the behavior when reaching the end of an iteration."
            },
            "attribute": "direction",
            "reflect": false,
            "defaultValue": "'normal'"
        },
        "duration": {
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
                "text": "The number of milliseconds each iteration of the animation takes to complete."
            },
            "attribute": "duration",
            "reflect": false,
            "defaultValue": "1000"
        },
        "easing": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The rate of the animation's change over time."
            },
            "attribute": "easing",
            "reflect": false,
            "defaultValue": "'linear'"
        },
        "endDelay": {
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
                "text": "The number of milliseconds to delay after the active period of an animation sequence."
            },
            "attribute": "end-delay",
            "reflect": false,
            "defaultValue": "0"
        },
        "fill": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "FillMode",
                "resolved": "\"auto\" | \"backwards\" | \"both\" | \"forwards\" | \"none\"",
                "references": {
                    "FillMode": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Sets how the animation applies styles to its target before and after its execution."
            },
            "attribute": "fill",
            "reflect": false,
            "defaultValue": "'auto'"
        },
        "iterations": {
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
                "text": "The number of iterations to run before the animation completes. Defaults to `Infinity`, which loops."
            },
            "attribute": "iterations",
            "reflect": false,
            "defaultValue": "Infinity"
        },
        "iterationStart": {
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
                "text": "The offset at which to start the animation, usually between 0 (start) and 1 (end)."
            },
            "attribute": "iteration-start",
            "reflect": false,
            "defaultValue": "0"
        },
        "keyframes": {
            "type": "unknown",
            "mutable": true,
            "complexType": {
                "original": "Keyframe[]",
                "resolved": "Keyframe[]",
                "references": {
                    "Keyframe": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The keyframes to use for the animation. If this is set, `name` will be ignored."
            }
        },
        "playbackRate": {
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
                "text": "Sets the animation's playback rate. The default is `1`, which plays the animation at a normal speed. Setting this\nto `2`, for example, will double the animation's speed. A negative value can be used to reverse the animation. This\nvalue can be changed without causing the animation to restart."
            },
            "attribute": "playback-rate",
            "reflect": false,
            "defaultValue": "1"
        },
        "pause": {
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
                "text": "Pauses the animation. The animation will resume when this prop is removed."
            },
            "attribute": "pause",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get events() { return [{
            "method": "slCancel",
            "name": "slCancel",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the animation is canceled."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "slFinish",
            "name": "slFinish",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the animation finishes."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "slStart",
            "name": "slStart",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the animation starts or restarts."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "cancel": {
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
                "text": "Clears all KeyframeEffects caused by this animation and aborts its playback.",
                "tags": []
            }
        },
        "finish": {
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
                "text": "Sets the playback time to the end of the animation corresponding to the current playback direction.",
                "tags": []
            }
        },
        "getAnimationNames": {
            "complexType": {
                "signature": "() => Promise<string[]>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<string[]>"
            },
            "docs": {
                "text": "Gets a list of all supported animation names.",
                "tags": []
            }
        },
        "getEasingNames": {
            "complexType": {
                "signature": "() => Promise<string[]>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<string[]>"
            },
            "docs": {
                "text": "Gets a list of all supported easing function names.",
                "tags": []
            }
        },
        "getCurrentTime": {
            "complexType": {
                "signature": "() => Promise<number>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<number>"
            },
            "docs": {
                "text": "Gets the current time of the animation in milliseconds.",
                "tags": []
            }
        },
        "setCurrentTime": {
            "complexType": {
                "signature": "(time: number) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Sets the current time of the animation in milliseconds.",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "host"; }
    static get watchers() { return [{
            "propName": "delay",
            "methodName": "handleRestartAnimation"
        }, {
            "propName": "direction",
            "methodName": "handleRestartAnimation"
        }, {
            "propName": "easing",
            "methodName": "handleRestartAnimation"
        }, {
            "propName": "endDelay",
            "methodName": "handleRestartAnimation"
        }, {
            "propName": "fill",
            "methodName": "handleRestartAnimation"
        }, {
            "propName": "iterations",
            "methodName": "handleRestartAnimation"
        }, {
            "propName": "iterationStart",
            "methodName": "handleRestartAnimation"
        }, {
            "propName": "keyframes",
            "methodName": "handleRestartAnimation"
        }, {
            "propName": "name",
            "methodName": "handleRestartAnimation"
        }, {
            "propName": "pause",
            "methodName": "handlePauseChange"
        }, {
            "propName": "playbackRate",
            "methodName": "handlePlaybackRateChange"
        }]; }
}
