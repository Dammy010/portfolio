import TimeZoneCalculator from '../components/calculators/TimeZoneCalculator';

export default function TimeZoneCalculatorPage() {
  return (
    <div className="min-h-screen bg-indigo-950 text-white px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-indigo-300 mb-8">
        🌍 Time Difference Calculator
      </h1>
      <div className="max-w-3xl mx-auto bg-indigo-900 p-6 rounded-lg shadow-lg">
        <TimeZoneCalculator />
      </div>
    </div>
  );
}
