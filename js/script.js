const btn =  document.querySelector('.toggle-menu');
const list = document.querySelector('nav ul');

document.querySelectorAll('*').forEach(el => {
    if (el.offsetWidth > window.innerWidth) {
        console.log(el, el.offsetWidth);
    }
});
const listHandler = ()=>{
    list.classList.toggle('responsive-menu');
    btn.classList.toggle('responsive-menu');
}


btn.addEventListener("click", listHandler);




