// ==UserScript==
// @name         Printer Job monitor
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://172.16.104.76/hp/device/JobLogReport/Index
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(window.location.reload.bind(window.location), 60000);
    // Your code here...
})();

/***** EXPERIMENTAL *****/
/*
let jobList = document.querySelectorAll('[id^=\'JobLogName\']');
let pageCount = [];

for (i = 0; i < jobList.length; i++) {
    let buttonID = `JobLogRadioButton_${i}`;
    document.getElementById(buttonID).click();
	document.getElementById('ViewDetailsButton').click()
	.then(() => {
		pageCount[i] = document.getElementById('JobDetailsValue_2').innerText.replace(' ','');
	});
	console.log(pageCount[i]);
}

*/
