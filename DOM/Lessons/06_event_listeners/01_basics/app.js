const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

// // ========== addEventListener ==========

// // Interesting finds:
// // Clicking on children of the grandparent also causes printing of the info

// grandparent.addEventListener(type='click', listener=e=>{
//     console.log(e)
//     console.log(`e is of type ${typeof e}`)
//     console.log(e.target)  // we are normally very interested in the target attribute
//     // some others
//     console.log(e.timeStamp)
//     console.log(e.pointerType)
// });

// grandparent.addEventListener(type='click', listener=e=>{
//     console.log('Here we have added another event listener')
// });

// ========== Event Bubbling / Capturing ==========
// **Comment out all the code above (APART FROM FIRST 3 LINES)**

// ===== Event Bubbling =====
// Now click on each of the boxes and notice what get's shown
// See here: https://youtu.be/XF1_MlZ5l6M?t=239
// This behaviour happens because by clicking on a child (any child), we are technically clicking on all parents because of the nesting
// In summary: when an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
// document.addEventListener('click', e=>{console.log('Event listener (DOCUMENT)')})
// grandparent.addEventListener('click', e=>{console.log('Event listener (GRANDPARENT)')});
// parent.addEventListener('click', e=>{console.log('Event listener (PARENT)')});
// child.addEventListener('click', e=>{console.log('Event listener (CHILD)')});

// ===== Capturing =====
// In summary: Here we move downwards, and then bubble back up
// **Comment out all the code above (APART FROM FIRST 3 LINES)**
document.addEventListener('click', e=>{console.log('Event listener (DOCUMENT)')})
grandparent.addEventListener('click', e=>{console.log('Event listener (GRANDPARENT)')});
parent.addEventListener('click', e=>{console.log('Event listener (PARENT)')}, options={capture:true});
child.addEventListener('click', e=>{console.log('Event listener (CHILD)')});

/*
***** READ A FEW TIMES BUT IT MAKES PERFECT SENSE *****

Here's a step-by-step explanation of how event capturing works:

When an event is triggered, it starts at the top-level element (usually the document) AND ENTERS THE CAPTURING PHASE.

During the capturing phase, the event travels through each element in the DOM hierarchy from the highest-level element down to the target element.

Event listeners attached during the capturing phase are executed in the order they were registered, starting from the top-level element and moving down the DOM tree. In your example, the event listener attached to the document object will be the first one to execute during the capturing phase.

After the capturing phase is complete and the event reaches the target element, it enters the target phase.

In the target phase, the event triggers event listeners attached directly to the target element. In your example, the event listener attached to the child element will be executed during the target phase.

Finally, the event enters the bubbling phase. During this phase, the event travels back up the DOM tree from the target element to the top-level element.
*/