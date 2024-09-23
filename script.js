let amount = document.getElementById("billAmount");
let percentageTip = document.getElementById("percentageTip");


function billAmountcalculator() {
    document.getElementById("calculateButton").backgroundColor = "#00c9a7";
    if (amount.value === "") {
        document.getElementById("errorMessage").textContent = "Please Enter a Valid Input";
    } else if (percentageTip.value === "") {
        document.getElementById("errorMessage").textContent = "Please Enter a Valid Input";
    } else {
        document.getElementById("errorMessage").textContent = "";
        let tipsamount = (parseInt(percentageTip.value) / 100) * parseInt(amount.value);
        let total = parseInt(amount.value) + tipsamount;
        document.getElementById("tipAmount").value = tipsamount;
        document.getElementById("totalAmount").value = total;
    }
}