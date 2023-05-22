/*

========== EVENT DELEGATION: ==========

The idea is that if we have a lot of elements handled in a similar way, 
then instead of assigning a handler to each of them – we put a single handler 
on their common ancestor.

*/

const myul = document.querySelector('.my-ul');

myul.addEventListener('click', function (e) {
    const target = e.target;

    // If we click on an li tag then change then change the text color to green
    if (target.matches('li')) {
        target.style.color='#50C878';
    }
})

function addSports(arr, parentElem) {
    arr.forEach(item => {
        const newli = document.createElement(tagName='li');
        parentElem.appendChild(node=newli);
        newli.textContent = item;
    });
}

// Call the function
addSports(arr=['Hockey', 'Swimming', 'Baseball'], parentElem=myul);


