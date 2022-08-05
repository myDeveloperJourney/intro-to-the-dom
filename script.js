// Let's select an element using JavaScript and the (document) DOM API

/* 
    try selecting the h1 element using JavaScript and assigning it to a variable
    named h1Element then console.log the variable
*/

const h1Element = document.getElementById('title');
console.log(h1Element);
h1Element.style.color = 'red';