
const Navigation = () => {
    /*  */
    return (
        <div className="fixed top-0 left-0 right-0 h-14 bg-red-100 border-b-2 border-b-indigo-500">
          <div className="flex justify-between mx-40 h-full bg-blue-200 left-0 right-0">
          <div className="bg-indigo-100">
                <ul>
                    <li className="pt-3">Logo</li>
                </ul>
            </div>
            <div className="flex" id="Left">
                <div className="bg-indigo-500">
                    <ul className="flex h-full">
                        <li className="border-black border-4 px-2 pt-2"><a href="#top">Home</a></li>
                        <li className="border-black border-4 px-2 pt-2"><a href="#tutorials">Tutorials</a></li>
                        <li className="border-black border-4 px-2 pt-2"><a href="#resources">Resources</a></li>
                        <li className="border-black border-4 px-2 pt-2"><a href="#mentoring">Mentoring</a></li>
                    </ul>
                </div>
                <div className="bg-indigo-200">
                    <ul className="flex h-full ">
                        <li className="border-black border-4 px-2 pt-2">Lang</li>
                        <li className="border-black border-4 px-2 pt-2">MODE</li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
    );
}

export default Navigation;