// //first declare counters for totals
var sum,
	difference,
	product,
	quotient,
	num1,
	num2;



$(document).ready(function () { //on DOM ready, bind clicks
	//get value of input fields
	$("#mathIt").on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior

		// getNumber1 = $("#number1"),
		// num1 = parseFloat(getNumber1.val()); //store the number of input 1
		num1 = parseFloat($("#number1").val()); //store the number of input 1
		num2 = parseFloat($("#number2").val()); //store the number of input 2

		console.log(num1, num2);

		//call addIt function from below to get sum
		sum = addIt(num1, num2);
		console.log(sum);

		//call subIt function from below to subtract
		difference = subIt(num1, num2);
		console.log(difference);

		//call multiplyIt function from below to multiply
		product = multiplyIt(num1, num2);
		console.log(product);

		//call divideIt function from below to divide
		quotient = divideIt(num1, num2);
		rounded = quotient.toFixed(2) //.toFixed(x) where x is the number of decimal places you want.
		console.log(quotient);

		//run showIt function to populate fields
		showIt();
	}); // close get value of input fields


	function showIt() {
		$(".first-number").text(num1); // plugs number 1 in text
		$(".second-number").text(num2) // plugs number 2 in text
		$("#show-sum").text(sum); // plugs sum into text
		$("#show-difference").text(difference); // plugs difference into text
		$("#show-product").text(product); // plugs product into text
		$("#show-quotient").text(quotient); // plugs quotient into text
		$("#show-rounded").text(rounded); // plugs sounded quotient into text
		$('#final-results').addClass('results-show'); //shows the hidden class

	}

});

// return function to add it:
function addIt(a, b) {
	return a + b;
};


// return function to subtract it
function subIt(a, b) {
	return b - a;
};


//return function to multipy it
function multiplyIt(a, b) {
	return a * b;
};

////return function to divite it
function divideIt(a, b) {
	return a / b;
};
