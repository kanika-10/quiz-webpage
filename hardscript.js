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
        question: 'Who was Stefan’s first love?',
        answers: [
            { text: 'Katherine' , correct: false },
            { text: 'Elena' , correct: false},
            { text: 'Valerie' , correct: true},
            { text: 'Mary Louise' , correct: false}
        ]
    },
    {
        question: "When did Damon and Enzo first meet?",
        answers: [
            { text: '1953' , correct: true },
            { text: '1955' , correct: false},
            { text: '1958' , correct: false},
            { text: '1963' , correct: false }
        ]
    },
    {
        question: "I wake up everyday and I feel okay. But there's something missing, like a hole. Some people, they fit in life or whatever. I don't.",
        answers: [
            { text: 'Jeremy Gilbert' , correct: true },
            { text: 'Lorenzo St. John' , correct: false},
            { text: 'Kai Parker' , correct: false},
            { text: 'Wes Maxfield' , correct: false}
        ]
    },
    {
        question: "Which of these is NOT the name of one of Stefan's doppelgängers?",
        answers: [
            { text: 'Ambrose' , correct: true },
            { text: 'Tom' , correct: false},
            { text: 'Silas' , correct: false},
            { text: 'None Of These' , correct: false}
        ]
    },
    {
        question: "In season 2, how did Bonnie incapacitate Mason?",
        answers: [
            { text: 'She stabbed him with a silver knife.' , correct: false },
            { text: 'She shot him with a silver bullet.' , correct: false},
            { text: 'By giving him an aneurysm' , correct: true},
            { text: 'She stole the moonstone from Mason' , correct:false}
        ]
    },
    {
        question: 'What side did Damon fight on in the civil war?',
        answers: [
            { text: 'Union' , correct: false},
            { text: 'Confederate' , correct: true},
            { text: 'None' , correct: false},
            { text: 'Both' , correct: false}
        ]
    },
    {
        question: ' And something tells me that my witch is better than your witch.',
        answers: [
            { text: 'Katherine' , correct:true },
            { text: 'Damon' , correct: false},
            { text: 'Elijah' , correct: false},
            { text: 'Klaus' , correct: false}
        ]
    },
    {
        question: ' The Vampire Diaries is based on the popular book series of the same name. Who authored the book?',
        answers: [
            { text: 'Jane Austen' , correct: false },
            { text: 'Lisa Jane Smith' , correct: true},
            { text: 'William Faulkner' , correct:false},
            { text: 'Charles Dickens' , correct: false}
        ]
    },
    {
        question: ' During season 4, who excommunicated Sheriff Forbes from the Founders Council?',
        answers: [
            { text: 'Pastor Phil' , correct: false},
            { text: 'Pastor Tim' , correct: false},
            { text: 'Pastor Nick' , correct: false},
            { text: 'Pastor Young' , correct: true}
        ]
    },
    {
        question: ' Honestly, I’m not gonna be one of those pathetic girls whose world stops spinning because of some guy.',
        answers: [
            { text: 'Caroline' , correct: false},
            { text: 'Rebekah' , correct: false},
            { text: 'Bonnie' , correct: false},
            { text: 'Elena' , correct: true}
        ]
    }

]
