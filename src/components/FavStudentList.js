function FavStudentList(props){
    return(
        <>
        { props.FavStudentList.length > 0 ?(
            props.FavStudentList.map((student,index)=>{
                return(
                    <>
                    <div className="flex justify-between py-3 px-5">
                    <div className="flex text-xl">
                    <p>{index+1}.</p>
                    <p>{student}</p>
                    </div>
                    <div>
                    <button className="p-2 px-4 bg-blue-800 text-white" onClick={()=>{
                        props.RemoveStudent(index)
                    }}>REMOVE</button>
                    </div>
                    </div>
                    </>
                )
            })
        ):(<>
        <div className="w-full pt-60 font-bold flex justify-center items-center text-3xl">Add Favourite Students</div>
        </>
        )
        }
        </>
    )
}

export default FavStudentList;