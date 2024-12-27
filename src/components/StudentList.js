import { useState } from "react";

function StudentList(props) {
    const [data, setData] = useState(["saravana", "ajith", "suriya", "vijay"]);

    return (
        <div className="p-6  lg:shadow-2xl lg:bg-[rgb(0,143,169)] rounded-lg max-w-lg mx-auto lg:mt-10 mt-2 space-y-4">
            {data.map((student, index) => {
                return (
                    <div
                        key={index}
                        className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 bg-white border border-gray-300 rounded-lg gap-4 mx-auto max-w-xs sm:max-w-none"
                    >
                        <div className="text-lg text-center sm:text-left">
                            <p>
                                {index + 1}. {student}
                            </p>
                        </div>
                        <div className="flex justify-center sm:justify-end">
                            <button
                                className={`px-4 py-2 rounded ${
                                    props.favStudentData.includes(student)
                                        ? "bg-gray-500 cursor-not-allowed"
                                        : "bg-blue-800 hover:bg-blue-700 cursor-pointer"
                                } text-white`}
                                disabled={props.favStudentData.includes(student)}
                                onClick={() => {
                                    props.favStudent(student);
                                }}
                            >
                                {props.favStudentData.includes(student) ? "ADDED" : "ADD TO FAVOURITE"}
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default StudentList;
