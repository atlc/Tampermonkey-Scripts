// ==UserScript==
// @name         ChaosProTips
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Why not?
// @author       https://github.com/atlc
// @match        https://old.reddit.com/r/IllegalLifeProTips+LifeProTips+ShittyLifeProTips+UnethicalLifeProTips/*
// @match        https://www.reddit.com/r/IllegalLifeProTips+LifeProTips+ShittyLifeProTips+UnethicalLifeProTips/*

// @grant        none
// ==/UserScript==

// View a multireddit in utter chaos /r/IllegalLifeProTips+LifeProTips+ShittyLifeProTips+UnethicalLifeProTips/

(function() {
    let isNewReddit = document.getElementsByTagName('header')[0] ? true : false

    if (isNewReddit) {
        window.onload = function() {
            let links = [...document.getElementsByTagName('a')];
            let redesignSubmissionSubreddits = links.filter(link => {
                return link.getAttribute('data-click-id') == 'subreddit';
            });
            redesignSubmissionSubreddits.forEach(subreddit => subreddit.parentNode.removeChild(subreddit));
    
            let redesignSubmissionTitles = [...document.getElementsByTagName('h2')];
            redesignSubmissionTitles.forEach(title => {
                title.innerText = title.innerText.replace(/LPT|ULPT|ILPT|SLPT/gi, t => {
                    let randomTitles = ["LPT", "ULPT", "ILPT", "SLPT"];
                    t = randomTitles[Math.floor(Math.random() * 4)];
                    return t;
                });
            });
        }
    } else {
        /* FOR OLD REDDIT */

        // These are the subheadings beneath the title with attributes about the submitter, saying what subreddit it was posted in
        let submissionSubreddits = [...document.getElementsByClassName('subreddit hover may-blank')];

        // To remove the subreddit name run the below line, to change it to "ChaosProTips" comment out the first and uncomment the second
        submissionSubreddits.forEach(subreddit => subreddit.parentNode.removeChild(subreddit));
        // submissionSubreddits.forEach(subreddit =>  subreddit.innerText = "ChaosProTips");

        // Removes flairs to avoid getting added to the title when the submission domain is removed below
        [...document.getElementsByClassName('flairrichtext')].forEach(flair => flair.parentNode.removeChild(flair));
        [...document.getElementsByClassName('linkflairlabel')].forEach(flair => flair.parentNode.removeChild(flair));

        // Removing the domains where the post resides (ex. "i.imgur.com", "*.redditmedia.com", "self.whateverSubreddit")
        [...document.getElementsByClassName('domain')].forEach(domain => domain.parentNode.removeChild(domain));

        // Collecting all the submissions' titles
        let submissionTitles = [...document.querySelectorAll('p.title')];

        // For the maximum chaos, completely randomizes all instances of 'ULPT', 'ILPT', 'LPT', or 'SLPT'
        submissionTitles.forEach(title => {
            title.innerText = title.innerText.replace(/LPT|ULPT|ILPT|SLPT/gi, t => {
                let randomTitles = ["LPT", "ULPT", "ILPT", "SLPT"];
                t = randomTitles[Math.floor(Math.random() * 4)];
                return t;
            });
        });
    }
})();
