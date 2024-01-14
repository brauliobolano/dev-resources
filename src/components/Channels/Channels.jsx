import './TB.css';
import { FormattedMessage } from 'react-intl';
import { useState } from "react";
//LOGOS IMPORTS
import ZeroToMasteryImage from '../../assets/ztm.jpg';
import freeCodeCampImage from '../../assets/freecodecamp.png';
import FireshipImage from '../../assets/FS.jpg';
import SahilAndSarraImage from '../../assets/sands.jpg';
import CodeWithAniaImage from '../../assets/cwa.png';
import WebDevSimplifiedImage from '../../assets/wds.jpg';
import BroCodeImage from '../../assets/brocode.png';
import SonnySanghaImage from '../../assets/sonnysangha.png';
const Channels = () => {


    const [loadMore, setLoadMore] = useState("0");
    const [hiddenChannel, sethiddenChannel] = useState("hidden");
    const [hiddenChannel2, sethiddenChannel2] = useState("lg:hidden");
    const [hiddenBotton, sethiddenBotton] = useState("");

    const handleLoadMore = () => {
        console.log("Load More Clicked")
        if(loadMore === "0"){
            console.log("Load More Clicked");
            setLoadMore("1");
            sethiddenChannel('');
            sethiddenChannel2('');
            sethiddenBotton('hidden');
            
    }
    };


    return (
        <>
        <div id="mentoring" className="pt-2 lg:px-10 xl:px-10 2xl:px-10 px-5 bg-white dark:bg-[#121220] dark:text-gray-200 "  >
            <div className='max-w-[1340px] w-full mx-auto'>
                <div className="TutorialBlock pt-2">
                    <h2 className="pb-5 text-2xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <FormattedMessage id="youtubeChannels" defaultMessage="YouTube Channels"/>
                    </h2>
                </div>
                <hr className="h-px mb-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                <div className="BlocksCage mb-8 ">
                    {/* Block One Channels */}
                    <a href="https://www.youtube.com/@freecodecamp" className="flex max-xl:grid-cols-4 lg:grid xl:grid-rows-3 xl:grid-flow-row flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row xl:flex-col xl:row-span-3 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">   
                        <div className='flex xl:h-auto w-full md:w-full lg:w-auto lg:h-full xl:w-full 2xl:w-full xl:h-full xl:col-span-3 xl:row-span-3 bg-[#0A0A22] items-center justify-center'><img className="flex object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 xl:w-3/5 md:rounded-none md:rounded-s-lg" src={freeCodeCampImage} alt=""/></div>
                        <div className="col-span-3 flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">freeCodeCamp</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                <FormattedMessage id="blockOneChannels" defaultMessage="Focused on in-depth tutorials, the team's YouTube channel offers 1,400+ comprehensive videos for thorough learning experiences."/>
                            </p>
                            <a href="https://www.youtube.com/@freecodecamp" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">@freecodecamp</a>
                        </div>
                    </a>
                    {/* Blocks Two Channels*/}
                    <a href="https://www.youtube.com/@Fireship" className="flex lg:grid lg:grid-cols-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">              
                    <div className='flex xl:h-auto w-full md:w-full lg:w-auto lg:h-full xl:h-full bg-[#1F1F1F] items-center justify-center'><img className="flex object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={FireshipImage} alt=""/></div>
                        <div className=" col-span-3 flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Fireship</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    <FormattedMessage id="blockTwoChannels" defaultMessage="Stay effortlessly updated with small videos, delivering crucial info on the latest tech with humor."/>   
                                </p>                        
                            <a href="https://www.youtube.com/@Fireship" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">@Fireship</a>
                        </div>
                    </a>
                    {/* Blocks Three Channels*/}
                    <a href="https://www.youtube.com/@Power_Couple" className="flex lg:grid lg:grid-cols-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className='flex xl:h-auto w-full md:w-full lg:w-auto lg:h-full xl:h-full bg-[#38B6FF] justify-center'><img className="flex h-96 object-cover w-full rounded-t-lg xl:h-auto md:h-[169px] lg:h-auto md:w-100 md:rounded-none lg:rounded-s-lg" src={SahilAndSarraImage} alt=""/></div>
                        <div className="col-span-3 flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sahil & Sarra</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            <FormattedMessage id="blockThreeChannels" defaultMessage="On this channel, Sahil and Sarra share their experiences working on Google and Microsoft, to help you fast-track your career in Tech."/></p>
                            <a href="https://www.youtube.com/@Power_Couple" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">@Power_Couple</a>
                        </div>
                    </a>
                    {/* Blocks Four Channels*/}
                    <a href="https://www.youtube.com/@ZeroToMastery" className="flex lg:grid lg:grid-cols-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className='flex xl:h-auto w-full md:w-full lg:w-auto lg:h-full xl:h-full bg-white items-center justify-center border-b-2 lg:border-b-0 lg:border-r-2 xl:border-b-0 xl:border-r-2  border-gray-100'><img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={ZeroToMasteryImage} alt=""/></div>
                        <div className="col-span-3 flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Zero To Mastery</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                <FormattedMessage id="blockFourChannels" defaultMessage="Join for skills, jobs, and a fun journey. Weekly videos cover tech topics, soft skills, with AMA sessions. Propel your career with them."/>
                            </p>
                            <a href="https://www.youtube.com/@ZeroToMastery" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">@ZeroToMastery</a>
                        </div>
                    </a>
                    {/* 
                    /////////////////////////////////////
                    NON VISIBLE BLOCKS UNLESS LOAD MORE
                    //////////////////////////////////////
                    */}
                     {/* Block Hidden Channels One */}
                    <a href="https://www.youtube.com/@AniaKubow" className={`flex ${hiddenChannel} ${hiddenChannel2} lg:grid lg:grid-cols-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`}>
                        <div className="flex xl:h-auto w-full md:w-full lg:w-auto lg:h-full xl:h-full bg-[#5137A2] justify-center"> <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={CodeWithAniaImage} alt=""/></div>
                            <div className="col-span-3 flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Code with Ania Kubów</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    <FormattedMessage id="blockHiddenChannelsOne" defaultMessage="Start coding with Ania, experienced with Google, Amazon, Microsoft. Learn through fun projects like battleships or Zelda."/>
                                </p>
                                <a href="https://www.youtube.com/@AniaKubow" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">@AniaKubow</a>
                            </div>
                    </a>
                    {/* Block Hidden Channels Two */}
                    <a href="https://www.youtube.com/@WebDevSimplified" className={`flex ${hiddenChannel} ${hiddenChannel2} lg:grid lg:grid-cols-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`}>
                        <div className="flex xl:h-auto w-full md:w-full lg:w-auto lg:h-full xl:h-full bg-white items-center justify-center border-b-2 lg:border-b-0 lg:border-r-2 xl:border-b-0 xl:border-r-2  border-gray-100"> <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={WebDevSimplifiedImage} alt=""/></div>
                            <div className="col-span-3 flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Web Dev Simplified</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    <FormattedMessage id="blockHiddenChannelsTwo" defaultMessage="Learn web development effectively, from beginner to full-stack. For pros, deep dives into the latest best practices."/>
                                </p>
                                <a href="https://www.youtube.com/@WebDevSimplified" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">@WebDevSimplified</a>
                            </div>
                    </a>
                    {/* Block Hidden Channels Three */}
                    <a href="https://www.youtube.com/@BroCodez" className={`flex ${hiddenChannel} ${hiddenChannel2} lg:grid lg:grid-cols-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`}>
                        <div className={`flex xl:h-auto w-full md:w-full lg:w-auto lg:h-full xl:h-full bg-custom-image items-center justify-center`}> <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-[170.66px] md:rounded-none md:rounded-s-lg" src={BroCodeImage} alt=""/></div>
                            <div className="col-span-3 flex flex-col justify-between p-4 leading-normal"> 
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bro Code</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    <FormattedMessage id="blockHiddenChannelsThree" defaultMessage="Learn to code for free! This channel is for those who can not afford college or bootcamps. No gimmicks, just genuine education."/>
                                </p>
                                <a href="https://www.youtube.com/@BroCodez" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">@BroCodez</a>
                            </div>
                    </a>
                    {/* Block Hidden Channels Four */}
                    <a href="https://www.youtube.com/@SonnySangha" className={`flex ${hiddenChannel} ${hiddenChannel2} lg:grid lg:grid-cols-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`}>
                        <div className="flex xl:h-auto w-full md:w-full lg:w-auto lg:h-full xl:h-full bg-[#F8AD04] items-center justify-center"> <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={SonnySanghaImage} alt=""/></div>
                            <div className="col-span-3 flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sonny Sangha</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                     <FormattedMessage id="blockHiddenChannelsFour" defaultMessage="A decade as a top Full Stack developer, now passionate about helping others. Impressive feat: cloned everyday apps."/>
                                </p>
                                <a href="https://www.youtube.com/@SonnySangha" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">@SonnySangha</a>
                            </div>
                    </a>
                    
                </div>
                <div className={`LoadMore flex justify-center mb-8`}><button onClick={()=>handleLoadMore()} className={` ${hiddenBotton} relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br text-orange-500 dark:text-blue-400 from-pink-500 to-orange-400 dark:from-blue-500 dark:to-green-500 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800`}>
                    <span className="relative px-5 text-xl font-bold py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        <FormattedMessage id="loadMore" defaultMessage="Load More"/>
                    </span>
                    </button>
                </div>
            </div>
        </div>

        </>
    )
}

export default Channels;