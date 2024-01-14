import { FormattedMessage } from 'react-intl';
import React, { useState } from "react";
const MobileMenuButton = () => {
    // This will not include LanguageSwitcher.jsx and DarkModeButton.jsx, because they will be included in the Navigation.jsx component instead 
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const changeVisibility = isMenuOpen ? "block" : "hidden";

    const handleMneuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className="sm:block md:hidden">
            <button data-collapse-toggle="navbar-search" type="button" className=" p-1 items-center p-2 ms-1 me-1 my-1 justify-center text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false" onClick={handleMneuClick}>
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button> 
            <div id="dropdown" className={`z-10 fixed mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-24 dark:bg-gray-700 ${changeVisibility}`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                     <li>
                        <a href="#top" className="flex block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleMneuClick}>
                        <FormattedMessage id="navigation-top" defaultMessage="Home"/>
                        </a>
                    </li>
                    <li>
                        <a href="#tutorials" className="flex block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleMneuClick}>
                        <FormattedMessage  id="navigation-tutorials" defaultMessage="Academies"/>
                        </a>
                    </li>
                    <li>
                        <a href="#mentoring" className=" flex block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleMneuClick}>
                        <FormattedMessage id='navigation-mentoring' defaultMessage="Channels" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MobileMenuButton;