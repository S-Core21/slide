let page1 = document.getElementById('one');
let page2 = document.getElementById('two');
let next = document.getElementById('next');
let prev = document.getElementById('prev');


next.addEventListener('click', () => {
    page1.style.display = 'none' ;
    page2.style.display = 'flex' ;
})
prev.addEventListener('click', () => {
    page1.style.display = 'flex' ;
    page2.style.display = 'none' ; ;
})