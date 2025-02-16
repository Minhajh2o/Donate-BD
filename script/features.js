// toggle history btn
document.getElementById('history-btn').addEventListener('click', function () {
    toggleSection('history-part');
    toggleButtonColor('history-btn');
});

// toggle donation btn
document.getElementById('donation-btn').addEventListener('click', function () {
    toggleSection('donation-part');
    toggleButtonColor('donation-btn');
});

// function to show donation modal
function showCongratsModal(donationAmount) {
    document.getElementById('donation-amount-text').innerText = donationAmount; // Update modal text
    document.getElementById('donation-modal').classList.remove('hidden'); // Show modal
}

// donation modal close button
document.getElementById('close-modal').addEventListener('click', function () {
    document.getElementById('donation-modal').classList.add('hidden');
});