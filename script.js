document.addEventListener('DOMContentLoaded', function() {
    const options = document.querySelectorAll('.option');
    const submitBtn = document.getElementById('submitBtn');
    const feedbackForm = document.getElementById('feedbackForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    const selectedFeedback = document.getElementById('selectedFeedback');
    let selectedOption = null;
    options.forEach(option => {
        option.addEventListener('click', function() {
            options.forEach(opt => opt.classList.remove('selected'));
            
            this.classList.add('selected');
            selectedOption = this.getAttribute('data-value');
        });
    });
    submitBtn.addEventListener('click', function() {
        if (selectedOption) {
            selectedFeedback.textContent = selectedOption;
            feedbackForm.style.display = 'none';
            thankYouMessage.style.display = 'block';
        } else {
            alert('Please select an option before submitting.');
        }
    });
});