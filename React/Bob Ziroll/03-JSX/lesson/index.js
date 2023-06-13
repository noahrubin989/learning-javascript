const h1 = document.createElement("h1")
h1.textContent = "Hello world"
h1.className = "header"
console.log(h1)
console.log(typeof h1) // JavaScript object

console.log('==========')

// JSX
const element = <h1 className="header">This is JSX</h1>
console.log(element)
console.log(typeof element)  // JavaScript object
ReactDOM.render(element, document.getElementById("root"))