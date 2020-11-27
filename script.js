
// FILL SVG WITH COLORS
const svgColor= [
    '#80868b',
    '#4285f4',
    '#34a853',
    '#f4b400',
    '#ea4335',
    '#4285f4',
    '#5f6368',
    '#34a853',
    '#ea4335',
    '#fbbc04',
    '#4285f4',
    '#5f6368',
    '#5f6368',
    '#5f6368',
    '#5f6368',
    '#5f6368',
]
    
let count = 0;
document.querySelectorAll('path').forEach(item => {
    item.style.fill = svgColor[count]; 
    count++;    
})


// ANIMATE POP-UPS
let microPopup = document.createElement('div');
microPopup.classList.add('popup'); 
microPopup.innerText ='Search by voice';

document.querySelector('svg:nth-child(2)').addEventListener('mouseover', ()=> {
    microPopup.style.opacity=1;
    document.querySelector('.search-bar').append(microPopup);
})

document.querySelector('svg:nth-child(2)').addEventListener('mouseout', ()=> {
    microPopup.style.opacity=0
})


// GIVE OR REMOVE ACTIVE CLASS
document.querySelectorAll('.search-choice > ul:first-of-type > li').forEach( item => {
    item.addEventListener('mouseover', (e)=> {
       item.classList.add('choice-active')
    })
})

document.querySelectorAll('.search-choice > ul:first-of-type > li').forEach( item => {
    item.addEventListener('mouseout', (e)=> {
       item.classList.remove('choice-active')
    })
})

