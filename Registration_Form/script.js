document.addEventListener("DOMContentLoaded", function () {
    // Populate months
    const monthSelect = document.getElementById('month');
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    months.forEach((month, index) => {
        const option = document.createElement('option');
        option.value = index + 1; // Months are 1-12
        option.text = month;
        monthSelect.appendChild(option);
    });

    // Populate years
    const yearSelect = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 100; // Modify as needed

    for (let i = currentYear; i >= startYear; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.text = i;
        yearSelect.appendChild(option);
    }

    // Function to update days based on selected month and year
    function updateDays() {
        const daySelect = document.getElementById('day');
        const selectedMonth = parseInt(monthSelect.value, 10);
        const selectedYear = parseInt(yearSelect.value, 10);

        daySelect.innerHTML = ''; // Clear existing options

        // Add default option
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.text = 'Day';
        defaultOption.disabled = true;
        defaultOption.selected = true;
        daySelect.appendChild(defaultOption);

        if (selectedMonth && selectedYear) {
            // Calculate number of days in the selected month and year
            const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();

            for (let i = 1; i <= daysInMonth; i++) {
                const option = document.createElement('option');
                option.value = i;
                option.text = i;
                daySelect.appendChild(option);
            }
        }
    }

    // Add event listeners to update days when month or year changes
    monthSelect.addEventListener('change', updateDays);
    yearSelect.addEventListener('change', updateDays);

    // Initialize days for default selected values
    updateDays();
});


// validation for contact input

function validateContactField() {
    const contactField = document.getElementById('contact');
    const contactValue = contactField.value.trim();

    // Regular expression for valid phone numbers
    const phoneRegex = /^[0-9]{10}$/;

    if (!contactValue.match(phoneRegex)) {
        // Set custom error message
        contactField.setCustomValidity("Enter a valid 10-digit number");
    } else {
        // Clear any previous error message
        contactField.setCustomValidity("");
    }

    // Report the validity state
    contactField.reportValidity();
}

function validateForm() {
    validateContactField();
    const contactField = document.getElementById('contact');

    // Prevent form submission if there's an error
    if (!contactField.checkValidity()) {
        return false;
    }

    return true; // Allow form submission if valid
}

//  validation for email
