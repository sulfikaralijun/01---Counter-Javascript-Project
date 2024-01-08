const countElement = document.getElementById("count");
let count = 0
const decrease = () => countElement.innerText = --count;
const reset = () => countElement.innerText = count = 0;
const increase = () => countElement.innerText = ++count;
