'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9b0ec98d.js');

const avatarCss = ":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:inline-block;--size:3rem}.avatar{display:inline-flex;align-items:center;justify-content:center;position:relative;width:var(--size);height:var(--size);background-color:var(--sl-color-gray-80);font-family:var(--sl-font-sans);font-size:calc(var(--size) * 0.5);font-weight:var(--sl-font-weight-normal);color:var(--sl-color-white);overflow:hidden;user-select:none;vertical-align:middle}.avatar--circle{border-radius:var(--sl-border-radius-circle)}.avatar--rounded{border-radius:var(--sl-border-radius-medium)}.avatar--square{border-radius:0}.avatar__icon{display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;width:100%;height:100%}.avatar__initials{line-height:1;text-transform:uppercase}.avatar__image{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}";

const Avatar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.hasError = false;
        /** The image source to use for the avatar. */
        this.image = '';
        /** Alternative text for the image. */
        this.alt = '';
        /** Initials to use as a fallback when no image is available (1-2 characters max recommended). */
        this.initials = '';
        /** The shape of the avatar. */
        this.shape = 'circle';
    }
    connectedCallback() {
        this.handleImageError = this.handleImageError.bind(this);
    }
    handleImageError() {
        this.hasError = true;
    }
    render() {
        return (index.h("div", { part: "base", class: {
                avatar: true,
                'avatar--circle': this.shape === 'circle',
                'avatar--rounded': this.shape === 'rounded',
                'avatar--square': this.shape === 'square'
            }, role: "image", "aria-label": this.alt }, !this.initials && (index.h("div", { part: "icon", class: "avatar__icon" }, index.h("slot", { name: "icon" }, index.h("sl-icon", { name: "person-fill" })))), this.initials && (index.h("div", { part: "initials", class: "avatar__initials" }, this.initials)), this.image && !this.hasError && (index.h("img", { part: "image", class: "avatar__image", src: this.image, onError: this.handleImageError }))));
    }
};
Avatar.style = avatarCss;

exports.sl_avatar = Avatar;
