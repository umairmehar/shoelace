import { r as registerInstance, h } from './index-d587ef97.js';

const skeletonCss = ":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{--border-radius:var(--sl-border-radius-pill);--color:var(--sl-color-gray-90);--sheen-color:var(--sl-color-gray-95);display:block;position:relative}.skeleton{display:flex;width:100%;height:100%;min-height:1rem}.skeleton__indicator{flex:1 1 auto;background:var(--color);border-radius:var(--border-radius)}.skeleton--sheen .skeleton__indicator{background:linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));background-size:400% 100%;background-size:400% 100%;animation:sheen 8s ease-in-out infinite}.skeleton--pulse .skeleton__indicator{animation:pulse 2s ease-in-out 0.5s infinite}@keyframes sheen{0%{background-position:200% 0}to{background-position:-200% 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}";

const Skeleton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Determines which effect the skeleton will use. */
        this.effect = 'sheen';
    }
    render() {
        return (h("div", { part: "base", class: {
                skeleton: true,
                'skeleton--pulse': this.effect === 'pulse',
                'skeleton--sheen': this.effect === 'sheen'
            }, "aria-busy": true, "aria-live": "polite" }, h("div", { part: "indicator", class: "skeleton__indicator" })));
    }
};
Skeleton.style = skeletonCss;

export { Skeleton as sl_skeleton };
