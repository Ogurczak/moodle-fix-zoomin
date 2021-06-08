// ==UserScript==
// @name         Moodle fix zoomin
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  fixes zoomin moodle problem on wum's e-learning platform
// @author       Ogurczak
// @match        https://e-learning.wum.edu.pl/mod/quiz/attempt.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $("body").removeClass("zoomin")
})();