// Let's select an element using JavaScript and the (document) DOM API

/* 
    try selecting the h1 element using JavaScript and assigning it to a variable
    named h1Element then console.log the variable
*/

// select an element using getElementById
// const h1Element = document.getElementById('title');


// select an element using querySelector
// works like a css selector
const h1Element = document.querySelector('.main-title');

// console.log(h1Element);

// selecting a p tag
const pEl = document.querySelector('.cool');

// how to change the content of a DOM element

// innerHTML - used for setting text and html

pEl.innerHTML = "Comments for <strong>today</strong>";

// textContent = used for setting text only

// pEl.textContent = "Comments for <strong>today</strong>";

// Changing css styles of an element using JavaScript

h1Element.style.color = 'red';
h1Element.style.fontFamily = 'Helvetica';
h1Element.style.textAlign = 'center';