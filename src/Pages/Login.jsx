import Lottie from "lottie-react";
import { useContext } from "react";
import logo from "../assets/logo/logo-scc-removebg-preview.png";
import loginAnimation from "../assets/animation/login.json";
import { FcGoogle } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Login = () => {
    const { googleLogIn,login } = useContext(AuthContext);
    const navigate = useNavigate()
          const handleSocial = (media) =>{
            if (typeof media === 'function') {
              media()
              .then(res=>{console.log(res.user)
                toast.success('user login successfully')
                    navigate('/dashboard')
                  }
                )
              .catch(err=>{
                toast.error(err.message)
              })
              
            } 
            console.log("hi google")
          }
          const handlelogin = (e)=>{
            e.preventDefault();
             const form = e.target;
             const email = form.email.value;
             const password = form.password.value;
             if(password.length < 6) {
              toast.error('password must be at least 6 characters');
              return;
            }
        
        
            login(email, password)
          .then(res=>{console.log(res.user)
            toast.success('user login successfully')
                navigate('/dashboard')
              }
            )
          .catch(err=>{
            toast.error(err.message)
          })
        console.log("form submit")
          }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
        
          <div className="flex justify-center items-center ">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Welcome to</h1>
            </div>
            <div className="flex  px-2 mx-2 justify-center items-center">
            <img src={logo} className="w-24 h-24" alt="" />
            <h1 className="text-4xl font-bold"> Tesk Management</h1>
           
          </div>
          </div>
          <div className="flex justify-center items-center">
          <p className="py-6">Please log in to explore more</p>
          </div>
              <div className="flex justify-center items-center  w-[400px] mx-auto h-[70vh]">
                <Lottie animationData={loginAnimation}></Lottie>
              </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div  className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
    <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-slate-400 to-slate-200 bg-clip-border shadow-slate-500/40">
        <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
            Log In
        </h3>
    </div>
    <div className="flex flex-col gap-4 p-6">
       <form onSubmit={handlelogin} className="flex flex-col gap-4 p-6">
       <div className="relative h-11 w-full min-w-[200px]">
            <input type="email" name="email"
                className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
               
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Email
            </label>
        </div>
        <div className="relative h-11 w-full min-w-[200px]">
            <input type="password" name="password" 
                className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Password
            </label>
        </div>
        <div>
        <button
            className="block w-full select-none rounded-lg  bg-gradient-to-tr from-slate-400 to-slate-200 bg-clip-border shadow-slate-500/40 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit"
            data-ripple-light="true"
        >
            Log In
        </button>
        </div>
       </form>
        
     
    </div>
    <div className="p-6 pt-0">
    <div><Toaster/></div>
        
        <div>
            <button onClick={()=>{handleSocial(googleLogIn)}}  className="block mt-5 flex gap-4 justify-center items-center w-full select-none rounded-lg  bg-gradient-to-tr from-slate-400 to-slate-200 bg-clip-border shadow-slate-500/40 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
               <FcGoogle className="text-3xl"></FcGoogle>
               <h1>login with Google</h1>
            </button>
        </div>
        <p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
            Donot have an account?
            <Link
                to='/signup'
                className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-pink-500"
            >
                Sign up
            </Link>
        </p>
    </div>
</div>
          </div>
        </div>
      </div>
    );
};

export default Login;