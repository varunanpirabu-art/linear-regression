import { LinePredictor } from './lr.js';

const model = new LinePredictor();

// Helper to convert comma-separated string "1, 2, 3" into number array [1, 2, 3]
function parseNumbers(inputString) {
  // QUESTION: How do you split a string by commas, clean up the whitespace, and turn each piece into a number?
  return inputString.split(',').map(num=> parseFloat(num.trim()));
}

// 1. Train the model when "Find the Trend" is clicked
// QUESTION: What is the ID of the button element and what event are we listening for?
document.getElementById('fitBtn').addEventListener('click' , () => {
  
  // QUESTION: How do you grab the values from the X and Y input boxes and convert them into arrays?
  const xData = parseNumbers(document.getElementById('xValues').value);
  const yData = parseNumbers(document.getElementById('yValues').value);

  // QUESTION: How do you call the fit method on the model, passing in xData, yData, and turning verbose to false?
  model.fit(xData , yData , false );

  const resultText = `Rule found! intercept = ${model.intercept.toFixed(2)}, Slope = ${model.slope.toFixed(2)}`;
  document.getElementById('fitResult').innerText = resultText;
});

// 2. Make a prediction when "Predict!" is clicked
document.getElementById('predictBtn').addEventListener('click', () => {
  
  // QUESTION: What value does slope start with if the model hasn't been trained yet?
  if (model.slope === null ) {
    alert("Please click 'Find the Trend' first!");
    return;
  }

  // QUESTION: How do you grab the number from the 'predictX' input box and parse it as a float?
  const newX = parseFloat(document.getElementById('predictX').value) ;
  
  // QUESTION: How do you use our model to predict the outcome for newX?
  const prediction = model.predict(newX );

  document.getElementById('predictans').innerText = 
    `When X is ${newX}, our smart guess for Y is ${prediction.toFixed(2)}!`;
});

