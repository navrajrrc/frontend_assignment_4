document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Clear previous error messages
    clearErrors();
    
    // Validate the form
    let isValid = true;
  
    // Validate Name
    const name = document.getElementById("name");
    if (name.value.trim() === "") {
      isValid = false;
      showError("nameError", "Name is required.");
    }
  
    // Validate Gender (Radio buttons)
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
      isValid = false;
      showError("genderError", "Please select a gender.");
    }
  
    // Validate Hobbies (Checkboxes)
    const hobbies = document.querySelectorAll('input[name="hobbies"]:checked');
    if (hobbies.length === 0) {
      isValid = false;
      showError("hobbiesError", "Please select at least one hobby.");
    }
  
    // Validate Username (Regex)
    const username = document.getElementById("username");
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!username.value.match(usernameRegex)) {
      isValid = false;
      showError("usernameError", "Username must be alphanumeric.");
    }
  
    // Validate Email
    const email = document.getElementById("email");
    if (email.value.trim() === "") {
      isValid = false;
      showError("emailError", "Email is required.");
    }
  
    // Validate Date of Birth
    const dob = document.getElementById("dob");
    if (dob.value.trim() === "") {
      isValid = false;
      showError("dobError", "Date of Birth is required.");
    }
  
    // Validate Country
    const country = document.getElementById("country");
    if (country.value === "") {
      isValid = false;
      showError("countryError", "Please select your country.");
    }
  
    // If all validations pass, show success message
    if (isValid) {
      document.getElementById("successMessage").classList.remove("hidden");
      document.getElementById("surveyForm").reset();
    }
  });
  
  // Function to show error messages
  function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = "block";
  }
  
  // Function to clear error messages
  function clearErrors() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function (message) {
      message.style.display = "none";
    });
  }
  