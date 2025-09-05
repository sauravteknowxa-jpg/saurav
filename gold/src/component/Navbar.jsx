import { NavLink } from "react-router";
import "./style.css";

function Navbar(){
    return(
        <>
    <div className=" w-full ">
        <nav className=" flex flex-wrap items-center justify-between bg-slate-200 text-shadow-black px-10 py-4 w-full ">
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 p-2">
            <img src="/image/S1.jpg" alt="" className=" rounded-4xl w-full h-full " />
            <a href="">
                
              <h3 className="text-xl md:text-4xl font-semibold text-black">
                Saurav
              </h3>
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 font-bold text-black">
            <ul className="flex flex-wrap items-center justify-center gap-14 font-bold text-black">
              <li>
                <NavLink to="/"><span className="text-2xl font-semibold">Home</span> </NavLink>
              </li>
              <li>
                <NavLink to="/about"><span className="text-2xl font-semibold">About</span> </NavLink>
              </li>
              <li>
                <NavLink to="/process"> <span className="text-2xl font-semibold">Process</span> </NavLink>
              </li>
             
              <li>
                <NavLink to="/portfolio"><span className="text-2xl font-semibold">Portfolio</span> </NavLink>
              </li>
              <li>
                <NavLink to="/blog"><span className="text-2xl font-semibold">Blog</span>  </NavLink>
              </li>
               <li>
                <NavLink to="/services"><span className="text-2xl font-semibold">Services</span> </NavLink>
              </li>
              <li>
                <NavLink to="/contact">
                    <button className="flex flex-col w-36 h-15 items-center justify-center rounded-xl p-3 py-5 bg-purple-600 text-white cursor-pointer">
                     <span className="text-2xl font-semibold">Contact</span> 
                    </button>
                </NavLink>
                
              </li>
            </ul>
          </div>
        </nav>
      </div>
     
        </>
    )
}
export default Navbar;