/* exported data */

var data = {
  editing: null,
  sundayEntries: [],
  mondayEntries: [],
  tuesdayEntries: [],
  wednesdayEntries: [],
  thursdayEntries: [],
  fridayEntries: [],
  saturdayEntries: [],
  nextEntryId: 1
};

var previousDataJSON = localStorage.getItem('userData');
if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}

function storage(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('userData', dataJSON);
  // localStorage.clear();
}

window.addEventListener('beforeunload', storage);
