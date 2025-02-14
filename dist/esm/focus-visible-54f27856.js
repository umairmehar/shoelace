//
// Simulates :focus-visible behavior on an element by watching for certain keyboard and mouse heuristics and toggling a
// `focus-visible` class. Works at the component level so no global polyfill is necessary.
//
// This will eventually be removed pending better :focus-visible support: https://caniuse.com/#search=focus-visible
//
const listeners = new WeakMap();
function observe(el) {
    const keys = ['Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home', 'End', 'PageDown', 'PageUp'];
    const is = (event) => {
        if (keys.includes(event.key)) {
            el.classList.add('focus-visible');
        }
    };
    const isNot = () => el.classList.remove('focus-visible');
    listeners.set(el, { is, isNot });
    el.addEventListener('keydown', is);
    el.addEventListener('keyup', is);
    el.addEventListener('mousedown', isNot);
    el.addEventListener('mousedown', isNot);
}
function unobserve(el) {
    const { is, isNot } = listeners.get(el);
    el.classList.remove('focus-visible');
    el.removeEventListener('keydown', is);
    el.removeEventListener('keyup', is);
    el.removeEventListener('mousedown', isNot);
    el.removeEventListener('mousedown', isNot);
}
const focusVisible = {
    observe,
    unobserve
};

export { focusVisible as f };
