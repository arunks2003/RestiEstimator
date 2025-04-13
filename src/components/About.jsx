import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
                {/* Header Section */}
                <div className="bg-indigo-600 px-6 py-8 text-center">
                    <h1 className="text-4xl font-bold text-white">About ResiEstimator</h1>
                    <p className="mt-2 text-lg text-indigo-100">
                        Smart construction cost estimation for modern homeowners
                    </p>
                </div>

                {/* Content Section */}
                <div className="px-6 py-8 space-y-8">
                    {/* App Description */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800">Our Goal</h2>
                        <p className="text-gray-600 leading-relaxed">
                            ResiEstimator was created to simplify residential construction planning by providing
                            accurate, instant cost estimates. We empower homeowners and builders with data-driven
                            insights to make informed budgeting decisions.
                        </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800">Key Features</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <li className="flex items-start space-x-3">
                                <div className="flex-shrink-0 h-5 w-5 text-indigo-500 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-600">Instant cost calculations</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <div className="flex-shrink-0 h-5 w-5 text-indigo-500 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-600">Material breakdowns</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <div className="flex-shrink-0 h-5 w-5 text-indigo-500 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-600">Customizable quality levels</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <div className="flex-shrink-0 h-5 w-5 text-indigo-500 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-600">Responsive design</span>
                            </li>
                        </ul>
                    </div>

                    {/* Team/Developer Info */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800">Development Team</h2>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                                        <span className="text-indigo-600 font-bold">Y</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800">Arun Kumar</h3>
                                    <p className="text-gray-600">Full Stack Developer</p>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-600">
                                Built with React, Tailwind CSS, and modern web technologies to deliver
                                a seamless user experience.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                                        <span className="text-indigo-600 font-bold">Y</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800">Anurodh</h3>
                                    <p className="text-gray-600">Full Stack Developer</p>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-600">
                                Built with React, Tailwind CSS, and modern web technologies to deliver
                                a seamless user experience.
                            </p>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center pt-6">
                        <Link
                            to="/"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Start Estimating
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 -mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;