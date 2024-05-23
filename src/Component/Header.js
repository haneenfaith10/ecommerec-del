import React, { useState } from "react";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { GiShoppingCart } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import toast from "react-hot-toast";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state)=>state.user)
  console.log(userData)
  const dispatch = useDispatch()

  const handleShowMenu = ()=>{
    setShowMenu(preve => !preve)
  }
    const handleLogout = ()=>{
        dispatch(logoutRedux())
        toast("Logout successfully")
    }
  
  return (
    <header className="fixed shadow-md w-full h-16 px-1 md:px-4 z-50 bg-white">
      {/* desktop */}

      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-10">
            <img src={logo} className="h-full" />
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-7">
          <nav className="flex gap-4 md:gap-6 text-base md:text-lg">
            <Link to={""}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>
          <div className="text-3xl text-slate-800 relative cursor-pointer">
            <GiShoppingCart />
            <div className="absolute -top-1 -right-1 text-white bg-blue-800 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">
              0
            </div>
          </div>

          <div className="text-slate-700" onClick={handleShowMenu}>
            <div className="text-2xl cursor-pointer w-10  rounded-full overflow-hidden drop-shadow-md">
              {userData.image ? <img src={userData.image} className="h-full w-full"/> : <FaRegCircleUser />}
            </div>
            {showMenu && (
              <div className="absolute right-2 pt-5 bg-white py-2 px-2shadow drop-shadow-md flex flex-col">
                <Link to={"newproduct"} className="whitespace-nowrap  cursor-pointer">New product</Link>
                {
                  userData.image ? <p className="cursor-pointer" onClick={handleLogout}>Logout</p> :  <Link to={"login"} className="whitespace-nowrap cursor-pointer">Login</Link>
                }
               
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
    </header>
  );
};

export default Header;
