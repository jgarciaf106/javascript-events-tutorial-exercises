window.calculateSumListener = function calculateSumListener() {
	//Return the value of the input #firstNumber
	var stringA = parseInt(document.getElementById("firstNumber").value);
	//Return the value of the input #secondNumber
	var stringB = parseInt(document.getElementById("secondNumber").value);

	//your code goes here
	let sum = stringA + stringB;
	let result = (document.querySelector("#resultNumber").value = sum);
};
