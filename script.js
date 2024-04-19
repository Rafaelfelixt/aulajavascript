let = matricula = document.getElementById('matricula')

function opemMenu () {
    backdrop.style.display = 'block'
    menu.style.display = 'block'
}

function closeMenu () {
    menu.style.display = 'flex'
    backdrop.style.display = 'flex'
}

matricula.addEventListener('click', opemMenu,)
closeMenuBtn.addEventListener('click', closeMenu)
