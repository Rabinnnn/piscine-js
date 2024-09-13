async function getJSON(path = '', params = {}) {
    // Construct the URL with query parameters
    const url =
        path +
        '?' +
        Object.keys(params)
            .map((key) => {
                return (
                    key.replace(' ', '+') + '=' + params[key].toString().replace(' ', '+')  // Replace spaces in the value with '+'
                );
            })
            .join('&');  // Join all key-value pairs with '&' to form the query string

    // Fetch the response from the generated URL and handle the response
    const res = await fetch(url).then((response) => {
        if (response.ok) {
            return response.json();  // If the response is successful, return the parsed JSON
        } else {
            throw new Error(response.statusText); 
        }
    });

    // Check for an error property in the JSON response and throw an error if present
    if (res.error) {
        throw new Error(res.error);
    }

    // Return the 'data' property from the JSON response
    return res.data;
}
