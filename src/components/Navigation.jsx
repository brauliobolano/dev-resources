import { FormattedMessage } from 'react-intl';
import DarkModeButton from './DarkMode';
import LanguageSwitcher from './LanguageSwitcher';
import React, { useState } from "react";

const Navigation = ({ setLanguage, language }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="fixed right-0 left-0 px-12 h-14 bg-red-100 border-b-2 border-b-indigo-500">
            <div className="flex max-w-7xl w-full mx-auto justify-between h-full bg-blue-200">
                <div className="bg-indigo-100">
                    <ul>
                        <li className="pt-3">Logo</li>
                    </ul>
                </div>
                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>Menu</button>
                <div className={`flex ${isMenuOpen ? 'block' : 'hidden'} md:flex`} >
                    <div className="bg-indigo-500 dark:bg-indigo-100">
                        <ul className="flex h-full">
                            <li className="border-black border-4 px-2 pt-2"><a href="#top">
                                <FormattedMessage id="navigation-top" defaultMessage="Home"/>
                            </a></li>
                            <li className="border-black border-4 px-2 pt-2"><a href="#tutorials">
                                <FormattedMessage  id="navigation-tutorials" defaultMessage="Tutorials"/>
                            </a></li>
                            <li className="border-black border-4 px-2 pt-2"><a href="#resources">
                                <FormattedMessage id="navigation-resources" defaultMessage="Resources"/>
                            </a></li>
                            <li className="border-black border-4 px-2 pt-2"><a href="#mentoring">
                                <FormattedMessage id='navigation-mentoring' defaultMessage="Mentoring" />
                            </a></li>
                        </ul>
                    </div>
                    <div className="bg-indigo-200">
                        <ul className="flex h-full ">
                            <li className="px-2 pt-3">
                                <LanguageSwitcher language={language} setLanguage={setLanguage}/>
                            </li>
                            <li className="border-black border-4 px-2">
                                <DarkModeButton />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigation;