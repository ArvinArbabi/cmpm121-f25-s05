const IDS = {
  counter: "counter",
  inc: "increment",
  dec: "decrement",
  reset: "reset",
} as const;

const COLORS = {
  odd: "pink",
  even: "lightblue",
} as const;

let count: number = 0;

function updateUI(): void {
  const counterEl = document.getElementById(IDS.counter) as
    | HTMLSpanElement
    | null;
  if (!counterEl) return;

  counterEl.textContent = String(count);
  document.title = `Clicked ${count}`;
  document.body.style.backgroundColor = Math.abs(count) % 2
    ? COLORS.odd
    : COLORS.even;
}

function handleClick(delta: number): void {
  count += delta;
  updateUI();
}

function handleReset(): void {
  count = 0;
  updateUI();
}

function setup(): void {
  document.body.innerHTML = `
    <h1>CMPM 121 Project</h1>
    <p>Counter: <span id="${IDS.counter}">0</span></p>
    <button id="${IDS.inc}">Increment</button>
    <button id="${IDS.dec}">Decrement</button>
    <button id="${IDS.reset}">Reset</button>
  `;

  (document.getElementById(IDS.inc) as HTMLButtonElement | null)
    ?.addEventListener("click", () => handleClick(1));
  (document.getElementById(IDS.dec) as HTMLButtonElement | null)
    ?.addEventListener("click", () => handleClick(-1));
  (document.getElementById(IDS.reset) as HTMLButtonElement | null)
    ?.addEventListener("click", handleReset);

  updateUI();
}

setup();
