import { motion } from 'framer-motion';

export default function FAQ() {
  const faqItems = [
    {
      question: '📅 How accurate is the age calculator?',
      answer:
        'It provides exact age calculations in years, months, and days using your birth date — no estimations.',
    },
    {
      question: '🌍 What timezones are supported?',
      answer:
        'All global timezones supported by the WorldTimeAPI are available, so you can compare any two cities or regions accurately.',
    },
    {
      question: '🗓️ How does the Leap Year Checker work?',
      answer:
        'Just enter any year (e.g., 2024), and the app instantly tells you whether it’s a leap year or not — using the official leap year rules.',
    },
    {
      question: '🔐 Do I need to sign up?',
      answer:
        'No sign-up or login is required. AgeTimeApp is completely free and privacy-friendly.',
    },
    {
      question: '📱 Is it mobile-friendly?',
      answer:
        'Yes! AgeTimeApp is fully responsive and works beautifully on phones, tablets, and desktops.',
    },
    {
      question: '🎯 Who is this app for?',
      answer:
        'It’s perfect for individuals who need quick and precise age calculations and timezone comparisons — including travelers, remote teams, and healthcare professionals.',
    },
    {
      question: '⚡ How often is the data updated?',
      answer:
        'Timezone data is fetched live from the API, ensuring it’s always up-to-date with current DST changes and region rules.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-slate-800 px-6 py-14">
      <motion.div
        className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl font-extrabold text-blue-700 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          ❓ Frequently Asked Questions
        </motion.h1>

        <div className="space-y-6 text-md leading-relaxed">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-blue-600">{item.question}</h3>
              <p>{item.answer}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-10 text-center text-sm text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Can’t find your question? Reach out to us at{' '}
          <span className="text-blue-600 font-medium">support@agetimeapp.com</span>
        </motion.p>
      </motion.div>
    </div>
  );
}
