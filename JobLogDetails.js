// ==UserScript==
// @name         Job Log Details
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://172.16.104.76/hp/device/JobLogReportDetails/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let h1 = document.querySelector('h1');
    h1.addEventListener('click', () => window.history.back());
    h1.style.border = "2px solid red";

    document.getElementById('JobDetailsProperty_2').parentNode.style.fontWeight="bold";

    let uselessDetails = [0,1,5,6,7,8,9,10];
    uselessDetails.forEach((d) => {
        document.getElementById(`JobDetailsProperty_${d}`).parentNode.remove();
    });
})();
