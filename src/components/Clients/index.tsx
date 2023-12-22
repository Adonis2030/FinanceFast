import "../../index.css";
import MobileImg1 from "../../assets/images/iPhone 13 Pro (2).png";
import MobileImg2 from "../../assets/images/iPhone 13 Pro (3).png";
import MobileImg3 from "../../assets/images/iPhone 13 Pro (1).png";
import MobileImg4 from "../../assets/images/iPhone 13 Pro.png";
import Carousel from "../common/Carousel";

const Clients: React.FC = () => {
  return (
    <>
      <div className="flex justify-center items-end gap-6 overflow-hidden">
        <img src={MobileImg1} alt="mobile" className="h-full align-bottom" />
        <img src={MobileImg2} alt="mobile" className="h-full align-bottom" />
        <img src={MobileImg3} alt="mobile" className="h-full align-bottom" />
        <img src={MobileImg4} alt="mobile" className="h-full align-bottom" />
      </div>
      <div className="flex flex-wrap bg-[#E5DBFB]">
        <div className="w-full md:w-full lg:w-1/3 sm:w-full p-2">
          <p className="md:py-14 md:pl-22 md:pr-20 sm:pt-6 sm:pb-2 sm:px-8 px-6 py-4 text-md font-medium">
            We're have been recognized by Leading Finance Publications and
            Organizations.
          </p>
        </div>
        <Carousel />
      </div>
    </>
  );
};

export default Clients;
