

let idNameMap = [];

// Fetch initial data for dropdown
fetch('https://api.coinlore.net/api/tickers/')
    .then(response => response.json())
    .then(data => {
        const dropdown = document.getElementById('dataDropdown');
        data.data.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.name;
            dropdown.appendChild(option);

            idNameMap.push({
                id: item.id,
                name: item.name
            });
        });
    })
    .catch(error => console.error('Error:', error));

    function fetchAndDisplayData() {
        const selectedId = document.getElementById('dataDropdown').value;
        
        fetch(`https://api.coinlore.net/api/coin/markets/?id=${selectedId}`)
            .then(response => response.json())
            .then(data => {
                const table = document.getElementById('dataDisplayTable');
    
                // Clear the existing table content
                table.innerHTML = '';
    
                // Add headers to the table
                const thead = document.createElement('thead');
                const headerRow = document.createElement('tr');
                const columns = ['Name', 'Base', 'Quote', 'Price', 'Price (USD)', 'Volume', 'Volume (USD)', 'Time'];
                columns.forEach(col => {
                    const th = document.createElement('th');
                    th.textContent = col;
                    headerRow.appendChild(th);
                });
                thead.appendChild(headerRow);
                table.appendChild(thead);
    
                // Add data to the table
                const tbody = document.createElement('tbody');
                
                data.forEach(item => {
                    const row = document.createElement('tr');
                    const values = [item.name, item.base, item.quote, item.price, item.price_usd, item.volume, item.volume_usd, new Date(item.time * 1000).toLocaleString()];
                    values.forEach(val => {
                        const td = document.createElement('td');
                        td.textContent = val;
                        row.appendChild(td);
                    });
                    tbody.appendChild(row);
                });
    
                table.appendChild(tbody);
            })
            .catch(error => console.error('Error:', error));
    }
    