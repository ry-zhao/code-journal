/* global data */
/* exported data */

var img = document.querySelector('.new-image');
var form = document.querySelector('form');
var entries = document.querySelector('ul');
var entriesAnchor = document.querySelector('#entries-anchor');
var newButton = document.querySelector('.new-button');
var views = document.querySelectorAll('.view');

switchViews(data.view);

function saveEntry(event) {
  event.preventDefault();
  var entry = {};
  entry.title = form.elements.title.value;
  entry.photoUrl = form.elements['photo-url'].value;
  entry.notes = form.elements.notes.value;
  entry.id = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(entry);
  img.setAttribute('src', 'images/placeholder-image-square.jpg');
  entries.prepend(loadEntry(entry));
  form.reset();
  switchViews('entries');
  window.scroll(0, 0);
}

function updateImg(event) {
  img.setAttribute('src', event.target.value);
}

form.elements['photo-url'].addEventListener('input', updateImg);
form.addEventListener('submit', saveEntry);

function loadEntry(entry) {
  var columnOne = document.createElement('div');
  columnOne.className = 'column-half';
  var columnTwo = document.createElement('div');
  columnTwo.className = 'column-half';
  var img = document.createElement('img');
  img.setAttribute('src', entry.photoUrl);
  var notes = document.createElement('p');
  notes.textContent = entry.notes;
  var title = document.createElement('h2');
  title.className = 'margin-top-1rem-wide-0';
  title.textContent = entry.title;
  var newEntry = document.createElement('div');
  newEntry.className = 'row margin-bottom-2rem';
  columnOne.append(img);
  columnTwo.append(title, notes);
  newEntry.append(columnOne, columnTwo);
  return newEntry;
}

function appendEntries(event) {
  for (var i = 0; i < data.entries.length; i++) {
    entries.appendChild(loadEntry(data.entries[i]));
  }
}

function handleViewNavigation(event) {
  switchViews(event.target.getAttribute('data-view'));
}

function switchViews(view) {
  for (var j = 0; j < views.length; j++) {
    if (views[j].getAttribute('data-view') === view) {
      views[j].className = 'view container';
    } else {
      views[j].className = 'view container hidden';
    }
  }
  data.view = view;
}

newButton.addEventListener('click', handleViewNavigation);

entriesAnchor.addEventListener('click', handleViewNavigation);

window.addEventListener('DOMContentLoaded', appendEntries);
