// import logo from "../assets/logo/logo-scc-removebg-preview.png"

import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const DashBoard = () => {
    return (
<div>
<div className="navbar bg-blue-200">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <NavLink to='/dashboard/new'
        className={({ isActive }) =>
        isActive
          ? "btn btn-outline btn-success":"text-black"
      }>Create Tesk</NavLink>
       <NavLink to='/dashboard/old'
       className={({ isActive }) =>
       isActive
         ? "btn btn-outline btn-success":"text-black"
     }>Previous Tesk</NavLink>
        <NavLink to='/dashboard'
        className={({ isActive }) =>
        isActive
          ? "btn btn-outline btn-success":"text-black"
      }>Mylist</NavLink>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
       
        <p>SCC Technovision Inc.</p>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal flex justify-center items-center gap-2 px-1">
    <NavLink to='/dashboard/new'
        className={({ isActive }) =>
        isActive
          ? "btn btn-outline btn-success":"text-black"
      }>Create Tesk</NavLink>
       <NavLink to='/dashboard/old'
       className={({ isActive }) =>
       isActive
         ? "btn btn-outline btn-success":"text-black"
     }>Previous Tesk</NavLink>
        <NavLink to='/dashboard'
        className={({ isActive }) =>
        isActive
          ? "btn btn-outline btn-success":"text-black"
      }>Mylist</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
  <Link to="/" className="btn btn-outline btn-success">Home</Link>
  </div>
</div>
<div className="min-h-[75vh]">
    <Outlet/>
</div>
<Footer/>
</div>
    );
};

export default DashBoard;