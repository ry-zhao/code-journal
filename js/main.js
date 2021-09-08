/* global data */
/* exported data */

var img = document.querySelector('img');
var form = document.querySelector('form');

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
