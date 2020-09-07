const target = document.querySelectorAll('[data-animation]')
const animationClass = 'animate'

function animeScroll () {
    const windowTop = window.pageYOffset + ((window.innerHeight * 2) / 3)
    target.forEach(function (element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass)
        } else {
            element.classList.remove(animationClass)
        }
    })
}

window.addEventListener('scroll', function () {
    animeScroll()
})