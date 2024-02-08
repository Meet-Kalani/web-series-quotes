let animeBtn = document.querySelector('.quote-btn');
let quote = document.querySelector('.quote');
let quoteSeries = document.querySelector('.quote-series');
let quoteAuthor = document.querySelector('.quote-author');

// using fetch API
animeBtn.addEventListener('click',()=>{
    fetch('https://api.seriesquotes.10cyrilc.me/quote/')
    .then(res => res.json())
    .then(data => {
        quote.textContent = '"' + data[0].quote + '"';
        quoteSeries.textContent = '(' + data[0].series + ')';
        quoteAuthor.textContent = '- ' + data[0].author;
    })
    .catch(err => {
        console.log(err);
        alert('Oops! Something went wrong. Please try again later.');
    })
})

// using XMLHttpRequest
// animeBtn.addEventListener('click', () => {
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', 'https://api.seriesquotes.10cyrilc.me/quote/')

//     xhr.responseType = 'json';


//     xhr.onload = () => {
//         // console.log(xhr.status)
//         if (xhr.status > 300) {
//             throw Error('Oops! Something unexpected happened. Please try again later or contact support for assistance.')
//         }
//         quote.textContent = '"' + xhr.response[0].quote + '"';
//         quoteSeries.textContent = '(' + xhr.response[0].series + ')';
//         quoteAuthor.textContent = '- ' + xhr.response[0].author;
//     }

//     xhr.onerror = (err) => {
//         console.error(err)
//         alert('Error occured! Please try again later.')
//     }

//     xhr.send()

// })