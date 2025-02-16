function updateBalance(amount) {
    const balance = getTextFieldValueByID('balance');
    document.getElementById('balance').innerText = balance - amount;
}

function addDonation(id, amount) {
    const donationAmount = getTextFieldValueByID(id);
    document.getElementById(id).innerText = donationAmount + amount;
}

function getInputFieldValueByID(id) {
    return parseFloat(document.getElementById(id).value);
}

function getTextFieldValueByID(id) {
    return parseFloat(document.getElementById(id).innerText);    
}
