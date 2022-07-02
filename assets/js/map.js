"use strict";
var circleFillColour = getComputedStyle(document.body).getPropertyValue('--map-circle-fill-colour');
var circleOutlineColour = getComputedStyle(document.body).getPropertyValue('--map-circle-outline-colour');
var map = L.map('map').setView([52.5913, -0.6021], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map © OpenStreetMap'
}).addTo(map);
var circle = L.circle([52.5913, -0.6021], {
    color: circleOutlineColour,
    fillColor: circleFillColour,
    fillOpacity: 0.3,
    radius: 600
}).addTo(map);
//# sourceMappingURL=map.js.map