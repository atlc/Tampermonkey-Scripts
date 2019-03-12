// ==UserScript==
// @name         JobLogMonitor.js
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://172.16.104.76/hp/device/JobLogReport/*
// @match        https://172.16.104.80/hp/device/JobLogReport/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(window.location.reload.bind(window.location), 30000);

    let radios = [...document.querySelectorAll('[id^=\'JobLogRadioButton_\']')];

    radios.forEach((r) => {
        r.addEventListener('click', () => {
            document.getElementById('ViewDetailsButton').click();
        });
    });
})();
