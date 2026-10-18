export class LinePredictor {
  constructor() {
    // QUESTION: What should slope and intercept start out as before the model is trained?
    this.slope = null ;   
    this.intercept = null ; 
  }

  fit(x, y,verbos=true ) {
    const n = x.length;
    
    // QUESTION: Write the condition to check if x and y do NOT have the same number of items.
    if (n !== y.length) {
      throw new Error("x and y must have the same number of items!");
    }

    // Step 1: Find the middle (average) of all X's and Y's
    const sumX = x.reduce((sum, val) => sum + val, 0);
    const sumY = y.reduce((sum, val) => sum + val, 0);
    
    // QUESTION: How do you calculate the average (middle) of X and Y using their sums and n?
    const xMiddle = sumX / n ;
    const yMiddle = sumY/n ;

    // Step 2: See how X and Y move together
    let variance = 0;
    let covariance = 0;

    // QUESTION: Complete the loop to add up the squared distance for variance 
    // and the combined distance for covariance.
    for (let i = 0; i < n; i++) {
      variance += (x [i] - xMiddle)** 2 ;
      covariance += (x[i] - xMiddle)*(y[i] - yMiddle) ;
    }

    // Step 3: Calculate growth speed and starting point
    // QUESTION: How do we calculate the slope using covariance and variance?
    this.slope = covarience/varience ;
    
    // QUESTION: How do we calculate the intercept using yMiddle, slope, and xMiddle?
    this.intercept = yMiddle - (this.slope * xMiddle);

    if (verbose) {
      console.log("--- HOW THE COMPUTER FINDS THE TREND ---");
      console.log(`Rule to guess Y: Y = this.intercept.toFixed(2)+({this.slope.toFixed(2)} × X)`);
    }

    return this;
  }

  predict(x) {
    // QUESTION: Check if the input 'x' is an array using the correct built-in JavaScript method.
    if (Array.isArray(x)) {
      // QUESTION: If it is an array, map over each item (xi) to return its prediction.
      return x.map(xi => this.intercept + (this.slope * xi) );
    }
    
    // QUESTION: If 'x' is just a single number, return the calculation for a single prediction.
    return this.intercept + (this.slope * x) ;
  }
}

