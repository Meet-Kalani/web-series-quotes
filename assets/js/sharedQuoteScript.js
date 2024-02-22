// DOM elements
const sharedQuotesContainerElement = document.querySelector('.shared-quotes-container');
const sharedQuotesTitleElement = document.querySelector('.shared-quotes-title');

// Fetching saved quotes from localstorage
const savedQuotes = JSON.parse(localStorage.getItem('savedQuotes'));

document.addEventListener('DOMContentLoaded', () => {
    const id = getIDFromURL();
    const sharedQuote = savedQuotes && savedQuotes.find(quote => quote.id == id);

    if (!sharedQuote) {
        sharedQuotesTitleElement.textContent = "Sorry, the shared quote does not exist.";
        return;
    }

    displaySharedQuote(sharedQuote);
});


function displaySharedQuote(sharedQuote) {
    let sharedQuoteElement = document.createElement('div');
    sharedQuoteElement.classList.add('saved-quote');
    sharedQuotesContainerElement.appendChild(sharedQuoteElement);

    let quoteTextElement = document.createElement('p');
    quoteTextElement.classList.add('quote-text');
    sharedQuoteElement.appendChild(quoteTextElement);

    let wrapperDiv = document.createElement('div');
    sharedQuoteElement.appendChild(wrapperDiv);

    let quoteAuthorElement = document.createElement('span');
    quoteAuthorElement.classList.add('quote-author');
    wrapperDiv.appendChild(quoteAuthorElement);

    let quoteSeriesElement = document.createElement('span');
    quoteSeriesElement.classList.add('quote-series');
    wrapperDiv.appendChild(quoteSeriesElement);

    quoteTextElement.textContent = `"${sharedQuote.quote}"`;
    quoteSeriesElement.textContent = `(${sharedQuote.series})`;
    quoteAuthorElement.textContent = `- ${sharedQuote.author}`;
}

// Function to get the ID from the URL
function getIDFromURL() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('id');
}
