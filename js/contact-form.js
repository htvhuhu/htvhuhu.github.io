/**
 * Contact Form Handler
 * Handles form validation and submission via AJAX
 */

(function() {
    'use strict';

    // API endpoint
    const API_ENDPOINT = 'https://api.honghuannguyen.click/contact';

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('contactForm');

        if (form) {
            form.addEventListener('submit', handleFormSubmit);
        }
    });

    /**
     * Handle form submission
     */
    async function handleFormSubmit(event) {
        event.preventDefault();

        const form = event.target;

        // Validate form
        if (!validateForm(form)) {
            form.classList.add('was-validated');
            return;
        }

        // Get form data
        const formData = {
            guestName: form.guestName.value.trim(),
            email: form.email.value.trim(),
            phone: form.phone.value.trim() || '',
            messageTitle: form.messageTitle.value.trim(),
            message: form.message.value.trim()
        };

        // Show loading state
        setLoadingState(true);

        try {
            // Submit form via fetch API
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Success
                showFeedback('success', 'Thank you! Your message has been sent successfully.');
                form.reset();
                form.classList.remove('was-validated');
            } else {
                // Error from server
                const errorData = await response.json();
                showFeedback('error', errorData.message || 'Failed to send message. Please try again.');
            }
        } catch (error) {
            // Network or other error
            console.error('Error submitting form:', error);
            showFeedback('error', 'An error occurred. Please check your connection and try again.');
        } finally {
            // Hide loading state
            setLoadingState(false);
        }
    }

    /**
     * Validate form fields
     */
    function validateForm(form) {
        let isValid = true;

        // Guest Name
        const guestName = form.guestName.value.trim();
        if (!guestName) {
            isValid = false;
        }

        // Email
        const email = form.email.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            isValid = false;
        }

        // Message Title
        const messageTitle = form.messageTitle.value.trim();
        if (!messageTitle) {
            isValid = false;
        }

        // Message
        const message = form.message.value.trim();
        if (!message) {
            isValid = false;
        }

        return isValid;
    }

    /**
     * Set loading state
     */
    function setLoadingState(isLoading) {
        const submitBtn = document.getElementById('submitBtn');
        const spinner = document.getElementById('loadingSpinner');
        const feedback = document.getElementById('formFeedback');

        if (isLoading) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            if (spinner) spinner.style.display = 'block';
            if (feedback) feedback.style.display = 'none';
        } else {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send';
            if (spinner) spinner.style.display = 'none';
        }
    }

    /**
     * Show feedback message
     */
    function showFeedback(type, message) {
        const feedback = document.getElementById('formFeedback');

        if (!feedback) return;

        // Clear previous classes
        feedback.className = '';

        // Add appropriate Bootstrap alert class
        if (type === 'success') {
            feedback.className = 'alert alert-success';
        } else {
            feedback.className = 'alert alert-danger';
        }

        feedback.textContent = message;
        feedback.style.display = 'block';

        // Auto-hide after 5 seconds
        setTimeout(() => {
            feedback.style.display = 'none';
        }, 5000);
    }

})();
