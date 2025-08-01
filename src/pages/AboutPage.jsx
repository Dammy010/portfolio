import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-slate-800 px-6 py-14">
      <motion.div
        className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl font-extrabold text-blue-700 mb-6 text-center"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          ✨ About AgeTimeApp
        </motion.h1>

        <motion.p
          className="text-lg leading-relaxed mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="font-semibold text-blue-600">AgeTimeApp</span> is your intelligent and beautifully designed digital assistant for calculating:
        </motion.p>

        <motion.ul
          className="list-disc list-inside mb-6 text-md space-y-2"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {[
            "Your exact age in years, months, and days.",
            "The time difference between any two global locations with accurate timezone data.",
            "Whether a year is a leap year with our intuitive leap year checker.",
          ].map((text, i) => (
            <motion.li
              key={i}
              className="text-slate-700 font-medium"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              {text}
            </motion.li>
          ))}
        </motion.ul>

        <motion.h2
          className="text-2xl font-semibold text-blue-600 mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          🚀 Problem It Solves
        </motion.h2>

        <motion.p
          className="text-md leading-relaxed text-slate-700 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Many people struggle with calculating their exact age for official documentation, planning life events, or medical assessments.
          Coordinating across time zones is another challenge faced by remote teams, global families, and frequent travelers.
          Additionally, determining whether a given year is a leap year — which affects calendars, birthdays, and scheduling — is not always straightforward.
          <span className="block mt-2 font-medium">
            AgeTimeApp solves all these problems beautifully and effortlessly.
          </span>
        </motion.p>

        <motion.p
          className="text-center mt-8 text-blue-700 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          📱 Built to be fast, responsive, and visually delightful on all devices.
        </motion.p>
      </motion.div>
    </div>
  );
}
