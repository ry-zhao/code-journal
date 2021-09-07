/* global data */
/* exported data */

var title = document.querySelector('#title');
var photoUrl = document.querySelector('#photo-url');
var notes = document.querySelector('#notes');
var img = document.querySelector('img');
var form = document.querySelector('form');

function saveEntry(event) {
  event.preventDefault();
  var entry = {};
  entry.title = title.value;
  entry.photoUrl = photoUrl.value;
  entry.notes = notes.value;
  entry.id = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(entry);
  img.setAttribute('src', 'images/placeholder-image-square.jpg');
  form.reset();
}

function updateImg(event) {
  img.setAttribute('src', event.target.value);
}

photoUrl.addEventListener('input', updateImg);
form.addEventListener('submit', saveEntry);
