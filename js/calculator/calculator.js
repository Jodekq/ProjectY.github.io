// const resultScreen = document.getElementById('result-screen');
// const resultContainer = document.getElementById('result-container');
// let result = '';

// function appendValue(value) {
//   result += value;
//   updateScreen();
// }

// function deleteCharacter() {
//   result = result.slice(0, result.length - 1);
//   updateScreen();
// }

// function calculateResult() {
//   try {
//     const calculatedResult = eval(result);
//     result = calculatedResult.toFixed(2);
//     updateScreen();
//     showResultBox(result);
//     saveResultToLocalStorage(result);
//   } catch (error) {
//     console.log('Error: Invalid Expression');
//     resultScreen.textContent = 'Error';
//     result = '';
//   }
// }

// function updateScreen() {
//   resultScreen.textContent = result;
// }

// function showResultBox(result) {
//   const div = document.createElement('div');
//   div.textContent = result;
//   div.className = 'result-box';

//   resultContainer.appendChild(div);
// }

// document.addEventListener('keydown', function (event) {
//   const key = event.key;
//   const shiftKey = event.shiftKey;

//   if (shiftKey && key === 'Backspace') {
//     // Shift + Backspace: Delete all current input
//     result = '';
//     updateScreen();
//   } else if (key >= '0' && key <= '9') {
//     appendValue(key);
//   } else if (key === '.') {
//     appendValue('.');
//   } else if (key === '+' || key === '-' || key === '*' || key === '/') {
//     appendValue(key);
//   } else if (key === 'Backspace') {
//     deleteCharacter();
//   } else if (key === 'Enter') {
//     calculateResult();
//   }
// });

// // Clear result button

// const clearButton = document.getElementById('clear-button');

// clearButton.addEventListener('click', function () {
//   resultContainer.innerHTML = ''; // Clear the contents of the result-container
//   localStorage.removeItem('result');
//   localStorage.removeItem('resultContainer');
// });


const resultBox = document.getElementById("result");
const resultHistory = document.getElementById("history")
const history = document.getElementById("history")
let result = '';

function appendValue(value) {
  result += value;
  updateScreen();
}

function deleteall() {
  result = '';
  updateScreen();
}

function calculateResult() {
  const currentResult = parseFloat(result);

  if (resultBox.textContent.includes('%')) {
    // Split the input into the percentage value and base value
    const [percentageStr, baseValueStr] = resultBox.textContent.split('%');
    const percentageValue = parseFloat(percentageStr);
    const baseValue = parseFloat(baseValueStr);

    // Calculate the percentage of baseValue from the percentageValue
    const percentageResult = (baseValue * percentageValue) / 100;

    result = percentageResult.toFixed(2); // Update the result with the percentage value (formatted to 2 decimal places)
    updateScreen();
  } else {
    try {
      const calculatedResult = eval(result);
      result = calculatedResult.toFixed(2);
      updateScreen();
    } catch (error) {
      console.log('Error: Invalid Expression');
      resultScreen.textContent = 'Error';
      result = '';
    }
  }
}

function updateScreen() {
  resultBox.textContent = result;
}