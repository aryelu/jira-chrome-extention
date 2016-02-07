'use strict';

let jiralist = document.createElement('div');
jiralist.className = 'jira-text';

let issueLinkElementText = document.querySelector('.issue-link').text;
let summaryValElementText = document.querySelector('#summary-val').textContent;
let innerText = document.createTextNode('#' + issueLinkElementText + ' | ' + summaryValElementText);
jiralist.appendChild(innerText);

let container = document.querySelector('.aui-page-header-main');
container.appendChild(jiralist);