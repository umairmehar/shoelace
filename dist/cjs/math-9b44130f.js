'use strict';

//
// Ensures a number stays within a minimum and maximum value
//
function clamp(value, min, max) {
    if (value < min)
        return min;
    if (value > max)
        return max;
    return value;
}

exports.clamp = clamp;
