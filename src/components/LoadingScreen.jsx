import { motion } from "framer-motion"

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <motion.div
        className="loading-spinner"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        Preparing your cosmic journey...
      </motion.p>
    </div>
  )
}

export default LoadingScreen

