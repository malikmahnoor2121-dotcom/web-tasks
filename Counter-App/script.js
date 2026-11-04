
let count = 0;

const countDisplay = document.getElementById("count");
const message = document.getElementById("message");

function updateCounter() {
    countDisplay.textContent = count;

    countDisplay.style.transform = "scale(1.1)";

    setTimeout(() => {
        countDisplay.style.transform = "scale(1)";
    }, 150);

    if (count > 0) {
        message.textContent = "Keep counting! 🚀";
    } else if (count < 0) {
        message.textContent = "You are below zero!";
    } else {
        message.textContent = "Ready to count?";
    }
}

function increaseCount() {
    count++;
    updateCounter();
}

function decreaseCount() {
    count--;
    updateCounter();
}

function resetCount() {
    count = 0;
    updateCounter();
}
