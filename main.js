//declare variables
sum,
difference,
product,
quotient,
rounded,
num1,
num2;

(document).ready(function () { //on DOM ready, bind clicks
	//get value of input fields
	$(".mathIt").on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior

		// getNumber1 = $("#number1"),
		// num1 = parseFloat(getNumber1.val()); //store the number of input 1
		num1 = parseInt($("#number1").val()); //store the number of input 1
		num2 = parseInt($("#number2").val()); //store the number of input 2

		// console.log(num1, num2);
		runMath; //call runMath function
		showIt(); //call the showIt function
	}); // close get value of input fields
}); // close document ready

//function to add, subtract, divide and multiply
function runMath() {
	sum = num1 + num2;
	product = num1 * num2;
	difference = num2 - num1;
	quotient = num1 / num2;
	rounded = quotient.toFixed(2) //.toFixed(x) where x is the number of decimal places you want.
	console.log(sum, product, difference, quotient)
}; //close runMath()

function showIt() {
	$(".first-number").text(nm1); // plugs number 1 in text
	$(".second-number").text(num2) // plugs number 2 in text
	$("#show-sum").text(sum); // plugs sum into text
	$("#show-difference").text(difference); // plugs difference into text
	$("#show-product").text(product); // plugs product into text
	$("#show-quotient").text(quotient); // plugs quotient into text
	$("#show-rounded").text(rounded); // plugs sounded quotient into text
	$('#final-results').adClass('results-show'); //shows the hidden class

	; //close showIt()