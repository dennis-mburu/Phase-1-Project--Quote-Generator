document.addEventListener("DOMContentLoaded", () => {
    quoteGenerator()

})


function quoteGenerator(){
    fetch('https://type.fit/api/quotes')
    .then(res => res.json())
    .then(quotesArray => {

        let randomInt = Math.floor((Math.random() * 1643) +1);
        const quote = document.getElementById('quote');
        const author = document.querySelector('#qAuthor');
        quote.textContent = quotesArray[randomInt].text;
        author.textContent = quotesArray[randomInt].author

    })
}
