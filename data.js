/* exported data */

var data = {
  view: '',
  editing: null,
  entries: [],
  nextEntryId: 1
};

var previousDataJSON = localStorage.getItem('userData');
if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}

function storage(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('userData', dataJSON);
}

window.addEventListener('beforeunload', storage);
