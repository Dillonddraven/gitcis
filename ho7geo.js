//this function provides easier access to DOM elements using their html element id
var $ = function (id) 
{
    return document.getElementById(id);
};

//this function performs all the circle, triangle, and circle calculations and prints the results
var do_it = function () 
{

//lines 12-18 declares and sets variables with respective DOM input. lines 19-25 declare variables needed for calculations
	var floatRectWidth = parseFloat($("rect_width").value);
	var floatRectHeight = parseFloat($("rect_height").value);	
	var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
	var floatRadius = parseFloat($("radius").value);
	var floatRectArea;
	var floatRectPerim;
	var floatS;
	var floatTriangleArea;
	var floatTrianglePerim;
	var floatCircleArea;
	var floatCircleCircum;	

	floatRectArea = rectArea(floatRectWidth, floatRectHeight);
    floatRectPerim = rectPerim(floatRectWidth, floatRectHeight);
    floatTriangleArea = triArea(floatTriSide1, floatTriSide2, floatTriSide3);
    floatTrianglePerim = triPerim(floatTriSide1, floatTriSide2, floatTriSide3);
    floatCircleArea = circleArea(floatRadius);
    floatCircleCircum = circleCircum(floatRadius);

	alert ("The Rectangle area is " + rectArea(floatRectWidth,floatRectHeight) + 
	" and the perimeter is " + rectPerim (floatRectWidth,floatRectHeight) + 
	"\n\n" + "The Triangle area is " + 	triArea(floatTriSide1,floatTriSide2,floatTriSide3) + 
	" and the perimeter is " + 
	triPerim(floatTriSide1,floatTriSide2,floatTriSide3) + "\n\n" +
	"The Circle area is " + circleArea(floatRadius) + 
	" and the circumference is " + circleCircum(floatRadius));
};
/*
 * the calcCircleCircum function is activated when the calc_circle_cirum button on the DOM
 * is clicked.  It reads the radius information from the DOM and then reports the circle
 * circumference in an alert box, using the circleCircum function to perform the calculation
 */
var calcCircleCircum = function()
{
	var floatRadius = parseFloat($("radius").value);
	alert ("The Circle circumference is " + circleCircum(floatRadius));	
};
/*
 * the circleCircum function accepts some input for radius and then calculates the circumference
 * using the 2 * pi * radius formula.  The circumference value is returned, but note that it has been
 * converted to a string with 2 decimal points [the toFixed() method in JavaScript takes a number and 
 * lops off everything after the desired decimal points, and then for some unexplicable reason converts
 * the resulting number into a string]
 */
function circleCircum(floatRadius_par)
 {
    var floatCircum = parseFloat(2 * Math.PI * floatRadius_par);
    return floatCircum.toFixed(2);
}

var calcCircleArea = function()
{
var floatRadius = parseFloat($("radius").value);
alert ("The circle area is" + circleArea(floatRadius));
};
function circleArea(floatRadius_par)
{
	var floatCircleArea = parseFloat(Math.PI*Math.pow(floatRadius_par,2));
	return floatCircleArea.toFixed(2);
}



var calcRectArea = function()
{
var floatRectWidth = parseFloat($("rect_width").value);
var floatRectHeight = parseFloat($("rect_height").value);
alert("The area of the rectangle is:" + rectArea(floatRectWidth, floatRectHeight));
};
function rectArea(red, blue)
{
    var floatRectArea = red * blue; 
    return floatRectArea.toFixed(2);
}
var calcRectPerim = function ()
{
	var floatRectWidth = parseFloat($("rect_width").value);
	var floatRectHeight = parseFloat($("rect_height").value);
	alert("The rectangle Perimeter is:" + rectPerim(floatRectWidth, floatRectHeight));
};
	function rectPerim(width, height)
	{
		var floatRectPerim = width * 2 + height * 2;
		return floatRectPerim.toFixed(2);
	}
	var  calcTriArea = function ()
{
	var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);
	var floatTriSide3 = parseFloat($("tri_side3").value);
	alert("The area of the triangle is:" + triArea(floatTriSide1, floatTriSide2, floatTriSide3));
};

function triArea(side1, side2, side3) 
{
var floatTriangleArea = (side1 + side2 + side3) / 2;
return floatTriangleArea.toFixed(2);
}



var calcTriPerim = function ()

{
var floatTriSide1 = parseFloat($("tri_side1").value);
var floatTriSide2 = parseFloat($("tri_side2").value);
var floatTriSide3 = parseFloat($("tri_side3").value);
alert("The perimeter of the triangle is:" + triPerim(floatTriSide1, floatTriSide2, floatTriSide3));
};

function triPerim(side1, side2, side3)
{
var floatTrianglePerim = side1 + side2 + side3;
return floatTrianglePerim.toFixed(2);
}

window.onload = function () 

{
    //lines 51-56 clear the DOM values..
//    $("rect_width").value = "";
//    $("rect_height").value = "";
//    $("tri_side1").value = "";
//    $("tri_side2").value = "";
//    $("tri_side3").value = "";
//    $("radius").value = "";
//$("rect_width").value = "";
//rect_height").value = "";
//$("tri_side1").value = "";
//$("tri_side2").value = "";
//$("tri_side3").value = "";
//$("radius").value = "";

    $("rect_width").focus();
	 // places the cursor in the first input box
    $("calc_all").onclick = do_it; // runs the do_it function when clicked
    $("calc_circle_circum").onclick = calcCircleCircum; // runs the calcCircleCircum function when clicked
	$("calc_circle_area").onclick = calcCircleArea;
	$("calc_rect_area").onclick = calcRectArea;
	$("calc_rect_perim").onclick = calcRectPerim;
    $("calc_tri_perim").onclick = calcTriPerim;
	$("calc_tri_area").onclick = calcTriArea;
    
};
