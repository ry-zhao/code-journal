/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

data = JSON.parse(localStorage.getItem('data'));
