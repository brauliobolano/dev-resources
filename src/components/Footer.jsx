import './Footer.css';
import { FormattedMessage } from 'react-intl';
const YoutubeIconSVG = 'https://icons8.com/icon/37326/youtube';
const Footer = () => {
    return (
        <>
        <div className="bg-black dark:bg-gray-200 pt-16 lg:px-10 xl:px-10 2xl:px-10 px-5 text-white dark:text-black" id="footer">
            <div className='max-w-[1340px] w-full mx-auto'>
                <hr className="h-px mb-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                <div className='flex justify-between my-8 items-center'>
                    <div id="social" className='flex'>
                        <a
                            className='border-2 p-1 mr-2 h-11 w-11 rounded-full flex items-center justify-center overflow-hidden bg-black hover:bg-white dark:hover:bg-black hover:fill-black dark:hover:fill-white fill-white dark:bg-white dark:fill-black dark:border-black border-white'
                            href="https://www.twitter.com/"
                        >
                            <svg className="" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                <path className='text-gray-400'  d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                            </svg>
                        </a>      
                        <a href="https://www.linkedin.com/in/braulio-bolano-trujillo/" className='border-2 p-1 mr-2 h-11 w-11 rounded-full flex items-center justify-center overflow-hidden bg-black hover:bg-white dark:hover:bg-black hover:fill-black dark:hover:fill-white fill-white dark:bg-white dark:fill-black dark:border-black border-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                                <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
                            </svg>
                        </a>
                        <a href="https://github.com/brauliobolano" className='border-2 p-1 mr-2 h-11 w-11 rounded-full flex items-center justify-center overflow-hidden bg-black hover:bg-white dark:hover:bg-black hover:fill-black dark:hover:fill-white fill-white dark:bg-white dark:fill-black dark:border-black border-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                            </svg>
                        </a>
                        <a href="https://www.buymeacoffee.com/braulio" className='border-2 p-1 mr-2 h-11 w-11 rounded-full flex items-center justify-center overflow-hidden bg-black hover:bg-yellow-300 dark:hover:bg-black hover:fill-black dark:hover:fill-yellow-300 fill-yellow-300 dark:bg-yellow-300 dark:fill-black dark:border-black border-yellow-300'>
                            <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img"><title>Buy Me A Coffee icon</title><path d="M6.898 0L5.682 2.799H3.877v2.523h.695L5.277 9.8H4.172l1.46 8.23.938-.01L7.512 24h8.918l.062-.4.88-5.58.888.01 1.46-8.231h-1.056l.705-4.477h.756V2.8h-1.918L16.99 0H6.898zm.528.805h9.043l.771 1.78H6.652l.774-1.78zm-2.75 2.797H19.32v.92H4.676v-.92zm.453 6.998h13.635l-1.176 6.62-5.649-.06-5.636.06-1.174-6.62z"/></svg>
                        </a>
                        <a href="https://www.buymeacoffee.com/braulio" className='flex items-center justify-center hover:underline'>
                        <FormattedMessage id="buyMeACoffee" defaultMessage="Buy me a Coffee"/>
                        </a>
                    </div>
                    <div className='sm:flex'>
                        <div className='sm:flex pr-8'>
                            <a className='pr-8 hover:underline'><FormattedMessage id="privacy" defaultMessage="Privacy"/></a>
                            <a className='pr-8 hover:underline'><FormattedMessage id="terms" defaultMessage="Terms"/></a>
                            <a className='pr-8 hover:underline'><FormattedMessage id="conditions" defaultMessage="Conditions"/></a>
                        </div>
                        <div className='flex'>
                        <a className='mr-4' href='https://icons8.com/'><FormattedMessage id="iconsBy" defaultMessage="Icons by "/><span className='underline decoration-dotted hover:decoration-green-400'>Icons8</span> </a>
                            <p className='mr-4'>© 2021 Dev Resources</p>                         
                        </div>
                    </div>
                </div>
                <a href='https://www.youtube.com/watch?v=GtHNwT-vEpM' className='flex items-center justify-center my-8 mt-20 antialiased text-xl hover:underline hover:decoration-dashed'>
                <FormattedMessage id="finalPhrase" defaultMessage="And the world's gonna know your name"/>
                    </a>
            </div>
        </div>
        </>
    )
}

export default Footer;