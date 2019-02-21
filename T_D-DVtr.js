// ==UserScript==
// @name         T_D-DVtr
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.reddit.com/r/The_Donald/new/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(window.location.reload.bind(window.location), 120000);
    [...document.getElementsByClassName('arrow down login-required access-required')].forEach(postDownvote => postDownvote.click());
})();
