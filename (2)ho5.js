
var $ = function (id) 
{
return document.getElementById(id);
}

// Declare variables
var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

// Get user input to determine grade option
intGradeOption = parseInt(prompt("Please enter 1 for pass/fail and 2 for a letter grade"));

// Get user input for homework, midterm, and final points
floatHwPts = parseFloat($("hw_points").value);
floatMidPts = parseFloat($( "mid_points").value);
floatFinPts = parseFloat($("final_points").value);

// Calculate total points
floatTotalPts = floatHwPts + floatMidPts + floatFinPts;



// Check grade option and determine final grade
if (intGradeOption === 1) {
    if (floatTotalPts >= 80) {
        stringFinalGrade = "Pass";
     } 
    else { 
        stringFinalGrade = "Fail";
    }
    } else if (intGradeOption === 2) {
    if (floatTotalPts >= 90) {
        stringFinalGrade = "A";
        } else if (floatTotalPts >= 80) {
            stringFinalGrade = "B";
            } else if (floatTotalPts >= 70) {
                stringFinalGrade = "C";
                } else if (floatTotalPts >= 60) {
                    stringFinalGrade = "D";
                    } else {
                        stringFinalGrade = "F";
                        }
                        } else {
    // Handle invalid input for grade option
    
    $("final_grade").value = stringFinalGrade
}
window.onload = function () {
    $("hw_points").value = "";
    $("mid_points").value = "";
    $("final_points").value = "";
    $("calc").onclick = calculate;
     $("final_grade").focus();
  }