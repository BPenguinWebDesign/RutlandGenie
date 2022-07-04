"use strict";
var tabs = Array.from(document.getElementsByClassName('tab-content')).map(function (tab) { return tab.id; });
function checkhash() {
    if (tabs.indexOf(window.location.hash.substring(1)) === -1)
        window.location.hash = '#academic-history';
}
;
checkhash();
window.addEventListener('hashchange', checkhash);
//# sourceMappingURL=credentials.js.map