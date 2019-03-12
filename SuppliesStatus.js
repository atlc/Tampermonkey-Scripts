// ==UserScript==
// @name         SuppliesStatus.js
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://172.16.104.76/hp/device/InternalPages/Index?id=SuppliesStatus
// @match        https://172.16.104.80/hp/device/InternalPages/Index?id=SuppliesStatus
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(window.location.reload.bind(window.location), 900000);

    let tonerPagesRemaining = document.getElementById('BlackCartridge1-EstimatedPagesRemaining').innerHTML;
    let tonerFull = (tonerPagesRemaining == '&gt;8800');
    let tonerLow = (tonerPagesRemaining == 'Low')
    let tonerVeryLow = (tonerPagesRemaining == 'Very Low')
    document.title = 'Toner:\t' + (tonerFull ? 'Full' : tonerLow ? 'Low' : tonerVeryLow ? 'Very Low' : `${Number(parseInt(tonerPagesRemaining)).toLocaleString()} pages`);
})();
