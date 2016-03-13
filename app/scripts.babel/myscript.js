'use strict';
/* globals $ */

function singleJiraDisplayCommit() {
  let issueLinkElementText = $('.issue-link').text();
  let summaryValElementText = $('#summary-val').text();
  let innerText = '#' + issueLinkElementText + ' | ' + summaryValElementText;
  let jiralist = $('<div class="jira-text">' + innerText + '</div>');

  $('.aui-page-header-main').append(jiralist);
}

$(document).ready(function () {
  singleJiraDisplayCommit();
});