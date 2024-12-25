import { useState } from "react";

function StudentList(props){

const [data,setData] =useState(["leo das","harold","rolex","benz"])

    return(
        <>
        {
            data.map((student,index)=>{

                return(
                    <>
                    <div className="flex justify-between py-3 px-5">
                    <div className="flex text-xl">
                    <p>{index+1}.</p>
                    <p>{student}</p>
                    </div>
                    <div>
                    <button className="p-2 px-4 bg-blue-800 text-white" disabled={props.favStudentData.includes(student)} onClick={()=>{
                       props.favStudent(student)
                    }} style={{cursor:props.favStudentData.includes(student)?"not-allowed":"pointer"}}>{props.favStudentData.includes(student)? "ADDED" : "ADD TO FAVOURITE"}</button>
                    </div>
                    </div>
                    </>
                )
            })
        }
        </>
    )
}

export default StudentList;