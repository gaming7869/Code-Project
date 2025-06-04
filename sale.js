// Fetch and display the current date and time
function updateDateTime() {
    const now = new Date();
    const dateString = now.toLocaleDateString();
    const timeString = now.toLocaleTimeString();

    document.getElementById('date').innerText = dateString;
    document.getElementById('time').innerText = timeString;
}

document.addEventListener('DOMContentLoaded', function () {
    // Auto-fetch customer info (Simulating from a list for demo purposes)
    const customers = {
        'John Doe': { openingBalance: 100 },
        'Jane Smith': { openingBalance: 50 },
        'Mazari Khalil': { openingBalance: 200 },
    };
    // Update date and time every second
setInterval(updateDateTime, 1000);

    // Auto-fetch stock report data (IMEI details for demo purposes)
    const stock = {
        '123456789': { imei2: '987654321', itemName: 'Phone Model X', rate: 500 },
        '111222333': { imei2: '444555666', itemName: 'Phone Model Y', rate: 600 }
    };

    // Auto-fill customer info
    document.getElementById('customerName').addEventListener('input', function () {
        const customerName = this.value;
        if (customers[customerName]) {
            document.getElementById('previousBalance').value = customers[customerName].openingBalance;
        } else {
            document.getElementById('previousBalance').value = 0;
        }
        updateNetTotal();
    });

    // Auto-fetch IMEI details and calculate amount
    document.getElementById('imei-1').addEventListener('input', function () {
        const imei1 = this.value;
        if (stock[imei1]) {
            document.getElementById('imei-2').value = stock[imei1].imei2;
            document.getElementById('item-name').value = stock[imei1].itemName;
            document.getElementById('rate').value = stock[imei1].rate;
            calculateAmount();
        } else {
            document.getElementById('imei-2').value = '';
            document.getElementById('item-name').value = '';
            document.getElementById('rate').value = '';
        }
    });

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
    document.getElementById('newCustomerBtn').addEventListener('click', function() {
        window.location.href = 'customer.info.html'; // Redirect to the customer report page
    });

    // Save selected bank name
    document.getElementById('bank').addEventListener('change', function () {
        const selectedBank = this.options[this.selectedIndex].text;
        console.log('Selected Bank:', selectedBank); // Save or use this bank name as needed
    });
    document.getElementById('ViewBill-Btn').addEventListener('click', function() {
        window.location.href = 'view bill.html'; // Redirect to the customer report page
    });
    

});