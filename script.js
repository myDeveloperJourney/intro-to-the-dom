// Let's select an element using JavaScript and the (document) DOM API

/* 
    try selecting the h1 element using JavaScript and assigning it to a variable
    named h1Element then console.log the variable
*/

// select an element using getElementById
// const h1Element = document.getElementById('title');
// h1Element.style.color = 'red';

// select an element using querySelector
// works like a css selector
const h1Element = document.querySelector('.main-title-large');

// console.log(h1Element);

const pEl = document.querySelector('.cool');
console.log(pEl);