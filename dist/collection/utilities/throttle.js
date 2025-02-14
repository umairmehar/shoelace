//
// A lightweight debounce implementation
//
export function debounce(callback, delay) {
    let timer = null;
    return function () {
        if (timer) {
            return;
        }
        callback.apply(this, arguments);
        timer = setTimeout(() => (timer = null), delay);
    };
}
//
// A lightweight throttle implementation
//
export function throttle(callback, delay) {
    let isThrottled = false;
    let args;
    let context;
    function wrapper() {
        if (isThrottled) {
            args = arguments;
            context = this;
            return;
        }
        isThrottled = true;
        callback.apply(this, arguments);
        setTimeout(() => {
            isThrottled = false;
            if (args) {
                wrapper.apply(context, args);
                args = context = null;
            }
        }, delay);
    }
    return wrapper;
}
