
// let menu = document.querySelector('#icon');
// let nav = document.querySelector('.nav');

// menu.onclick = () => {
//   menu.classList.toggle('fa-x');
//   nav.classList.toggle('open');
// }

let navbar = document.querySelector('.nav');

document.querySelector('#icon').onclick = () =>{
    navbar.classList.toggle('active');   
}