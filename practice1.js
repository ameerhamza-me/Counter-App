let countBtn = document.getElementById("count");
let decreaseBtn = document.getElementById("decrease");
let resetBtn = document.getElementById("reset");
let increaseBtn = document.getElementById("increase");


let count = 0;

increaseBtn.addEventListener("click", function () {
    count++;
     countBtn.innerText = count;
});
decreaseBtn.addEventListener("click", function () {
    if (count > 0) {
        count--;
    countBtn.innerText = count;
   }
});
resetBtn.addEventListener("click", function () {
    count = 0;
    countBtn.innerText = count;
});

