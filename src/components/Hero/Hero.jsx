import BackgroundImage from "../../assets/background-image.jpg"
import { FormattedMessage } from 'react-intl';

const Hero = () => {
    return (
        <div style={{ 
            backgroundImage: `url(${BackgroundImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <section className="bg-white bg-opacity-40 dark:bg-gray-900 dark:bg-opacity-50">
                <div className="mt-32 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <h1 className="overflow-hidden mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        <FormattedMessage id="heroPrincipal" 
                            defaultMessage="Resources for web-developers"
                        />
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">
                        <FormattedMessage id="heroSecondary" 
                            defaultMessage="Mastering Web Development: Your Comprehensive Guide to Resources, Tools, and Strategies for Success"
                        />
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Hero