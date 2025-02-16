// function to get the donation amount from input field
function getInputFieldValueByID(id) {
    return parseFloat(document.getElementById(id).value);
}

// function to get the current donation amount
function getTextFieldValueByID(id) {
    return parseFloat(document.getElementById(id).innerText);    
}

// update the donation amount
function addDonation(id, amount) {
    const donationAmount = getTextFieldValueByID(id);
    document.getElementById(id).innerText = donationAmount + amount;
}

// update the current balance
function updateBalance(amount) {
    const balance = getTextFieldValueByID('balance');
    document.getElementById('balance').innerText = balance - amount;
}

// toggle donation and history section
function toggleSection(sectionID) {
    document.getElementById('donation-part').classList.add('hidden');
    document.getElementById('history-part').classList.add('hidden');

    document.getElementById(sectionID).classList.remove('hidden');
}

// toggle button color
function toggleButtonColor(btnID) {
    document.getElementById('donation-btn').classList.remove('bg-lime-400');
    document.getElementById('history-btn').classList.remove('bg-lime-400');

    document.getElementById(btnID).classList.add('bg-lime-400');
}