"use strict";
var _a, _b;
for (var _i = 0, _c = Array.from(document.getElementsByClassName('yearssince')); _i < _c.length; _i++) {
    var yearssince = _c[_i];
    var now = new Date().getFullYear();
    var year = void 0;
    if (yearssince.dataset)
        year = (_a = yearssince.dataset.since) !== null && _a !== void 0 ? _a : "1995";
    else
        year = (_b = yearssince.getAttribute('data-since')) !== null && _b !== void 0 ? _b : "1995";
    yearssince.textContent = (now - parseInt(year)).toString();
}
//# sourceMappingURL=yearssince.js.map