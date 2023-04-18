import './moduleB.css'
import imageSrc from './module-b-image-147k.png'
import { incrementCounterB } from 'mainApp/incrementCounterB'
import { who_am_i } from 'mainApp/who_am_i'

// Define the function to render Module B
export function renderModuleB() {
    // Get the container element by ID
    const container = document.getElementById('content')
    // Set the HTML of the container element
    container.innerHTML = `
    <div id="moduleB">
      <h1>Micro App B</h1>
      <p>who_am_i: ${who_am_i}</p>
      <button id='moduleB-button'>Click here in this module to increase the counter.</button>
      <img src='${imageSrc}'/>
    </div>
  `
    document.getElementById('moduleB-button').addEventListener('click', () => {
        incrementCounterB()
    })
}

renderModuleB()
