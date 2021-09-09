/* global data */
/* exported data */

var img = document.querySelector('.new-image');
var form = document.querySelector('form');
var entries = document.querySelector('ul');
var entriesAnchor = document.querySelector('#entries-anchor');
var newButton = document.querySelector('.new-button');
var views = document.querySelectorAll('.view');
var newEditEntry = document.querySelector('.new-edit-entry');
var edit = false;

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
  var entryHeader = document.createElement('div');
  entryHeader.className = 'row justify-content-space-between align-items-center';
  var title = document.createElement('h2');
  title.textContent = entry.title;
  var editIcon = document.createElement('i');
  editIcon.className = 'fas fa-pen purple';
  entryHeader.append(title, editIcon);
  var newEntry = document.createElement('div');
  newEntry.className = 'entry row margin-bottom-2rem';
  columnOne.append(img);
  columnTwo.append(entryHeader, notes);
  newEntry.append(columnOne, columnTwo);
  newEntry.setAttribute('data-entry-id', entry.id);
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

function openEditor(event) {
  if (event.target.tagName !== 'I') {
    return;
  }
  switchViews('entry-form');
  var currentEntry = event.target.closest('.entry');
  for (var k = 0; k < data.entries.length; k++) {
    if (data.entries[k].id === parseInt(currentEntry.getAttribute('data-entry-id'))) {
      data.editing = data.entries[k];
      break;
    }
  }
  img.setAttribute('src', data.editing.photoUrl);
  form.elements.title.value = data.editing.title;
  form.elements['photo-url'].value = data.editing.photoUrl;
  form.elements.notes.value = data.editing.notes;
  newEditEntry.textContent = 'Edit Entry';
  entriesAnchor.className = 'hidden margin-left-1rem';
  edit = true;
}

entries.addEventListener('click', openEditor);

newButton.addEventListener('click', handleViewNavigation);

entriesAnchor.addEventListener('click', handleViewNavigation);

window.addEventListener('DOMContentLoaded', appendEntries);
