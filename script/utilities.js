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

// function to add history
function addHistory(amount, titleId) {
    const history = document.getElementById('history-part');
    const now = new Date();

    // Format date and time
    const dateTime = now.toLocaleString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZoneName: 'long'
    });

    // Get GMT offset
    const offset = now.getTimezoneOffset() / -60;
    const gmtOffset = `GMT${offset >= 0 ? '+' : ''}${offset}:00`;
    // const timeZoneShort = now.toLocaleTimeString('en-US', { timeZoneName: 'short' }).split(' ')[2];

    // Create history element
    const historyList = document.createElement('div');
    historyList.innerHTML = `
        <div class="border-2 border-base-300 p-4 rounded-lg">
            <h1 class="text-xl font-semibold">${amount} Taka is Donated for ${titleId}</h1>
            <p>Date : ${dateTime} (${gmtOffset})</p>
        </div>
    `;

    history.appendChild(historyList);
}

