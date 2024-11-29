// Symptom Checker function
function checkSymptom() {
    var symptom = document.getElementById('symptom').value.toLowerCase();
    var resultText = '';

    if (symptom.includes('fever')) {
        resultText = 'Fever can be a sign of many things. It could indicate an infection or other conditions. If it persists, contact a healthcare provider.';
    } else if (symptom.includes('cough')) {
        resultText = 'A cough could be a sign of a respiratory infection, but it could also be caused by allergies or dry air.';
    } else if (symptom.includes('headache')) {
        resultText = 'Headaches can be caused by stress, dehydration, or a variety of other factors. If it is severe, consider seeing a doctor.';
    } else {
        resultText = 'Your symptom is not recognized. If you are concerned, please consult a healthcare professional.';
    }

    document.getElementById('symptom-result').innerText = resultText;
}

// Handle appointment form submission (for demonstration)
document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your appointment has been booked successfully!');
});
