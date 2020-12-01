
// IMPORT DATA FROM MODULES
import { svgColor } from './datas/svg-color.js'
import { result_content } from './datas/result-content.js';
import { people_ask } from './datas/people-ask.js'


// ADD NAV BOX-SHADOW WHEN SCROLLING
let nav = document.querySelector('nav');

window.addEventListener("scroll", () => {
    nav.classList.add('scroll-shadow');
    if (window.scrollY === 0 ) {
        nav.classList.remove('scroll-shadow');
    }
})


// FILL SVG WITH COLORS
let count = 0;
document.querySelectorAll('path').forEach(item => {
    item.style.fill = svgColor[count]; 
    count++;    
})


// CROSS POP-UP
let crossPopup = document.createElement('div');
crossPopup.classList.add('popup');
crossPopup.innerText = 'Clear'

document.querySelector('#nav-cross').addEventListener('mouseover', ()=> {
    crossPopup.style.opacity=1;
    crossPopup.style.left = "51%";
    crossPopup.style.width = "2.5rem";

    document.querySelector('.search-bar').append(crossPopup);
})

document.querySelector('#nav-cross').addEventListener('mouseout', ()=> {
    crossPopup.style.opacity=0
})


// MICRO POP-UP
let microPopup = document.createElement('div');
microPopup.classList.add('popup'); 
microPopup.innerText = 'Search by voice';

document.querySelector('svg:nth-child(2)').addEventListener('mouseover', ()=> {
    microPopup.style.opacity=1;
    document.querySelector('.search-bar').append(microPopup);
})

document.querySelector('svg:nth-child(2)').addEventListener('mouseout', ()=> {
    microPopup.style.opacity=0
})


// APPS POP-UP
let appPopup = document.createElement('div');
appPopup.classList.add('popup');
appPopup.innerText = 'Google apps'

document.querySelector('.navbar-right svg').addEventListener('mouseover', ()=> {
        appPopup.style.opacity=1;
        appPopup.style.left= '93%';
        appPopup.style.background = '#5f6368';
        appPopup.style.borderRadius = '8px'
        document.querySelector('.search-bar').append(appPopup);
})

document.querySelector('.navbar-right svg').addEventListener('mouseout', ()=> {
    appPopup.style.opacity=0
})


// ACCOUNT POP-UP
let accountPopup = document.createElement('div');
accountPopup.classList.add('popup');
accountPopup.innerText = 'Google Account'

document.querySelector('#odin-logo').addEventListener('mouseover', ()=> {
    accountPopup.style.opacity=1;
    accountPopup.style.left= '95%';
    accountPopup.style.background = '#5f6368';
    accountPopup.style.borderRadius = '8px'
        document.querySelector('.search-bar').append(accountPopup);
})

document.querySelector('#odin-logo').addEventListener('mouseout', ()=> {
    accountPopup.style.opacity=0
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


// FILL HTML RESULT AREAS 
let result_subtitle = [...document.querySelectorAll('.result h5')];
let result_link = [...document.querySelectorAll('.result a')];
let result_title = [...document.querySelectorAll('.result h3')];
let result_para = [...document.querySelectorAll('.result p')];

for (let i=0; i<result_content.length; i++) {
    result_subtitle[i].innerHTML = `${result_content[i].sub} <i class="fas fa-caret-down"></i>`;
    result_link[i].setAttribute('href', result_content[i].href);
    result_title[i].innerHTML += result_content[i].title;
    result_para[i].innerHTML = result_content[i].para;
}


// FILL HTML PEOPLE ASK DROPDOWN
let data_title = [...document.querySelectorAll('.ask-data h2')];
let data_list = [...document.querySelectorAll('.ask-data ol')];
let data_date = [...document.querySelectorAll('.ask-data time')];
let data_para = [...document.querySelectorAll('.ask-data p')]
let data_sub = [...document.querySelectorAll('.ask-data h5')];
let data_link = [...document.querySelectorAll('.ask-data a')];
let data_search = [...document.querySelectorAll('.ask-data h3')];

for (let i=0; i<people_ask.length; i++) {
    data_title[i].innerHTML = people_ask[i].title;
    people_ask[i].list.forEach(item=> {
        data_list[i].innerHTML += `<li>${item}</li>`
    });
    data_date[i].innerHTML = people_ask[i].date;
    data_para[i].innerHTML = people_ask[i].para;
    data_sub[i].innerHTML = people_ask[i].sub; 
    data_link[i].setAttribute('href', people_ask[i].href);
    data_link[i].innerHTML = `<h4>${people_ask[i].link}</h4>`;
    data_search[i].innerHTML = `Search for: <span>${people_ask[i].search}</span>`;
}


// FUNCTION PEOPLE ASK DROPDOWN 
let askDiv = [...document.querySelectorAll('.ask-title')];
let dataDiv = [...document.querySelectorAll('.ask-data')];

for (let i=0; i<askDiv.length; i++){
    askDiv[i].addEventListener('click', () => {
        if (dataDiv[i].style.display != 'block'){
            dataDiv[i].style.display = 'block'
            document.querySelectorAll('.ask-drop svg')[i].style.transform= 'scale3d(1, -1, 1)'
        }
        else {
            dataDiv[i].style.display = 'none'
            document.querySelectorAll('.ask-drop svg')[i].style.transform= 'scale3d(1, 1, 1)'
        }        
    })
}


// SLIDER BUTTONS
document.querySelectorAll('.slider-svg').forEach(item => {
    item.addEventListener('mouseover', ()=> {
        document.querySelectorAll('.slider-svg > path')[0].style.fill = "black";
        document.querySelectorAll('.slider-svg > path')[1].style.fill = "black";
    })
    item.addEventListener('mouseout', ()=> {
        document.querySelectorAll('.slider-svg > path')[0].style.fill = "#70757a";
        document.querySelectorAll('.slider-svg > path')[1].style.fill = "#70757a";
    })  
})


// SLIDER FUNCTIONS
let images = [1,2,3,4,5,6,7]

const addImg = () => {
    images.forEach(item => {
        let slideImg = document.createElement('img');
        slideImg.setAttribute('src', `img/build${item}.jpg`);
        document.querySelector('.slider').appendChild(slideImg);
    })
}

const slideArrLeft = () => {
    let first = images[0];
    images.splice(0,1);
    images.push(first);
}

const slideArrRight = () => {
    let last = images[images.length-1];
    images.splice(images.length-1,1);
    images.unshift(last);
}

addImg()



document.querySelector('#slideRight').addEventListener('click', ()=> {
        document.querySelector('.slider').innerHTML = '';
        slideArrRight();
        addImg(); 
})

document.querySelector('#slideLeft').addEventListener('click', ()=> {
        document.querySelector('.slider').innerHTML = '';
        slideArrLeft();
        addImg(); 
})


// PEOPLE SEARCH DROPDOWN
document.querySelector('.search-drop').addEventListener('click', () => {
    if (document.querySelector('.search-card').style.display !== 'none'){
        document.querySelector('.search-card').style.display = 'none';
        document.querySelector('.search-drop > img').style.display = 'inline-block';
        document.querySelector('.search-drop p').style.marginRight = 'auto';
        document.querySelector('.search-drop svg').style.transform= 'scale3d(1, -1, 1)'
    }
    else {
        document.querySelector('.search-card').style.display = 'flex';
        document.querySelector('.search-drop > img').style.display = 'none';
        document.querySelector('.search-drop svg').style.transform= 'scale3d(1, 1, 1)'
    }
    
})


// FILL GOOOOOGLE SPANS
for (let i=1; i<=10; i++){
    let span = document.createElement('span');
    span.style.padding = '0 0.4rem';
    span.style.cursor = "pointer"
    document.querySelector('.google-numb').appendChild(span).innerHTML = i;
}

let next = document.createElement('span');
next.innerHTML = 'Next';
next.style.marginLeft = '2rem';
next.style.cursor = "pointer";
document.querySelector('.google-numb').appendChild(next);