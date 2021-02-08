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
        question: 'What college do Elena, Bonnie, and Caroline attend?',
        answers: [
            { text: 'Wesley college' , correct: false },
            { text: 'Whitmore college' , correct: true},
            { text: 'western college' , correct: false},
            { text: 'whitman college' , correct: false}
        ]
    },
    {
        question: "Over the course of the series, which character was NEVER killed by Damon?",
        answers: [
            { text: 'Alaric Saltzman' , correct: false },
            { text: 'Tyler Lockwood' , correct: false},
            { text: 'Jeremy Gilbert' , correct: false},
            { text: 'Enzo St. John' , correct: true}
        ]
    },
    {
        question: "In that moment, I loved him. I didn't want to, I mean, it terrified me, but for that moment, I loved him.",
        answers: [
            { text: 'Damon' , correct: false },
            { text: 'Elena' , correct: true},
            { text: 'Caroline' , correct: false},
            { text: 'Stefan' , correct: false}
        ]
    },
    {
        question: "Elena is warm and kind and caring and selfless and it's real. When I'm around her, I completely forget where I am!",
        answers: [
            { text: 'Damon' , correct: false },
            { text: 'Matt' , correct: false},
            { text: 'Stefan' , correct: true},
            { text: 'Caroline' , correct: false}
        ]
    },
    {
        question: "What Was The Name Of Damon And Stefan's Father?",
        answers: [
            { text: 'Giuseppe' , correct:true },
            { text: 'Alexandar' , correct: false},
            { text: 'Winston' , correct: false},
            { text: 'Montgomary' , correct:false}
        ]
    },
    {
        question: 'Which car does Stefan drive?',
        answers: [
            { text: 'A black Porsche' , correct: false},
            { text: 'A red Aston Martin' , correct: false},
            { text: 'A red Porsche' , correct: true},
            { text: 'A black Corvette' , correct: false}
        ]
    },
    {
        question: ' Which Song Was Reused In Season 5 When Elena Was Trying To Get Stefan To Remember Who He Was?',
        answers: [
            { text: 'Longest Night' , correct:true },
            { text: 'Losing Your Memory' , correct: false},
            { text: 'Give Me Love' , correct: false},
            { text: 'A Drop In The Ocean' , correct: false}
        ]
    },
    {
        question: ' What causes Elena’s hallucinations that almost makes her to take her own life?',
        answers: [
            { text: 'Not feeding' , correct: false },
            { text: 'Killing Stefan' , correct: false},
            { text: 'Killing one of the "The-Five"' , correct:true},
            { text: 'Drinking Vervain' , correct: false}
        ]
    },
    {
        question: ' But how do I stop the monster without becoming one myself?',
        answers: [
            { text: 'Bonnie' , correct: false},
            { text: 'Stefan' , correct: true},
            { text: 'Elena' , correct: false},
            { text: 'Klaus' , correct: false}
        ]
    },
    {
        question: ' Where did Caroline and Stefan get married?',
        answers: [
            { text: 'The Mystic Grill' , correct: false},
            { text: 'The Salvatore Boarding House' , correct: false},
            { text: 'The Town Square' , correct: false},
            { text: 'The Lockwood Mansion' , correct: true}
        ]
    }

]
