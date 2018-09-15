// ==UserScript==
// @name         BrokenSurveys
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Proof of concept that brute forces completion of null satisfaction surveys
// @author       You
// @match        https://www.tellcaribou.com*
// @match        http://www.tellamc.com/*
// @match        https://firehouselistens.smg.com/*
// @match        https://www.mcdvoice.com/*
// @match        https://tellthebell.com/*
// @grant        none
// ==/UserScript==

(function() { document.getElementById('NextButton').click(); })();
