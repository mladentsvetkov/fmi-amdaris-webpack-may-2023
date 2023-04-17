// Define the function to render Module A
function renderModuleB() {
    // Get the container element by ID
    const container = document.getElementById('content')
    // Set the HTML of the container element
    container.innerHTML = `
    <div id="moduleB">
      <h1>Micro App B</h1>
      <p>who_am_i: ${window.userEmail}</p>
      <button id='moduleB-button'>Click here in this module to increase the counter.</button>
      <img src='assets/module-b-image-147k.png'/>
    </div>
  `
    // Add an event listener to the button to dispatch a custom event on click
    document.getElementById('moduleB-button').addEventListener('click', () => {
        window.incrementCounterB()
    })
}
