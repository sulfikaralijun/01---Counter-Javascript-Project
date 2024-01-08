// get count element with id "count"
const countElement = document.getElementById("count");

// initial count
let count = 0;

const handleClick = (type) => {

  // change count
  switch (type) {
    case "decrease":
      count--;
      break;
    case "reset":
      count = 0;
      break;
    case "increase":
      count++;
      break;
  }

  // update count
  countElement.innerText = count;

  // change color
  if (count > 0) {
    countElement.style.color = "green";
  } else if (count < 0) {
    countElement.style.color = "red";
  } else {
    countElement.style.color = "black";
  }

}