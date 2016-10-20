// ==UserScript==
// @name        Forum Scrub
// @namespace   uk.co.alecangus
// @description Filters the Scottish forum
// @version     1
// @grant       metadata
// ==/UserScript==
document.body.style.background = "#ff69b4"; // Hot pink :D
document.getElementsByTagName('h1')[0].innerHTML = 'Filtered Scotland Forum';

var noise = ["annoyingAccount1", "annoyingAccount2"];


// Get hold of the Threads table
var table = document.getElementsByClassName("Threads");

// Remove rows that have banned authors
var cells = table[0].getElementsByTagName("td");
for(var i = 0; i < cells.length; i++) {
  if(!cells[i].firstChild) {
    continue;
  }

  if (noise.indexOf(cells[i].firstChild.nodeValue) >= 0) {
    var row = cells[i].parentNode;
    // row.parentNode.removeChild(row);
    row.style.background = "#ff69b4";
  }
}
