const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let tracker = 0


function init() {
  // Write your JavaScript code inside the init() function

// 2 make the function to trigger
const checkKeyCode = () => {
  const whatTheyPressed = event.keyCode 
  if (whatTheyPressed === code[tracker]) {
    tracker += 1
  } else {
    tracker = 0
  }
  console.log(tracker)
  
}



}

function inti () {
  document.addEventListener("keydown", checkKeyCode)
}a