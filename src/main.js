// Sets the user email in the navbar
document.querySelector('.user-email').textContent = `who_am_i: ${window.userEmail}`

// Adds click event listener to module A link
document.getElementById('moduleA-link').addEventListener('click', (event) => {
    event.preventDefault() // Prevents default link behavior
    renderModuleA() // Renders Module A
    setActiveLink('moduleA-link') // Sets Module A link as active
})

// Adds click event listener to Module B link
document.getElementById('moduleB-link').addEventListener('click', (event) => {
    event.preventDefault() // Prevents default link behavior
    renderModuleB() // Renders Module B
    setActiveLink('moduleB-link') // Sets Module B link as active
})

// Sets the active link
function setActiveLink(linkId) {
    const links = document.querySelectorAll('nav a')
    links.forEach((link) => {
        link.classList.remove('active')
    })

    document.getElementById(linkId).classList.add('active')
}

// Initializes counters for Module A and B
const moduleACounter = document.getElementById('moduleA-counter')
const moduleBCounter = document.getElementById('moduleB-counter')
let moduleAClicks = 0
let moduleBClicks = 0

// Adds event listener for Module A click event
window.addEventListener('moduleAClick', () => {
    moduleAClicks++
    moduleACounter.innerText = `Module A clicks: ${moduleAClicks}`
})

// Adds event listener for Module B click event
window.addEventListener('moduleBClick', () => {
    moduleBClicks++
    moduleBCounter.innerText = `Module B clicks: ${moduleBClicks}`
})

// Renders Module A on page load
renderModuleA()
