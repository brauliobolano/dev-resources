import { useState } from "react";
import { FormattedMessage } from 'react-intl';
import React from "react";

const LanguageSwitcher = ({ setLanguage, language }) => {

    const USflag = "https://img.icons8.com/color/48/000000/usa.png"; //const USflagAlt = "USA Flag";
    const SPflag = "https://img.icons8.com/color/48/000000/spain.png"; //const SPflagAlt = "Spain Flag";
    const USflagAlt = "ENG"; // This is the alt text for the USA flag
    const SPflagAlt = "ESP"; // This is the alt text for the Spain flag

    const currentFlag = language === "en" ? USflag : SPflag;
    const currentFlagAlt = language === "en" ? USflagAlt : SPflagAlt;

    const [openLanguageMenu, setOpenLanguageMenu] = useState(false);
    const [change180, setChange180] = useState(false); // This is the state for the arrow icon that appears when the user clicks on the language menu
    const hiddenLanguageMenu = openLanguageMenu ? '' : 'hidden'; 
    const changeArrowIcon = change180 ? 'transform rotate-180' : ''; // This is the state for the arrow icon that appears when the user clicks on the language menu

    const handleLanguageClick = (lang) => { // This function is called when the user clicks on a language option
        setLanguage(lang); // This sets the language in the parent component
        setOpenLanguageMenu(false); // This closes the language menu
        setChange180(!change180); // This changes the arrow icon
    };

    const changeLanguageMenu = () => { // This function is called when the user clicks on the language menu
        setOpenLanguageMenu(!openLanguageMenu); // This opens the language menu
        setChange180(!change180); // This changes the arrow icon
    };
    return (
        <div>
            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="p-1 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-gray-700 text-black dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 text-sm inline-flex items-center hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg me-1 ms-1 my-1" type="button" onClick={() => changeLanguageMenu()}>
                <div className="flex items-center p-1">
                    <img className="w-6 h-6" src={currentFlag} alt={currentFlagAlt} />
                    <svg className={`w-2.5 h-2.5 ms-3 ${changeArrowIcon}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </div>
            </button>

            {/* <!-- Dropdown menu --> */}
            <div id="dropdown" className={`z-10 fixed mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-33 dark:bg-gray-700 ${hiddenLanguageMenu}`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a href="#" className="flex block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => handleLanguageClick("en")}><img className="w-6 h-6 pr-1" src={USflag} alt={USflagAlt} />English</a>
                    </li>
                    <li>
                        <a href="#" className=" flex block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => handleLanguageClick("es")}><img className="w-6 h-6 pr-1" src={SPflag} alt={SPflagAlt} />Español</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default LanguageSwitcher;
