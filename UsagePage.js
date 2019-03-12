// ==UserScript==
// @name         Usage Page
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://172.16.104.76/hp/device/InternalPages/Index?id=UsagePage
// @match        https://172.16.104.80/hp/device/InternalPages/Index?id=UsagePage
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(function(){ window.location.reload() }, 30000);
    let totalCount = document.getElementById('UsagePage.EquivalentImpressionsTable.Print.Total');
    document.title = "Page count: " + parseInt(totalCount.innerHTML.replace(/,/g, '')).toLocaleString();
    totalCount.style.fontWeight="bold";

    let uselessTable = document.getElementById('UsagePage.ImpressionsByMediaSizeTable.TableTitle.Print');
    uselessTable.parentElement.removeChild(uselessTable);
})();