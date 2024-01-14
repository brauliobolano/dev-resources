import './TB.css';
import { FormattedMessage } from 'react-intl';
import { useState } from "react";
//LOGOS IMPORTS
import ZeroToMasteryImage from '../../assets/ztm.jpg';
import freeCodeCampImage from '../../assets/freecodecamp.png';
import w3schoolsImage from '../../assets/w3schools.jpg';
import CodeAcademyImage from '../../assets/codeacademy.png';
/* import freeCodeCampImage from '../../assets/freecodecamp.png'; */
const TutorialBlock = () => {


    const [loadMore, setLoadMore] = useState("0");
    const [hiddenBlock1, setHiddenBlock1] = useState("hidden");

    const handleLoadMore = () => {
        console.log("Load More Clicked")
        if(loadMore === "0"){
            console.log("Load More Clicked");
            setLoadMore("1");
            setHiddenBlock1('');
            
    }
    };


    return (
        <>
        <div id="tutorials" className="pt-16 lg:px-10 xl:px-10 2xl:px-10 px-5 bg-white dark:bg-[#121220] dark:text-gray-200"  >
            <div className='max-w-[1340px] w-full mx-auto'>
                <div className="TutorialBlock pt-2">
                    <h2 className="pb-5 sm:text-2xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <FormattedMessage id="navigation-tutorials" defaultMessage="Academies"/>
                    </h2>
                </div>
                <hr className="h-px mb-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                <div className="BlocksCage mb-8 ">
                    {/* Blocks One */}
                    <a href="https://zerotomastery.io/" className="flex max-xl:grid-cols-4 lg:grid xl:grid-rows-3 xl:grid-flow-row flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row xl:flex-col xl:row-span-3 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">   
                        <div className='flex xl:h-auto w-full md:w-full lg:w-auto lg:h-full xl:w-full 2xl:w-full xl:h-full xl:col-span-3 xl:row-span-3 bg-white items-center justify-center'><img className="flex object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 xl:w-3/5 md:rounded-none md:rounded-s-lg" src={ZeroToMasteryImage} alt=""/></div>
                        <div className="col-span-3 flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Zero to Mastery Academy</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            <FormattedMessage id="blockOneText" defaultMessage="Access 1,000+ hours of coding, A.I., UX/UI, and more. More than 60 up-to-date tech courses online. Join a community of 400,000+."/>
                            </p>
                            <a href="https://zerotomastery.io/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">zerotomastery.io</a>
                        </div>
                    </a>
                    {/* Blocks Two */}
                    <a href="https://www.freecodecamp.org/" className="flex lg:grid lg:grid-cols-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className='flex xl:h-auto w-full md:w-full lg:w-auto lg:h-full xl:h-full bg-[#0A0A22] items-center justify-center'><img className="flex object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={freeCodeCampImage} alt=""/></div>
                        <div className=" col-span-3 flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">freeCodeCamp</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            <FormattedMessage id="blockTwoText" defaultMessage="Since 2014, 40,000+ freeCodeCamp.org grads landed roles at Apple, Google, Microsoft, and more. The curriculum focuses on essential job-related skills."/>
                                </p>
                            <a href="https://www.freecodecamp.org/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">freecodecamp.org</a>
                        </div>
                    </a>
                    {/* Blocks Three */}
                    <a href="https://www.w3schools.com/" className="flex lg:grid lg:grid-cols-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className='flex xl:h-auto w-full md:w-full lg:w-auto lg:h-full xl:h-full bg-white items-center justify-center'><img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={w3schoolsImage} alt=""/></div>
                        <div className="col-span-3 flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">W3Schools</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                <FormattedMessage id="blockThreeText" defaultMessage="Top web development hub, provides free resources on severla programming languages. With 4 million+ Q&A and a user-friendly search."/></p>
                            <a href="https://www.w3schools.com/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">w3schools.com</a>
                        </div>
                    </a>
                    {/* Blocks Four */}
                    <a href="https://www.codecademy.com/learn" className="flex lg:grid lg:grid-cols-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className='flex xl:h-auto w-full md:w-full lg:w-auto lg:h-full xl:h-full bg-[#F2F2F2] items-center justify-center'><img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={CodeAcademyImage} alt=""/></div>
                        <div className="col-span-3 flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Code Academy</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                <FormattedMessage id="blockFourText" defaultMessage="Explore Web Dev, Data Science, Comp Sci, Design, and Cybersecurity courses."/></p>
                            <a href="https://www.codecademy.com/learn" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">codecademy.com</a>
                        </div>
                    </a>
                    {/* 
                    /////////////////////////////////////
                    NON VISIBLE BLOCKS UNLESS LOAD MORE
                    //////////////////////////////////////
                    */}
                     {/* Blocks One */}
                    <a href="#" className={`flex ${hiddenBlock1} lg:${hiddenBlock1} xl:${hiddenBlock1} 2xl:${hiddenBlock1} lg:grid lg:grid-cols-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`}>
                        <div className="flex xl:h-auto w-full md:w-full lg:w-auto lg:h-full xl:h-full bg-white items-center justify-center"> <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={ZeroToMasteryImage} alt=""/></div>
                            <div className="col-span-3 flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy sstechnology acquisitions 2021</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            </div>
                    </a>
                    
                </div>

            </div>
        </div>

        </>
    )
}

export default TutorialBlock;