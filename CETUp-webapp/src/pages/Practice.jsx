import { useState } from 'react'
import PageContainer from '../components/Layout/PageContainer'

// Mock subjects
const subjects = [
  { id: 1, name: 'Physics', icon: '⚡', color: 'bg-primary-blue' },
  { id: 2, name: 'Chemistry', icon: '🧪', color: 'bg-secondary-blue' },
  { id: 3, name: 'Mathematics', icon: '📐', color: 'bg-primary-blue' },
  { id: 4, name: 'Biology', icon: '🧬', color: 'bg-secondary-blue' },
]

// Generate chapters
const generateChapters = (subjectName) => {
  const chapters = []
  for (let i = 1; i <= 25; i++) {
    chapters.push({ id: i, name: `Chapter ${i}` })
  }
  return chapters
}

// Difficulty levels
const difficulties = [
  { id: 'easy', name: 'Easy', color: 'bg-success-green', icon: '😊' },
  { id: 'medium', name: 'Medium', color: 'bg-accent-orange', icon: '🤔' },
  { id: 'hard', name: 'Hard', color: 'bg-red-500', icon: '😤' },
]

// Mock quiz questions
const mockQuestions = [
  {
    id: 1,
    question: "What is the SI unit of force?",
    options: [
      { id: 'a', text: 'Joule' },
      { id: 'b', text: 'Newton' },
      { id: 'c', text: 'Watt' },
      { id: 'd', text: 'Pascal' },
    ],
    correctAnswer: 'b',
    explanation: 'The SI unit of force is Newton (N). It is named after Sir Isaac Newton and is defined as the force required to accelerate a mass of one kilogram at a rate of one meter per second squared.'
  },
  {
    id: 2,
    question: "Which of the following is a vector quantity?",
    options: [
      { id: 'a', text: 'Speed' },
      { id: 'b', text: 'Distance' },
      { id: 'c', text: 'Velocity' },
      { id: 'd', text: 'Temperature' },
    ],
    correctAnswer: 'c',
    explanation: 'Velocity is a vector quantity because it has both magnitude and direction. Speed, distance, and temperature are scalar quantities that only have magnitude.'
  },
]

function Practice() {
  const [step, setStep] = useState('subject') // subject, chapter, difficulty, quiz, results
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [selectedChapter, setSelectedChapter] = useState(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState(null)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject)
    setStep('chapter')
  }

  const handleChapterSelect = (chapter) => {
    setSelectedChapter(chapter)
    setStep('difficulty')
  }

  const handleDifficultySelect = (difficulty) => {
    setSelectedDifficulty(difficulty)
    setStep('quiz')
  }

  const handleAnswerChange = (questionId, optionId) => {
    setAnswers({ ...answers, [questionId]: optionId })
  }

  const handleSubmit = () => {
    setShowResults(true)
  }

  const handleStartNew = () => {
    setStep('subject')
    setSelectedSubject(null)
    setSelectedChapter(null)
    setSelectedDifficulty(null)
    setAnswers({})
    setShowResults(false)
  }

  const calculateScore = () => {
    let correct = 0
    mockQuestions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correct++
      }
    })
    return {
      correct,
      total: mockQuestions.length,
      percentage: Math.round((correct / mockQuestions.length) * 100)
    }
  }

  // Step 1: Subject Selection
  if (step === 'subject') {
    return (
      <PageContainer>
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-primary-blue mb-2">Practice Quiz</h3>
          <p className="text-text-muted">Select a subject to start practicing</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              onClick={() => handleSubjectSelect(subject)}
              className={`${subject.color} rounded-2xl shadow-lg p-8 text-white cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              <div className="text-6xl mb-4">{subject.icon}</div>
              <h4 className="text-2xl font-bold">{subject.name}</h4>
            </div>
          ))}
        </div>
      </PageContainer>
    )
  }

  // Step 2: Chapter Selection
  if (step === 'chapter') {
    const chapters = generateChapters(selectedSubject.name)
    return (
      <PageContainer>
        <button
          onClick={() => setStep('subject')}
          className="flex items-center text-primary-blue hover:text-blue-700 font-medium mb-6 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Subjects
        </button>
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-4xl">{selectedSubject.icon}</span>
            <h3 className="text-2xl font-bold text-primary-blue">{selectedSubject.name}</h3>
          </div>
          <p className="text-text-muted">Select a chapter to practice</p>
        </div>
        <div className="bg-white rounded-xl shadow-md border border-border p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 max-h-[500px] overflow-y-auto">
            {chapters.map((chapter) => (
              <div
                key={chapter.id}
                onClick={() => handleChapterSelect(chapter)}
                className="border-2 border-border rounded-lg p-4 hover:border-primary-blue hover:bg-blue-50 cursor-pointer transition-all text-center"
              >
                <p className="text-2xl font-bold text-primary-blue mb-1">{chapter.id}</p>
                <p className="text-sm text-text-muted">{chapter.name}</p>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    )
  }

  // Step 3: Difficulty Selection
  if (step === 'difficulty') {
    return (
      <PageContainer>
        <button
          onClick={() => setStep('chapter')}
          className="flex items-center text-primary-blue hover:text-blue-700 font-medium mb-6 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Chapters
        </button>
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-primary-blue mb-2">Select Difficulty Level</h3>
          <p className="text-text-muted">
            {selectedSubject.name} - {selectedChapter.name}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {difficulties.map((difficulty) => (
            <div
              key={difficulty.id}
              onClick={() => handleDifficultySelect(difficulty)}
              className={`${difficulty.color} rounded-2xl shadow-lg p-10 text-white cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl text-center`}
            >
              <div className="text-6xl mb-4">{difficulty.icon}</div>
              <h4 className="text-2xl font-bold mb-2">{difficulty.name}</h4>
              <p className="text-sm opacity-90">2 Questions</p>
            </div>
          ))}
        </div>
      </PageContainer>
    )
  }

  // Step 4: Quiz
  if (step === 'quiz' && !showResults) {
    return (
      <PageContainer>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md border border-border p-8 mb-6">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <div>
                <h3 className="text-2xl font-bold text-primary-blue mb-1">Quiz Time!</h3>
                <p className="text-text-muted">
                  {selectedSubject.name} • {selectedChapter.name} • {selectedDifficulty.name}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-text-muted">Questions</p>
                <p className="text-2xl font-bold text-primary-blue">{mockQuestions.length}</p>
              </div>
            </div>

            {mockQuestions.map((question, index) => (
              <div key={question.id} className="mb-8 last:mb-0">
                <div className="mb-4">
                  <span className="inline-block bg-primary-blue text-white text-sm font-bold px-3 py-1 rounded-full mb-3">
                    Question {index + 1}
                  </span>
                  <h4 className="text-lg font-semibold text-text-primary">{question.question}</h4>
                </div>
                <div className="space-y-3">
                  {question.options.map((option) => (
                    <label
                      key={option.id}
                      className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        answers[question.id] === option.id
                          ? 'border-primary-blue bg-blue-50'
                          : 'border-border hover:border-primary-blue'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={option.id}
                        checked={answers[question.id] === option.id}
                        onChange={() => handleAnswerChange(question.id, option.id)}
                        className="w-5 h-5 text-primary-blue focus:ring-primary-blue"
                      />
                      <span className="ml-3 text-text-primary font-medium">
                        {option.id.toUpperCase()}. {option.text}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={() => setStep('difficulty')}
              className="px-6 py-3 border-2 border-border text-text-primary rounded-lg hover:border-primary-blue transition-colors font-medium"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={Object.keys(answers).length !== mockQuestions.length}
              className="px-8 py-3 bg-primary-blue text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Submit Quiz
            </button>
          </div>
        </div>
      </PageContainer>
    )
  }

  // Step 5: Results
  if (showResults) {
    const score = calculateScore()
    return (
      <PageContainer>
        <div className="max-w-4xl mx-auto">
          {/* Score Card */}
          <div className="bg-gradient-to-r from-primary-blue to-secondary-blue rounded-2xl shadow-lg p-8 text-white mb-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">Quiz Completed! 🎉</h3>
              <div className="flex items-center justify-center space-x-8 mb-4">
                <div>
                  <p className="text-6xl font-bold">{score.percentage}%</p>
                  <p className="text-lg opacity-90">Accuracy</p>
                </div>
                <div className="h-20 w-px bg-white/30"></div>
                <div>
                  <p className="text-4xl font-bold">{score.correct}/{score.total}</p>
                  <p className="text-lg opacity-90">Correct Answers</p>
                </div>
              </div>
              <p className="text-lg opacity-90">
                {selectedSubject.name} • {selectedChapter.name} • {selectedDifficulty.name}
              </p>
            </div>
          </div>

          {/* Answer Review */}
          <div className="bg-white rounded-xl shadow-md border border-border p-8 mb-6">
            <h4 className="text-xl font-bold text-primary-blue mb-6">Answer Review</h4>
            {mockQuestions.map((question, index) => {
              const userAnswer = answers[question.id]
              const isCorrect = userAnswer === question.correctAnswer
              return (
                <div key={question.id} className="mb-8 last:mb-0 pb-8 last:pb-0 border-b last:border-0 border-border">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <span className="inline-block bg-gray-100 text-text-primary text-sm font-bold px-3 py-1 rounded-full mb-3">
                        Question {index + 1}
                      </span>
                      <h5 className="text-lg font-semibold text-text-primary">{question.question}</h5>
                    </div>
                    <span className={`flex items-center space-x-2 px-4 py-2 rounded-full text-white font-semibold ${
                      isCorrect ? 'bg-success-green' : 'bg-red-500'
                    }`}>
                      {isCorrect ? '✓ Correct' : '✗ Wrong'}
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    {question.options.map((option) => {
                      const isUserAnswer = userAnswer === option.id
                      const isCorrectAnswer = question.correctAnswer === option.id
                      return (
                        <div
                          key={option.id}
                          className={`p-4 rounded-lg border-2 ${
                            isCorrectAnswer
                              ? 'border-success-green bg-green-50'
                              : isUserAnswer && !isCorrect
                              ? 'border-red-500 bg-red-50'
                              : 'border-border'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-text-primary font-medium">
                              {option.id.toUpperCase()}. {option.text}
                            </span>
                            {isCorrectAnswer && (
                              <span className="text-success-green font-bold">✓ Correct Answer</span>
                            )}
                            {isUserAnswer && !isCorrect && (
                              <span className="text-red-500 font-bold">Your Answer</span>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <div className="bg-blue-50 border-l-4 border-primary-blue p-4 rounded">
                    <p className="text-sm font-semibold text-primary-blue mb-1">Explanation:</p>
                    <p className="text-sm text-text-primary">{question.explanation}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="flex items-center justify-center">
            <button
              onClick={handleStartNew}
              className="px-8 py-3 bg-primary-blue text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Start New Quiz
            </button>
          </div>
        </div>
      </PageContainer>
    )
  }
}

export default Practice
