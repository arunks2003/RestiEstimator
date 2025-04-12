import React from 'react';
import ResultsTable from './ResultsTable';
import MaterialsPieChart from './MaterialsPieChart';

const ResultsDisplay = ({ data }) => {
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="lg:col-span-2">
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Project Summary
                            </h3>
                        </div>
                        <div className="px-4 py-5 sm:p-6">
                            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3">
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Total Area</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{data.totalArea} sq. ft.</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Construction Type</dt>
                                    <dd className="mt-1 text-sm text-gray-900 capitalize">{data.quality}</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Estimated Total Cost</dt>
                                    <dd className="mt-1 text-sm font-bold text-indigo-600">
                                        {new Intl.NumberFormat('en-IN', {
                                            style: 'currency',
                                            currency: 'INR',
                                            maximumFractionDigits: 0
                                        }).format(data.totalCost)}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <MaterialsPieChart materials={data.materials} />
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Cost Distribution</h3>
                    <div className="space-y-4">
                        {data.materials.map((material, index) => (
                            <div key={index}>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="font-medium text-gray-700">{material.name}</span>
                                    <span className="text-gray-500">
                                        {((material.totalCost / data.totalCost) * 100).toFixed(1)}%
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div
                                        className="bg-indigo-600 h-2.5 rounded-full"
                                        style={{ width: `${(material.totalCost / data.totalCost) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <ResultsTable data={data} />

            <div className="bg-indigo-50 rounded-lg p-6">
                <div className="flex items-center">
                    <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full">
                        <svg className="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="ml-3">
                        <h3 className="text-sm font-medium text-indigo-800">Note</h3>
                        <div className="mt-1 text-sm text-indigo-700">
                            <p>
                                This is an approximate estimate. Actual costs may vary based on location,
                                market conditions, and specific design requirements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultsDisplay;