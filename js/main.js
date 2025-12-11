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
     */
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            link.classList.remove('active');

            const href = link.getAttribute('href');
            if (href === currentPage ||
                (currentPage === '' && href === 'index.html') ||
                (currentPage === '/' && href === 'index.html')) {
                link.classList.add('active');
            }
        });
    }

    /**
     * Add click event listeners to navigation links
     */
    function addNavigationListeners() {
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));

                // Add active class to clicked link
                this.classList.add('active');
            });
        });
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
