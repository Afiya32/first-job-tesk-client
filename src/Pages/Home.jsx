import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo/logo-scc-removebg-preview.png"
import Footer from "../Components/Footer";


const Home = () => {
    return (
        <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div> 
            <div className="flex-1   px-2 mx-2">
                <img src={logo} className="w-16 h-16" alt="" />
                <h1 className="font-bold">Tesk Management</h1>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <NavLink   className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "p-2 text-red-800 underline  font-bold" : "font-bold p-2"
  } to='/'>Home</NavLink>
              <NavLink   className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "p-2 text-red-800 underline  font-bold" : "font-bold p-2"
  } to='/about'>About</NavLink>
              <NavLink   className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "p-2 text-red-800 underline  font-bold" : "font-bold p-2"
  } to='/contact'>Contact</NavLink>
              <NavLink   className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "p-2 text-red-800 underline  font-bold" : "font-bold p-2"
  } to='/dashboard'>Dashboard</NavLink>
              </ul>
            </div>
          </div>
          {/* Page content here */}
         <div className="min-h-[65vh]">
         <Outlet/>
         </div>
          <div className="flex justify-center items-center">
            <Footer/>
          </div>
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <NavLink   className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "p-2 text-red-800 underline  font-bold" : "font-bold p-2"
  } to='/'>Home</NavLink>
              <NavLink   className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "p-2 text-red-800 underline  font-bold" : "font-bold p-2"
  } to='/about'>About</NavLink>
              <NavLink   className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "p-2 text-red-800 underline  font-bold" : "font-bold p-2"
  } to='/contact'>Contact</NavLink>
              <NavLink   className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "p-2 text-red-800 underline  font-bold" : "font-bold p-2"
  } to='/dashboard'>Dashboard</NavLink>
          </ul>
        </div>
      </div>
    );
};

export default Home;