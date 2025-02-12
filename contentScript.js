const regex = new RegExp(/\bYoutube\b/); // Exact match for "Youtube"

// Search the whole page's visible text
if (regex.test(document.body.innerText)) {
    alert('Warning: This site contains "Youtube". Go back for your safety.');
}
