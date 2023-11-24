
document.getElementById('clickable').addEventListener('click',(event) => {
    const img =document.getElementById('img')
    const toggle =document.getElementById('changable')
    if(toggle.classList.contains('PH')){
        img.src = "./images/icon-close.svg"
    }else{
        img.src = "./images/icon-hamburger.svg"
    }
    toggle.classList.toggle('PH')
})