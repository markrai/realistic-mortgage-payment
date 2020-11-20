function calcTotal() {

    // user provided
    let mortgageAmount = getMortgageAmount();
    let interest = getInterest();
    let term = getMortgageTerm();


    let hoa = getHOA();
    let utilities = getUtilities();
    let insurance = getInsurance();
    let propertyTaxRate = getPropertyTaxRate();


    // calculated 
    let mortgagePayment = ((interest / 100 / 12) * mortgageAmount) / (1 - ((1 + (interest / 100 / 12)) ** (-Math.abs(term) * 12)))
    let propertyTax = Math.round(calcPropertyTax());
    let repairs = Math.round(calcRepairs());
    let closingCost = Math.round(getClosingCost());

    //total calculation
    let totalAmount = mortgagePayment + (propertyTax / 12) + repairs + hoa + utilities + insurance

    console.log("price: " + mortgagePayment)
    console.log("down payment: " + downpayment)
    console.log("interest rate: " + interest)
    console.log("mortgage term: " + term)
    console.log("property tax rate: " + propertyTaxRate)
    console.log("property tax: " + propertyTax)
    console.log("hoa: " + hoa)
    console.log("estimated repairs: " + repairs)
    console.log("home owner's insurance: " + insurance)
    console.log("utilities: " + utilities)
    console.log("total amount: " + totalAmount)
    console.log("closing cost: " + closingCost)

    document.getElementById("repairs").value = repairs;
    document.getElementById("propertytax").value = propertyTax;

    //add commas to numeric values
    document.getElementById('price').innerHTML = Number.prototype.toLocaleString(price);


    document.getElementById('monthlyOutput').innerHTML = '$' + getNumberWithCommas(Math.floor(totalAmount)) + ' per month';
    document.getElementById('closingCostOutput').innerHTML = '$' + getNumberWithCommas(Math.floor(closingCost)) + ' closing costs (3% of property price)'
}

function calcPropertyTax() {
    let valueOfHome = parseInt(document.getElementById("price").value);
    let propertyTaxRate = parseFloat(document.getElementById("propertytaxrate").value) / 100
    let propertyTax = (valueOfHome * propertyTaxRate);
    return propertyTax
}

function calcRepairs() {
    let valueOfHome = parseInt(document.getElementById("price").value) || 0;
    let repairs = (valueOfHome * 0.01) / 12;
    return repairs
}

function getInterest() {
    return document.getElementById('interest').value;
}

function getPropertyTaxRate() {
    return document.getElementById('propertytaxrate').value;
}

function getMortgageTerm() {
    return document.getElementById('term').value;
}

function getMortgageAmount() {
    return (document.getElementById('price').value) - getDownPayment()

}

function getDownPayment() {
    return document.getElementById('downpayment').value

}

function getHOA() {
    let hoa = parseInt(document.getElementById('hoa').value)
    return hoa
}

function getUtilities() {
    let utilities = parseInt(document.getElementById('utilities').value)
    return utilities
}

function getInsurance() {
    let insurance = parseInt(document.getElementById('insurance').value) / 12
    return insurance
}

function getClosingCost() {

    let closingCost = parseInt(document.getElementById('price').value * 0.03)
    return closingCost

}

function getNumberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function reset() {
    document.getElementById("price").value = 0;
    document.getElementById("downpayment").value = 0;
    document.getElementById("interest").value = "0.00";
    document.getElementById("term").value = "0";
    document.getElementById("hoa").value = "0";
    document.getElementById("insurance").value = "0";
    document.getElementById("utilities").value = "0";
}

function calcDownPayment() {
    document.getElementById('downpayment').value = parseInt(document.getElementById('price').value * .20)
}