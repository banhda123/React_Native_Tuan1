// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.

// Step 1: Function to calculate tip
function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.20;
    }
}

// Step 2: Array of bills
const bills = [125, 555, 44];

// Step 3: Array of tips
const tips = bills.map(calcTip);

// Step 4: Array of totals
const total = bills.map((bill, index) => bill + tips[index]);

// Output the results
console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Total:', total);
