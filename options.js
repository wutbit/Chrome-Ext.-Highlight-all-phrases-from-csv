//const chrome = window.chrome;
const storage = chrome.storage.local;

document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  var file = document.querySelector("#csv-file").files[0];
  var reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function() {
    var csv = reader.result;
    var phrases = csv.split("\n").filter(function(phrase) {
      return phrase.trim() !== "";
    });
    storage.set({ phrases: phrases }, function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "updatePhrases", phrases: phrases });
      });
      alert("Phrases saved!");
    });
  };
});