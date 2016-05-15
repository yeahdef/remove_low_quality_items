// ==UserScript==
// @require http://code.jquery.com/jquery-latest.js
// @name         Remove low quality items
// @namespace    http://discogs.com/
// @version      0.1
// @description  Removes low qual from displayed items for sale
// @author       Joey Liechty
// @match        https://www.discogs.com/sell/mywants*
// @grant        none
// ==/UserScript==
$(document).ready(function () {
  // iterate over conditions
  $('span.item_media_condition').each(function () {
    if ($(this).text().indexOf('Very') == -1 && $(this).text().indexOf('Mint') == -1)
    {
      // Not VG, NM or M --- so we hide
      $(this).closest('tr').hide();
    }
  });
  // iterate over locations
  $("td.seller_info ul li").each(function () {
    alert($(this).text());
    if ($(this).text().indexOf('United States') == -1 && $(this).text().indexOf('Ships From') > -1)
    {
      // Not shipping from the US
      $(this).closest('tr').hide();
    }
  });
});
