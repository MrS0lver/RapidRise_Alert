document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;

        if (name && phone) {
            alert(`Thank you, ${name}! We will notify you at ${phone}.`);
            form.reset();
        } else {
            alert("Please fill out all fields.");
        }
    });
});
