fetch('https://api.coinlore.net/api/exchanges/')
    .then(response => response.json())
    .then(data => {
        const exchangeTable = document.getElementById('exchangeTable');
        data.forEach(item => {
            exchangeTable.innerHTML += `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.name_id}</td>
                    <td>$${parseFloat(item.volume_usd).toLocaleString()}</td>
                    <td>${item.active_pairs}</td>
                    <td><a href="${item.url}" target="_blank">${item.url}</a></td>
                    <td>${item.country}</td>
                </tr>
            `;
        });
    })
    .catch(error => console.error('Error:', error));
