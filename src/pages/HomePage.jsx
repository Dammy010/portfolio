import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-12 px-4">
      
      {/* Hero Section */}
      <motion.section
        className="text-center max-w-4xl mx-auto mb-20"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl font-extrabold text-cyan-300 mb-6"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          Welcome to AgeTimeApp
        </motion.h1>
        <p className="text-lg md:text-xl text-slate-200 mb-10">
          Calculate your age, compare global time zones, or check leap years with ease and elegance.
        </p>

        <motion.div
          className="flex justify-center flex-wrap gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link
            to="/age-calculator"
            className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-xl shadow-lg text-white font-semibold transition"
          >
            Age Calculator
          </Link>
          <Link
            to="/time-difference"
            className="bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded-xl shadow-lg text-white font-semibold transition"
          >
            Time Difference Calculator
          </Link>
          <Link
            to="/calculators/leap-year"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl shadow-lg text-white font-semibold transition"
          >
            Leap Year Checker
          </Link>
        </motion.div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        className="max-w-4xl mx-auto mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-cyan-200 text-center mb-6 border-b border-cyan-500 pb-2">
          📘 How It Works
        </h2>
        <ul className="space-y-3 text-slate-100 text-base leading-relaxed">
          <li>📅 Input your date of birth and get your age in years, months, and days instantly.</li>
          <li>🌐 Select two locations to get accurate real-time time differences using global data.</li>
          <li>🗓 Enter any year to determine if it's a leap year — perfect for education, planning, or fun.</li>
        </ul>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-teal-200 text-center mb-6 border-b border-teal-500 pb-2">
          🚀 Features
        </h2>
        <ul className="grid md:grid-cols-2 gap-6">
          {[
            { text: "✅ Precise age calculation down to the day", border: "border-cyan-400" },
            { text: "🌍 Up-to-date timezone database with global coverage", border: "border-teal-400" },
            { text: "🗓 Simple and fast leap year checker for any year", border: "border-purple-400" },
            { text: "📱 Fully responsive on mobile, tablet, and desktop", border: "border-yellow-400" },
          ].map((feature, idx) => (
            <motion.li
              key={idx}
              className={`bg-slate-800/80 backdrop-blur-md rounded-lg p-5 border-l-4 ${feature.border} shadow`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {feature.text}
            </motion.li>
          ))}
        </ul>
      </motion.section>
    </div>
  );
}
