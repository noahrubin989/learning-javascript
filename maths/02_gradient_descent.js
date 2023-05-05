// Very simple implementation of least squares using gradient descent

function b0Derivative(yVals, yhatVals) {
    let n = yVals.length;
    let residuals = [];
    for (let i = 0; i < n; i++) {
        // residuals (not squared residuals)
        residuals[i] = yVals[i] - yhatVals[i]
    }

    // sum the residuals 
    let summation = 0;
    residuals.forEach(item => { summation += item; });

    return -2 * summation;
}

function b1Derivative(xVals, yVals, yhatVals) {
    let n = yVals.length;
    let returnArray = [];
    for (let i = 0; i < n; i++) {
        // x * residual for every value in the arrays 
        returnArray[i] = xVals[i] * (yVals[i] - yhatVals[i]);
    }

    // sum the residuals 
    let summation = 0;
    returnArray.forEach(item => { summation += item; });
    
    return -2 * summation;
}

const linearFunc = (b0, b1, x) => {
    return b0 + b1*x;
}

function gradientDescent(xArray, yArray, alpha, nIter=1000) {
    let b0 = 0;
    let b1 = 0;

    for (let i=0; i < nIter; i++) {
        // Compute yhat vector 
        let yhatArray = xArray.map(xval =>linearFunc(b0, b1, xval));

        // Gradient descent updates
        b0 = b0 - (alpha * b0Derivative(yArray, yhatArray));
        b1 = b1 - (alpha * b1Derivative(xArray, yArray, yhatArray));
    }

    // Once we have done nIter iterations
    let betaVector = [b0, b1];
    return betaVector;
}

// Check using: https://www.mathsisfun.com/data/least-squares-calculator.html
// Need to set learning rate low and number of iterations very high so that gradient descent does not diverge

let x = [1.21, 3, 5.16, 8.31, 10.21]
let y = [1.69, 5.89, 4.11, 5.49, 8.65]

let [b0, b1] = gradientDescent(x, y, alpha=0.001, nIter=100000)
console.log(`b0 = ${b0}`);
console.log(`b1 = ${b1}`);
