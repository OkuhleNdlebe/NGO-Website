document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is working!");

    // Example: Form validation
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let valid = true;
        const inputs = form.querySelectorAll("input[required]");
        inputs.forEach(input => {
            if (!input.value) {
                valid = false;
                input.style.borderColor = "red";
            } else {
                input.style.borderColor = "green";
            }
        });
        if (!valid) {
            event.preventDefault();
            alert("Please fill in all required fields.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const donationAmountSelect = document.getElementById('donationAmount');
    const otherAmountInput = document.getElementById('otherAmount');
    const otherAmountLabel = document.getElementById('otherAmountLabel');

    donationAmountSelect.addEventListener('change', function() {
        if (donationAmountSelect.value === 'other') {
            otherAmountInput.style.display = 'block';
            otherAmountLabel.style.display = 'block';
            otherAmountInput.required = true;
        } else {
            otherAmountInput.style.display = 'none';
            otherAmountLabel.style.display = 'none';
            otherAmountInput.required = false;
        }
    });

    const form = document.getElementById('donationForm');
    form.addEventListener('submit', function(event) {
        const amount = donationAmountSelect.value === 'other' ? otherAmountInput.value : donationAmountSelect.value;

        if (!amount || amount <= 0) {
            event.preventDefault();
            alert("Please enter a valid donation amount.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        const requiredFields = form.querySelectorAll('input[required], textarea[required]');
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = "red";
            } else {
                field.style.borderColor = "green";
            }
        });

        if (!isValid) {
            event.preventDefault();
            alert("Please fill out all required fields.");
        } else {
            alert("Thank you for reaching out! We will get back to you shortly.");
        }
    });
});