document.getElementById('donation-btn').addEventListener('click', function () {
    toggleSection('donation-part');
});

// for noakhali
document.getElementById('noakhali-donation-btn').addEventListener('click', function () {
    // getting amount from input field
    const donationAmount = getInputFieldValueByID('noakhali-input-amount');
    // calculating total donation amount
    addDonation('donation-collection-noakhali', donationAmount);
    // updating balance
    updateBalance(donationAmount);
});

// for feni
document.getElementById('feni-donation-btn').addEventListener('click', function () {
    // getting amount from input field
    const donationAmount = getInputFieldValueByID('feni-input-amount');
    // calculating total donation amount
    addDonation('donation-collection-feni', donationAmount);
    // updating balance
    updateBalance(donationAmount);
});

// for quota movement aid
document.getElementById('quota-movement-donation-btn').addEventListener('click', function () {
    // getting amount from input field
    const donationAmount = getInputFieldValueByID('quota-movement-input-amount');
    // calculating total donation amount
    addDonation('donation-collection-quota-movement', donationAmount);
    // updating balance
    updateBalance(donationAmount);
});