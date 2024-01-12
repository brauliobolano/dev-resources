import './TB.css';
import { FormattedMessage } from 'react-intl';
import { useState } from "react";
//LOGOS IMPORTS
import ZeroToMasteryImage from '../../assets/ztm.jpg';
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
        <div id="tutorials" className="pt-16 lg:px-10 xl:px-10 2xl:px-10 px-5 bg-white dark:bg-gray-700 dark:text-gray-200"  >
            <div className='max-w-[1340px] w-full mx-auto'>
                <div className="TutorialBlock pt-2">
                    <h2 className="pb-5">
                        <FormattedMessage id="default" defaultMessage="TutorialBlock"/>
                    </h2>
                </div>
                <hr className="border-black border-1 mb-8"/>
                <div className="BlocksCage mb-8 ">
                    <a href="#" className="flex max-xl:grid-cols-4 lg:grid xl:grid-rows-3 xl:grid-flow-row flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row xl:flex-col xl:row-span-3 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        {/* Block One */}
                        <div className='flex xl:h-auto w-full md:w-full lg:w-auto lg:h-full xl:w-full 2xl:w-full xl:h-full xl:col-span-3 xl:row-span-3 bg-white items-center justify-center'><img className="flex object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 xl:w-3/5 md:rounded-none md:rounded-s-lg" src={ZeroToMasteryImage} alt=""/></div>
                        <div className="col-span-3 flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Zero to Mastery Academy</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Over 1,000 hours of lessons:  coding, A.I. & machine learning, UX/UI design, web3s ssssssssssssss sssssss.</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Link</p>
                        </div>
                    </a>
                    <a href="#" className="flex lg:grid lg:grid-cols-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        {/* Blocks others */}
                    <div className='flex xl:h-auto w-full md:w-full lg:w-auto lg:h-full xl:h-full bg-white items-center justify-center'><img className="flex object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={ZeroToMasteryImage} alt=""/></div>
                        <div className=" col-span-3 flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Over 1,000 hours of lessons ssss sssss ssss ssss covering a wide range of topics:  coding, A.I. & machine learning, UX/UI design, web3.</p>
                        </div>
                    </a>
                    <a href="#" className="flex lg:grid lg:grid-cols-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        {/* Blocks others */}
                    <div className='flex xl:h-auto w-full md:w-full lg:w-auto lg:h-full xl:h-full bg-white items-center justify-center'><img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={ZeroToMasteryImage} alt=""/></div>
                        <div className="col-span-3 flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>
                    </a>
                    <a href="#" className="flex lg:grid lg:grid-cols-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        {/* Blocks others */}
                    <div className='flex xl:h-auto w-full md:w-full lg:w-auto lg:h-full xl:h-full bg-white items-center justify-center'><img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={ZeroToMasteryImage} alt=""/></div>
                        <div className="col-span-3 flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>
                    </a>
                    {/* 
                    /////////////////////////////////////
                    NON VISIBLE BLOCKS UNLESS LOAD MORE
                    //////////////////////////////////////
                    */}
                     {/* Blocks One */}
                    <a href="#" className={`flex lg:grid lg:grid-cols-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ${hiddenBlock1}`}>
                       
                        <div className="flex xl:h-auto w-full md:w-full lg:w-auto lg:h-full xl:h-full bg-white items-center justify-center"> <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={ZeroToMasteryImage} alt=""/></div>
                            <div className="col-span-3 flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            </div>
                    </a>
                    
                </div>
                <div className="LoadMore flex justify-center mb-4"><button onClick={()=>handleLoadMore()} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Load More
                    </span>
                    </button>
                </div>
            </div>
        </div>

        </>
    )
}

export default TutorialBlock;