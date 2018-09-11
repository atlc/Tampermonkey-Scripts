// ==UserScript==
// @name         BrokenDonalds
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Proof of concept that brute forces completion of null satisfaction surveys
// @author       You
// @match        https://www.mcdvoice.com/*
// @grant        none
// ==/UserScript==

(function() { document.getElementById('NextButton').click(); })();
