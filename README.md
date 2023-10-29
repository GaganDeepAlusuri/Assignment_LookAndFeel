# Assignment_LookAndFeel
# Crypto Pulse Project Documentation

## Overview

The Crypto Pulse project is a web-based application that provides real-time data and insights on various cryptocurrencies. This document outlines the structure of the data model and the relationships between different tables in our system. It also includes relevant API calls for fetching cryptocurrency data.

### Tables and Relationships

1. **Coin Table**:
   - **API Call**: [https://api.coinlore.net/api/tickers/](https://api.coinlore.net/api/tickers/)
   - **Description**: The Coin table serves as the primary entity in our data model, representing individual cryptocurrencies. It includes essential attributes and establishes relationships with other tables.
   - **Attributes**:
     - `ID`: Primary Key. Unique identifier for each cryptocurrency.
     - `Symbol`: Short representation of the cryptocurrency (e.g., BTC for Bitcoin).
     - `Name`: Full name of the cryptocurrency (e.g., Bitcoin).
     - `Rank`: Ranking of the cryptocurrency based on market capitalization.
     - `Price (USD)`: Current price of the cryptocurrency in US dollars.
     - `Market Cap (USD)`: Total market value of the cryptocurrency in US dollars.
     - `Volume (24h)`: Total trading volume of the cryptocurrency in the last 24 hours.
     - `Supply (Current)`: Current circulating supply of the cryptocurrency.
     - `Supply (Total)`: Total supply of the cryptocurrency.
     - `Supply (Max)`: Maximum possible supply of the cryptocurrency.
     - `Percent Change`: Percentage change in the cryptocurrency's price over different time intervals (1 hour, 24 hours, 7 days).

2. **Market Table**:
   - **API Call**: [https://api.coinlore.net/api/coin/markets/?id=[coin_id]](https://api.coinlore.net/api/coin/markets/?id=[coin_id])
   - **Description**: The Market table provides information about where and at what price a specific coin is traded. It establishes a one-to-many relationship with the Coin table.
   - **Attributes**:
     - `Coin ID`: Foreign Key. Links to the ID in the Coin table.
     - `Exchange Name`: Name of the exchange where the cryptocurrency is traded.
     - `Base Currency`: The primary currency used in the trading pair (e.g., BTC in BTC/USD).
     - `Quote Currency`: The secondary currency used in the trading pair (e.g., USD in BTC/USD).
     - `Price (USD)`: Current trading price of the cryptocurrency in US dollars on this exchange.
     - `Volume (USD)`: Total trading volume of the cryptocurrency on this exchange in the last 24 hours.

3. **Exchange Table**:
   - **API Call**: [https://api.coinlore.net/api/exchanges/](https://api.coinlore.net/api/exchanges/)
   - **Description**: The Exchange table provides details about different cryptocurrency exchanges. It is not directly linked to the Coin table but indirectly connected through the Market table.
   - **Attributes**:
     - `ID`: Primary Key. Unique identifier for each exchange platform.
     - `Name`: Name of the exchange platform (e.g., Binance).
     - `Volume (USD)`: Total trading volume on the exchange in the last 24 hours.
     - `Active Pairs`: Number of active trading pairs on the exchange.
     - `URL`: Website URL of the exchange.
     - `Country`: Country where the exchange is based.

4. **Social Stats Table**:
   - **API Call**: [https://api.coinlore.net/api/coin/social_stats/?id=[coin_id]](https://api.coinlore.net/api/coin/social_stats/?id=[coin_id])
   - **Description**: The Social Stats table provides social media statistics for each coin. It establishes a one-to-one relationship with the Coin table.
   - **Attributes**:
     - `Coin ID`: Foreign Key. Links to the ID in the Coin table.
     - `Reddit Users`: Average number of active Reddit users discussing the cryptocurrency.
     - `Reddit Subscribers`: Total number of subscribers to the cryptocurrency's Reddit community.
     - `Twitter Followers`: Number of followers on the cryptocurrency's official Twitter account.
     - `Twitter Status`: Number of tweets or status updates from the cryptocurrency's official Twitter account.

### API Calls

To fetch data for the tables mentioned above, you can use the following API calls:

- For the Coin table, fetch data using: [https://api.coinlore.net/api/tickers/](https://api.coinlore.net/api/tickers/)
- For each coin's market data in the Market table, fetch data using: [https://api.coinlore.net/api/coin/markets/?id=[coin_id]](https://api.coinlore.net/api/coin/markets/?id=[coin_id])
- For the Exchange table details, fetch data using: [https://api.coinlore.net/api/exchanges/](https://api.coinlore.net/api/exchanges/)
- For each coin's social stats in the Social Stats table, fetch data using: [https://api.coinlore.net/api/coin/social_stats/?id=[coin_id]](https://api.coinlore.net/api/coin/social_stats/?id=[coin_id])

Please refer to the API documentation for further details on how to use these endpoints effectively.

---

This document provides an overview of the data model and relationships in the Crypto Pulse project. For more detailed information on the project's implementation and features, please refer to the project's source code and documentation.

For any questions or inquiries, please contact the project team.
