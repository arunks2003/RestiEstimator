import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ResultsTable from './ResultsTable';
import MaterialsPieChart from './MaterialsPieChart';
import { PDFDownloadLink } from '@react-pdf/renderer';
import EstimatePDF from './EstimatePDF';

const SavedEstimates = () => {
    const [savedEstimates, setSavedEstimates] = useState([]);
    const [selectedEstimate, setSelectedEstimate] = useState(null);

    // Load saved estimates from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('resiEstimatorData');
        if (saved) {
            setSelectedEstimate(JSON.parse(saved));
            setSavedEstimates([JSON.parse(saved)]); // For multiple estimates, you'd need to modify storage
        }
    }, []);

    const handleClearAll = () => {
        localStorage.removeItem('resiEstimatorData');
        setSavedEstimates([]);
        setSelectedEstimate(null);
    };

    if (savedEstimates.length === 0) {
        return (
            <div className="min-h-[50vh] bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="px-6 py-12 text-center">
                        <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                            />
                        </svg>
                        <h3 className="mt-2 text-lg font-medium text-gray-900">No saved estimates</h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Get started by creating a new estimate.
                        </p>
                        <div className="mt-6">
                            <Link
                                to="/"
                                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <svg
                                    className="-ml-1 mr-2 h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                New Estimate
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8 flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-900">Saved Estimates</h1>
                    <div className="flex gap-2">
                        <PDFDownloadLink
                            document={<EstimatePDF estimate={selectedEstimate} />}
                            fileName={`resi-estimate-${selectedEstimate.bhk}bhk-${selectedEstimate.totalArea}sqft.pdf`}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Export PDF
                        </PDFDownloadLink>
                        <button
                            onClick={handleClearAll}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            Clear All
                        </button>
                    </div>
                </div>

                {/* Estimate Selection (for multiple estimates) */}
                <div className="mb-8 bg-white shadow rounded-lg overflow-hidden">
                    <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Select Estimate
                        </h3>
                    </div>
                    <div className="px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {savedEstimates.map((estimate, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedEstimate(estimate)}
                                    className={`border rounded-lg p-4 cursor-pointer hover:border-indigo-300 transition-colors ${selectedEstimate === estimate
                                        ? 'border-indigo-500 bg-indigo-50'
                                        : 'border-gray-200'
                                        }`}
                                >
                                    <h4 className="text-lg font-medium text-gray-900">
                                        Estimate #{index + 1}
                                    </h4>
                                    <p className="text-sm text-gray-500">
                                        {estimate.bhk} BHK • {estimate.totalArea} sq.ft • {estimate.floors} floors
                                    </p>
                                    <p className="mt-2 text-lg font-bold text-indigo-600">
                                        {new Intl.NumberFormat('en-IN', {
                                            style: 'currency',
                                            currency: 'INR',
                                            maximumFractionDigits: 0
                                        }).format(estimate.totalCost)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Selected Estimate Details */}
                {selectedEstimate && (
                    <div className="space-y-8">
                        {/* Summary Card */}
                        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    Estimate Summary
                                </h3>
                            </div>
                            <div className="px-4 py-5 sm:p-6">
                                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3">
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Configuration</dt>
                                        <dd className="mt-1 text-sm text-gray-900">
                                            {selectedEstimate.bhk} BHK • {selectedEstimate.floors} {selectedEstimate.floors > 1 ? 'Floors' : 'Floor'}
                                        </dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Total Area</dt>
                                        <dd className="mt-1 text-sm text-gray-900">
                                            {selectedEstimate.totalArea} sq.ft
                                        </dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Quality</dt>
                                        <dd className="mt-1 text-sm text-gray-900 capitalize">
                                            {selectedEstimate.quality}
                                        </dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Total Cost</dt>
                                        <dd className="mt-1 text-sm font-bold text-indigo-600">
                                            {new Intl.NumberFormat('en-IN', {
                                                style: 'currency',
                                                currency: 'INR',
                                                maximumFractionDigits: 0
                                            }).format(selectedEstimate.totalCost)}
                                        </dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Location</dt>
                                        <dd className="mt-1 text-sm text-gray-900 capitalize">
                                            {selectedEstimate.location}
                                        </dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Date Saved</dt>
                                        <dd className="mt-1 text-sm text-gray-900">
                                            {new Date().toLocaleDateString()} {/* You should store date when saving */}
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>

                        {/* Chart and Table */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow">
                                <MaterialsPieChart materials={selectedEstimate.materials} />
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">Cost Distribution</h3>
                                <div className="space-y-4">
                                    {selectedEstimate.materials.map((material, index) => (
                                        <div key={index}>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="font-medium text-gray-700">{material.name}</span>
                                                <span className="text-gray-500">
                                                    {((material.totalCost / selectedEstimate.totalCost) * 100).toFixed(1)}%
                                                </span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                                <div
                                                    className="bg-indigo-600 h-2.5 rounded-full"
                                                    style={{ width: `${(material.totalCost / selectedEstimate.totalCost) * 100}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Results Table */}
                        <ResultsTable data={selectedEstimate} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SavedEstimates;