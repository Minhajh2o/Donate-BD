// for noakhali
document.getElementById('noakhali-donation-btn').addEventListener('click', function () {
    // getting amount from input field
    const donationAmount = getInputFieldValueByID('noakhali-input-amount');
    // current balance
    const balance = getTextFieldValueByID('balance');

    if (donationAmount < 0 || isNaN(donationAmount)){
        alert('Please enter a valid amount');
        return;
    }else if (donationAmount > balance){
        alert('Insufficient balance');
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
    }else if (donationAmount > balance){
        alert('Insufficient balance');
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
    }else if (donationAmount > balance){
        alert('Insufficient balance');
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
// For Sylhet
document.getElementById('sylhet-donation-btn').addEventListener('click', function () {
    // Getting amount from input field
    const donationAmount = getInputFieldValueByID('sylhet-input-amount');

    if (donationAmount < 0 || isNaN(donationAmount)) {
        alert('Please enter a valid amount');
        return;
    }else if (donationAmount > balance){
        alert('Insufficient balance');
        return;
    }

    // Calculating total donation amount
    addDonation('donation-collection-sylhet', donationAmount);
    // Updating balance
    updateBalance(donationAmount);

    // Adding history
    const title = document.getElementById('sylhet').innerText;
    addHistory(donationAmount, title);

    alert('Thank you for your donation');

    // Clear the input field
    document.getElementById('sylhet-input-amount').value = '';
});

// For Chattogram
document.getElementById('chattogram-donation-btn').addEventListener('click', function () {
    // Getting amount from input field
    const donationAmount = getInputFieldValueByID('chattogram-input-amount');

    if (donationAmount < 0 || isNaN(donationAmount)) {
        alert('Please enter a valid amount');
        return;
    }else if (donationAmount > balance){
        alert('Insufficient balance');
        return;
    }

    // Calculating total donation amount
    addDonation('donation-collection-chattogram', donationAmount);
    // Updating balance
    updateBalance(donationAmount);

    // Adding history
    const title = document.getElementById('chattogram').innerText;
    addHistory(donationAmount, title);

    alert('Thank you for your donation');

    // Clear the input field
    document.getElementById('chattogram-input-amount').value = '';
});

// For Rohingya
document.getElementById('rohingya-donation-btn').addEventListener('click', function () {
    // Getting amount from input field
    const donationAmount = getInputFieldValueByID('rohingya-input-amount');

    if (donationAmount < 0 || isNaN(donationAmount)) {
        alert('Please enter a valid amount');
        return;
    }else if (donationAmount > balance){
        alert('Insufficient balance');
        return;
    }

    // Calculating total donation amount
    addDonation('donation-collection-rohingya', donationAmount);
    // Updating balance
    updateBalance(donationAmount);

    // Adding history
    const title = document.getElementById('rohingya').innerText;
    addHistory(donationAmount, title);

    alert('Thank you for your donation');

    // Clear the input field
    document.getElementById('rohingya-input-amount').value = '';
});
