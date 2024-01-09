import './Footer.css';
import { FormattedMessage } from 'react-intl';
const Footer = () => {
    return (
        <>
        <div className="bg-indigo-300 dark:bg-indigo-100 pt-16 lg:px-10 xl:px-10 2xl:px-10 px-5" id="resources">
            <div className='max-w-[1340px] w-full mx-auto'>
                <div className="Footer grid gap-4 grid-cols-12">
                    <div><FormattedMessage id="default" defaultMessage="Logo"/></div>
                    <div><FormattedMessage id="default" defaultMessage="Quick Links"/></div>
                    <div><FormattedMessage id="default" defaultMessage="The Academy"/></div>
                    <div><FormattedMessage id="default" defaultMessage="Courses"/></div>
                </div>
                <hr className="border-black border-1 mb-8"/>
                <div className='flex'>
                    <div id="social" className='flex'>
                        <a href="https://www.twitter.com/"><img src="https://img.icons8.com/fluent/48/000000/twitter.png"/></a>
                        <a href="https://www.linkedin.com/"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png"/></a>
                        <a href="https://www.github.com/"><img src="https://img.icons8.com/fluent/48/000000/github.png"/></a>
                    </div>
                    <div className='flex'>
                        <div className='flex'>
                            <a><FormattedMessage id="default" defaultMessage="Privacy"/></a>
                            <a><FormattedMessage id="default" defaultMessage="Terms"/></a>
                            <a><FormattedMessage id="default" defaultMessage="Conditions"/></a>
                        </div>
                        <div>
                            <p>© 2021 Dev Resources</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
    }

export default Footer;