// Handling the subscription form submission
document.getElementById('alert-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;

  if (name && phone) {
    alert(`Thank you, ${name}! You've been subscribed to flood alerts.`);
    // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
  } else {
    alert('Please fill in all fields.');
  }
});
