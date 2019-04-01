// ==UserScript==
// @name         PrintMonitorMaster.js
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
        : pageURL.includes('JobLogReport/Index') ? jobLogReport()
        : pageURL.includes('JobLogReportDetails') ? jobLogDetails()
        : pageURL.includes('SuppliesStatus') ? tonerStatus()
        : pageURL.includes('UsagePage') ? usagePage()
        : console.log('This subpage does not have a script running');
    }

    // Checks the status of the printers and alerts you if a tray is empty or is opened.
    function deviceStatus() {
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
    }

    // This makes each job log clickable anywhere it its div, and will take you to the respective details page
    function jobLogReport() {
        setTimeout(window.location.reload.bind(window.location), 30000);

        let radios = [...document.querySelectorAll('[id^=\'JobLogRadioButton_\']')];

        radios.forEach((r) => {
            r.addEventListener('click', () => {
                document.getElementById('ViewDetailsButton').click();
            });
        });
    }

    // This displays a formatted table of the previously selected print job & provides easy access back to the job log page
    function jobLogDetails() {
        let h1 = document.querySelector('h1');
        h1.addEventListener('click', () => window.history.back());
        h1.style.border = "3px solid red";

        document.getElementById('JobDetailsProperty_2').parentNode.style.fontWeight="bold";

        let uselessDetails = [0,1,5,6,7,8,9,10];
        uselessDetails.forEach((d) => {
            document.getElementById(`JobDetailsProperty_${d}`).parentNode.remove();
        });

        document.title = document.getElementById('JobDetailsValue_3').innerText
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

    // This sets the page title to the current print count per 30s, so it can be checked by just having a tab open
    function usagePage() {
        setTimeout(function(){ window.location.reload() }, 30000);
        let totalCount = document.getElementById('UsagePage.EquivalentImpressionsTable.Print.Total');
        document.title = "Page count: " + parseInt(totalCount.innerHTML.replace(/,/g, '')).toLocaleString();
        totalCount.style.fontWeight="bold";

        let uselessTable = document.getElementById('UsagePage.ImpressionsByMediaSizeTable.TableTitle.Print');
        uselessTable.parentElement.removeChild(uselessTable);
    }

    assignScript();
})();