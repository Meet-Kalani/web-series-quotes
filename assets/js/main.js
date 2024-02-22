// DOM elements
const quoteBtnElement = document.querySelector('.quote-btn');
const saveBtnElement = document.querySelector('.save-btn');
const quoteElement = document.querySelector('.quote-text');
const quoteSeriesElement = document.querySelector('.quote-series');
const quoteAuthorElement = document.querySelector('.quote-author');

let currentQuote = {};

// fetching data when page is loaded
document.addEventListener('DOMContentLoaded',fetchQuote)

// fetching new data when quote btn is clicked
quoteBtnElement.addEventListener('click',fetchQuote);

saveBtnElement.addEventListener('click', () => {
    let savedQuotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];

    // Checking is the quote is already saved, if then dont save it again
    const isAlreadySavedId = savedQuotes.length && savedQuotes[savedQuotes.length - 1].id;

    if(currentQuote.id === isAlreadySavedId){
        return;
    }

    savedQuotes.push(currentQuote);

    localStorage.setItem('savedQuotes', JSON.stringify(savedQuotes));
});

function fetchQuote() {
    fetch('https://api.seriesquotes.10cyrilc.me/quote/')
        .then(res => res.json())
        .then(data => {
            // Displaying data
            const {id, quote, series, author } = data[0];
            quoteElement.textContent = `"${quote}"`;
            quoteSeriesElement.textContent = `(${series})`;
            quoteAuthorElement.textContent = `- ${author}`;
            currentQuote = { id, quote, series, author };
        })
        .catch(() => {
            alert('Oops! Something went wrong. Please try again later.');
        });
}
