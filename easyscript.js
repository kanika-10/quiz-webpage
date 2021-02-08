const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
//   console.log(shuffledQuestions.length)
//   console.log(currentQuestionIndex)
  if (shuffledQuestions.length > currentQuestionIndex +1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
const questions = [
    {
        question: 'Who says this quote; "I have been in love. It is painful, pointless and overrated"?',
        answers: [
            { text: 'Damon' , correct: true },
            { text: 'Stefan' , correct: false},
            { text: 'Klaus' , correct: false},
            { text: 'Caroline' , correct: false}
        ]
    },
    {
        question: "Who started Elena's doppelganger line?",
        answers: [
            { text: 'Tatia' , correct: true },
            { text: 'Amara' , correct: false},
            { text: 'katherine' , correct: false},
            { text: 'None of these' , correct: false}
        ]
    },
    {
        question: 'Who was the witch who cast the spell sealing the vampires in the tomb under the church?',
        answers: [
            { text: 'Bonnie' , correct: false },
            { text: 'Emily' , correct: true},
            { text: 'Qetsiyah' , correct: false},
            { text: 'Clare' , correct: false}
        ]
    },
    {
        question: 'In which season elena became vampire',
        answers: [
            { text: 'three' , correct: false },
            { text: 'four' , correct: true},
            { text: 'five' , correct: false},
            { text: 'six' , correct: false}
        ]
    },
    {
        question: ' What is the Staff of Arcadius?',
        answers: [
            { text: 'weapon' , correct:false },
            { text: 'pitch fork' , correct: false},
            { text: 'stick' , correct: false},
            { text: 'tuning fork' , correct:true}
        ]
    },
    {
        question: 'When Damon and Bonnie are trapped in the prison world with Kai Parker, the same day keeps repeating over and over. What is the date?',
        answers: [
            { text: 'April 10,1984' , correct: false},
            { text: 'April 10,1994' , correct: false},
            { text: 'May 10,1994' , correct: true},
            { text: 'May 10,1984' , correct: false}
        ]
    },
    {
        question: ' Which character has been resurrected maximum times on the show?',
        answers: [
            { text: 'Damon' , correct:false },
            { text: 'Bonnie' , correct: true},
            { text: 'Elena' , correct: false},
            { text: 'Caroline' , correct: false}
        ]
    },
    {
        question: '  How does Jeremy Gilbert died?',
        answers: [
            { text: 'Run-Over' , correct: false },
            { text: 'Shot' , correct: false},
            { text: 'Drained of blood' , correct:true},
            { text: 'Decapitated' , correct: false}
        ]
    },
    {
        question: ' He’s your first love. I intend to be your last, however long it takes',
        answers: [
            { text: 'Damon' , correct: false},
            { text: 'Caroline' , correct: false},
            { text: 'Stefan' , correct: false},
            { text: 'Klaus' , correct: true}
        ]
    },
    {
        question: ' In what season is Caroline turned into a vampire?',
        answers: [
            { text: 'third' , correct: false},
            { text: 'first' , correct: false},
            { text: 'second' , correct: true},
            { text: 'fourth' , correct: false}
        ]
    }

]
