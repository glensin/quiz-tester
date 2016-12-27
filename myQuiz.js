/*
Create your quiz in this file.
Note the tests will only work if you name your functions accordingly based on the instructions.
*/

// start of game

var question1 = {
  prompt: 'What is 10 + 10?',
  options: [10, 20, 30, 50],
  correctAnswerIndex: 1
}

var question2 = {
  prompt: 'Who is Moon Mayor?',
  options: ['Donald Trump', 'Obama', 'Steve Geluso', 'Rachel Lim'],
  correctAnswerIndex: 2
}

var question3 = {
  prompt: 'What is today?',
  options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
  correctAnswerIndex: 2
}

var question4 = {
  prompt: 'Where is Singapore?',
  options: ['Europe', 'America', 'NorthAsia', 'SouthEasAsia'],
  correctAnswerIndex: 4

}

var quiz = {
  questions: [question1, question2, question3, question4], // question1 and question2 were defined above!
  isGameOver: false,
  currentQuestion: 0,
  player1Points: 0,
  player2Points: 0
}

function numberOfQuestions () {
  return quiz.questions.length
}

// console.log(numberOfQuestions());
function restart () {
  quiz.isGameOver = false
  quiz.currentQuestion = 0
  quiz.player1Points = 0
  quiz.player2Points = 0
}

function isGameOver () {
  if (quiz.currentQuestion > quiz.questions.length-1) {
    quiz.isGameOver = true
    return true
  } else
  return false
}

function whoWon () {
  if (isGameOver() === false) {
    return 0
  } else if (quiz.player1Points > quiz.player2Points) {
    console.log('player1win')
    return 1
  } else if (quiz.player2Points > quiz.player1Points) {
    console.log('player2win')
    return 2
  } else if (isGameOver() === true &&
quiz.player1Points === quiz.player2Points) {
    console.log('Draw')
    return 3
  }
}

function currentQuestion () {
  return quiz.currentQuestion
}

function numberOfAnswers () {

  return quiz.questions[quiz.currentQuestion].options.length
}

function correctAnswer () {
console.log(quiz.questions[quiz.currentQuestion].correctAnswerIndex);
  return quiz.questions[quiz.currentQuestion].correctAnswerIndex
}

var currentPlayer = 1
// var choice = 2

function playTurn(choice) {
    if (isGameOver () === true) {
      whoWon()
      return false
    }
    else {
      if (currentPlayer === 1)
              {
                if (choice === correctAnswer()) {
                  quiz.player1Points++
                  isGameOver()
                  quiz.currentQuestion ++
                  currentPlayer = 2
                  return true
                }
                else {
                  isGameOver()
                  quiz.currentQuestion ++
                  currentPlayer = 2
                  return false
                }
              }
      else if (currentPlayer === 2) {
              {
                if (choice === correctAnswer()) {
                  quiz.player2Points++
                  isGameOver()
                  quiz.currentQuestion ++
                  currentPlayer = 1
                  return true
                }
                else {
                  isGameOver()
                  quiz.currentQuestion ++
                  currentPlayer = 1
                  return false
                }
              }
            }
  }
}
