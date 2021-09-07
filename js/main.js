/* global data */
/* exported data */

var photoUrl = document.querySelector('#photo-url');
var img = document.querySelector('img');

function updateImg(event) {
  img.setAttribute('src', event.target.value);
}

photoUrl.addEventListener('input', updateImg);
