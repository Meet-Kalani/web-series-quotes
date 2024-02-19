// Selecting DOM elements
const savedQuotesContainerElement = document.querySelector('.saved-quotes-container');
const savedQuotesTitleElement = document.querySelector('.saved-quotes-title');
const quoteElement = document.querySelector('.quote-text');
const quoteSeriesElement = document.querySelector('.quote-series');
const quoteAuthorElement = document.querySelector('.quote-author');
const shareBtnElement = document.querySelector('.share-btn');

let savedQuotes = JSON.parse(localStorage.getItem('savedQuotes'));

document.addEventListener('DOMContentLoaded', () => {

    if (!savedQuotes) {
        sharedQuotesTitleElement.textContent = "No saved quotes yet. Save a quote and come back!";
        return;
    }

    displaySharedQuote();
})

function displaySharedQuote() {
    
    savedQuotes.forEach(savedQuote => {
    
        let savedQuoteElement = document.createElement('div');
        savedQuoteElement.classList.add('saved-quote');
        savedQuotesContainerElement.appendChild(savedQuoteElement);

    
        let quoteTextElement = document.createElement('p');
        quoteTextElement.classList.add('quote-text');
        savedQuoteElement.appendChild(quoteTextElement);

        let quoteAuthorElement = document.createElement('span');
        quoteAuthorElement.classList.add('quote-author');
        savedQuoteElement.appendChild(quoteAuthorElement);

        let quoteSeriesElement = document.createElement('span');
        quoteSeriesElement.classList.add('quote-series');
        savedQuoteElement.appendChild(quoteSeriesElement);

        let shareQuoteElement = document.createElement('a');
        shareQuoteElement.href = `shared-quote.html?id=${savedQuote.id}`;
        savedQuoteElement.appendChild(shareQuoteElement);

        shareQuoteElement.addEventListener('click', function(event) {
            // Prevent the default behavior of following the link
            event.preventDefault();
        
            // Get the URL from the href attribute of the element
            const url = this.getAttribute('href');
        
            // Redirect the user to the new URL
            window.location.href = url;
        });

    
        quoteTextElement.textContent = `"${savedQuote.quote}"`;
        quoteSeriesElement.textContent = `(${savedQuote.series})`;
        quoteAuthorElement.textContent = `- ${savedQuote.author}`;
        shareQuoteElement.textContent = `share`;
    });
}
