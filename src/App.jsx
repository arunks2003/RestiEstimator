import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EstimationForm from './components/EstimationForm';
import ResultsDisplay from './components/ResultsDisplay.jsx';
import { calculateMaterials } from './services/CalculationService';
import Navbar from './components/Navbar'; // You'll need to create this
import About from './components/About';
import Footer from './components/Footer.jsx';
import SavedEstimates from './components/SavedEstimates.jsx';


function App() {
  const [results, setResults] = useState(null);

  const handleCalculate = (formData) => {
    console.log("Form data received:", formData);
    const calculatedResults = calculateMaterials(formData);
    console.log("Calculated results:", calculatedResults);
    setResults(calculatedResults);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Add your Navbar here */}
        <Navbar />

        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Routes>
              {/* Main estimation route */}
              <Route path="/" element={
                <>
                  <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                      Residential Cost Estimator
                    </h1>
                    <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                      Get accurate construction cost estimates for your dream home
                    </p>
                  </div>

                  <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="p-6 sm:p-8">
                      <EstimationForm onCalculate={handleCalculate} />
                    </div>

                    {results && (
                      <div className="border-t border-gray-200 px-6 py-8 bg-gray-50">
                        <ResultsDisplay data={results} />
                      </div>
                    )}
                  </div>
                </>
              } />
              <Route path="/about" element={<About />} />

              {/* <Route path="/about" element={<AboutPage />} /> */}
              <Route path="/saved" element={<SavedEstimates />} />
            </Routes>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;