/* import USflag from "../assets/USflag.png";
import SPflag from "../assets/SPflag.png"; */
import { FormattedMessage } from 'react-intl';
import DarkModeButton from './DarkMode';
const Navigation = () => {

    return (
        <div className="fixed top-0 left-0 right-0 h-14 bg-red-100 border-b-2 border-b-indigo-500">
          <div className="flex justify-between mx-40 h-full bg-blue-200 left-0 right-0">
          <div className="bg-indigo-100">
                <ul>
                    <li className="pt-3">Logo</li>
                </ul>
            </div>
            <div className="flex" >
                <div className="bg-indigo-500 dark:bg-indigo-100">
                    <ul className="flex h-full">
                        <li className="border-black border-4 px-2 pt-2"><a href="#top">
                            <FormattedMessage id="navigation-top" defaultMessage="Home"/>
                        </a></li>
                        <li className="border-black border-4 px-2 pt-2"><a href="#tutorials">
                            <FormattedMessage id="navigation-tutorials" defaultMessage="Tutorials"/>
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
                        <li className="border-black border-4 px-2 pt-2">Lang</li>
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