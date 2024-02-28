// DOM elements
const quoteBtnElement = document.querySelector(".quote-btn");
const saveBtnElement = document.querySelector(".save-btn");
const quoteElement = document.querySelector(".quote-text");
const quoteSeriesElement = document.querySelector(".quote-series");
const quoteAuthorElement = document.querySelector(".quote-author");
const errorMessageContainer = document.querySelector(
  ".error-message-container"
);
const closeBtn = document.querySelector(".close-btn");

let currentQuote = {};

// fetching data when page is loaded
document.addEventListener("DOMContentLoaded", fetchQuote);

// fetching new data when quote btn is clicked
quoteBtnElement.addEventListener("click", fetchQuote);

// saving quote
saveBtnElement.addEventListener("click", saveQuote);

// close error-message box
closeBtn.addEventListener("click", () => {
  errorMessageContainer.classList.add("d-none");
});

function fetchQuote() {
  fetch("https://api.seriesquotes.10cyrilc.me/quote/")
    .then((res) => res.json())
    .then((data) => {
      if (!data) {
        showError(
          "Unable to fetch data from the server at this time. Please try again after sometime.  "
        );
        return;
      }

      // Displaying data
      const { id, quote, series, author } = data[0];
      quoteElement.textContent = `"${quote}"`;
      quoteSeriesElement.textContent = `(${series})`;
      quoteAuthorElement.textContent = `- ${author}`;
      currentQuote = { id, quote, series, author };
    })
    .catch((err) => {
      showError(err.message);
    });
}

function saveQuote() {
  let savedQuotes = JSON.parse(localStorage.getItem("savedQuotes")) || [];

  // Checking is the quote is already saved, if then dont save it again
  const isAlreadySavedId =
    savedQuotes.length && savedQuotes[savedQuotes.length - 1].id;

  if (currentQuote.id === isAlreadySavedId) {
    showError("The Quote is already saved!");
    return;
  }

  savedQuotes.push(currentQuote);

  localStorage.setItem("savedQuotes", JSON.stringify(savedQuotes));
}

// removing event listener when page is not visible
window.addEventListener("beforeunload", () => {
  quoteBtnElement.removeEventListener("click", fetchQuote);
  saveBtnElement.removeEventListener("click", saveQuote);
});
