// ==UserScript==
// @name         TrayStatus.js
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://172.16.104.76/hp/device/DeviceStatus/Index
// @match        https://172.16.104.80/hp/device/DeviceStatus/Index
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(window.location.reload.bind(window.location), 15000);

    let tray2 = document.getElementById('TrayBinStatus_2').innerHTML;
    let tray3 = document.getElementById('TrayBinStatus_3').innerHTML;
    let ding = new Audio('https://freesound.org/data/previews/91/91926_7037-lq.mp3');

    if (tray2 == 'Empty') {
        changeFavicon();
        document.querySelector('title').innerText = 'PAPER TRAY 2 EMPTY';
        ding.play();
    } else if (tray2 != 'OK') {
        changeFavicon();
        document.querySelector('title').innerText = 'PAPER TRAY 2 OPEN/ERROR';
        ding.play();
    } else if (tray3 == 'Empty') {
        changeFavicon();
        document.querySelector('title').innerText = 'PAPER TRAY 3 EMPTY';
        ding.play();
    } else if (tray3 != 'OK') {
        changeFavicon();
        document.querySelector('title').innerText = 'PAPER TRAY 3 OPEN/ERROR';
        ding.play();
    }


    function changeFavicon() {
        document.querySelector("link[rel='shortcut icon']").href = 'https://i.imgur.com/OZ9vGoY.png';
    }
})();
