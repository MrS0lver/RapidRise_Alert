document.addEventListener("DOMContentLoaded", () => {
    const registerButton = document.getElementById("registerButton");
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("closeModal");

    // Show Modal
    registerButton.addEventListener("click", () => {
        modal.classList.add("show");
        document.body.classList.add("blur-background");
    });

    // Close Modal
    closeModal.addEventListener("click", () => {
        modal.classList.remove("show");
        document.body.classList.remove("blur-background");
    });
});
