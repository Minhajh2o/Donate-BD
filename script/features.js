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

// toggle history btn small device
document.getElementById('history-btn-sm').addEventListener('click', function () {
    toggleSection('history-part');
    toggleButtonColor('history-btn-sm');
});

// toggle donation btn small device
document.getElementById('donation-btn-sm').addEventListener('click', function () {
    toggleSection('donation-part');
    toggleButtonColor('donation-btn-sm');
});

