document.addEventListener("DOMContentLoaded", () => {
    quoteGenerator();
    const genButton = document.getElementById('qGenerator');
    genButton.addEventListener('click', quoteGenerator);
    const saveButton = document.getElementById('qSaver');
    saveButton.addEventListener('click', quoteSaver)
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

function quoteSaver(){
    let quoteValue = document.getElementById('quote').textContent;
    let quoteAuthor = document.getElementById('qAuthor').textContent;
    fetch('http://localhost:3000/Quotes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json", 
            "Accept": "application/json",
        },
        body: JSON.stringify({
            Quote: quoteValue,
            Author: quoteAuthor 
        })
    })
    .then(resp => {
        resp.json();
        alert("Quote Successfuly Saved to Local Database. Click ok to generate a new Quote")
    })
    .catch(err => {
        alert(`${err}! Check  Local Database Server Connection and Try Again`)
    })

}