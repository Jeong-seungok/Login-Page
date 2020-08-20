// SELECTORS
const header = document.querySelector('header');
const hamburgerButton = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.nav-list');
const navItems = navList.querySelectorAll('.nav-item');
const contactWrap = document.querySelector('.contact-wrap');
const backButton = document.querySelector('.back-btn');
const signin = document.querySelector('.signin');
const inputList = document.querySelectorAll('.input-list');
const listWrap = document.querySelectorAll('.list-wrap');
const pList = document.querySelectorAll('.p-list');
const lastWrap = document.querySelector('.last-wrap');
let loginCheck = true;

// EVENTS
hamburgerButton.addEventListener('click', showNavList);
backButton.addEventListener('click', back);
signin.addEventListener('click',signIn);

// BURGER-BUTTON
function showNavList(){
    hamburgerButton.classList.toggle('open');
    navList.classList.toggle('open');
    setTimeout(function(){navItems.forEach(item=>{
        item.classList.toggle('open');
    })},500);
}
navItems.forEach(item=>{
    item.addEventListener('click',function(){
        if(item.classList.contains('contact')){
            contactWrap.style.display = 'block';
        }
    })
})
// BACK-BUTTON
function back(){
    contactWrap.style.display = 'none';
}
// SIGNIN
function emailTest(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function signIn(){
    inputList.forEach(input=>{
        let pTag = input.previousElementSibling.childNodes[3];
        const divTag = input.parentElement;
        if(input.value === ''){
            const text = '(*No Blank)';
            divTag.style.color = 'red';
            input.style.borderBottom = '2px solid red';
            pTag.textContent = `${pTag.classList[0]} ${text}`;
            return;
        }
        else if(input.classList.contains('email')){
            if(!emailTest(input.value)){
                input.style.borderBottom = '2px solid red';
                divTag.style.color = 'red';
                pTag.textContent = `${pTag.classList[0]} (*None Proper Type)`;
            }
            else{
                input.style.borderBottom = '2px solid green';
                divTag.style.color = 'green';
            }
            return;
        }
        else{
            input.style.borderBottom = '2px solid green';
            divTag.style.color = 'green';
            pTag.textContent = `${pTag.classList[0]}`;
            return;
        }
    })
    const password = document.querySelector('.password.input-list');
    const passwordcheck = document.querySelector('.check.input-list');
    const pwpTag = password.previousElementSibling.childNodes[3];
    const pwcheckpTag = passwordcheck.previousElementSibling.childNodes[3];
    if(!(password.value === passwordcheck.value)){
        password.style.borderBottom = '2px solid red';
        passwordcheck.style.borderBottom = '2px solid red';
        password.parentElement.style.color = 'red';
        passwordcheck.parentElement.style.color = 'red';
        pwpTag.textContent = `${pwpTag.classList[0]} (*Different Password)`;
        pwcheckpTag.textContent = `${pwcheckpTag.classList[0]} (*Different Password)`;
        return;
    }
}
