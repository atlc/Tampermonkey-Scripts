// ==UserScript==
// @name         ChaosProTips
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       https://github.com/atlc
// @match        https://old.reddit.com/r/IllegalLifeProTips+LifeProTips+ShittyLifeProTips+UnethicalLifeProTips/*
// @match        https://www.reddit.com/r/IllegalLifeProTips+LifeProTips+ShittyLifeProTips+UnethicalLifeProTips/*
// @grant        none
// ==/UserScript==

// View a multireddit in utter chaos /r/IllegalLifeProTips+LifeProTips+ShittyLifeProTips+UnethicalLifeProTips/
// This only works in the old reddit, I haven't taken a look at, nor do I want to create this for the redesign at the moment

(function() {
    // These are the subheadings beneath the title with attributes about the submitter, saying what subreddit it was posted in
    let submissionSubreddits = [...document.getElementsByClassName('subreddit hover may-blank')];

    // To remove the subreddit name run the below line, to change it to "LPTRoulette" comment out the first and uncomment the second
    submissionSubreddits.forEach(subreddit => subreddit.parentNode.removeChild(subreddit));
    // submissionSubreddits.forEach(subreddit =>  subreddit.innerText = "LPTRoulette");

    // Removes flairs to avoid getting added to the title when the submission domain is removed below
    [...document.getElementsByClassName('flairrichtext')].forEach((flair) => flair.parentNode.removeChild(flair));
    [...document.getElementsByClassName('linkflairlabel')].forEach((flair) => flair.parentNode.removeChild(flair));

    // These are the domains where the post resides (ex. "i.imgur.com", "*.redditmedia.com", "self.whateverSubreddit")
    let submissionDomains = [...document.getElementsByClassName('domain')];

    // Removing the submissions' domains
    submissionDomains.forEach(domain => domain.parentNode.removeChild(domain));

    // Getting all the submissions' titles
    let submissionTitles = [...document.querySelectorAll('p.title')];

    // For the maximum chaos, completely randomizes all title instances of 'ULPT', 'ILPT', 'LPT', or 'SLPT'
    submissionTitles.forEach(title => {
        title.innerText = title.innerText.replace(/LPT|ULPT|ILPT|SLPT/gi, t => {
            let randomTitles = ["LPT", "ULPT", "ILPT", "SLPT"];
            t = randomTitles[Math.floor(Math.random() * 4)];
            return t;
        });
    });
})();
