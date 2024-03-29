//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
}

// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output

var generate = function () 
{
	var intCount = parseInt($("total_fib").value);  //gets user input from the DOM
	
	

	//validate user input that intCount is a number and intCount is not less than 2 or intCount not greater than 100
	
	do { intCount = parseInt(prompt("Enter the number of Fibonacci Sequences you want displayed"))}
	while (isNaN(intCount) || intCount < 2 || intCount > 100); //will prompt user to enter a value until its between 2 and 100 
	

	var i = 0;  // sets the first number in the Fibonacci series to 0
	var j = 1; //sets the second number in the Fibonacci series to 1
	var k;    //k is calculated by adding i+j and represents the next Fibonacci number
	var stringOutput = "0 1 ";   //initialize the Fibonacci series output to include the first two numbers

	// write whatever kind of loop you want, given the above info, to generate the appropriate
	// number of fibonacci numbers and then post it to the html DOM 

do {
	k = i + j; // set k equal to the sum of i and j 
	i = j; // sets i equal to j 
	j = k; // sets j equal to k 
	stringOutput += k + ""; 
	intCount--; // decrements the loop so it will eventually stop 
} while (intCount > 2); // loop will continue until it count is 2 or les then 2
$("output").value = stringOutput;
};



window.onload = function () 
{
   // $("total_fib").value = intCount;
    // $("output").value = stringOutput;

    $("generate").onclick = generate; //runs the generate function when clicked
}  