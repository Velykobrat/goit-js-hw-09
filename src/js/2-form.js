document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.feedback-form');


    const saveFormDataToLocalStorage = () => {
        const formData = {
            email: form.email.value,
            message: form.message.value
        };
        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    };


    const loadFormDataFromLocalStorage = () => {
        const savedData = localStorage.getItem('feedback-form-state');
        if (savedData) {
            const formData = JSON.parse(savedData);
            form.email.value = formData.email || '';
            form.message.value = formData.message || '';
        }
    };


    loadFormDataFromLocalStorage();


    form.addEventListener('input', saveFormDataToLocalStorage);


    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (form.email.value.trim() === '' || form.message.value.trim() === '') {
            alert('Будь ласка, заповніть всі поля.');
            return;
        }
        console.log({
            email: form.email.value,
            message: form.message.value
        });
        localStorage.removeItem('feedback-form-state');
        form.reset();
    });
});
