// Some math & Functions sneak peak

// 1. Create function that computes y = mx + b
function linear_func(m, x, b) {
    return m*x + b;
}

// 2. Create function that computes the softplus function (with beta parameter)
function softplus(beta, x) {
    return (1/beta) * Math.log(1 + Math.pow(Math.E, beta*x));
}

// 3. Compute: CELU(x) = max(0,x) + min(0,α*(exp(x/α)−1))
function celu(alpha, x) {
    return Math.max(0, x) + Math.min(0, alpha * ((Math.E**(alpha * x)) - 1));
}

// 4. Compute an exponential damped sin wave defined as y(t) = e^(-t) * cos(2 * pi * t)
function y(t) {
    return Math.pow(Math.E, -t) + Math.cos(2 * Math.PI * t);
}

// 5. Compute h(x) = (e^(-lambda) * lambda^x) / (x!)

// First define factorial 
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
    return ( Math.pow(Math.E, -lamb) * (lamb * x) ) / fact(x);
}

// 6. Create swish(x) = x * σ(x), where σ(x) is the logistic sigmoid.

// first define sigmoid 
function sigmoid(x) {
    let e = Math.E
    return (Math.pow(e, x)) / (1 + Math.pow(e, x));
}

function swish(x) {
    return x * sigmoid(x);
}

// 7. Define softsign(x) = x / (1 + abs(x))
function softsign(x) {
    return x / (1 + Math.abs(x));
}

// 8. Define mish(x|b) = x * Tanh(Softplus(x|b))
function mish(x, beta=1) {
    let softplus_x = softplus(x, beta);
    return x * Math.tanh(softplus_x);
}

// 9. Create SoftShrinkage(x|lambda)
// Here: https://pytorch.org/docs/stable/generated/torch.nn.Softshrink.html#torch.nn.Softshrink

function soft_shrinkage(x, lamb) {
    if (lamb < 0) {
        throw new Error(`Given lambda value: ${lamb}, but lamb must be no less than zero`);
    } else if (x > lamb) {
        return x - lamb;
    } else if (x < -lamb) {
        return x + lamb;
    } else {
        return 0;
    }
}

// 10. Create ELU(x)
// Here: https://pytorch.org/docs/stable/generated/torch.nn.ELU.html#torch.nn.ELU

function elu(x, alpha=1) {
    if (x > 0) {
        return x;
    } else {
        let e = Math.E;
        let z = Math.pow(e, x) - 1;
        return alpha * z;
    }
}





