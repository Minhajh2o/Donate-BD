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

    // adding history
    const title = document.getElementById('noakhali').innerText;
    addHistory(donationAmount, title);

    alert('Thank you for your donation');

    // clear the input field
    document.getElementById('noakhali-input-amount').value = '';
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

    // adding history
    const title = document.getElementById('feni').innerText;
    addHistory(donationAmount, title);

    alert('Thank you for your donation');

    // clear the input field
    document.getElementById('feni-input-amount').value = '';
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

    // adding history
    const title = document.getElementById('quota-movement').innerText;
    addHistory(donationAmount, title);

    alert('Thank you for your donation');

    // clear the input field
    document.getElementById('quota-movement-input-amount').value = '';
});