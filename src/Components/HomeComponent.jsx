import Banner from "./Banner";
import Tab from "./Tab";


const HomeComponent = () => {
    return (
        <div className=" mt-2">
            <Banner/>
           <div className="grid justify-center items-center mx-auto mt-2">
            <h1 className="text-4xl font-bold mb-2">Our User profession:</h1>
           <Tab/>
           </div>
        </div>
    );
};

export default HomeComponent;