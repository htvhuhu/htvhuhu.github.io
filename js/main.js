/**
 * Main JavaScript for Portfolio Website
 * Handles navigation, active states, and general utilities
 */

(function() {
    'use strict';

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {

        // Set active navigation link based on current page
        setActiveNavLink();

        // Smooth scroll to top on page load
        window.scrollTo(0, 0);

        // Add event listeners for navigation links
        addNavigationListeners();

    });

    /**
     * Set active class on navigation link based on current page
     * Note: This is now handled statically in HTML markup for better reliability
     */
    function setActiveNavLink() {
        // Static active classes in HTML are sufficient
        // No dynamic manipulation needed
    }

    /**
     * Add click event listeners to navigation links
     * Note: Removed automatic active class handling to prevent conflicts
     */
    function addNavigationListeners() {
        // The navbar handles active states through static HTML markup
        // No dynamic active class manipulation needed
    }

    /**
     * Mobile menu toggle (if needed in future)
     */
    function initMobileMenu() {
        const toggleBtn = document.querySelector('.mobile-menu-toggle');
        const navbar = document.querySelector('.navbar');

        if (toggleBtn && navbar) {
            toggleBtn.addEventListener('click', function() {
                navbar.classList.toggle('show');
            });
        }
    }

    /**
     * Scroll to top functionality
     */
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Make scrollToTop available globally
    window.scrollToTop = scrollToTop;

})();
