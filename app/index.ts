import adapterCalculateTax from "../adapters/adapterCalculateTax.js";

const data = {
    amount: 100,
    rate: 0.1
}

const adapter = new adapterCalculateTax();
console.log(adapter.calculateTax(data.amount, data.rate));