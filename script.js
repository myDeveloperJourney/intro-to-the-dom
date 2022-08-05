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
h1Element.style.fontFamily = 'Helvetica'; // font-family
h1Element.style.textAlign = 'center'; // text-align
pEl.style.color = 'rebeccapurple';

// working with HTML attributes and the DOM

// console.log(pEl.hasAttribute('class')); // => should return true

pEl.setAttribute('id', 'not-cool'); // sets the value of a given attribute

console.log(h1Element.getAttribute('id')); // => should return "title"

const aEl = document.querySelector('a');

aEl.setAttribute('href', 'https://google.com');
aEl.setAttribute('target', '_blank');

pEl.setAttribute('class', 'red bold important large-text');

pEl.classList.remove('red');
pEl.classList.add('special');

// How to select multiple DOM elements using querySelectorAll()

const liEls = document.querySelectorAll('.comment');

// because liEls is a list, we can iterate over the list as we normally loop over arrays (lists)
// for(let i = 0; i < liEls.length; i++) {
//     console.log(liEls[i]);
// }

// we can also use the .forEach method

document.querySelector('ol').style.listStyleType = 'upper-roman'

liEls.forEach(function(li) {
    li.style.color = 'dodgerblue';
});