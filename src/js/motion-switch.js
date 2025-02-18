document.getElementById('mySwitchMotion').addEventListener('click',()=>{
    if (document.documentElement.getAttribute('data-bs-motion') == 'motion') {
        document.documentElement.setAttribute('data-bs-motion','reduced-motion')
    }
    else {
        document.documentElement.setAttribute('data-bs-motion','motion')
    }
})