import './Footer.css';
const Footer = () => {
    return (
        <>
        <div className="bg-indigo-300 px-40 pt-16 pb-4">
            <div className="Footer grid gap-4 grid-cols-12">
                <div>Logo</div>
                <div>Quick Links</div>
                <div>The Academy</div>
                <div>Courses</div>
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
                        <a>Privacy</a>
                        <a>Terms</a>
                        <a>Conditions</a>
                    </div>
                    <div>
                        <p>© 2021 Dev Resources</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
    }

export default Footer;