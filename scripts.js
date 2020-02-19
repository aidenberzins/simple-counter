const counter = document.getElementById("counter");
const inc = document.querySelector(".increase");
const dec = document.querySelector(".decrease");

let count = 0;

document.addEventListener("keydown", shiftedTrue);
document.addEventListener("keyup", shiftedFalse);

let shifted = false;

function shiftedTrue() {
  shifted = true;
}
function shiftedFalse() {
  shifted = false;
}

inc.addEventListener("click", function() {
  if (shifted) {
    count += 10;
  } else {
    count += 1;
  }
  updateCounter(count);
});

dec.addEventListener("click", function() {
  if (shifted) {
    count -= 10;
  } else {
    count -= 1;
  }
  updateCounter(count);
});

const updateCounter = count => {
  counter.innerHTML = count;
};

updateCounter(count);
