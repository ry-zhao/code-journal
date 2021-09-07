/* exported data */

if (localStorage.getItem('data')) {
  var data = JSON.parse(localStorage.getItem('data'));
} else {
  data = {
    view: 'entry-form',
    entries: [],
    editing: null,
    nextEntryId: 1
  };
}
