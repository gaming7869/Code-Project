// Fetch date and time online
function getDateAndTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const dateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    document.getElementById('date-time').innerHTML = dateTime;
}

getDateAndTime();
setInterval(getDateAndTime, 1000);

document.getElementById('sale-btn').addEventListener('click', function() {
    window.location.href = 'sale.report.html'; // Redirect to the sale report page
});
document.getElementById('purchase-btn').addEventListener('click', function() {
    window.location.href = 'purchase.html'; // Redirect to the purchaase report page
});
document.getElementById('customer-btn').addEventListener('click', function() {
    window.location.href = 'customer.html'; // Redirect to the customer report page
});
document.getElementById('stock-btn').addEventListener('click', function() {
    window.location.href = 'stock.html'; // Redirect to the customer report page
    });
    document.getElementById('daybook-btn').addEventListener('click', function() {
        window.location.href = 'daybook.html'; // Redirect to the customer report page
});
document.getElementById('item-btn').addEventListener('click', function() {
    window.location.href = 'item.html'; // Redirect to the customer report page
});
document.getElementById('item-code-btn').addEventListener('click', function() {
    window.location.href = 'item.code.html'; // Redirect to the customer report page
});
document.getElementById('party-btn').addEventListener('click', function() {
    window.location.href = 'new party.html'; // Redirect to the customer report page
});
document.getElementById('daily-report-btn').addEventListener('click', function() {
    window.location.href = 'daily report.html'; // Redirect to the customer report page
});
document.getElementById('sale-report-btn').addEventListener('click', function() {
    window.location.href = 'daily sale report.html'; // Redirect to the customer report page
});
document.getElementById('purchase-summery-btn').addEventListener('click', function() {
    window.location.href = 'purchase summery.html'; // Redirect to the customer report page
});
document.getElementById('return-btn').addEventListener('click', function() {
    window.location.href = 'return summery.html'; // Redirect to the customer report page
});
document.getElementById('sale-summery-btn').addEventListener('click', function() {
    window.location.href = 'sale summery.html'; // Redirect to the customer report page
});
document.getElementById('low-stock-btn').addEventListener('click', function() {
    window.location.href = 'stock with low.html'; // Redirect to the customer report page
});
document.getElementById('zore-stock-btn').addEventListener('click', function() {
    window.location.href = 'zero stock.html'; // Redirect to the customer report page
});
document.getElementById('more-report-btn').addEventListener('click', function() {
    window.location.href = 'more info.html'; // Redirect to the customer report page
});
document.getElementById('bank-btn').addEventListener('click', function() {
    window.location.href = 'daily bank report.html'; // Redirect to the customer report page
});
document.getElementById('cash-btn').addEventListener('click', function() {
    window.location.href = 'daily cash report.html'; // Redirect to the customer report page
});

// Close page function
function closePage() {
    window.close();
}

// Exit page function
function exitPage() {
    window.location.href = 'login.html';
} 