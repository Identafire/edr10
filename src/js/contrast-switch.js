document.getElementById('mySwitchContrast').addEventListener('click',()=>{
    if (document.documentElement.getAttribute('data-bs-theme') == 'contrast') {
        document.documentElement.setAttribute('data-bs-theme','light')
    }
    else {
        document.documentElement.setAttribute('data-bs-theme','contrast')
    }
})