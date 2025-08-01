import { Routes, Route } from 'react-router-dom';
import Home from '../pages/HomePage';
import About from '../pages/AboutPage';
import FAQ from '../pages/FAQPage';
import AgeCalculator from '../pages/AgeCalculatorPage';
import TimeDifference from '../pages/TimeDifferencePage';
import LeapYearCheckerPage from '../pages/LeapYearCheckerPage';



export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/age-calculator" element={<AgeCalculator />} />
      <Route path="/time-difference" element={<TimeDifference />} />
      <Route path="/calculators/leap-year" element={<LeapYearCheckerPage />} />
    </Routes>
  );
}
