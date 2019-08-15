// ==UserScript==
// @name         MelaniePrintMonitor.js
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Quick Printer Monitoring Reference
// @author       https://github.com/atlc
// @match        https://172.16.104.76/hp/device/*
// @match        https://172.16.104.80/hp/device/*
// @grant        none
// ==/UserScript==

/*
 * This serves as a monitor for various resources on the HP M60X printers in the HSB 4th floor.
 * The device at 172.16.104.76 is in the open lab, HSB 451, and the device at 172.16.104.80
 * is located in the classroom HSB 447.
*/

(function() {
    'use strict';

    // Grabs the page URL and matches it with a corresponding script
    function assignScript() {
        let pageURL = window.location.href;

        pageURL.includes('DeviceStatus') ? deviceStatus()
        : pageURL.includes('SuppliesStatus') ? tonerStatus()
        : console.log('This subpage does not have a script running');
    }

    // Checks the status of the printers and alerts you if a tray is empty or is opened.
    function deviceStatus() {
        setTimeout(window.location.reload.bind(window.location), 15000);

        let tray2 = document.getElementById('TrayBinStatus_2').innerHTML;
        let tray3 = document.getElementById('TrayBinStatus_3').innerHTML;
        let ding = new Audio('https://freesound.org/data/previews/91/91926_7037-lq.mp3');

        if (tray2 == 'Empty') {
            createAlert();
            document.querySelector('title').innerText = 'PAPER TRAY 2 EMPTY';
        } else if (tray2 != 'OK') {
            createAlert();
            document.querySelector('title').innerText = 'PAPER TRAY 2 OPEN/ERROR';
        } else if (tray3 == 'Empty') {
            createAlert();
            document.querySelector('title').innerText = 'PAPER TRAY 3 EMPTY';
        } else if (tray3 != 'OK') {
            createAlert();
            document.querySelector('title').innerText = 'PAPER TRAY 3 OPEN/ERROR';
        }

        function createAlert() {
            ding.play();
            document.querySelector("link[rel='shortcut icon']").href = 'https://i.imgur.com/OZ9vGoY.png';
        }
    }

    // This sets the page title to the estimated toner capacity every half hour, so it can be checked by just having a tab open
    function tonerStatus() {
        setTimeout(window.location.reload.bind(window.location), 900000);

        let tonerPagesRemaining = document.getElementById('BlackCartridge1-EstimatedPagesRemaining').innerHTML;
        let tonerFull = (tonerPagesRemaining == '&gt;8800');
        let tonerLow = (tonerPagesRemaining == 'Low');
        let tonerVeryLow = (tonerPagesRemaining == '--');
        document.title = 'Toner:\t' + (tonerFull ? 'Full' : tonerLow ? 'Low' : tonerVeryLow ? 'Very Low' : `${Number(parseInt(tonerPagesRemaining)).toLocaleString()} pages`);
    }

    assignScript();
})();
