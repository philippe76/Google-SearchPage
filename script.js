
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


// ADD OR REMOVE LINK ACTIVE CLASS
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


// ADD NAV BOX-SHADOW WHEN SCROLLING
let nav = document.querySelector('nav');

window.addEventListener("scroll", () => {
    nav.classList.add('scroll-shadow');
    if (window.scrollY === 0 ) {
        nav.classList.remove('scroll-shadow');
    }
})


// FILL RESULT AREAS
let result_subtitle = [...document.querySelectorAll('.result h5')];
let result_link = [...document.querySelectorAll('.result a')];
let result_title = [...document.querySelectorAll('.result h3')];
let result_para = [...document.querySelectorAll('.result p')];

let result_content = [
    {
        sub: '<strong>Ad·</strong> www.wix.com/build-website-for-free',
        href: 'https://www.wix.com/',
        title: 'Build a Webpage for Free - wix.com',
        para: 'Make Professional <strong>Webpages</strong> for Free Fast & Easy Free <strong>Website</strong> Builder! Customizable online store. Custom domain name. Free multilingual fonts. 100s of templates. Customizable templates. Market leaders. 100s of Apps. 1000s of free images. Social media compatible.'
    },    
    {
        sub: 'anutka777.github.io › google-search-results',
        href: 'https://anutka777.github.io/google-searchresult-page/',
        title: 'build this webpage - GitHub Pages',
        para: '<strong>build this webpage</strong>. https://anutka777.github.io/google-results/. With zero coding experience, artist building 180 webpages in 180 days ...'
    },
    {
        sub: 'mohammedsobhi.github.io/google_replica_2',
        href: 'https://mohammedsobhi.github.io/google-search_page/',
        title: 'build this webpage - GitHub Pages',
        para: 'With zero coding experience, artist <strong>building</strong> 180 webpages . ... days ago, having never done any programming in her life, Jennifer Dewalt built her first <strong>webpage</strong>.'
    },
]

for (let i=0; i<3; i++) {
    result_subtitle[i].innerHTML = `${result_content[i].sub} <i class="fas fa-caret-down"></i>`;
}

for (let i=0; i<3; i++) {
    result_link[i].setAttribute('href', result_content[i].href)
}

for (let i=0; i<3; i++) {
    result_title[i].innerHTML += result_content[i].title
}

for (let i=0; i<3; i++) {
    result_para[i].innerHTML = result_content[i].para
}

