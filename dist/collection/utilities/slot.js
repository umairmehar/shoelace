//
// Given a slot, this function iterates over all of its assigned element and text nodes and returns the concatenated
// HTML as a string. This is useful because we can't use slot.innerHTML as an alternative.
//
export function getInnerHTML(slot) {
    const nodes = slot.assignedNodes({ flatten: true });
    let html = '';
    [...nodes].map(node => {
        if (node.nodeType === Node.ELEMENT_NODE) {
            html += node.outerHTML;
        }
        if (node.nodeType === Node.TEXT_NODE) {
            html += node.textContent;
        }
    });
    return html;
}
//
// Given a slot, this function iterates over all of its assigned text nodes and returns the concatenated text as a
// string. This is useful because we can't use slot.textContent as an alternative.
//
export function getTextContent(slot) {
    const nodes = slot.assignedNodes({ flatten: true });
    let text = '';
    [...nodes].map(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            text += node.textContent;
        }
    });
    return text;
}
//
// Determines whether a slot with the given name exists in an element.
//
export function hasSlot(el, name) {
    return [...el.querySelectorAll('[slot]')].filter((slottedEl) => slottedEl.slot === name).length > 0;
}
