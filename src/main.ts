// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let c = 0;

// These constants are for button IDs and heading text
const a = "increment", b = "counter", h = "CMPM 121 Project";

function setup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>${h}</h1>
    <p>Counter: <span id="${b}">0</span></p>
    <button id="${a}">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
  `;

  const bI = document.getElementById(a);
  const bD = document.getElementById("dec");
  const bR = document.getElementById("reset");
  const ctr = document.getElementById(b);

  // Check if any element is missing, then exit the function
  if (!bI || !bD || !bR || !ctr) return;

  // Add click event to the increment button & change background on each click
  bI.addEventListener("click", () => {
    c++;
    ctr.innerHTML = `${c}`;
    document.title = "Clicked " + c;
    document.body.style.backgroundColor = c % 2 ? "pink" : "lightblue";
  });

  // Add click event to the decrement button & change background on each click
  bD.addEventListener("click", () => {
    c--;
    ctr.innerHTML = `${c}`;
    document.body.style.backgroundColor = c % 2 ? "pink" : "lightblue";
  });

  // Add click event to the reset button
  bR.addEventListener("click", () => {
    c = 0;
    ctr.innerHTML = `${c}`;
    document.title = "Clicked " + c;
  });
}
// Call setup to initialize the UI
function start() {
  setup();
}

start();
