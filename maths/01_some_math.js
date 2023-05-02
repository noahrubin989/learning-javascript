// Some math

// important constants
console.log(Math.E)
console.log(Math.PI)

// Sigmoid(10)
console.log(1/(1 + (Math.E**-10)))

// Tanh(3)
console.log(Math.tanh(3))

// f(x) = ln(1 + e^x), find f(3)
console.log(Math.log(1 + (Math.E**3)))

// Functions sneak peak

// 1. Create function that computes y = mx + b
function linear_func(m, x, b) {
    return m*x + b;
}
console.log(linear_func(m=2, x=3, b=1));

// 2. Create function that computes the softplus function (with beta parameter)
function softplus(beta, x) {
    return (1/beta) * Math.log(1 + Math.pow(Math.E, beta*x))
}
console.log(softplus(beta=6, x=2.9))

// 3. Compute: CELU(x) = max(0,x) + min(0,α*(exp(x/α)−1))
function celu(alpha, x) {
    return Math.max(0, x) + Math.min(0, alpha * ((Math.E**(alpha * x)) - 1));
}
console.log(celu(alpha=3, x=4))

// 4. Compute an exponential damped sin wave defined as y(t) = e^(-t) * cos(2 * pi * t)
function y(t) {
    return Math.pow(Math.E, -t) + Math.cos(2 * Math.PI * t)
}
console.log(y(0))

// 5. Compute h(x) = (e^(-lambda) * lambda^x) / (x!)
function fact(num) {
    if (num < 0) 
        return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * fact(num - 1));
    }
}

function pois(x, lamb) {
    return ( Math.pow(Math.E, -lamb) * (lamb * x) ) / fact(x)
}

console.log(pois(x=3, lamb=8))