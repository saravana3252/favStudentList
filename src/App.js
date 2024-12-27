import { useState } from "react";
import FavStudentList from "./components/FavStudentList";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {

const [favStudent,setFavStudent]=useState([])


function FavStudent(data){
  setFavStudent((prevData)=>{
    return [...prevData,data]
  })
  toast.success(`${data} added to favourites`,{
    position:"bottom-left",
    autoClose:3000
  })
}

function RemoveStudent(index){
  setFavStudent((prevData)=>{
    let updatedfavStudent = [...prevData];
    updatedfavStudent.splice(index,1);
    return updatedfavStudent;
  })
  toast.info(`${favStudent[index]} removed from favourites`,{
    position:"bottom-left",
    autoClose:3000
  })
}

  return (
    <div >
       <ToastContainer />
      <BrowserRouter>
      <Header favStudentLenght={favStudent.length}></Header>
      <Routes>
    <Route path="/" element={<StudentList favStudent={FavStudent} favStudentData={favStudent}></StudentList>}></Route> 
    <Route path="/favStudent" element={ <FavStudentList FavStudentList={favStudent} RemoveStudent={RemoveStudent}></FavStudentList>}></Route> 
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
