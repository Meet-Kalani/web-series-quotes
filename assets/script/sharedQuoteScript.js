// Selecting DOM elements
const sharedQuotesContainerElement = document.querySelector('.shared-quotes-container');
const sharedQuotesTitleElement = document.querySelector('.shared-quotes-title');

let savedQuotes = JSON.parse(localStorage.getItem('savedQuotes'));

document.addEventListener('DOMContentLoaded', () => {
    const id = getIDFromURL();
    if (id) {
        const sharedQuote = savedQuotes.find(quote => quote.id == id);

        if (!sharedQuote) {
            sharedQuotesTitleElement.textContent = "Sorry, the shared quote does not exist.";
            return;
        }

        displaySharedQuote(sharedQuote);
    } else {
        console.log('ID not found in URL');
    }
});

function displaySharedQuote(sharedQuote) {
    let sharedQuoteElement = document.createElement('div');
    sharedQuoteElement.classList.add('saved-quote');
    sharedQuotesContainerElement.appendChild(sharedQuoteElement);

    let quoteTextElement = document.createElement('p');
    quoteTextElement.classList.add('quote-text');
    sharedQuoteElement.appendChild(quoteTextElement);

    let quoteAuthorElement = document.createElement('span');
    quoteAuthorElement.classList.add('quote-author');
    sharedQuoteElement.appendChild(quoteAuthorElement);

    let quoteSeriesElement = document.createElement('span');
    quoteSeriesElement.classList.add('quote-series');
    sharedQuoteElement.appendChild(quoteSeriesElement);

    quoteTextElement.textContent = `"${sharedQuote.quote}"`;
    quoteSeriesElement.textContent = `(${sharedQuote.series})`;
    quoteAuthorElement.textContent = `- ${sharedQuote.author}`;
}

// Function to get the ID from the URL query string
function getIDFromURL() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('id');
}
