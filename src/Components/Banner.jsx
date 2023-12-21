import { Link } from "react-router-dom";
import banner from "../assets/Banner/banner.jpeg";

const Banner = () => {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: `url(${banner})`}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">SCC Technovision Inc</h1>
          <p className="mb-5">Task Management Platform </p>
        <Link to='/signup'>
        <button className="btn btn-primary">Get Started</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
