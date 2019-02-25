// ==UserScript==
// @name         SuppliesStatus.js
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://172.16.104.76/hp/device/InternalPages/Index?id=SuppliesStatus
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(window.location.reload.bind(window.location), 900000);

    let tonerPagesRemaining = parseInt(document.getElementById('BlackCartridge1-EstimatedPagesRemaining').innerHTML);
    document.title = `Toner Life Left: ${Number(tonerPagesRemaining).toLocaleString()}`;
})();