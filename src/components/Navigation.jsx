import { FormattedMessage } from 'react-intl';
import DarkModeButton from './DarkMode';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenuButton from './MobileMenuButton';
import React, { useState } from "react";



const Navigation = ({ setLanguage, language }) => {

    const [isScrolled, setIsScrolled] = useState(false);// This is used to hide the navigation bar when the user scrolls down the page
    var lastScrollTop = 0; 
    var navbar = document.getElementById("navigationBar");
        window.addEventListener("scroll", function(){
            if (window.matchMedia("(max-width: 768px)").matches) { // If media query matches mobile view then hide the navigation bar when the user scrolls down the page
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
           
                if (scrollTop > lastScrollTop){
                    navbar.style.top = "-100px";
                } else {
                    navbar.style.top = "0";
                }
            lastScrollTop = scrollTop;
        }
        }
        );


const Scrolled = () => { //This function is used to hide the border-bottom on the navigation bar when the user scrolls down the page
    const handleScroll = () => {
        setIsScrolled(window.pageYOffset === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return isScrolled;
};



const borderVisibility = Scrolled() ? "" : "border-b-2 border-gray-200 dark:border-gray-700";


    return (
        <div id="navigationBar" className={`fixed right-0 left-0 lg:px-10 xl:px-10 2xl:px-10 px-5 h-14 ${borderVisibility} bg-white dark:bg-[#121220] dark:text-gray-400`}>
            <div className="flex max-w-[1340px] w-full mx-auto justify-between h-full">
                <div className="">
                    <ul className='flex'>
                        <li className="pt-2 flex items-center">
                            
                            <h2 className="sm:text-2xl md:text-2xl font-serif font-extrabold tracking-tight text-gray-500 dark:text-gray-300 underline decoration-double">
                                    <span className=' underline decoration-sky-500 '>Resources</span><span className='underline decoration-pink-500 animate-pulse'>For</span><span className='underline decoration-indigo-500'>Developers
                                    </span>
                            </h2>
                        </li>
                        <li className="pt-2 px-3"><MobileMenuButton/></li>
                    </ul>
                </div>
                <div className='flex'>
                    <div className="flex hidden w-full md:block md:w-auto">
                        <ul className="flex h-full">
                            <li className=" px-2 pt-4 dark:hover:text-white hover:font-bold"><a href="#top">
                                <FormattedMessage id="navigation-top" defaultMessage="Home"/>
                            </a></li>
                            <li className=" px-2 pt-4 dark:hover:text-white hover:font-bold"><a href="#tutorials">
                                <FormattedMessage  id="navigation-tutorials" defaultMessage="Academies"/>
                            </a></li>
                            <li className=" px-2 pt-4 dark:hover:text-white hover:font-bold"><a href="#mentoring">
                                <FormattedMessage id='navigation-mentoring' defaultMessage="Channels" />
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