
const svgColor= [
    '#80868b',
    '#4285f4',
    '#34a853',
    '#f4b400',
    '#ea4335',
    '#4285f4'
    // '#9aa0a6',


 
    
    ]
    
    let count = 0;
    document.querySelectorAll('path').forEach(item =>{
        item.style.fill = svgColor[count]; 
        count++;    
    })
    
    let microPopup = document.createElement('div');
    microPopup.classList.add('popup'); 
    microPopup.innerText ='Search by voice';
    
    
    document.querySelector('svg:nth-child(2)').addEventListener('mouseover', ()=>{
        microPopup.style.opacity=1;
    
        document.querySelector('.search-bar').append(microPopup);
    })
    
    document.querySelector('svg:nth-child(2)').addEventListener('mouseout', ()=>{
        microPopup.style.opacity=0
    })
    
    