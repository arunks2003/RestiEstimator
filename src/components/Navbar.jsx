import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [showMenu, setShowMenu] = React.useState(false);
    const handleOnClick = () => {
        setShowMenu(showMenu => !showMenu);
    }
    const navigate = useNavigate();
    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo and brand name */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center hover:cursor-pointer" onClick={() => navigate('/')}>
                            <img
                                className="h-8 w-auto"
                                src="/logo.png"
                                alt="ResiEstimator Logo"
                            />
                            <span className="ml-2 text-xl font-bold text-indigo-600">
                                ResiEstimator
                            </span>
                        </div>
                    </div>

                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <Link
                            to="/"
                            className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            to="/saved"
                            className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        >
                            Saved Estimates
                        </Link>
                        <Link
                            to="/about"
                            className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        >
                            About
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={handleOnClick}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Menu icon */}
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`${showMenu ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } sm:hidden overflow-hidden transition-all duration-300 ease-in-out`}
                id="mobile-menu"
            >
                <div className="pt-2 pb-3 space-y-1">
                    <Link
                        to="/"
                        className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    >
                        Home
                    </Link>
                    <Link
                        to="/estimate"
                        className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    >
                        New Estimate
                    </Link>
                    <Link
                        to="/saved"
                        className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    >
                        Saved Estimates
                    </Link>
                    <Link
                        to="/about"
                        className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    >
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;