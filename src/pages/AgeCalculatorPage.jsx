import AgeCalculator from '../components/calculators/AgeCalculator';

export default function AgeCalculatorPage() {
  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-teal-400 mb-8">
        🎂 Age Calculator
      </h1>
      <div className="max-w-3xl mx-auto bg-[#2e2e3e] p-6 rounded-xl shadow-xl border border-teal-500/30">
        <AgeCalculator />
      </div>
    </div>
  );
}
