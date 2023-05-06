const ERROR_MESSAGE = `Incorrect compound frequency. Enter 'annually', 'semiannually', 'quarterly', 'monthly', or 'weekly'.`;

function currencyFormatter() {
    let ausDollarFormatter = new Intl.NumberFormat('en-AU', {
        style: 'currency',
        currency: 'AUD',
    });
    return ausDollarFormatter;
}

function compoundInterest(initial, rate, timeYears, compoundFrequency='annually') {
    let scaleFactor;
    let formatter = currencyFormatter();
    switch (compoundFrequency) {
        case 'annually':
            scaleFactor = 1;
            break;
        case 'semiannually':
            scaleFactor = 2;
            break;
        case 'quarterly':
            scaleFactor = 4;
            break;
        case 'monthly':
            scaleFactor = 12;
            break;
        case 'weekly':
            scaleFactor = 52;
            break;
        default:
            throw new Error(ERROR_MESSAGE);
    }

    let nPeriods = timeYears * scaleFactor;
    let r = (rate / scaleFactor) / 100;
    let finalAmount = initial * Math.pow(1 + r, nPeriods);  // A = P(1+r)^n
    let interest = finalAmount - initial;
    let result = {
        'Final Amount': formatter.format(finalAmount),
        'Interest Earned': formatter.format(interest)
    };
    return result;
}


let investmentInfo = compoundInterest(initial=12321, rate=8.33, timeYears=25, compoundFrequency='monthly');
console.log(investmentInfo);



