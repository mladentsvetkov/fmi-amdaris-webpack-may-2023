// Define the function to render Module A
function renderModuleA() {
    // Get the container element by ID
    const container = document.getElementById('content')
    // Set the HTML of the container element
    container.innerHTML = `
    <div id="moduleA">
      <h1>Micro App A</h1>
      <p>who_am_i: ${window.userEmail}</p>
      <button id='moduleA-button'>Click here in this module to increase the counter.</button>
      <img src='assets/module-a-image-435k.png'/>
    </div>
  `
    document.getElementById('moduleA-button').addEventListener('click', () => {
        window.incrementCounterA()
    })
}
