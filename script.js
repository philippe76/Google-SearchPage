
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
    '#1a0dab',
    '#1a0dab',
    '#70757a',
    '#1a0dab'
]
    
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


// ADD NAV BOX-SHADOW WHEN SCROLLING
let nav = document.querySelector('nav');

window.addEventListener("scroll", () => {
    nav.classList.add('scroll-shadow');
    if (window.scrollY === 0 ) {
        nav.classList.remove('scroll-shadow');
    }
})


// FILL RESULT AREAS HTML
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
    {
        sub: 'www.websitebuilderexpert.com › building-websites',
        href: 'https://www.websitebuilderexpert.com/building-websites/',
        title: 'How to Build a Website 2020 | The Complete Beginner\'s Guide',
        para: '4 days ago — How to <strong>Build</strong> a <strong>Website</strong> from Scratch. We\'ll look at how to make a <strong>website</strong> with both a <strong>website</strong> builder and WordPress, with no steps left out.'
    },
    {
        sub: 'websitesetup.org',
        href: 'https://websitesetup.org/',
        title: 'How to Create a Website: Step-by-Step Guide for Beginners ...',
        para: 'Learn how to make a <strong>website</strong> and set it up. This site contains different tutorials on how to <strong>build</strong> a <strong>website</strong> using WordPress, Joomla, Drupal & HTML.'
    },
    {
        sub: 'www.google.com › business › website-builder',
        href: 'https://www.google.com/intl/en/business/website-builder/',
        title: 'Free Website Builder For Your Business - Google My Business',
        para: 'Let Google <strong>build</strong> your first <strong>website</strong> for free. We\'ll help you create a beautiful <strong>website</strong> to impress and engage new customers – and establish your business online.'
    },
    {
        sub: 'www.webnode.com',
        href: 'https://www.webnode.co.uk/',
        title: 'Webnode: Create a free website easily | Free website builder',
        para: 'Easily <strong>build</strong> your <strong>website</strong> with Webnode online editor. Domain names and hosting are included. Fast and local support will take care of you..'
    },
    {
        sub: 'www.webhostingsecretrevealed.net › WHSR Blog',
        href: 'https://www.webhostingsecretrevealed.net/blog/web-hosting-guides/make-a-website/',
        title: 'How to Create a Website: Step-by-Step Tutorial',
        para: '<strong>Creating</strong> from scratch; Using a content management system (CMS); Using a <strong>website</strong> builder. You get more flexibility in ...'
    },
    {
        sub: 'www.squarespace.com',
        href: 'https://www.squarespace.com/',
        title: 'Squarespace: Build a Website – Website Builder',
        para: 'Squarespace is the all-in-one solution for anyone looking to create a beautiful <strong>website</strong>. Domains, eCommerce, hosting, galleries, analytics, and 24/7 support all ....'
    },
    {
        sub: '<strong>Ad·</strong> www.wix.com/build-website-for-free',
        href: 'https://www.wix.com/html5en/hiker-build?gclid=Cj0KCQiAh4j-BRCsARIsAGeV12C2byf88U10YGyvAIeCYzPxs65QC2pDIqQVz-d8jF6O2ux7rQ77jBoaAlRwEALw_wcB&utm_medium=cpc&experiment_id=build+webpages%5Ee%5E48579939340%5E',
        title: 'Build a Webpage for Free',
        para: 'Make Professional <strong>Webpages</strong> for Free Fast & Easy Free <strong>Website</strong> Builder! Market leaders. Multiple payment methods. Social media compatible. SEO wizard. 100s of Apps. Mobile optimized. Free multilingual fonts. Easy drag n’ drop. Easy-to-add blog. 100s of templates. ‎Online Store Builder · ‎Free Website Builder · ‎Free Hosting · ‎Customize Easily'
    },
]

for (let i=0; i<result_content.length; i++) {
    result_subtitle[i].innerHTML = `${result_content[i].sub} <i class="fas fa-caret-down"></i>`;
    result_link[i].setAttribute('href', result_content[i].href);
    result_title[i].innerHTML += result_content[i].title;
    result_para[i].innerHTML = result_content[i].para;
}



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