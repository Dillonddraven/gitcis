var $ = function (id) {
    return document.getElementById(id);
};

var fixPrinter = function() {
    var stringOutput = "";  //declares stringOutput inital value to be blank

    //define the individual troubleshooting tips per the chart
    var stringMessage1 = "Check the power cable.";
    var stringMessage2 = "Check the printer-computer cable.";
    var stringMessage3 = "Ensure printer software is installed.";
    var stringMessage4 = "Check / replace ink.";
    var stringMessage5 = "Check for paper jam.";
    var stringMessage6 = "Looks like everything is working fine!";

    var boolPrinting = $("not_printing").selected;  //returns a value of true only when the not_printing html id is selected from the dropdown menu
    var boolRedLight = $("yes_redlight").selected;  //returns a value of true only when the yes_redlight html id is selected from the dropdown menu
    var boolRecognised = $("not_recognised").selected;  ////returns a value of true only when the not_recognized html id is selected from the dropdown menu

    if(boolPrinting === true) {
        if(boolRedLight === true) {
            if(boolRecognised === true) {
                stringOutput = stringMessage2 + "\n" + stringMessage3 + "\n" + stringMessage4; //TTT
            } else {
                stringOutput = stringMessage4 + "\n" + stringMessage5; //TTF
            }
        } else {
            if(boolRecognised === true) {
                stringOutput = stringMessage1 + "\n" + stringMessage2 + "\n" + stringMessage3; //TFT
            } else 
                {
                    stringOutput = stringMessage5; //TFF
                 }
        }     
    } else {
        if(boolRedLight === true) {
            if(boolRecognised === true) {
                stringOutput = stringMessage3 + "\n" + stringMessage4; //FTT
            } else {
                stringOutput = stringMessage4; //FTF
            }
        } else {
            if(boolRecognised === true) {
                stringOutput = stringMessage3;//FFT
            } else {
                stringOutput = stringMessage6;//FFF
            }
        }
    }

    $("output").value = stringOutput;
};

//enter your code here and don't forget to send the output to the DOM

window.onload = function () {
    $("troubleshoot").onclick = fixPrinter;
};
