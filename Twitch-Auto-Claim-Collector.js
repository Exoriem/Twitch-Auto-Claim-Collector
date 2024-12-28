// ==UserScript==
// @name         Twitch-Auto-Claim-Collector
// @namespace    https://github.com/Exoriem/Twitch-Auto-Claim-Collector
// @version      2024-05-11
// @description  A script for tampermonkey that checks every 5 seconds if there is claim reward button and collects it.
// @author       Exoriem
// @match        https://www.twitch.tv/*
// @icon         https://assets.twitch.tv/assets/favicon-32-e29e246c157142c94346.png
// @grant        none
// ==/UserScript==

(function () {
  setInterval(function () {
    document
      .getElementsByClassName("ScCoreButton-sc-ocjdkq-0 hpBkMI")[0]
      .click();
  }, 5000);
})();
