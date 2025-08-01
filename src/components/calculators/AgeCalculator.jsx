import { useState } from 'react';
import { calculateExactAge } from '../../utils/ageUtils';

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAge(calculateExactAge(birthDate));
  };

  return (
    <section className="bg-[#1f1f2f] rounded-2xl shadow-xl p-8 text-white">
      <h2 className="text-2xl font-bold mb-6 text-center text-teal-400">
        🎉 Calculate Your Exact Age
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="birthDate" className="block text-sm font-medium text-gray-300 mb-1">
            Select your birthdate
          </label>
          <input
            id="birthDate"
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-[#2a2a3a] text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-teal-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-200 shadow"
        >
          🔍 Calculate Age
        </button>
      </form>

      {age && (
        <div className="mt-6 p-4 bg-[#243447] rounded-lg border border-teal-400/30 text-teal-300 text-center">
          🎂 You are <span className="font-bold text-white">{age.years}</span> years,{' '}
          <span className="font-bold text-white">{age.months}</span> months, and{' '}
          <span className="font-bold text-white">{age.days}</span> days old.
        </div>
      )}
    </section>
  );
}
