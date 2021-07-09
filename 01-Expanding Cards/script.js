const panels = document.querySelectorAll('.panel');

panels.forEach(panels => {
    panels.addEventListener('click', () => {
        removeActiveClasses()
        panels.classList.add('active')
    })
});


function removeActiveClasses() {
    panels.forEach(panels => {
        panels.classList.remove('active')
    })
}