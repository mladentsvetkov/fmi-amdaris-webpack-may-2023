// Define the function to render Module A
function renderModuleB() {
    // Get the container element by ID
    const container = document.getElementById('content')
    // Set the HTML of the container element
    container.innerHTML = `
    <style>
      #moduleB {
        background-color: #e3e8ba;
        padding: 20px;
        height: 30rem;
      }
      #moduleB-button {
        border: 0;
        line-height: 2.5;
        padding: 0 20px;
        font-size: 1rem;
        text-align: center;
        color: #fff;
        text-shadow: 1px 1px 1px #000;
        border-radius: 10px;
        background-color: rgba(220, 0, 0, 1);
        background-image: linear-gradient(to top left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0));
        box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6), inset -2px -2px 3px rgba(0, 0, 0, 0.6);
    }
    
    #moduleB-button:hover {
        background-color: rgba(255, 0, 0, 1);
    }
    
    #moduleB-button:active {
        box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6), inset 2px 2px 3px rgba(0, 0, 0, 0.6);
    }
    img { 
      max-height: 10rem;
      display: block;
      margin-top: 10px;
     }
    </style>
    <div id="moduleB">
      <h1>Micro App B</h1>
      <p>who_am_i: ${window.userEmail}</p>
      <button id='moduleB-button'>Click here in this module to increase the counter.</button>
      <img src='assets/module-b-image-147k.png'/>
    </div>
  `
    // Add an event listener to the button to dispatch a custom event on click
    document.getElementById('moduleB-button').addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('moduleBClick'))
    })
}

// Call the renderModuleA function to render the module
renderModuleB()
