// for noakhali
document.getElementById('noakhali-donation-btn').addEventListener('click', function () {
    // getting amount from input field
    const donationAmount = getInputFieldValueByID('noakhali-input-amount');
    // current balance
    const balance = getTextFieldValueByID('balance');

    if (donationAmount < 0 || isNaN(donationAmount)) {
        alert('Please enter a valid amount');
        return;
    } else if (donationAmount > balance) {
        alert('Insufficient balance');
        return;
    }

    // calculating total donation amount and updating balance
    addDonation('donation-collection-noakhali', donationAmount);
    updateBalance(donationAmount);

    // adding history
    const title = document.getElementById('noakhali').innerText;
    addHistory(donationAmount, title);

    // clear the input field
    clearInputField('noakhali-input-amount');

    // show congrats modal
    showCongratsModal(donationAmount);
});

// for feni
document.getElementById('feni-donation-btn').addEventListener('click', function () {
    // getting amount from input field
    const donationAmount = getInputFieldValueByID('feni-input-amount');
    // current balance
    const balance = getTextFieldValueByID('balance');

    if (donationAmount < 0 || isNaN(donationAmount)) {
        alert('Please enter a valid amount');
        return;
    } else if (donationAmount > balance) {
        alert('Insufficient balance');
        return;
    }

    // calculating total donation amount and updating balance
    addDonation('donation-collection-feni', donationAmount);
    updateBalance(donationAmount);

    // adding history
    const title = document.getElementById('feni').innerText;
    addHistory(donationAmount, title);

    // clear the input field
    clearInputField('feni-input-amount');

    // show congrats modal
    showCongratsModal(donationAmount);
});

// for quota movement aid
document.getElementById('quota-movement-donation-btn').addEventListener('click', function () {
    // getting amount from input field
    const donationAmount = getInputFieldValueByID('quota-movement-input-amount');
    // current balance
    const balance = getTextFieldValueByID('balance');

    if (donationAmount < 0 || isNaN(donationAmount)) {
        alert('Please enter a valid amount');
        return;
    } else if (donationAmount > balance) {
        alert('Insufficient balance');
        return;
    }

    // calculating total donation amount and updating balance
    addDonation('donation-collection-quota-movement', donationAmount);
    updateBalance(donationAmount);

    // adding history
    const title = document.getElementById('quota-movement').innerText;
    addHistory(donationAmount, title);

    // clear the input field
    clearInputField('quota-movement-input-amount');

    // show congrats modal
    showCongratsModal(donationAmount);
});
// For Sylhet
document.getElementById('sylhet-donation-btn').addEventListener('click', function () {
    // Getting amount from input field
    const donationAmount = getInputFieldValueByID('sylhet-input-amount');
    // current balance
    const balance = getTextFieldValueByID('balance');

    if (donationAmount < 0 || isNaN(donationAmount)) {
        alert('Please enter a valid amount');
        return;
    } else if (donationAmount > balance) {
        alert('Insufficient balance');
        return;
    }

    // Calculating total donation amount and updating balance
    addDonation('donation-collection-sylhet', donationAmount);
    updateBalance(donationAmount);

    // Adding history
    const title = document.getElementById('sylhet').innerText;
    addHistory(donationAmount, title);

    // clear the input field
    clearInputField('sylhet-input-amount');

    // show congrats modal
    showCongratsModal(donationAmount);
});

// For Chattogram
document.getElementById('chattogram-donation-btn').addEventListener('click', function () {
    // Getting amount from input field
    const donationAmount = getInputFieldValueByID('chattogram-input-amount');
    // current balance
    const balance = getTextFieldValueByID('balance');

    if (donationAmount < 0 || isNaN(donationAmount)) {
        alert('Please enter a valid amount');
        return;
    } else if (donationAmount > balance) {
        alert('Insufficient balance');
        return;
    }

    // Calculating total donation amount and updating balance
    addDonation('donation-collection-chattogram', donationAmount);
    updateBalance(donationAmount);

    // Adding history
    const title = document.getElementById('chattogram').innerText;
    addHistory(donationAmount, title);

    // clear the input field
    clearInputField('chattogram-input-amount');

    // show congrats modal
    showCongratsModal(donationAmount);
});

// For Rohingya
document.getElementById('rohingya-donation-btn').addEventListener('click', function () {
    // Getting amount from input field
    const donationAmount = getInputFieldValueByID('rohingya-input-amount');
    // current balance
    const balance = getTextFieldValueByID('balance');

    if (donationAmount < 0 || isNaN(donationAmount)) {
        alert('Please enter a valid amount');
        return;
    } else if (donationAmount > balance) {
        alert('Insufficient balance');
        return;
    }

    // Calculating total donation amount and updating balance
    addDonation('donation-collection-rohingya', donationAmount);
    updateBalance(donationAmount);

    // Adding history
    const title = document.getElementById('rohingya').innerText;
    addHistory(donationAmount, title);

    // clear the input field
    clearInputField('rohingya-input-amount');

    // show congrats modal
    showCongratsModal(donationAmount);
});
