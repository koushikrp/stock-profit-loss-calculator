var initialPrice = document.querySelector("#stock-price");
var stocksQuantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-price");
var submitButton = document.querySelector("#submit-button");
var outputBox = document.querySelector("#output-box");
var bodySelector = document.querySelector("body");

function calculateProfitOrLoss(initial, input_quantity, current) {
	if (initial > current) {
		bodySelector.classList.add("negative");
		var loss = (initial - current) * input_quantity;
		var lossPercentage = (loss / initial) * 100;
		showOutput(`Sorry! Loss occurred is ${loss}, with the Loss Percentage ${lossPercentage.toFixed(2)}% 😟`);
	} else if (current > initial) {
		bodySelector.classList.add("positive");
		var profit = (current - initial) * input_quantity;
		var profitPercentage = (profit / initial) * 100;
		showOutput(
			`Congrats! Profit occurred is ${profit}, with the Profit Percentage ${profitPercentage.toFixed(2)}% 😃`
		);
	} else {
		showOutput("No Pain -> No Gain and No Gain -> No Pain ⚖️");
	}
}

function submitHandler() {
	bodySelector.classList.remove("negative");
	bodySelector.classList.remove("positive");
	var ip = initialPrice.value;
	var qty = stocksQuantity.value;
	var cur = currentPrice.value;
	if (ip === "" || qty === "" || cur === "") {
		showOutput(`No Field Can be Empty. Please fill all the Fields.`);
	} else if (Number(ip) < 0 || Number(qty) < 0 || Number(cur) < 0) {
		showOutput("Negative Values are not Allowed! Please Enter Positive values only.");
	} else calculateProfitOrLoss(Number(ip), Number(qty), Number(cur));
}

function showOutput(message) {
	outputBox.innerText = message;
}
submitButton.addEventListener("click", submitHandler);
