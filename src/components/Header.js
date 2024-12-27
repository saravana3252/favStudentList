import { Link } from "react-router-dom";

function Header(props){
    return(
        <>
          <div className="bg-blue-950 w-full h-20 flex justify-between items-center text-white text-2xl lg:px-10 px-4  cursor-pointer">
      <div className="font-bold text-lg lg:text-2xl transition-all duration-300 border border-white p-2 lg:px-4 px-2 hover:bg-gray-100 hover:text-blue-950 hover:border-black "><Link to="/">Student List</Link></div>
      <div className="bg-white  flex items-center justify-center py-2 rounded-md">
  <div className="font-bold text-lg lg:text-2xl flex items-center px-3 ">
    <Link to="/favStudent" className="text-black ">Favourites</Link>
    <p className="bg-white rounded-full text-black ml-1.5 ">
      {props.favStudentLenght}
    </p>
  </div>
</div>

     </div>
        </>
    )
}

export default Header;