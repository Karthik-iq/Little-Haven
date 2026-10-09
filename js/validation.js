document.addEventListener('DOMContentLoaded', () => {
  initFormValidation();
});

function initFormValidation() {
  const forms = document.querySelectorAll('form[data-validate]');
  
  forms.forEach(form => {
    // Real-time input filtering
    const nameInputs = form.querySelectorAll('input[name*="name"], input[name*="Name"]');
    nameInputs.forEach(input => {
      input.addEventListener('input', function() {
        // Remove numbers immediately
        this.value = this.value.replace(/[0-9]/g, '');
        // Remove unsafe chars
        this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s'-]/g, '');
      });
    });

    const phoneInputs = form.querySelectorAll('input[type="tel"], input[name*="phone"]');
    phoneInputs.forEach(input => {
      input.addEventListener('input', function() {
        // Keep only digits and + 
        let val = this.value.replace(/[^0-9+]/g, '');
        // Ensure + is only at the beginning
        if (val.indexOf('+') > 0) {
          val = val.replace(/\+/g, '');
        }
        this.value = val;
      });
    });
    
    const numberInputs = form.querySelectorAll('input[type="number"], input[name*="budget"]');
    numberInputs.forEach(input => {
      input.addEventListener('input', function() {
        // Remove non-digits
        this.value = this.value.replace(/[^0-9]/g, '');
      });
    });

    const emailInputs = form.querySelectorAll('input[type="email"]');
    
    // Form submission
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;
      
      // Reset errors
      form.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
      form.querySelectorAll('.error-message').forEach(el => el.remove());

      const showError = (input, message) => {
        isValid = false;
        input.classList.add('input-error');
        const err = document.createElement('div');
        err.className = 'error-message visible text-red-500 text-sm mt-1';
        err.textContent = message;
        input.parentNode.appendChild(err);
      };

      // Validate required fields
      const requiredInputs = form.querySelectorAll('[required]');
      requiredInputs.forEach(input => {
        if (!input.value.trim()) {
          showError(input, 'This field is required.');
        }
      });

      // Validate Emails
      emailInputs.forEach(input => {
        if (input.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
          showError(input, 'Please enter a valid email address.');
        }
      });

      // Validate Phone (length check)
      phoneInputs.forEach(input => {
        if (input.value.trim() && input.value.trim().length < 7) {
          showError(input, 'Please enter a valid phone number.');
        }
      });
      
      // Validate Messages (Sanitization)
      const textareas = form.querySelectorAll('textarea');
      textareas.forEach(input => {
        if (input.value.includes('<script>') || input.value.includes('</')) {
           showError(input, 'Invalid characters detected in message.');
        }
      });

      if (isValid) {
        // Simulate processing
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Processing...';
        submitBtn.disabled = true;

        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          window.showToast('Thank you. Your enquiry has been received.');
          form.reset();
        }, 1500);
      }
    });
  });
}
