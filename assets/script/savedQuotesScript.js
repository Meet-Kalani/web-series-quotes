// Selecting DOM elements
const savedQuotesContainerElement = document.querySelector('.saved-quotes-container');
const savedQuotesTitleElement = document.querySelector('.saved-quotes-title');
const quoteElement = document.querySelector('.quote-text');
const quoteSeriesElement = document.querySelector('.quote-series');
const quoteAuthorElement = document.querySelector('.quote-author');

// Retrieving saved quotes from localStorage
let savedQuotes = JSON.parse(localStorage.getItem('savedQuotes'));

// Event listener for when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    // If there are no saved quotes, display a message
    if (!savedQuotes) {
        savedQuotesTitleElement.textContent = "No saved quotes yet. Save a quote and come back!";
        return;
    }
    // If there are saved quotes, fetch and display them
    fetchSavedQuote();
})

// Function to fetch and display saved quotes
function fetchSavedQuote() {
    // Iterating through each saved quote
    savedQuotes.forEach(savedQuote => {
        // Creating a container element for each saved quote
        let savedQuoteElement = document.createElement('div');
        savedQuoteElement.classList.add('saved-quote');
        savedQuotesContainerElement.appendChild(savedQuoteElement);

        // Creating elements to display the quote text, author, and series
        let quoteTextElement = document.createElement('p');
        quoteTextElement.classList.add('quote-text');
        savedQuoteElement.appendChild(quoteTextElement);

        let quoteAuthorElement = document.createElement('span');
        quoteAuthorElement.classList.add('quote-author');
        savedQuoteElement.appendChild(quoteAuthorElement);

        let quoteSeriesElement = document.createElement('span');
        quoteSeriesElement.classList.add('quote-series');
        savedQuoteElement.appendChild(quoteSeriesElement);

        // Setting the text content of the elements with the saved quote data
        quoteTextElement.textContent = `"${savedQuote.quote}"`;
        quoteSeriesElement.textContent = `(${savedQuote.series})`;
        quoteAuthorElement.textContent = `- ${savedQuote.author}`;
    });
}
