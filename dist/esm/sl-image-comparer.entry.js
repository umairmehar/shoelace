import { r as registerInstance, c as createEvent, h } from './index-d587ef97.js';
import { c as clamp } from './math-d699f2ce.js';

const imageComparerCss = ":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{--divider-width:2px;--handle-size:2.5rem;display:block;position:relative}.image-comparer{max-width:100%;max-height:100%;overflow:hidden}.image-comparer__before,.image-comparer__after{pointer-events:none}.image-comparer__before ::slotted(img),.image-comparer__before ::slotted(svg),.image-comparer__after ::slotted(img),.image-comparer__after ::slotted(svg){display:block;max-width:100% !important;height:auto}.image-comparer__after{position:absolute;top:0;left:0;height:100%;width:100%}.image-comparer__divider{display:flex;align-items:center;justify-content:center;position:absolute;top:0;width:var(--divider-width);height:100%;background-color:var(--sl-color-white);transform:translateX(calc(var(--divider-width) / -2));cursor:grab}.image-comparer__divider:active{cursor:grabbing}.image-comparer__handle{display:flex;align-items:center;justify-content:center;position:absolute;top:calc(50% - (var(--handle-size) / 2));width:var(--handle-size);height:var(--handle-size);background-color:var(--sl-color-white);border-radius:var(--sl-border-radius-circle);font-size:calc(var(--handle-size) * 0.5);color:var(--sl-color-gray-50);cursor:inherit;z-index:10}.image-comparer__handle:focus{outline:none;box-shadow:0 0 0 1px hsl(var(--sl-color-primary-hue), var(--sl-color-primary-saturation), 50%), var(--sl-focus-ring-box-shadow)}";

const ImageComparer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.slChange = createEvent(this, "slChange", 7);
        /** The position of the divider as a percentage. */
        this.position = 50;
    }
    handlePositionChange() {
        this.slChange.emit();
    }
    connectedCallback() {
        this.dividerPosition = this.position;
        this.handleDrag = this.handleDrag.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    handleDrag(event) {
        const { width } = this.base.getBoundingClientRect();
        function drag(event, container, onMove) {
            const move = (event) => {
                const dims = container.getBoundingClientRect();
                const offsetX = dims.left + container.ownerDocument.defaultView.pageXOffset;
                const offsetY = dims.top + container.ownerDocument.defaultView.pageYOffset;
                const x = (event.changedTouches ? event.changedTouches[0].pageX : event.pageX) - offsetX;
                const y = (event.changedTouches ? event.changedTouches[0].pageY : event.pageY) - offsetY;
                onMove(x, y);
            };
            // Move on init
            move(event);
            const stop = () => {
                document.removeEventListener('mousemove', move);
                document.removeEventListener('touchmove', move);
                document.removeEventListener('mouseup', stop);
                document.removeEventListener('touchend', stop);
            };
            document.addEventListener('mousemove', move);
            document.addEventListener('touchmove', move);
            document.addEventListener('mouseup', stop);
            document.addEventListener('touchend', stop);
        }
        this.handle.focus();
        event.preventDefault();
        drag(event, this.base, x => {
            this.position = clamp((x / width) * 100, 0, 100);
            this.dividerPosition = this.position;
        });
    }
    handleKeyDown(event) {
        if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
            const incr = event.shiftKey ? 10 : 1;
            let newPosition = this.position;
            event.preventDefault();
            if (event.key === 'ArrowLeft')
                newPosition = newPosition - incr;
            if (event.key === 'ArrowRight')
                newPosition = newPosition + incr;
            if (event.key === 'Home')
                newPosition = 0;
            if (event.key === 'End')
                newPosition = 100;
            newPosition = clamp(newPosition, 0, 100);
            this.position = newPosition;
            this.dividerPosition = newPosition;
        }
    }
    render() {
        return (h("div", { ref: el => (this.base = el), part: "base", class: "image-comparer", onKeyDown: this.handleKeyDown }, h("div", { class: "image-comparer__image" }, h("div", { part: "before", class: "image-comparer__before" }, h("slot", { name: "before" })), h("div", { part: "after", class: "image-comparer__after", style: {
                clipPath: `inset(0 ${100 - this.dividerPosition}% 0 0)`
            } }, h("slot", { name: "after" }))), h("div", { ref: el => (this.divider = el), part: "divider", class: "image-comparer__divider", style: {
                left: `${this.dividerPosition}%`
            }, onMouseDown: this.handleDrag, onTouchStart: this.handleDrag }, h("div", { ref: el => (this.handle = el), part: "handle", class: "image-comparer__handle", role: "scrollbar", "aria-valuenow": this.dividerPosition, "aria-valuemin": "0", "aria-valuemax": "100", tabIndex: 0 }, h("sl-icon", { class: "image-comparer__handle-icon", name: "grip-horizontal" })))));
    }
    static get watchers() { return {
        "position": ["handlePositionChange"]
    }; }
};
ImageComparer.style = imageComparerCss;

export { ImageComparer as sl_image_comparer };
