//first declare counters for totals
var sum = 0,
	difference = 0,
	product = 0,
	quotient = 0;

$(document).ready(function () { //on DOM ready, bind clicks
	//get value of input fields
	$("#mathIt").on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior

		// getNumber1 = $("#number1"),
		// num1 = parseFloat(getNumber1.val()); //store the number of input 1
		num1 = parseFloat($("#number1").val()); //store the number of input 1
		num2 = parseFloat($("#number2").val()); //store the number of input 2

		console.log(num1, num2);
		runMath();
	}); // close get value of input fields

	//function to add, subtract, divide and multiply
	function runMath() {
		sum = num1 + num2;
		product = num1 * num2;
		difference = num2 - num1;
		quotient = num1 / num2;
		console.log(sum, product, difference, quotient)
	}

	function showIt() {

	}

});
