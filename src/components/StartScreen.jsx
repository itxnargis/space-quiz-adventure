import { motion } from "framer-motion"

const StartScreen = ({ onStart, quizTitle }) => {
  return (
    <div className="start-screen">
      <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
        {quizTitle || "Space Quiz Adventure"}
      </motion.h1>
      <motion.p initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
        Embark on a cosmic journey of knowledge!
      </motion.p>
      <motion.button
        className="start-button"
        onClick={onStart}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Launch Quiz
      </motion.button>
    </div>
  )
}

export default StartScreen

