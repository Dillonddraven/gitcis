var $ = function(id) {
    return document.getElementById(id);
  }
  
  var vowels = function() {
    var stringEntry = $("phrase").value;
    stringEntry = stringEntry.toUpperCase();
  
    if(stringEntry === "") {
      alert("Enter a phrase and choose a button");
    } else {
      var intvowel = 0;
      for(var intCount = 0; intCount < stringEntry.length; intCount++) {
        if(stringEntry.charAt(intCount) === "A" || stringEntry.charAt(intCount) === "E" || stringEntry.charAt(intCount) === "I" || stringEntry.charAt(intCount) === "O" || stringEntry.charAt(intCount) === "U") {
          intvowel++;
        }
      }
      $("output").value = "There are " + intvowel + " vowels in the phrase you provided";
    }
  }
  
  var consonants = function() {
    var stringEntry = $("phrase").value;
    stringEntry = stringEntry.toLowerCase();
    if(stringEntry === "") {
      alert("Please enter a phrase");
    } else {
      var intConsonants = 0;
      for(var intCount = 0; intCount < stringEntry.length; intCount++) {
        switch(stringEntry.charAt(intCount)) {
          case "a":
          case "e":
          case "i":
          case "u":
          case "o":
            break;
          default:
            intConsonants++;
            break;
        }
      }
      $("output").value = "There are " + intConsonants + " consonants in the above phrase.";
    }
  }
  
  var reverse = function() {
    var stringEntry = $("phrase").value;
    if(stringEntry === "") {
      alert("Please enter a phrase and THEN select a button...");
    } else {
      var stringReversed = "";
      for(var intCount = stringEntry.length - 1; intCount >= 0; intCount--) {
        stringReversed = stringReversed + stringEntry.charAt(intCount);
      }
      $("output").value = "The reverse of the above phrase is:\n" + stringReversed;
    }
  }
  
  var clear = function() {
    $("phrase").value = "";
    $("output").value = "";
  }
  
  window.onload = function() {
    $("phrase").value = "";
    $("output").value = "";
    $("vowels").onclick = vowels;
    $("consonants").onclick = consonants;
    $("reverse").onclick = reverse;
    $("clear").onclick = clear;
  }
  