/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY
  height = -1;
  do {
    height = Number(prompt('Please write an integer within the range 1 and 23'));
  } while (height < 0 || height > 23 || height%1 !=0)

  let p = document.getElementById("mario-easy-output");
  let steps = '#';
  let space = '&nbsp';
  let output = '<code>';

  for (let a = 0; a < height; a++){
    for (let b = 0; b < height - (a + 1); b++) {
      output = output + space;
    }
    for (let c = 0; c < a + 2; c++) {
      output = output + steps;
    }
    output = output + "</br>";
  }
  output = output + "</code>";
  p.innerHTML = `${output}`;
  console.log (typeof height);

  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  height = -1;
  do {
    height = Number(prompt('Please write an integer within the range 1 and 23'));
  } while (height < 0 || height > 23 || height%1 !=0)

  let p = document.getElementById("mario-hard-output");
  let steps = '#';
  let output = '<code>';

  for (let a = 0; a < height; a++){
    for (let b = 0; b < height - (a + 1); b++) {
      output = output + '&nbsp';
    }
    for (let c = 0; c < a + 2; c++) {
      output = output + steps;
    }
    output = output+`&nbsp;&nbsp;${steps}`;
    for (let e = 0; e < a + 1; e++) {
      output = output + steps;
    }
    output = output + "</br>";
  }
  output = output + "</code>";
  p.innerHTML = `${output}`;
  console.log (typeof height);

  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {

  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY



  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess() {

  // WRITE YOUR EXERCISE 4 CODE HERE

  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() {

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY


  windspeed = prompt('Please enter a non-negative integer to represent windspeed.');
  windspeed = parseInt(windspeed);
  while (windspeed < 0){
    windspeed = prompt('Please enter a non-negative integer.');
    windspeed = parseInt(windspeed);
  }
  while (Number.isInteger(windspeed) == false){
    windspeed = prompt('Please enter a non-negative integer.');
    windspeed = parseInt(windspeed);
  }

  if(windspeed < 39){
    document.getElementById("hurricane-output").innerHTML = "The skies are calm..."
  }
  if(windspeed >= 39 && windspeed <= 73){
    document.getElementById("hurricane-output").innerHTML = "Tropical Storm."
  }
  if(windspeed >= 74 && windspeed <= 95){
    document.getElementById("hurricane-output").innerHTML = "Category 1 Hurricane."
  }
  if(windspeed >= 96 && windspeed <= 110){
    document.getElementById("hurricane-output").innerHTML = "Category 2 Hurricane."
  }
  if(windspeed >= 111 && windspeed <= 129){
    document.getElementById("hurricane-output").innerHTML = "Category 3 Hurricane."
  }
  if(windspeed >= 130 && windspeed <= 156){
    document.getElementById("hurricane-output").innerHTML = "Category 4 Hurricane."
  }
  if(windspeed >157){
    document.getElementById("hurricane-output").innerHTML = "Category 5 Hurricane."
  }

  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */

   do {
     score1 = Number(prompt('Please type in a number between 0 and 10'));
   } while (score1 < 0.0 || score1 > 10 || !Number.isInteger(score1));
   scores.push(score1);

   do {
     score2 = Number(prompt('Please type in a number between 0 and 10'));
   } while (score2 < 0.0 || score2 > 10 || !Number.isInteger(score2));
   scores.push(score2);

   do {
     score3 = Number(prompt('Please type in a number between 0 and 10'));
   } while (score3 < 0.0 || score3 > 10 || !Number.isInteger(score3));
   scores.push(score3);

   do {
     score4 = Number(prompt('Please type in a number between 0 and 10'));
   } while (score4 < 0.0 || score4 > 10 || !Number.isInteger(score4));
   scores.push(score4);

   do {
     score5 = Number(prompt('Please type in a number between 0 and 10'));
   } while (score5 < 0.0 || score5 > 10 || !Number.isInteger(score5));
   scores.push(score5);

   do {
     score6 = Number(prompt('Please type in a number between 0 and 10'));
   } while (score6 < 0.0 || score6 > 10 || !Number.isInteger(score6));
   scores.push(score6);

   let Total = Number(score1) + Number(score2) + Number(score3) + Number(score4)
   + Number(score5) + Number(score6);
   let average = (Total - Math.max(score1, score2, score3, score4, score5, score6)
   - Math.min(score1, score2, score3, score4, score5, score6)) / 4;
   let p = document.getElementById('gymnastics-output');
   p.innerHTML = 'Discarded: '+Math.min(score1, score2, score3, score4, score5, score6)
   +', '+ Math.max(score1, score2, score3, score4, score5, score6)+'<br />Score: '+average.toFixed(2);

  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function reportCard() {

  ///////////////////////// DO NOT MODIFY
  let testTotal = 0; ////// DO NOT MODIFY
  let quizTotal = 0; ////// DO NOT MODIFY
  let homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */

  ///////////////////// DO NOT MODIFY
  let tests = 0; ////// DO NOT MODIFY
  let quizzes = 0; //// DO NOT MODIFY
  let homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */

   while(true) {
		let testScores = prompt("Please enter test scores from 0 to 100; type -1 to move on to the next category.");
		if(testScores == -1){
			break;
		}
		if(Number(testScores >= 0) && Number(testScores <= 100)){
			testTotal = Number(testScores) + testTotal;
			tests++;
		}
	}

	while(true) {
		let quizScores = prompt("Please enter quiz scores from 0 to 100; type -1 to move on to the next category.");
		if (quizScores == -1){
			break;
		}
		if(Number(quizScores >= 0) && Number(quizScores <= 100)){
			quizTotal = Number(quizScores) + quizTotal;
			quizzes++;
		}
	}

	while(true) {
		let homeworkScores = prompt("Please enter homework scores from 0 to 100; type -1 to move on.");
		if (homeworkScores == -1){
			break;
		}
		if(Number(homeworkScores >= 0) && Number(homeworkScores <= 100)){
			homeworkTotal = Number(homeworkScores) + homeworkTotal;
			homeworks++;
		}
	}

	let testAverage = (testTotal / tests).toFixed(2);
	let quizAverage = (quizTotal / quizzes).toFixed(2);
	let homeworkAverage = (homeworkTotal/homeworks).toFixed(2);
	grade=((testAverage*0.6)+(quizAverage*0.3)+(homeworkAverage*0.1)).toFixed(2);
	var p = document.getElementById("report-card-output");
  p.innerHTML="Tests: "+testAverage+"</br>Quizzes: "+quizAverage+"</br>Homework: "
  +homeworkAverage+"</br>Grade: "+grade;


  /////////////////////// DO NOT MODIFY
  check('report-card', // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
  ); //////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}
