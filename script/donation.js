document.getElementById('donation-btn').addEventListener('click', function () {
    toggleSection('donation-part');
    toggleButtonColor('donation-btn');
});

// for noakhali
document.getElementById('noakhali-donation-btn').addEventListener('click', function () {
    // getting amount from input field
    const donationAmount = getInputFieldValueByID('noakhali-input-amount');

    if (donationAmount < 0 || isNaN(donationAmount)) {
        alert('Please enter a valid amount');
        return;
    }

    // calculating total donation amount
    addDonation('donation-collection-noakhali', donationAmount);
    // updating balance
    updateBalance(donationAmount);

    alert('Thank you for your donation');

});

// for feni
document.getElementById('feni-donation-btn').addEventListener('click', function () {
    // getting amount from input field
    const donationAmount = getInputFieldValueByID('feni-input-amount');

    if (donationAmount < 0 || isNaN(donationAmount)) {
        alert('Please enter a valid amount');
        return;
    }

    // calculating total donation amount
    addDonation('donation-collection-feni', donationAmount);
    // updating balance
    updateBalance(donationAmount);

    alert('Thank you for your donation');
});

// for quota movement aid
document.getElementById('quota-movement-donation-btn').addEventListener('click', function () {
    // getting amount from input field
    const donationAmount = getInputFieldValueByID('quota-movement-input-amount');

    if (donationAmount < 0 || isNaN(donationAmount)) {
        alert('Please enter a valid amount');
        return;
    }

    // calculating total donation amount
    addDonation('donation-collection-quota-movement', donationAmount);
    // updating balance
    updateBalance(donationAmount);

    alert('Thank you for your donation');

});