import './moduleA.css'
import imageSrc from './module-a-image-435k.png'
import { incrementCounterA } from 'mainApp/incrementCounterA'
import { who_am_i } from 'mainApp/who_am_i'

// Define the function to render micro front end A
function renderModuleA() {
    // Get the container element by ID
    const container = document.getElementById('content')
    // Set the HTML of the container element
    container.innerHTML = `
    <div id="moduleA">
      <h1>Micro App A</h1>
      <p>who_am_i: ${who_am_i}</p>
      <button id='moduleA-button'>Click here in this module to increase the counter.</button>
      <img src='${imageSrc}'/>
    </div>
  `
    document.getElementById('moduleA-button').addEventListener('click', () => {
        incrementCounterA()
    })
}

export { renderModuleA }
