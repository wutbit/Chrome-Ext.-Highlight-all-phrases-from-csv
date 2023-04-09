console.log(chrome);

chrome.storage.local.get(['phrases'], function(result) {
  var phrases = result.phrases;
  console.log(phrases);
  if (phrases && phrases.length > 0) {
    var elements = document.getElementsByTagName("*");
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      for (var j = 0; j < phrases.length; j++) {
        var phrase = phrases[j];
        if (element.innerHTML.indexOf(phrase) !== -1) {
          var regex = new RegExp(phrase, "g");
          element.innerHTML = element.innerHTML.replace(regex, "<span class='highlight'>" + phrase + "</span>");
        }
      }
    }
  }
});

var css = ".highlight { background-color: yellow; }";
var head = document.head || document.getElementsByTagName("head")[0];
var style = document.createElement("style");
style.type = "text/css";
style.appendChild(document.createTextNode(css));
head.appendChild(style);

