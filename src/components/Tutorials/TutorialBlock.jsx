import './TB.css';
import { FormattedMessage } from 'react-intl';
const TutorialBlock = () => {
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
                    <div className="border-black border-4 bg-red-100">
                        <div className="">
                            <div className=""><img className="w-full h-full object-cover object-center" src="https://images.ctfassets.net/aq13lwl6616q/1nGrrU8Es5woaV6siQ8X0r/b6dd4d950dae2a14cf1ae4a3f4877e56/Cheatsheet_-_Python.jpg?w=800&h=450&q=100&fm=webp&bg=transparent"/></div>
                            <div className="px-4 py-3">
                                <h1 className="text-3xl">
                                    <FormattedMessage id="default" defaultMessage="Heading"/>
                                </h1>
                                <p><FormattedMessage id="default" defaultMessage="Lorem Ipsum"/></p>
                                <a href="#">Link</a>
                            </div>
                        </div>
                    </div>
                    <div className="border-black border-4 bg-red-300">
                        <div className="">
                            <div><img className="w-full h-full object-cover object-center" src="https://images.ctfassets.net/aq13lwl6616q/1nGrrU8Es5woaV6siQ8X0r/b6dd4d950dae2a14cf1ae4a3f4877e56/Cheatsheet_-_Python.jpg?w=800&h=450&q=100&fm=webp&bg=transparent"/></div>
                            <div className="px-4 py-3">
                                <h1>
                                    <FormattedMessage id="default" defaultMessage="Heading"/>
                                </h1>
                                    <p><FormattedMessage id="default" defaultMessage="Lorem Ipsum"/></p>
                                <a href="#">Link</a>
                            </div>
                        </div>
                    </div>
                    <div className="border-black border-4 bg-red-400">
                        <div className="flex">
                            <div><img src="https://images.ctfassets.net/aq13lwl6616q/1nGrrU8Es5woaV6siQ8X0r/b6dd4d950dae2a14cf1ae4a3f4877e56/Cheatsheet_-_Python.jpg?w=800&h=450&q=100&fm=webp&bg=transparent"/></div>
                            <div className="px-4 py-3">
                                <h1><FormattedMessage id="default" defaultMessage="Heading"/></h1>
                                    <p><FormattedMessage id="default" defaultMessage="Lorem Ipsum"/></p>
                                <a href="#">Link</a>
                            </div>
                        </div>
                    </div>
                    <div className="border-black border-4 bg-red-500">
                        <div className="flex">
                            <div><img src="https://images.ctfassets.net/aq13lwl6616q/1nGrrU8Es5woaV6siQ8X0r/b6dd4d950dae2a14cf1ae4a3f4877e56/Cheatsheet_-_Python.jpg?w=800&h=450&q=100&fm=webp&bg=transparent"/></div>
                            <div className="px-4 py-3">
                                <h1><FormattedMessage id="default" defaultMessage="Heading"/></h1>
                                    <p><FormattedMessage id="default" defaultMessage="Lorem Ipsum"/></p>
                                <a href="#">Link</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="LoadMore flex justify-center mb-4"><button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Pink to orange
                    </span>
                    </button>
                </div>
            </div>
        </div>

        </>
    )
}

export default TutorialBlock;