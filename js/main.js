/* global data */
/* exported data */

var img = document.querySelector('.new-image');
var form = document.querySelector('form');
var entries = document.querySelector('ul');
var entryForm = document.querySelector('div[data-view="entry-form"]');
var entryDisplay = document.querySelector('div[data-view="entries"]');
var entriesAnchor = document.querySelector('#entries-anchor');

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
  form.reset();
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

function displayEntries(event) {
  entryDisplay.className = 'container';
  entryForm.className = 'container hidden';
  data.view = 'entries';
}

entriesAnchor.addEventListener('click', displayEntries);

window.addEventListener('DOMContentLoaded', appendEntries);
