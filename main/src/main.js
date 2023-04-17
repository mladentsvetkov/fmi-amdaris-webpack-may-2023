// Sets the user email in the navbar
document.querySelector('.user-email').textContent = `who_am_i: ${window.userEmail}`

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
function incrementCounterA() {
    moduleAClicks++
    moduleACounter.innerText = `Module A clicks: ${moduleAClicks}`
}
function incrementCounterB() {
    moduleBClicks++
    moduleBCounter.innerText = `Module B clicks: ${moduleBClicks}`
}

// Expose the incrementCounter functions to be used by moduleA/B later
window.incrementCounterA = incrementCounterA
window.incrementCounterB = incrementCounterB

// Function to load modules
function loadModuleA() {
    // This will be replaced by the actual Webpack Module Federation code later
    const scriptA = document.createElement('script')
    scriptA.src = 'src/moduleA/moduleA.js'
    scriptA.onload = () => {
        renderModuleA()
    }
    document.body.appendChild(scriptA)
}

function loadModuleB() {
    // This will be replaced by the actual Webpack Module Federation code later
    const scriptB = document.createElement('script')
    scriptB.src = 'src/moduleB/moduleB.js'
    scriptB.onload = () => {
        renderModuleB()
    }
    document.body.appendChild(scriptB)
}

// Load modules on page load
loadModuleA()
