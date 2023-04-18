import '/index.css'

async function loadModuleA() {
    const { renderModuleA } = await import('moduleA/ModuleA')
    renderModuleA()
}

async function loadModuleB() {
    const { renderModuleB } = await import('moduleB/ModuleB')
    renderModuleB()
}

// main.js
export const who_am_i = 'FMI Student #1'

// Sets the user email in the navbar
document.querySelector('.user-email').textContent = `who_am_i: ${who_am_i}`

// Adds click event listener to module A link
document.getElementById('moduleA-link').addEventListener('click', (event) => {
    event.preventDefault() // Prevents default link behavior
    loadModuleA() // Renders Module A
    setActiveLink('moduleA-link') // Sets Module A link as active
})

// Adds click event listener to Module B link
document.getElementById('moduleB-link').addEventListener('click', (event) => {
    event.preventDefault() // Prevents default link behavior
    loadModuleB() // Renders Module B
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

// Functions to increment the counter
export function incrementCounterA() {
    moduleAClicks++
    moduleACounter.innerText = `Module A clicks: ${moduleAClicks}`
}
export function incrementCounterB() {
    moduleBClicks++
    moduleBCounter.innerText = `Module B clicks: ${moduleBClicks}`
}

// Load modules on page load
loadModuleA()
