import { Link } from "react-router-dom";

function Header(){
    return(
        <>
          <div className="bg-blue-950 w-full h-20 flex justify-between items-center text-white text-2xl lg:px-10 px-4  cursor-pointer">
      <div className="font-bold text-lg lg:text-2xl transition-all duration-300 border border-white p-2 px-4 hover:bg-gray-100 hover:text-blue-950 hover:border-black "><Link to="/">Student List</Link></div>
      <div className="font-bold text-lg lg:text-2xl "><Link to="/favStudent">Favourites</Link></div>
     </div>
        </>
    )
}

export default Header;