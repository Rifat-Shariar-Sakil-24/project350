const classNoInput = document.getElementById('classNoInput');
const rollInput = document.getElementById('rollNoInput');
const yearInput = document.getElementById('yearNoInput');
const showbox = document.getElementById('showbox');

classNoInput.addEventListener('input', updateStudentInfo);
rollInput.addEventListener('input', updateStudentInfo);
yearInput.addEventListener('input', updateStudentInfo);

function updateStudentInfo() {
  const classNo = classNoInput.value;
  const roll = rollInput.value;
  const year = yearInput.value;

  // Call the API to fetch student data using the GET method
  fetch(`/getStudentData?classNo=${classNo}&roll=${roll}&year=${year}`)
    .then(response => response.json())
    .then(data => {
      if (data && data.data && data.data.length > 0) {
        // Update the showbox field with fetched data
        const studentData = data.data[0];
        showbox.innerText = "This student already exists!";
      } else {
        // Clear the showbox field if no data is found
        showbox.innerText = 'No such student found';
      }
    })
    .catch(error => {
      console.error('Error fetching student data:', error.message);
      // alert('An error occurred while fetching student data.');
    });
}function submitForm(event) {
    event.preventDefault();  // Prevent the default form submission behavior
  
    const form = document.getElementById('contact_form');
    const formData = new FormData(form);
  
    // Convert FormData to JSON object
    const jsonObject = {};
  
    formData.forEach((value, key) => {
      jsonObject[key] = value;
    });
  
    // Make a POST request to your server with the JSON data
    fetch('/save-student-info', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonObject),
    })
      .then(response => response.json())
      .then(data => {
        if (data && data.message) {
          // Check the server response for different scenarios
          if (data.message === 'Student information saved successfully.') {
            alert('Student info saved successfully');
  
            // Reset the form
            form.reset();
          } else if (data.message === 'Student already exists') {
            alert('Student already exists');
          } else {
            alert('Internal error found');
          }
        } else {
          alert('Server response is undefined or missing message.');
        }
      })
      .catch(error => {
        console.error('Error:', error.message);
        alert('An error occurred while submitting the form.');
      });
  }
  
  // Attach the submitForm function to the form's submit event
  const form = document.getElementById('contact_form');
  form.addEventListener('submit', submitForm);






  // first name error

  const firstNameInput = document.getElementById('first_name');
  const errorMessage = document.getElementById('error-message');

  form.addEventListener('submit', function (event) {
      // Validate the input using a regular expression
      const nameRegex = /^[a-zA-Z]+$/;
      const firstName = firstNameInput.value.trim();

      if (!nameRegex.test(firstName)) {
          // Display an error message and prevent form submission
          errorMessage.innerText = 'প্রথম নামে কেবল ইংরেজি বর্ণ (a-z বা A-Z) অনুমতি প্রদান করা হয়';
          event.preventDefault();
      } else {
          // Clear the error message if the input is valid
          errorMessage.innerText = '';
      }
  });
  