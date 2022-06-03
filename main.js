/* global data */
/* exported data */
var $addEntry = document.querySelector('.entry-button');
var $modal = document.querySelector('.modal');
var $submitButton = document.querySelector('.submit-button');
$addEntry.addEventListener('click', function showModal(event) {
  $modal.setAttribute('class', 'modal');
});
$submitButton.addEventListener('click', function hideModal(event) {
  $modal.setAttribute('class', 'modal hidden');
});

var $form = document.querySelector('form');
var $day = document.querySelector('.day');
var $time = document.querySelector('.time');
var $description = document.querySelector('.description');
$form.addEventListener('submit', function submitAction(event) {
  event.preventDefault();
  var entryObject = {};
  entryObject.day = $day.value;
  entryObject.time = $time.value;
  entryObject.description = $description.value;
  entryObject.entryId = data.nextEntryId;
  data.nextEntryId++;
});
