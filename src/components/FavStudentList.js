function FavStudentList(props) {
    return (
        <>
            {props.FavStudentList.length > 0 ? (
                props.FavStudentList.map((student, index) => {
                    return (
                        <div className="flex md:justify-center ">
                        <div key={index} className="flex justify-between items-center shadow-2xl py-3 px-5 mb-4 bg-white border border-gray-300 rounded-lg mt-4 mx-2 w-full md:w-1/2">
                            <div className="flex text-xl">
                                <p className="mr-2">{index + 1}.</p>
                                <p>{student}</p>
                            </div>
                            <div>
                                <button
                                    className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-700 cursor-pointer"
                                    onClick={() => {
                                        props.RemoveStudent(index);
                                    }}
                                >
                                    REMOVE
                                </button>
                            </div>
                        </div>
                        </div>
                    );
                })
            ) : (
                <div className="w-full pt-60 font-bold flex justify-center items-center lg:text-6xl text-3xl text-white">
                    Add Favourite Students
                </div>
            )}
        </>
    );
}

export default FavStudentList;