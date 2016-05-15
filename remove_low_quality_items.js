// ==UserScript==
// @require http://code.jquery.com/jquery-latest.js
// @name         Remove low quality items
// @namespace    http://discogs.com/
// @version      0.1
// @description  Removes < VG from displayed items for sale
// @author       Joey Liechty
// @match        https://www.discogs.com/sell/mywants*
// @grant        none
// ==/UserScript==
$(document).ready(function () {
  // iterate over items
  $('span.item_media_condition').each(function () {
    if ($(this).text().indexOf('Very') == -1 && $(this).text().indexOf('Mint') == -1)
    {
      // Not VG, NM or M --- so we hide
      $(this).closest('tr').hide();
    }
  });
});
