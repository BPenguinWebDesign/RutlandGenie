"use strict";
var _a;
var toggle = document.createElement('input');
toggle.name = 'toggle';
toggle.id = 'toggle';
toggle.type = 'checkbox';
var label = document.createElement('label');
label.htmlFor = 'toggle';
var icon = document.createElement('span');
icon.classList.add('material-icons');
icon.textContent = 'menu';
label.appendChild(icon);
var menu = document.getElementsByClassName('mobile-menu')[0];
(_a = menu.firstElementChild) === null || _a === void 0 ? void 0 : _a.remove();
menu.appendChild(toggle);
menu.appendChild(label);
var slideIn = menu.firstElementChild;
slideIn.remove();
menu.appendChild(slideIn);
var fadeOuts = Array.from(document.getElementsByClassName('fade-out-menu')).map(function (v) { return ({ elem: v, transition: v.style.transition }); });
var elem = document.getElementsByClassName('container')[0];
fadeOuts.push({ elem: elem, transition: elem.style.transition });
toggle.addEventListener('change', function () {
    if (toggle.checked) {
        for (var _i = 0, fadeOuts_1 = fadeOuts; _i < fadeOuts_1.length; _i++) {
            var item = fadeOuts_1[_i];
            item.elem.style.transition = 'opacity 0.8s ease-in-out';
            item.elem.style.opacity = '0%';
        }
    }
    else {
        var _loop_1 = function (item) {
            item.elem.style.opacity = '100%';
            setTimeout(function () { return item.elem.style.transition = item.transition; }, 1000);
        };
        for (var _a = 0, fadeOuts_2 = fadeOuts; _a < fadeOuts_2.length; _a++) {
            var item = fadeOuts_2[_a];
            _loop_1(item);
        }
    }
});
//# sourceMappingURL=mobile-menu.js.map