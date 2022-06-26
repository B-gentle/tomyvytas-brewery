let date = new Date().getFullYear();
let span = document.querySelector('#date');
span.innerText = date;

let dropdown = document.querySelector('.dropdown')
let navList = document.querySelector('.nav-list')
dropdown.addEventListener('click' , ()=>{
navList.classList.toggle('drop')
})