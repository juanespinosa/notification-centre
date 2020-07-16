/* eslint-disable no-undef */
export const bglog = function(obj) {
    if(chrome && chrome.runtime) {
        chrome.runtime.sendMessage({type: "bglog", obj: obj});
    }
}
