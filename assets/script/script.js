const quoteBtnElement = document.querySelector('.quote-btn');
const saveBtnElement = document.querySelector('.save-btn');
// const shareBtnElement = document.querySelector('.share-btn');
const quoteElement = document.querySelector('.quote-text');
const quoteSeriesElement = document.querySelector('.quote-series');
const quoteAuthorElement = document.querySelector('.quote-author');
let currentQuote = {};

document.addEventListener('DOMContentLoaded',()=>{
    fetchQuote();
})

quoteBtnElement.addEventListener('click', () => {
    fetchQuote()
});

saveBtnElement.addEventListener('click', () => {
    let savedQuotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];

    savedQuotes.push(currentQuote);

    localStorage.setItem('savedQuotes', JSON.stringify(savedQuotes));
});

function fetchQuote() {
    fetch('https://api.seriesquotes.10cyrilc.me/quote/')
        .then(res => res.json())
        .then(data => {
            console.log(data[0]);
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
