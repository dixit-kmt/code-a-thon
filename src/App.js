import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MentalHealthPage from "./pages/MentalHealthPage";
import BmiCalculatorPage from "./pages/BmiCalculatorPage";
import AboutPage from "./pages/AboutPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/mental-health" element={<MentalHealthPage />} />
        <Route path="/bmi" element={<BmiCalculatorPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
