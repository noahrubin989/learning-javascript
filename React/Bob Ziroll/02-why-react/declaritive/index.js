// ReactDOM.render(
//     <h1 className="header">Hi there</h1>,
//     document.getElementById("root")
// )

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/

const myDiv = document.querySelector('#root');

const node = document.createElement('h1');
[node.className, node.textContent] = ['header', 'Vanilla JS Exercise (Imperative Way)'];

myDiv.appendChild(node);

// As you can see React is a lot cleaner








