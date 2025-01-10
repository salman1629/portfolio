
import { NavLink } from "react-router-dom"
export default function NavBar (){

    return <nav id="navBar">
        <div className="flex justify-between p-5">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? " font-bold cursor-pointer flex gap-2 items-center " 
              : "font-bold cursor-pointer flex gap-2 items-center "
          }
        >
            <span className={` rounded-full bg-[#ffa500]`} style={{width:'2vw',height:'2vw'}} ></span>
          Salman
        </NavLink>
        <ul className="flex justify-between gap-5 " >
        <NavLink
          to={"/resume"}
          className={({ isActive }) =>
            isActive
              ? " text-orange-400 font-bold cursor-pointer"
              : "font-bold cursor-pointer"
          }
        >
          Resume
        </NavLink>
        <NavLink
          to={"/projects"}
          className={({ isActive }) =>
            isActive
              ? "text-red-500 font-bold cursor-pointer"
              : "font-bold cursor-pointer"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive
              ? " text-cyan-400 font-bold cursor-pointer"
              : "font-bold cursor-pointer"
          }
        >
          Contact
        </NavLink>
        </ul>
        </div>
    </nav>
}