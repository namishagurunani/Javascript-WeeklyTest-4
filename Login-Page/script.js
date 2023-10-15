const form = document.getElementById('validationForm');
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get input values
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Regular expressions for validation
            const usernamePattern = /^[A-Z][a-zA-Z0-9]{7,}$/;
            const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

            // Validation
            const usernameIsValid = usernamePattern.test(username);
            const passwordIsValid = passwordPattern.test(password);

            // Display validation errors
            document.getElementById('usernameError').textContent = usernameIsValid ? '' : 'Username is invalid.';
            document.getElementById('passwordError').textContent = passwordIsValid ? '' : 'Password is invalid.';

            // If both fields are valid, display data in an alert
            if (usernameIsValid && passwordIsValid) {
                alert(`Username: ${username}\nPassword: ${password}\nRemember Me: ${document.getElementById('rememberMe').checked ? 'Yes' : 'No'}`);
            }
        });

        // Add cancel button functionality
        document.getElementById('cancelBtn').addEventListener('click', function () {
            form.reset();
            document.getElementById('usernameError').textContent = '';
            document.getElementById('passwordError').textContent = '';
        });