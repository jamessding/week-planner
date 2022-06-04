/* global data */
/* exported data */
var $form = document.querySelector('form');
var $day = document.querySelector('.day');
var $time = document.querySelector('.time');
var $description = document.querySelector('.description');
var $addEntry = document.querySelector('.entry-button');
var $modal = document.querySelector('.modal');
var $submitButton = document.querySelector('.submit-button');
// var $dayOfWeek = document.querySelectorAll('.week-button');
var $scheduleTitle = document.querySelector('.schedule-title');
var $tBody = document.querySelector('.tbody');
$addEntry.addEventListener('click', function showModal(event) {
  $modal.setAttribute('class', 'modal');
});
$submitButton.addEventListener('click', function hideModal(event) {
  $modal.setAttribute('class', 'modal hidden');
});

$form.addEventListener('submit', function submitAction(event) {
  event.preventDefault();
  var entryObject = {};
  entryObject.day = $day.value;
  entryObject.time = $time.value;
  entryObject.description = $description.value;
  entryObject.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.mondayEntries.push(entryObject);
  $form.reset();
  $tBody.prepend(renderEntry(entryObject));
});

function daySwap(event) {
  if (event.target.className === 'week-button') {
    $scheduleTitle.textContent = 'Schedule Events for ' + event.target.textContent;
  }
  if (event.target.id === 'sunday-button') {
    for (var i = 0; i < data.sundayEntries.length; i++) {
      $tBody.prepend(renderEntry(data.sundayEntries[i]));
    }
  } else if (event.target.id === 'monday-button') {
    for (var j = 0; j < data.mondayEntries.length; j++) {
      $tBody.prepend(renderEntry(data.mondayEntries[j]));
    }
  } else if (event.target.id === 'tuesday-button') {
    for (var k = 0; k < data.tuesdayEntries.length; k++) {
      $tBody.prepend(renderEntry(data.tuesdayEntries[k]));
    }
  } else if (event.target.id === 'wednesday-button') {
    for (var l = 0; l < data.wednesdayEntries.length; l++) {
      $tBody.prepend(renderEntry(data.wednesdayEntries[l]));
    }
  }
}

window.addEventListener('click', daySwap);

function renderEntry(entryObject) {
  var $tr = document.createElement('tr');
  var $tdTime = document.createElement('td');
  $tdTime.textContent = entryObject.time;
  $tr.appendChild($tdTime);
  var $tdDescription = document.createElement('td');
  $tdDescription.textContent = entryObject.description;
  $tr.appendChild($tdDescription);
  return $tr;
}
function DOMContentLoaded(event) {
  for (var i = 0; i < data.mondayEntries.length; i++) {
    $tBody.prepend(renderEntry(data.mondayEntries[i]));
  }
}
window.addEventListener('DOMContentLoaded', DOMContentLoaded);
