import developer from "../assets/image/developer.jpg";
import engineer from "../assets/image/engineer.webp";
import banker from "../assets/image/banker.avif";
import luncher from "../assets/image/luncher.png"
import student from "../assets/image/student.jpg"

const Tab = () => {
    return (
        <div role="tablist" className="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Developers" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <img src={developer} alt="" />
        </div>
      
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Engineer" checked />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <img src={engineer} alt="" />
        </div>
      
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Bankers" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <img src={banker} alt="" />
        </div>
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Free-Luncher" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <img src={luncher} alt="" />
        </div>
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Students" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <img src={student} alt="" />
        </div>
      </div>
    );
};

export default Tab;