'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9b0ec98d.js');

//
// Formats a number to a human-readable string of bytes or bits such as "100 MB"
//
function formatBytes(bytes, options) {
    options = Object.assign({
        unit: 'bytes',
        locale: undefined
    }, options);
    const byteUnits = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const bitUnits = ['b', 'kbit', 'Mbit', 'Gbit', 'Tbit', 'Pbit', 'Ebit', 'Zbit', 'Ybit'];
    const units = options.unit === 'bytes' ? byteUnits : bitUnits;
    const isNegative = bytes < 0;
    bytes = Math.abs(bytes);
    if (bytes === 0)
        return '0 B';
    const i = Math.min(Math.floor(Math.log10(bytes) / 3), units.length - 1);
    const num = Number((bytes / Math.pow(1000, i)).toPrecision(3));
    const numString = num.toLocaleString(options.locale);
    const prefix = isNegative ? '-' : '';
    return `${prefix}${numString} ${units[i]}`;
}

const FormatBytes = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** The number to format in bytes. */
        this.value = 0;
        /** The unit to display. */
        this.unit = 'bytes';
    }
    render() {
        return formatBytes(this.value, {
            unit: this.unit,
            locale: this.locale
        });
    }
};

exports.sl_format_bytes = FormatBytes;
