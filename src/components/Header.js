import { Link } from "react-router-dom";

function Header(){
    return(
        <>
          <div className="bg-blue-950 w-full h-20 flex justify-between items-center text-white text-2xl lg:px-10 px-2 cursor-pointer">
      <div className="text-lg lg:text-2xl"><Link to="/">Student List</Link></div>
      <div className="text-lg lg:text-2xl"><Link to="/favStudent">Favourite Student List</Link></div>
     </div>
        </>
    )
}

export default Header;