// Assume you are using some form of AJAX to submit the form asynchronously
// Example using Fetch API
document.getElementById('yourFormId').addEventListener('submit', async function (event) {
    event.preventDefault();
  
    try {
      const response = await fetch('/save-student-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Include your form data here
        }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        alert(data.message);
        window.location.href = '/std-entry';
      } else {
        alert('Error: ' + data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
  