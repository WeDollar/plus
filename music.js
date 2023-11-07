

let Name = document.querySelector('#name') 
let Email = document.querySelector('#email') 
let AbutSEc = document.querySelector('.aboutBusiness')

function Regiter(){
alert(`Hello ${Name.value}, You will receive a code to ${Email.value} in 24hrs, After that you can login through your email with the`)
}


function QuitAbout() {
    AbutSEc.style.display = 'none';
}
function viewAbout(){
    AbutSEc.style.display = 'block';
}