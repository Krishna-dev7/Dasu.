// let myBody = document.querySelector('body');
// myBody.addEventListener("scroll", (e)=> {
//     console.log(e);
// })

// form validation using jquery
// $('form').submt((e)=> {
//     console.log("Submited")
// })

let form = document.querySelector('form');
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    console.log("hello");
})