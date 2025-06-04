// Fetch and display the current date and time
function updateDateTime() {
    const now = new Date();
    const dateString = now.toLocaleDateString();
    const timeString = now.toLocaleTimeString();

    document.getElementById('date').innerText = dateString;
    document.getElementById('time').innerText = timeString;
}

// Auto-increment invoice number
let invoiceNumber = 1; // Starting Invoice Number
document.getElementById('invoiceNumber').value = formatInvoiceNumber(invoiceNumber);

document.getElementById('newCustomerBtn').addEventListener('click', () => {
    invoiceNumber++;
    document.getElementById('invoiceNumber').value = formatInvoiceNumber(invoiceNumber);
});

function formatInvoiceNumber(num) {
    return String(num).padStart(7, '0'); // Formats invoice to 0000001, 0000002, etc.
}

// Calculate amount based on qty and rate
document.getElementById('qty').addEventListener('input', calculateAmount);
document.getElementById('rate').addEventListener('input', calculateAmount);

function calculateAmount() {
    const qty = parseFloat(document.getElementById('qty').value) || 0;
    const rate = parseFloat(document.getElementById('rate').value) || 0;
    const amount = qty * rate;
    document.getElementById('amount').value = amount.toFixed(2);
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Handle bank deposit and payment actions (placeholders)
document.getElementById('bankDepositBtn').addEventListener('click', () => {
    alert('Bank Deposit button clicked.');
});

document.getElementById('bankPaymentBtn').addEventListener('click', () => {
    alert('Bank Payment button clicked.');
});

// Cash and bank deposit fields for total calculation
document.getElementById('cashDeposit').addEventListener('input', updateTotals);
document.getElementById('bankDeposit').addEventListener('input', updateTotals);

function updateTotals() {
    const cashDeposit = parseFloat(document.getElementById('cashDeposit').value) || 0;
    const bankDeposit = parseFloat(document.getElementById('bankDeposit').value) || 0;
    const currentTotal = cashDeposit + bankDeposit;
    document.getElementById('currentTotal').value = currentTotal.toFixed(2);
}
function fetchItemName(itemCode) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'fetch_item_name.php?item_code=' + itemCode, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const response = xhr.responseText;
            document.getElementById('item-name').innerHTML = response;
        }
    };
    
    xhr.send();
}
    // Calculate amount on quantity change
    document.getElementById('qty').addEventListener('input', calculateAmount);
    function calculateAmount() {
        const qty = parseFloat(document.getElementById('qty').value) || 0;
        const rate = parseFloat(document.getElementById('rate').value) || 0;
        const amount = qty * rate;
        document.getElementById('amount').value = amount;
        updateNetTotal();
    }
    // Update net total and total based on previous balance
    function updateNetTotal() {
        const amount = parseFloat(document.getElementById('amount').value) || 0;
        const previousBalance = parseFloat(document.getElementById('previousBalance').value) || 0;

        let total;
        if (previousBalance >= 0) {
            total = previousBalance + amount;
        } else {
            total = amount - Math.abs(previousBalance);
        }
        document.getElementById('total').value = total;
    }

    // Calculate final current total after applying deposits and payments
    document.getElementById('cashDeposit').addEventListener('input', updateCurrentTotal);
    document.getElementById('bankDeposit').addEventListener('input', updateCurrentTotal);
    document.getElementById('bankPayment').addEventListener('input', updateCurrentTotal);

    function updateCurrentTotal() {
        const total = parseFloat(document.getElementById('total').value) || 0;
        const cashDeposit = parseFloat(document.getElementById('cashDeposit').value) || 0;
        const bankDeposit = parseFloat(document.getElementById('bankDeposit').value) || 0;
        const bankPayment = parseFloat(document.getElementById('bankPayment').value) || 0;

        const currentTotal = total - cashDeposit - bankDeposit + bankPayment;
        document.getElementById('currentTotal').value = currentTotal;
    }

    // Save selected bank name
    document.getElementById('bank').addEventListener('change', function () {
        const selectedBank = this.options[this.selectedIndex].text;
        console.log('Selected Bank:', selectedBank); // Save or use this bank name as needed
    });
// Exit page function
function exitPage() {
    window.location.href = 'dashboard.html';
}