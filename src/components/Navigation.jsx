
const Navigation = () => {
    /*  */
    return (
        <div className="inline flex justify-between">
            <div className="bg-indigo-100">
                <ul>
                    <li>Logo</li>
                </ul>
            </div>
            <div className="flex justify-end" id="Left">
                <div className="bg-indigo-500">
                    <ul className="flex justify-end">
                        <li className="border-black border-4 px-2" >Home</li>
                        <li className="border-black border-4 px-2">Tutorials</li>
                        <li className="border-black border-4 px-2">Resources</li>
                        <li className="border-black border-4 px-2">Mentoring</li>
                    </ul>
                </div>
                <div className="bg-indigo-200">
                    <ul className="flex justify-end">
                        <li className="border-black border-4 px-2">Lang</li>
                        <li className="border-black border-4 px-2">MODE</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navigation;