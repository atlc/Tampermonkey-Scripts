// ==UserScript==
// @name         Job Log Details
// @namespace    http://tampermonkey.net/
// @version      0.1
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
})();
