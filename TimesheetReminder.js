// ==UserScript==
// @name         TimesheetReminder.js
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://██████████.████████████████.edu/pls/PROD/bwpktetm.P_TimeSheetButtonsDriver
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (document.title == 'Certification') {
        let pwField = document.getElementsByTagName('input')[4];
        let submitButton = document.getElementsByTagName('input')[5];
        let label = document.getElementsByClassName('fieldlabeltext')[1];
        if (confirm('\nAre you going to remember to notify ████████?')) {
            if (confirm('\nAre\n\tyou\n\t\t100%\n\t\t\tAbsolutely\n\t\t\t\tSure?\n\n')) {
                pwField.value = '█████████████████████';
                submitButton.click();
            } else {
                signingFailed();
            }
        } else {
            signingFailed();
        }

        function signingFailed() {
            label.parentNode.removeChild(label);
            document.getElementsByClassName('infotext')[0].parentNode.removeChild(document.getElementsByClassName('infotext')[0]);
            document.getElementsByClassName('headerImg')[6].parentNode.removeChild(document.getElementsByClassName('headerImg')[6]);
            submitButton.parentNode.removeChild(submitButton);
            pwField.parentNode.removeChild(pwField);
            document.getElementsByTagName('h2')[0].innerText = "Don't be lazy. Click here to reload the page.";
            document.getElementsByTagName('h2')[0].onclick = function(){window.location.reload()}
        }
    }
})();
