import './index.css'

// import micro front ends
async function loadModuleA() {
    const { renderModuleA } = await import('moduleA/ModuleA')
    renderModuleA()
}
async function loadModuleB() {
    const { renderModuleB } = await import('moduleB/ModuleB')
    renderModuleB()
}

// on start, by default load micro front end A
loadModuleA()

// Initializes counters for Module A and B
const moduleACounter = document.getElementById('moduleA-counter')
const moduleBCounter = document.getElementById('moduleB-counter')
let moduleAClicks = 0
let moduleBClicks = 0
// set the variable that will be shared from main app to micro front ends
const who_am_i = 'FMI Student #1'

// Sets the user name in the navbar
document.querySelector('.user-email').textContent = `who_am_i: ${who_am_i}`

// Sets the active link in the navigation
function setActiveLink(linkId) {
    const links = document.querySelectorAll('nav a')
    links.forEach((link) => {
        link.classList.remove('active')
    })

    document.getElementById(linkId).classList.add('active')
}

// Adds click event listener to micro front end A link
document.getElementById('moduleA-link').addEventListener('click', (event) => {
    event.preventDefault() // Prevents default link behavior
    loadModuleA() // Renders micro front end A
    setActiveLink('moduleA-link') // Sets micro front end link as active
})

// Adds click event listener to micro front end B link
document.getElementById('moduleB-link').addEventListener('click', (event) => {
    event.preventDefault() // Prevents default link behavior
    loadModuleB() // Renders micro front end B
    setActiveLink('moduleB-link') // Sets micro front end B link as active
})

// Functions to increment the counters
function incrementCounterA() {
    moduleAClicks++
    moduleACounter.innerText = `Module A clicks: ${moduleAClicks}`
}
function incrementCounterB() {
    moduleBClicks++
    moduleBCounter.innerText = `Module B clicks: ${moduleBClicks}`
}

// named exports for data and functions passed to the micro front ends
export { who_am_i, incrementCounterA, incrementCounterB }
