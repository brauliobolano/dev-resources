import { FormattedMessage } from 'react-intl';
import DarkModeButton from './DarkMode';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenuButton from './MobileMenuButton';
import React, { useState } from "react";
import Logo from '../assets/Logo.png';

const Navigation = ({ setLanguage, language }) => {

    return (
        <div className="fixed right-0 left-0 lg:px-10 xl:px-10 2xl:px-10 px-5 h-14 border-b-2 border-b-indigo-500 bg-white dark:bg-gray-700 dark:text-gray-200 ">
            <div className="flex max-w-[1340px] w-full mx-auto justify-between h-full">
                <div className="">
                    <ul className='flex'>
                        <li className="pt-2">
                            <img src={Logo} alt="Logo" className="h-11 w-11"/>
                        </li>
                        <li className="pt-2 px-3"><MobileMenuButton/></li>
                    </ul>
                </div>
                <div className='flex'>
                    <div className="flex hidden w-full md:block md:w-auto">
                        <ul className="flex h-full">
                            <li className=" px-2 pt-4 dark:hover:text-white"><a href="#top">
                                <FormattedMessage id="navigation-top" defaultMessage="Home"/>
                            </a></li>
                            <li className=" px-2 pt-4 dark:hover:text-white"><a href="#tutorials">
                                <FormattedMessage  id="navigation-tutorials" defaultMessage="Tutorials"/>
                            </a></li>
                            <li className=" px-2 pt-4 dark:hover:text-white"><a href="#resources">
                                <FormattedMessage id="navigation-resources" defaultMessage="Resources"/>
                            </a></li>
                            <li className=" px-2 pt-4 dark:hover:text-white"><a href="#mentoring">
                                <FormattedMessage id='navigation-mentoring' defaultMessage="Mentoring" />
                            </a></li>
                        </ul>
                    </div>
                    <div className="">
                        <ul className="flex h-full ">
                            <li className="px-2 pt-1">
                                <LanguageSwitcher language={language} setLanguage={setLanguage}/>
                            </li>
                            <li className="px-2 pt-2">
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