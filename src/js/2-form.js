// 2-form.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.feedback-form');

    // Function to save form data to localStorage
    const saveFormDataToLocalStorage = () => {
        const formData = {
            email: form.email.value,
            message: form.message.value
        };
        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    };

    // Function to load form data from localStorage
    const loadFormDataFromLocalStorage = () => {
        const savedData = localStorage.getItem('feedback-form-state');
        if (savedData) {
            const formData = JSON.parse(savedData);
            form.email.value = formData.email || '';
            form.message.value = formData.message || '';
        }
    };

    // Load form data from localStorage when the page loads
    loadFormDataFromLocalStorage();

    // Save form data to localStorage on input
    form.addEventListener('input', saveFormDataToLocalStorage);

    // Clear localStorage and form fields on form submit
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log({
            email: form.email.value,
            message: form.message.value
        });
        localStorage.removeItem('feedback-form-state');
        form.reset();
    });
});
