const counter = document.getElementById("counter");
const inc = document.querySelector(".increase");
const dec = document.querySelector(".decrease");

let count = 0;

inc.addEventListener("click", function() {
  count += 1;
  updateCounter(count);
});
dec.addEventListener("click", function() {
  count -= 1;
  updateCounter(count);
});

const updateCounter = count => {
  counter.innerHTML = count;
};
