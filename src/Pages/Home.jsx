import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo/logo-scc-removebg-preview.png"
import Footer from "../Components/Footer";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Home = () => {
    const { user, logout } = useContext(AuthContext);
    return (
        <div className="drawer mt-2">
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
             <div>
                  {
                    user?.email ?
                      (<div className="flex w-2/3 gap-5 mx-auto justify-center items-center ">
                        <div className="flex justify-center items-center ">
                          <div>
                            <NavLink to='/dashboard'className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "p-2 text-red-800 underline  font-bold" : "font-bold p-2"
  }>DashBoard</NavLink>
                          </div>
                          <div className="flex w-72 justify-center items-center">
                            <div className="font-bold">
                              <h1>
                                {user.displayName}
                              </h1>
                            </div>
                            <div className="  justify-center items-center  flex flex-col">
                              <div className="avatar">
                                <div className="w-10 rounded-full">
                                  <img src={user.photoURL} />
                                </div>
                              </div>
                            </div>


                          </div>


                        </div>
                        <div className="w-72">
                          <button onClick={logout} className="btn  btn-outline btn-error"> Log-out</button>

                        </div>
                      </div>)
                      :
                      (<div>
                        <NavLink to="/signup">
                          <button className="btn btn-outline btn-success">Sign-up</button>
                        </NavLink>
                      </div>)
                  }
                </div>
              </ul>
            </div>
          </div>
          {/* Page content here */}
         <div className="min-h-[65vh]">
         <Outlet/>
         </div>
          <div className="text-center mt-2">
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
                 <div>
              {
                user?.email ? (
                  <div>
                    <div className="mt-5">
                      <NavLink to='/dashboard' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "p-2 text-red-800 underline  font-bold" : "font-bold p-2"
  }>DashBoard</NavLink>

                    </div>
                    <div className="mt-5">
                      <div className="avatar">
                        <div className="w-10 rounded-full">
                          <img src={user.photoURL} />
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <h1>
                        {user.displayName}
                      </h1>
                    </div>
                    <div className="m-5">
                      <button onClick={logout} className="btn  btn-outline btn-error"> Log-out</button>

                    </div>


                  </div>





                )
                  :
                  (<div className="m-24">
                    <NavLink to="/signup">
                      <button className="btn btn-outline btn-success">Sign-up</button>
                    </NavLink>
                  </div>)
              }
            </div>
          </ul>
        </div>
      </div>
    );
};

export default Home;