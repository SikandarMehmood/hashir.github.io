const button = document.querySelector('button');
const popupwrapper=document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

button.addEventListener('click', ()=>{
    popupwrapper.style.display='block';
});

close.addEventListener('click', ()=>{
    popupwrapper.style.display='none';
});

// popupwrapper.addEventListener('click', ()=>{
//     popupwrapper.style.display='none';
// });