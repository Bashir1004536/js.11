

        // Get input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const dob = document.getElementById("dob").value;
        const gender = document.getElementById("gender").value;
        const age = document.getElementById("age").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const address = document.getElementById("address").value.trim();
        const city = document.getElementById("city").value.trim();

        // Clear previous error messages
        document.querySelectorAll('.error').forEach(e => e.innerHTML = '');

        // Name validation
        if (name === "") {
            document.getElementById("nameError").innerHTML = "Name is required.";
            valid = false;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailPattern)) {
            document.getElementById("emailError").innerHTML = "Please enter a valid email address.";
            valid = false;
        }

        // Phone validation
        if (!/^\d{10}$/.test(phone)) {
            document.getElementById("phoneError").innerHTML = "Phone number must be 10 digits.";
            valid = false;
        }

        // Date of birth validation
        if (dob === "") {
            document.getElementById("dobError").innerHTML = "Date of birth is required.";
            valid = false;
        }

        // Gender validation
        if (gender === "") {
            document.getElementById("genderError").innerHTML = "Please select your gender.";
            valid = false;
        }

        // Age validation
        const ageNum = parseInt(age);
        if (isNaN(ageNum) || ageNum < 1 || ageNum > 120) {
            document.getElementById("ageError").innerHTML = "Please enter a valid age between 1 and 120.";
            valid = false;
        }

        // Password validation
        if (password.length < 6) {
            document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters long.";
            valid = false;
        }

        // Confirm password validation
        if (password !== confirmPassword) {
            document.getElementById("confirmPasswordError").innerHTML = "Passwords do not match.";
            valid = false;
        }

        // Address validation
        if (address === "") {
            document.getElementById("addressError").innerHTML = "Address is required.";
            valid = false;
        }

        // City validation
        if (city === "") {
            document.getElementById("cityError").innerHTML = "City is required.";
            valid = false;
        }

        return valid;
    
