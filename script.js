// ===== PART 1: EVENT HANDLING =====
document.addEventListener('DOMContentLoaded', function () {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');

  themeToggleBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      themeToggleBtn.textContent = '☀️ Light Mode';
    } else {
      themeToggleBtn.textContent = '🌙 Dark Mode';
    }
  });

  // ===== PART 2: INTERACTIVE ELEMENTS =====
  // Counter game functionality
  const counterValue = document.getElementById('counter-value');
  const increaseBtn = document.getElementById('increase-btn');
  const decreaseBtn = document.getElementById('decrease-btn');
  const resetBtn = document.getElementById('reset-btn');

  let count = 0;

  increaseBtn.addEventListener('click', function () {
    count++;
    counterValue.textContent = count;
  });

  decreaseBtn.addEventListener('click', function () {
    count--;
    counterValue.textContent = count;
  });

  resetBtn.addEventListener('click', function () {
    count = 0;
    counterValue.textContent = count;
  });

  // FAQ accordion functionality
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(function (question) {
    question.addEventListener('click', function () {
      const answer = this.nextElementSibling;
      const icon = this.querySelector('span');

      answer.classList.toggle('active');

      if (answer.classList.contains('active')) {
        icon.textContent = '-';
      } else {
        icon.textContent = '+';
      }
    });
  });

  // ===== PART 3: FORM VALIDATION =====
  const form = document.getElementById('validation-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const passwordError = document.getElementById('password-error');
  const confirmPasswordError = document.getElementById('confirm-password-error');
  const successMessage = document.getElementById('success-message');

  // Real-time validation
  nameInput.addEventListener('input', validateName);
  emailInput.addEventListener('input', validateEmail);
  passwordInput.addEventListener('input', validatePassword);
  confirmPasswordInput.addEventListener('input', validateConfirmPassword);

  // Form submission handler
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      successMessage.style.display = 'block';

      // Reset form after 3 seconds
      setTimeout(function () {
        form.reset();
        successMessage.style.display = 'none';
      }, 3000);
    }
  });

  // Validation functions
  function validateName() {
    const nameRegex = /^[a-zA-Z\s]{2,}$/;

    if (!nameRegex.test(nameInput.value.trim())) {
      nameError.style.display = 'block';
      return false;
    } else {
      nameError.style.display = 'none';
      return true;
    }
  }

  function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value.trim())) {
      emailError.style.display = 'block';
      return false;
    } else {
      emailError.style.display = 'none';
      return true;
    }
  }

  function validatePassword() {
    // At least 8 chars, 1 uppercase, 1 number, 1 special char
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(passwordInput.value)) {
      passwordError.style.display = 'block';
      return false;
    } else {
      passwordError.style.display = 'none';
      return true;
    }
  }

  function validateConfirmPassword() {
    if (confirmPasswordInput.value !== passwordInput.value) {
      confirmPasswordError.style.display = 'block';
      return false;
    } else {
      confirmPasswordError.style.display = 'none';
      return true;
    }
  }
});
