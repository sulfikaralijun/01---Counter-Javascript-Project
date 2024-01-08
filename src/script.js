// get count element with id "count"
const countElement = document.getElementById("count");

// initial count
let count = 0;

// update count
const decrease = () => (countElement.innerText = --count);

// reset count
const reset = () => (countElement.innerText = count = 0);

// increase count
const increase = () => (countElement.innerText = ++count);
