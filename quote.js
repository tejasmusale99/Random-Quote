const quoteE1=document.getElementById("quote");
const getJokeBtn=document.getElementById("btn");
const getAuthor=document.getElementById("author");
const url="https://api.quotable.io/random"
 function clickHandler(){
    console.log(quoteE1.innerText)
    const result=fetch(url)
    .then(res=>res.json())
    .then(json=>console.log(quoteE1.innerText=json.content,
            getAuthor.innerText=json.author))
}
getJokeBtn.addEventListener("click",clickHandler);