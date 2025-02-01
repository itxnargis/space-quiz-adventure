import React from "react"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"

const ResultScreen = ({ score, totalQuestions, onRestart }) => {
  const percentage = (score / totalQuestions) * 100

  React.useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })
  }, [])

  return (
    <div className="result-screen">
      <motion.h2 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        Quiz Completed!
      </motion.h2>
      <motion.div
        className="score"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <div className="score-circle">
          <div className="score-number">{percentage.toFixed(0)}%</div>
        </div>
      </motion.div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        You scored {score} out of {totalQuestions}
      </motion.p>
      <motion.div className="achievement" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
        {percentage === 100 && "🏆 Perfect Score!"}
        {percentage >= 80 && percentage < 100 && "🥇 Gold Star!"}
        {percentage >= 60 && percentage < 80 && "🥈 Silver Star!"}
        {percentage >= 40 && percentage < 60 && "🥉 Bronze Star!"}
        {percentage < 40 && "Keep practicing!"}
      </motion.div>
      <motion.button
        className="restart-button"
        onClick={onRestart}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        Restart Quiz
      </motion.button>
    </div>
  )
}

export default ResultScreen

