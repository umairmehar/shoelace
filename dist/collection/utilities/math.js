//
// Ensures a number stays within a minimum and maximum value
//
export function clamp(value, min, max) {
    if (value < min)
        return min;
    if (value > max)
        return max;
    return value;
}
