import React, { useState } from 'react';
import { calculatePossibleBhks } from '../services/CalculationService';

const EstimationForm = ({ onCalculate }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        area: null,
        bhk: null,
        floors: 1,
        location: 'urban',
        quality: 'standard'
    });
    const [possibleBhks, setPossibleBhks] = useState([]);

    const handleAreaSubmit = (e) => {
        e.preventDefault();
        const bhks = calculatePossibleBhks(formData.area);
        setPossibleBhks(bhks);
        setStep(2);
    };

    const handleBhkSelect = (bhk) => {
        setFormData(prev => ({ ...prev, bhk }));
        setStep(3);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'floors' ? parseInt(value) || 0 : value
        }));
    };

    const handleFinalSubmit = (e) => {
        e.preventDefault();
        onCalculate(formData);
    };

    // Step 1: Area Input
    if (step === 1) {
        return (
            <form onSubmit={handleAreaSubmit} className="space-y-6">
                <div>
                    <label htmlFor="area" className="block text-sm font-medium text-gray-700">
                        Plot Area (sq. ft.)
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                            type="number"
                            name="area"
                            id="area"
                            min="100"
                            step="50"
                            value={formData.area || ''}
                            onChange={(e) => setFormData({ ...formData, area: parseInt(e.target.value) || 0 })}
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-12 py-3 sm:text-sm border-gray-300 rounded-md border"
                            placeholder="Enter plot area"
                            required
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">sq. ft.</span>
                        </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                        We'll suggest suitable BHK options based on your plot area
                    </p>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        disabled={!formData.area}
                    >
                        Next: Select BHK
                    </button>
                </div>
            </form>
        );
    }

    // Step 2: BHK Selection
    if (step === 2) {
        return (
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-medium text-gray-900">
                        Suggested BHK Options for {formData.area} sq. ft.
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                        Based on standard space requirements
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {possibleBhks.map((bhk) => (
                        <button
                            key={bhk}
                            type="button"
                            onClick={() => handleBhkSelect(bhk)}
                            className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-indigo-500 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 transition-all"
                        >
                            <div className="flex-1 min-w-0">
                                <span className="absolute inset-0" aria-hidden="true" />
                                <p className="text-lg font-medium text-gray-900">
                                    {bhk} BHK
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                    Recommended for {formData.area} sq. ft.
                                </p>
                            </div>
                        </button>
                    ))}
                </div>

                <div className="flex justify-between">
                    <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Back
                    </button>
                </div>
            </div>
        );
    }

    // Step 3: Additional Inputs
    return (
        <form onSubmit={handleFinalSubmit} className="space-y-6">
            <div className="bg-indigo-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                    <div>
                        <h4 className="text-sm font-medium text-indigo-800">Selected Configuration</h4>
                        <p className="text-lg font-semibold text-gray-900">
                            {formData.bhk} BHK • {formData.area} sq. ft.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        Change
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                    <label htmlFor="floors" className="block text-sm font-medium text-gray-700">
                        Number of Floors
                    </label>
                    <input
                        type="number"
                        name="floors"
                        id="floors"
                        min="1"
                        max="10"
                        value={formData.floors}
                        onChange={handleChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 py-2 sm:text-sm border-gray-300 rounded-md border"
                    />
                </div>

                <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                        Location Type
                    </label>
                    <select
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border"
                    >
                        <option value="urban">Urban</option>
                        <option value="suburban">Suburban</option>
                        <option value="rural">Rural</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="quality" className="block text-sm font-medium text-gray-700">
                        Construction Quality
                    </label>
                    <select
                        id="quality"
                        name="quality"
                        value={formData.quality}
                        onChange={handleChange}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border"
                    >
                        <option value="economy">Economy</option>
                        <option value="standard">Standard</option>
                        <option value="premium">Premium</option>
                        <option value="luxury">Luxury</option>
                    </select>
                </div>
            </div>

            <div className="flex justify-between">
                <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Back
                </button>
                <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Calculate Estimate
                </button>
            </div>
        </form>
    );
};

export default EstimationForm;