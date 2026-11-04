
const button = document.getElementById("changeBtn");

const colors = [
    "pink",
    "lightgreen",
    "yellow",
    "orange",
    "lightblue",
    "purple",
    "red",
    "coral"
];

let index = 0;

button.addEventListener("click", function () {
    document.body.style.backgroundColor = colors[index];

    index++;

    if (index >= colors.length) {
        index = 0;
    }
});
