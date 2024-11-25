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


document.getElementById('alert-form').addEventListener('submit', async function (event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const location = document.getElementById('location').value;
  
    if (name && phone && email && location) {
      try {
        // Send POST request to Flask API
        const response = await fetch('http://127.0.0.1:5000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, phone, email, location }),
        });
  
        const result = await response.json();
        if (response.ok) {
          alert(result.message);
          document.getElementById('name').value = '';
          document.getElementById('phone').value = '';
          document.getElementById('email').value = '';
          document.getElementById('location').value = '';
        } else {
          alert(`Error: ${result.error}`);
        }
      } catch (error) {
        alert('Failed to connect to the server.');
        console.error(error);
      }
    } else {
      alert('Please fill in all fields.');
    }
  });
  