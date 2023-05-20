// // It works:
// const first = document.querySelector('#form1 input[name=fname]');
// const last = document.querySelector('#form1 input[name=lname');
// console.log(first);
// console.log(last);

function getFormValue() {
    // use css selector techniques
    const first = document.querySelector('#form1 input[name=fname]');
    const last = document.querySelector('#form1 input[name=lname');
    console.log(first);
    console.log(last);
}

/* 
The part #form1 input[name="fname"] is a CSS selector that targets 
an input element with the name attribute equal to "fname" within an 
element with the id attribute "form1".

Breaking it down:
1.  #form1 targets an element with the id "form1". The # symbol denotes an id selector in CSS.
2.  input[name="fname"] targets an input element with the name attribute equal to "fname". The input represents an 
    input element selector, and [name="fname"] represents an attribute selector specifying the name attribute as "fname".

By combining these two parts, #form1 input[name="fname"] selects an input element with the name attribute equal 
to "fname" that is a descendant of an element with the id "form1".

In the given example, it is used in the JavaScript code to select the input element for the first name within 
the form with the id "form1".
*/



