

const search = () => {
    return (
        <div>
            <div className="flex items-center justify-center m-12">

                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input type="text" name="Mname" placeholder="Medicine name"
                    className="w-1/3 py-2 border-b-2 border-indigo-400 outline-none focus:border-green-400"/>
            </div>
        </div>
    )
}

export default search
