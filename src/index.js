document.addEventListener("DOMContentLoaded",()=>{
    let form = document.querySelector("submit",(e)=>{
        e.preventDefault()
        addingQuote(e.target.new-quote.value)
        addingAuthor(e.target.author.value)
    })
    quotes()


})
const quoteUrl = "http://localhost:3000/quotes"

function quotes(){
    fetch(quoteUrl)
    .then(response => response.json())
    .then(quotes=>{

        const p = document.queryCommandValue(".mb-0");
        p.textContent = quotes[1].quote
        console.log(quotes)
        console.log(quotes.id)
        // for(let i = 0;i<quotes.length;i++){
            // console.log(quotes[1])

            // console.log(quotes[i].quote)
            // const p = document.getElementsByClassName("mb-0");
            // const auth = document.getElementsByClassName("blockquote-footer");
            // const like = document.getElementsByClassName('btn-success');
            // const del = document.getElementsByClassName("btn-danger");
            // const li = document.getElementsByClassName("quote-card");
            // p.textContent = quotes[i].quote
            // auth.textContent = `${quotes[i].author}`
            // const ul = document.getElementById("quote-list")
            del.addEventListener('click',()=>{
                fetch
                quote.
            })




        // }
        const likes = document.getElementsByClassName('btn-success')
        likes.addEventListener('click',()=>{
            fetch('http://localhost:3000/likes',{
                method: "POST",
                headers:{
                    "Content-Type":"application/json",
                Accept: "application/json",
                },
                body: JSON.stringify(theQuote)

            })
            .then(res=>res.json())
            .then(lik=>{
                const b = Number(likes.quoteId)
                b++
                likes.innerHTMl =`Likes<span>${b}</span>`
            })

        })

    })
}

const quotePostConfig = {
    method: "POST",
    headers:{
        "Content-Type":"application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(theQuote)
}

function addingQuote(theQuote){
    fetch('http://localhost:3000/quotes/', quotePostConfig)
    .then(response=> response.json())
    .then(quot=>console.log(quot))
}

const authorPostConfid ={
    method: "POST",
    headers:{
        "Content-Type":"application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(theAuthor)

}

function addingAuthor(theAuthor){
    fetch('http://localhost:3000/quotes/',authorPostConfid)
    .then(response=>response.json())
    .then(auth=>console.log(auth))
}
