// ==UserScript==
// @name         didi subdue
// @namespace    https://6um.digitalgangster.com
// @version      1.0
// @description  makes didi's threads, posts, and quoted text barely visible
// @author       stang
// @match        https://6um.digitalgangster.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    function didiSubdue() {
        $(".posters a:first-child[data-user-card='Didi']")
            .closest("tr").css("opacity", "0.1");
        $("article[data-user-id='31']")
            .closest("div").css("opacity", "0.1");
        $("aside div.title:contains('Didi:')")
        	.parent().css("opacity", "0.1");
    }
    
    setInterval(didiSubdue, 420);
})();