import { motion } from "framer-motion"

const QuizScreen = ({ question, onAnswer, currentQuestion, totalQuestions, streak }) => {
  if (!question) {
    return <div>Loading question...</div>
  }

  const progress = ((currentQuestion + 1) / totalQuestions) * 100

  const handleOptionClick = (option) => {
    onAnswer(option.is_correct)
  }

  return (
    <div className="quiz-screen">
      <motion.div
        className="progress-bar"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />
      <h2>
        Question {currentQuestion + 1} of {totalQuestions}
      </h2>
      <motion.div
        className="question"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {question.description}
      </motion.div>
      <div className="options">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            className="option"
            onClick={() => handleOptionClick(option)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {option.description}
          </motion.button>
        ))}
      </div>
      <motion.div
        className="streak-indicator"
        initial={{ scale: 0 }}
        animate={{ scale: streak > 0 ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        🔥 Streak: {streak}
      </motion.div>
    </div>
  )
}

export default QuizScreen

