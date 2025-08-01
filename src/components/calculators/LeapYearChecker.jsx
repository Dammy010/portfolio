import { useState } from 'react';

export default function LeapYearChecker() {
  const [year, setYear] = useState('');
  const [isLeap, setIsLeap] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const y = parseInt(year);
    if (!isNaN(y)) {
      const leap = (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
      setIsLeap(leap);
    }
  };

  return (
    <section className="bg-indigo-800/20 p-6 sm:p-8 rounded-xl shadow-md text-white">
      <h2 className="text-2xl font-bold mb-6 text-indigo-300 text-center">🔄 Leap Year Checker</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          placeholder="Enter a year (e.g. 2024)"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-full px-4 py-2 rounded-md bg-indigo-950 text-white border border-indigo-700 placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 rounded-md transition-colors duration-300"
        >
          Check Year
        </button>
      </form>

      {isLeap !== null && (
        <div className="mt-6 text-xl font-medium text-center">
          {isLeap ? (
            <p className="text-green-400">{year} is a Leap Year ✅</p>
          ) : (
            <p className="text-red-400">{year} is NOT a Leap Year ❌</p>
          )}
        </div>
      )}
    </section>
  );
}
