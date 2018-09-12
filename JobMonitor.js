// ==UserScript==
// @name         Printer Job monitor
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://172.16.104.76/hp/device/JobLogReport/Index
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(window.location.reload.bind(window.location), 30000);

    let radios = document.querySelectorAll('[id^=\'JobLogRadioButton_\']');

    radios.forEach((r) => {
        r.addEventListener('click', () => {
            document.getElementById('ViewDetailsButton').click();
        });
    });
})();

/***** EXPERIMENTAL *****/
/*
let jobList = document.querySelectorAll('[id^=\'JobLogName\']');
let jobs = [];

for (i = 0; i < jobList.length; i++) {
    jobs.push({'index': i, 'name': jobList[i].innerText});
}
~~~~~~~~
jobList.forEach((job, index) => {
	localStorage.setItem('Job', JSON.stringify({'index': index, 'name': job.innerText}));
});

for (i = 0; i < jobList.length; i++) {
    localStorage.setItem('Job', JSON.stringify({'index': index, 'name': job.innerText}));
    let buttonID = `JobLogRadioButton_${i}`;
    document.getElementById(buttonID).click();
	document.getElementById('ViewDetailsButton').click()
	.then(() => {
		pageCount[i] = document.getElementById('JobDetailsValue_2').innerText.replace(' ','');
	});
	console.log(pageCount[i]);
}

*/
