// Get current date and time
function getCurrentDateTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const dateTime = ${day}/${month}/${year} ${hours}:${minutes}:${seconds};
    document.getElementById('date-time').innerHTML = dateTime;
    setTimeout(getCurrentDateTime, 1000);
}

// Get user name from login session
function getUserName() {
    const userName = sessionStorage.getItem('userName');
    document.getElementById('user-name').innerHTML = Welcome, ${userName};
}

// Add stock data to table
function addStockDataToTable(stockData) {
    const stockDataDiv = document.getElementById('stock-data');
    stockDataDiv.innerHTML = '';
    for (let i = 0; i < stockData.length; i++) {
        const table = document.createElement('table');
        table.style.width = '100%';
        table.style.borderCollapse = 'collapse';
        table.style.border = '1px solid #000';
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        td1.style.borderRight = '1px solid #000';
        td1.innerHTML = stockData[i].itemName;
        const td2 = document.createElement('td');
        td2.style.borderRight = '1px solid #000';
        td2.innerHTML = stockData[i].availableQuantity;
        const td3 = document.createElement('td');
        td3.innerHTML = stockData[i].zeroStock;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr);
        stockDataDiv.appendChild(table);
    }
}

// Calculate sub total
function calculateSubTotal(stockData) {
    let subTotal = 0;
    for (let i =