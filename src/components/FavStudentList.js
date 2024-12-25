function FavStudentList(props) {
    return (
        <>
            {props.FavStudentList.length > 0 ? (
                props.FavStudentList.map((student, index) => {
                    return (
                        <div key={index} className="flex justify-between items-center py-3 px-5 mb-4 bg-white border border-gray-300 rounded-lg">
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
                    );
                })
            ) : (
                <div className="w-full pt-60 font-bold flex justify-center items-center text-3xl">
                    Add Favourite Students
                </div>
            )}
        </>
    );
}

export default FavStudentList;