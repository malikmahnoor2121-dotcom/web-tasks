
function registerEvent(eventName) {
    alert("Thank you for your interest in " + eventName +
          "! Registration feature will be available soon.");
}

function sendMessage(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    alert("Thank you, " + name + "! Your message has been received.");

    event.target.reset();
}
