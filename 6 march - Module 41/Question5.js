function isValidURL(input) {
    // Regular expression for matching valid URLs
    const regex = /^(http:\/\/|https:\/\/)[\w\d\-.]+[a-zA-Z]+$/;
    if (regex.test(input)) {
        console.log(`${input} is a valid URL.`);
    } else {
        console.log(`${input} is not a valid URL.`);
    }
}

isValidURL("http://www.example.com");      // Valid URL
isValidURL("https://subdomain.example.com");// Valid URL
isValidURL("https://123.example.com");      // Valid URL
isValidURL("ftp://example.com");           // Invalid URL (not starting with http:// or https://)
isValidURL("https://example.");            // Invalid URL (no characters after dot)