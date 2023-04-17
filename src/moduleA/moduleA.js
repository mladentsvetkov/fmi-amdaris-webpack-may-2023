// Define the function to render Module A
function renderModuleA() {
    // Get the container element by ID
    const container = document.getElementById('content')
    // Set the HTML of the container element
    container.innerHTML = `
    <style>
      #moduleA {
        background-color: #bacbe8;
        padding: 20px;
        height: 30rem;
      }
      #moduleA-button {
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
      
      #moduleA-button:hover {
        background-color: rgba(255, 0, 0, 1);
      }
      
      #moduleA-button:active {
        box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6), inset 2px 2px 3px rgba(0, 0, 0, 0.6);
      }
      img { 
        max-height: 10rem;
        display: block;
        margin-top: 10px;
      }
    </style>
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
