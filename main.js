const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

const sr = ScrollReveal ({
    origin: 'top',
    distance: '40px',
    duration: 3000,
    reset: true
});
 
sr.reveal(`body`, {
    interval: 200
})