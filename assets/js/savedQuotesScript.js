// Selecting DOM elements
const savedQuotesContainerElement = document.querySelector('.saved-quotes-container');
const savedQuotesTitleElement = document.querySelector('.saved-quotes-title');

// Fetching saved quotes from localstorage
let savedQuotes = JSON.parse(localStorage.getItem('savedQuotes'));

document.addEventListener('DOMContentLoaded', () => {
    
    if (!savedQuotes) {
        savedQuotesTitleElement.textContent = "No saved quotes yet. Save a quote and come back!";
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

        let wrapperDiv = document.createElement('div');
        savedQuoteElement.appendChild(wrapperDiv);

        let quoteAuthorElement = document.createElement('span');
        quoteAuthorElement.classList.add('quote-author');
        wrapperDiv.appendChild(quoteAuthorElement);

        let quoteSeriesElement = document.createElement('span');
        quoteSeriesElement.classList.add('quote-series');
        wrapperDiv.appendChild(quoteSeriesElement);

        let shareQuoteElement = document.createElement('a');
        shareQuoteElement.href = `shared-quote.html?id=${savedQuote.id}`;
        shareQuoteElement.classList.add('share-link')
        savedQuoteElement.appendChild(shareQuoteElement);

        quoteTextElement.textContent = `"${savedQuote.quote}"`;
        quoteSeriesElement.textContent = `(${savedQuote.series})`;
        quoteAuthorElement.textContent = `- ${savedQuote.author}`;
        shareQuoteElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="24px" height="24px"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.33333,5.33333)"><path d="M38.1,31.2l-18.7,-7.2l18.7,-7.2c1.5,-0.6 2.3,-2.3 1.7,-3.9c-0.6,-1.5 -2.3,-2.3 -3.9,-1.7l-26,10c-1.1,0.4 -1.9,1.6 -1.9,2.8c0,1.2 0.8,2.4 1.9,2.8l26,10c0.4,0.1 0.7,0.2 1.1,0.2c1.2,0 2.3,-0.7 2.8,-1.9c0.6,-1.6 -0.2,-3.3 -1.7,-3.9z" fill="#f3e9dc"></path><path d="M11,17c-3.86599,0 -7,3.13401 -7,7c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7zM37,7c-3.86599,0 -7,3.13401 -7,7c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7zM37,27c-3.86599,0 -7,3.13401 -7,7c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7z" fill="#937c5e"></path></g></g></svg>`;
    });
}
