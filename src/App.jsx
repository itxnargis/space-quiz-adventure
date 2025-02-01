import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { fetchQuizData } from "./api"
import StartScreen from "./components/StartScreen"
import QuizScreen from "./components/QuizScreen"
import ResultScreen from "./components/ResultScreen"
import LoadingScreen from "./components/LoadingScreen"
import ErrorScreen from "./components/ErrorScreen"
import "./App.css"

const App = () => {
  const [quizData, setQuizData] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [gameState, setGameState] = useState("loading")
  const [error, setError] = useState(null)
  const [streak, setStreak] = useState(0)

  useEffect(() => {
    const loadQuizData = async () => {
      try {
        const data = await fetchQuizData()
        if (data && data.questions && data.questions.length > 0) {
          setQuizData(data)
          setGameState("start")
        } else {
          throw new Error("No quiz data received")
        }
      } catch (err) {
        console.error("Failed to load quiz data:", err)
        setError("Failed to load quiz data. Please try again later.")
        setGameState("error")
      }
    }

    loadQuizData()
  }, [])

  const startQuiz = () => {
    setGameState("quiz")
  }

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
      setStreak(streak + 1)
    } else {
      setStreak(0)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < quizData.questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setGameState("result")
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setStreak(0)
    setGameState("start")
  }

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {gameState === "loading" && <LoadingScreen />}
        {gameState === "error" && <ErrorScreen message={error} onRetry={() => window.location.reload()} />}
        {gameState === "start" && (
          <motion.div key="start" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <StartScreen onStart={startQuiz} quizTitle={quizData?.title} />
          </motion.div>
        )}
        {gameState === "quiz" && quizData && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <QuizScreen
              question={quizData.questions[currentQuestion]}
              onAnswer={handleAnswer}
              currentQuestion={currentQuestion}
              totalQuestions={quizData.questions.length}
              streak={streak}
            />
          </motion.div>
        )}
        {gameState === "result" && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <ResultScreen
              score={score}
              totalQuestions={quizData ? quizData.questions.length : 0}
              onRestart={restartQuiz}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App

