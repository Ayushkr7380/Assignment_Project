function isValidLinkedInURL(url) {
    // Regular expression for matching valid LinkedIn profile URLs
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[\w-]{5,30}[a-zA-Z\d]$/;
    if (regex.test(url)) {
        console.log(`${url} is a valid LinkedIn profile URL.`);
    } else {
        console.log(`${url} is not a valid LinkedIn profile URL.`);
    }
}


isValidLinkedInURL("https://www.linkedin.com/in/ayushkumar123");     // Valid URL
isValidLinkedInURL("https://www.linkedin.com/in/abhi_raj-456");  // Valid URL
isValidLinkedInURL("https://www.linkedin.com/in/atul");           // Invalid URL (profile ID too short)
isValidLinkedInURL("https://www.linkedin.com/in/abhi-raj-singh-123456789012345678901234567890"); // Invalid URL (profile ID too long)
isValidLinkedInURL("https://www.linkedin.com/profile/view?id=12345"); // Invalid URL (does not match expected format)
isValidLinkedInURL("http://www.linkedin.com/in/abhijeet123");      // Invalid URL (protocol should be https)
isValidLinkedInURL("https://www.linkedin.com/in/");               // Invalid URL (missing profile ID)
isValidLinkedInURL("https://www.linkedin.com/in/abhi.raj");       // Invalid URL (dot not allowed in profile ID)
isValidLinkedInURL("https://www.linkedin.com/in/abhi#raj");       // Invalid URL (invalid character '#')
