// Query the main server and its backup, returning whichever responds first
async function queryServers(serverName, q) {
    // Construct URLs for the main and backup servers
    var url = '/' + serverName + '?q=' + q;
    var backupUrl = '/' + serverName + '_backup?q=' + q;

    // Send requests to both the main and backup servers
    const req1 = getJSON(url);
    const req2 = getJSON(backupUrl);

    // Return the result of the fastest response (main or backup)
    const output = await Promise.race([req1, req2]);
    return output;
}

// Perform a "Gougle" search by querying web, image, and video servers
async function gougleSearch(q) {
    // Set a timeout of 80ms to prevent waiting too long
    var timeout = new Promise((resolve) =>
        setTimeout(resolve, 80, Error('timeout'))
    );

    // Query web, image, and video servers concurrently
    var web = queryServers('web', q),
        image = queryServers('image', q),
        video = queryServers('video', q);

    // Return the results if all queries complete before the timeout
    const output = await Promise.race([timeout, Promise.all([web, image, video])]);

    // If timeout occurs, throw an error
    if (output instanceof Error) {
        throw output;
    }

    // Return the search results organized as { web, image, video }
    return { image: output[1], video: output[2], web: output[0] };
}
