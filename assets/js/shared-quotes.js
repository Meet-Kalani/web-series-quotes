// DOM elements
const sharedQuotesContainerElement = document.querySelector(
  ".shared-quotes-container"
);
const sharedQuotesTitleElement = document.querySelector(".shared-quotes-title");

// Fetching saved quotes from localstorage
const savedQuotes = JSON.parse(localStorage.getItem("savedQuotes"));

document.addEventListener("DOMContentLoaded", () => {
  const id = getIDFromURL();
  const sharedQuote =
    savedQuotes && savedQuotes.find((quote) => quote.id == id);

  if (!sharedQuote) {
    sharedQuotesTitleElement.textContent =
      "Sorry, the shared quote does not exist.";
    return;
  }

  displaySavedQuote(sharedQuote);
});

function displaySavedQuote(sharedQuote) {
  let sharedQuoteElement = createHTMLElement(
    sharedQuotesContainerElement,
    "div",
    "saved-quote"
  );

  let quoteTextElement = createHTMLElement(
    sharedQuoteElement,
    "p",
    "quote-text"
  );

  let wrapperDiv = createHTMLElement(sharedQuoteElement, "div");

  let quoteAuthorElement = createHTMLElement(
    wrapperDiv,
    "span",
    "quote-author"
  );

  let quoteSeriesElement = createHTMLElement(
    wrapperDiv,
    "span",
    "quote-series"
  );

  quoteTextElement.textContent = `"${sharedQuote.quote}"`;
  quoteSeriesElement.textContent = `(${sharedQuote.series})`;
  quoteAuthorElement.textContent = `- ${sharedQuote.author}`;
}

// Function to get the ID from the URL
function getIDFromURL() {
  return new URLSearchParams(window.location.search).get("id");
}
