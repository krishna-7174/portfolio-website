document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert("Message sent successfully!");
});
