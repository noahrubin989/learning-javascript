// Define a value of z and beta and place softplus(z, beta) inside a paragraph using JSX

let softplusFunc = (z, beta) => {
    return (1/beta) * Math.log(1 + Math.exp(beta * z));
}

let z = 5;
let beta = 2;

const element = (
    <div>
        <h2>Softplus Function</h2>
        <p>Softplus({z}, {beta}) = {softplusFunc(z, beta)}</p>
    </div>
);

ReactDOM.render(element, document.querySelector('#root'));