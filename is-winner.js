async function isWinner(country) {
    try {
        // Retrieve the country data from the database
        country = await db.getWinner(country);

        if (country === Error('Country Not Found')) {
            return `${country.name} never was a winner`;
        }

        if (country.continent !== 'Europe') {
            return `${country.name} is not what we are looking for because of the continent`;
        }

        // Retrieve the results of the country by its ID
        let results = await db.getResults(country.id);

        // If no results are found, return a message indicating the country was never a winner
        if (results === Error('Results Not Found')) {
            return `${country.name} never was a winner`;
        }

        // If the country has less than 3 championship wins, return a specific message
        if (results.length < 3) {
            return `${country.name} is not what we are looking for because of the number of times it was champion`;
        }

        // Return a detailed message including the years and scores of the championships won
        return (
            `${country.name} won the FIFA World Cup in ` +
            results.map((result) => result.year).join(', ') +
            ' winning by ' +
            results.map((result) => result.score).join(', ')
        );

    } catch (e) {
        // If an error occurs with the message 'Country Not Found', return an error message
        if (e.message === 'Country Not Found') {
            return `${country} never was a winner`;
        }
    }
}
