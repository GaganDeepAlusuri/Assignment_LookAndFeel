fetch('https://api.coinlore.net/api/tickers/')
.then(response => response.json())
.then(data => {
    const dataTable = document.getElementById('dataTable');
    data.data.forEach(item => {
        dataTable.innerHTML += `
            <tr>
                <td>${item.id}</td>
                <td>${item.symbol}</td>
                <td>${item.name}</td>
                <td>$${parseFloat(item.price_usd).toLocaleString()}</td>
                <td>${item.percent_change_24h}%</td>
                <td>${item.percent_change_1h}%</td>
                <td>${item.percent_change_7d}%</td>
                <td>$${parseFloat(item.market_cap_usd).toLocaleString()}</td>
            </tr>
        `;
    });
})
.catch(error => console.error('Error:', error));


