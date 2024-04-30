const email = document.getElementById('email').innerText;

// ChangePasswordConfirm.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const newPasswordInput = document.getElementById('newPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordMismatchMessage = document.querySelector('.password-mismatch');

    // Function to check if passwords match
    function checkPasswordMatch() {
        const newPassword = newPasswordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        if (newPassword !== confirmPassword) {
            passwordMismatchMessage.style.display = 'block'; // Show error message
        } else {
            passwordMismatchMessage.style.display = 'none'; // Hide error message
        }
    }

    // Event listener for input events on password fields
    newPasswordInput.addEventListener('input', checkPasswordMatch);
    confirmPasswordInput.addEventListener('input', checkPasswordMatch);

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const newPassword = newPasswordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (newPassword !== confirmPassword) {
            alert('passwords do not match');
            return; // Stop form submission
        }


        document.querySelector('.loading').style.display = 'block';
    
        const formData = new FormData(this);
        const formDataObject = {};

        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        try {
            const res = await fetch('/changePassword/Confirm', {
                method: 'POST',
                body: JSON.stringify(formDataObject),
                headers: { 'Content-Type': 'application/json' }
            });

            if (res.status === 201) {
                // Password changed successfully
                alert('Password changed successfully!');
                window.location.href = '/menu'; // Redirect to home page or any other page
            } else {
                const errorMessage = await res.text();
                alert(errorMessage);
            }
        } catch (error) {
            console.log("Error occurred:", error);
            alert('An error occurred while changing the password.');
        } finally {
            document.querySelector('.loading').style.display = 'none';
        }
    });
});
