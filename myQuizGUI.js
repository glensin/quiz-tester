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
  prompt: 'How many days in month of Feb 2016?',
  options: ['28', '29', '30', '31'],
  correctAnswerIndex: 1
}

var question4 = {
  prompt: 'Where is Singapore?',
  options: ['Europe', 'America', 'NorthAsia', 'SouthEastAsia'],
  correctAnswerIndex: 3

}

var quiz = {
  questions: [question1, question2, question3, question4], // question1 and question2 were defined above!
  isGameOver: false,
  currentQuestion: 0,
  player1Points: 0,
  player2Points: 0
}

$('#word').on('click',function(){location.reload()})

function updateDisplay(){
  $('h3').eq(0).text("player 1 score = " + quiz.player1Points)
  $('h3').eq(1).text("player 2 score = " + quiz.player2Points)

  if(isGameOver()===false){
$('h1').text("Q" + (quiz.currentQuestion+1) + ")"
    + quiz.questions[quiz.currentQuestion].prompt)
$('button').eq(0).text(quiz.questions[quiz.currentQuestion].options[0])
$('button').eq(1).text(quiz.questions[quiz.currentQuestion].options[1])
$('button').eq(2).text(quiz.questions[quiz.currentQuestion].options[2])
$('button').eq(3).text(quiz.questions[quiz.currentQuestion].options[3])
}

else {
  whoWon ()
}
}


function currentQuestion () {
  return quiz.currentQuestion
}


function isGameOver () {
  if (quiz.currentQuestion > quiz.questions.length-1) {
    quiz.isGameOver = true
    $(".turn").text("Game OVER!")
    return true
  } else
  return false
}


function correctAnswer () {
// console.log(quiz.questions[quiz.currentQuestion].correctAnswerIndex);
  return quiz.questions[quiz.currentQuestion].correctAnswerIndex
}

function whoWon () {
    if (quiz.player1Points > quiz.player2Points) {
    console.log('player1win')
    $(".answer").click(function(){alert("Player 1 Win!")})


  } else if (quiz.player2Points > quiz.player1Points) {
    console.log('player2win')
    $(".answer").click(function(){alert("Player 2 Win!")})


  } else if (isGameOver() === true &&
quiz.player1Points === quiz.player2Points) {
    console.log('Draw')
    $(".answer").click(function(){alert("Draw!")})


  }
}

var currentPlayer = 1
$(".turn").text("player 1 turn").css('background-color','#00FFFF')


$('.answer').on('click','button',function(){
if (isGameOver()===false)
{
  if (currentPlayer === 1) {
    // console.log("game on player1 start")
    if( $(this).index() === correctAnswer()){
      console.log("player 1 correct!")
      quiz.player1Points++
      quiz.currentQuestion ++
      console.log("current q is" + currentQuestion());
      updateDisplay()
      isGameOver()
      console.log("is gameover:"+isGameOver())
      currentPlayer = 2
      $(".turn").text("player 2 turn").css('background-color','#7FFFD4')

    }
    else {
      console.log("player 1 wrong!")
      quiz.currentQuestion ++
      console.log("current q is" + currentQuestion());
      updateDisplay()
      isGameOver()
      console.log("is gameover:"+isGameOver())
      currentPlayer = 2
      $(".turn").text("player 2 turn").css('background-color','#7FFFD4')

    }
  }
  else if (currentPlayer === 2)
  {
    if ($(this).index() ===correctAnswer ()) {
      console.log("player 2 correct!")
      quiz.player2Points++
      quiz.currentQuestion ++
      console.log("current q is" + currentQuestion());
      updateDisplay()
      isGameOver()
      console.log("is gameover:"+isGameOver())
      currentPlayer = 1
      $(".turn").text("player 1 turn").css('background-color','#00FFFF')

    }
    else {
      console.log("player 2 wrong!")
      quiz.currentQuestion ++
      console.log("current q is" + currentQuestion());
      updateDisplay()
      isGameOver()
      console.log("is gameover:"+isGameOver())
      currentPlayer = 1
      $(".turn").text("player 1 turn").css('background-color','#00FFFF')

    }
}

}
else {
  whoWon()
}
})

updateDisplay()


// function isGameOver () {
//   if (quiz.currentQuestion > quiz.questions.length-1) {
//     quiz.isGameOver = true
//     return true
//   } else
//   return false
// }
//
// var currentPlayer = 1
//
// function playTurn() {
//     if (isGameOver () === true) {
//       whoWon()
//     }
//     else {
//       if (currentPlayer === 1)
//               {
//                 if (choice === correctAnswer()) {
//                   quiz.player1Points++
//                   isGameOver()
//                   quiz.currentQuestion ++
//                   currentPlayer = 2
//                 }
//                 else {
//                   isGameOver()
//                   quiz.currentQuestion ++
//                   currentPlayer = 2
//                 }
//               }
//       else if (currentPlayer === 2) {
//               {
//                 if (choice === correctAnswer()) {
//                   quiz.player2Points++
//                   isGameOver()
//                   quiz.currentQuestion ++
//                   currentPlayer = 1
//                 }
//                 else {
//                   isGameOver()
//                   quiz.currentQuestion ++
//                   currentPlayer = 1
//                 }
//               }
//             }
//   }
// }
