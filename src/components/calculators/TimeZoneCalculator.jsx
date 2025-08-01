import { useState } from 'react';

const countryTimeOffsetMap = {
  "Nigeria": 1, "United States (New York)": -5, "United States (Los Angeles)": -8,
  "Canada (Toronto)": -5, "Canada (Vancouver)": -8, "United Kingdom": 0,
  "Germany": 1, "France": 1, "Italy": 1, "Spain": 1, "India": 5.5,
  "Pakistan": 5, "Bangladesh": 6, "Nepal": 5.75, "Sri Lanka": 5.5, "China": 8,
  "Japan": 9, "South Korea": 9, "North Korea": 9, "Thailand": 7, "Vietnam": 7,
  "Indonesia (Jakarta)": 7, "Philippines": 8, "Australia (Sydney)": 10,
  "Australia (Perth)": 8, "New Zealand": 12, "Russia (Moscow)": 3,
  "Russia (Vladivostok)": 10, "Brazil (Brasilia)": -3, "Argentina": -3,
  "Chile": -4, "South Africa": 2, "Egypt": 2, "Kenya": 3, "UAE": 4,
  "Saudi Arabia": 3, "Turkey": 3, "Mexico (Mexico City)": -6, "Colombia": -5,
  "Venezuela": -4, "Malaysia": 8, "Singapore": 8, "Israel": 2, "Ghana": 0,
  "Morocco": 1, "Iceland": 0
};

export default function TimeZoneCalculator() {
  const [country1, setCountry1] = useState('');
  const [country2, setCountry2] = useState('');
  const [difference, setDifference] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    setError('');
    setDifference(null);

    const offset1 = countryTimeOffsetMap[country1];
    const offset2 = countryTimeOffsetMap[country2];

    if (offset1 === undefined || offset2 === undefined) {
      setError('One or both countries do not have mapped timezones.');
      return;
    }

    const diff = Math.abs(offset1 - offset2);
    setDifference(diff.toFixed(2));
  };

  const countryList = Object.keys(countryTimeOffsetMap).sort();

  return (
    <section className="bg-gradient-to-tr from-indigo-900 via-indigo-800 to-indigo-900 text-white rounded-2xl shadow-xl p-8 mt-10 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-200">
        🌐 Country Time Difference Calculator
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block mb-2 text-sm font-medium">Select Country 1</label>
          <select
            value={country1}
            onChange={(e) => setCountry1(e.target.value)}
            className="w-full bg-white text-black px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="">-- Choose a country --</option>
            {countryList.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Select Country 2</label>
          <select
            value={country2}
            onChange={(e) => setCountry2(e.target.value)}
            className="w-full bg-white text-black px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="">-- Choose a country --</option>
            {countryList.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleCalculate}
        disabled={!country1 || !country2}
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-6 rounded-xl font-semibold text-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        🕒 Calculate Time Difference
      </button>

      {error && (
        <p className="mt-4 text-red-400 font-medium text-center">{error}</p>
      )}

      {difference !== null && !error && (
        <p className="mt-6 text-lg font-semibold text-center text-green-300">
          🕓 The time difference between <span className="text-white">{country1}</span> and <span className="text-white">{country2}</span> is <span className="text-white font-bold">{difference} hours</span>.
        </p>
      )}
    </section>
  );
}
