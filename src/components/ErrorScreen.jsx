import { motion } from "framer-motion"

const ErrorScreen = ({ message }) => {
  return (
    <div className="error-screen">
      <motion.div
        className="error-icon"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        ⚠️
      </motion.div>
      <motion.h2 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        Oops! Something went wrong
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        {message}
      </motion.p>
      <motion.button
        className="retry-button"
        onClick={() => window.location.reload()}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Retry
      </motion.button>
    </div>
  )
}

export default ErrorScreen

