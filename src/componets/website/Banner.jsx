import React from "react";
import { contactusbanner, defaultBanner } from "../../constant";
import ReactPlayer from "react-player";
import servicepagebanner from "../../assets/videos/servicepagebanner.mp4";
import servicepagebannerimage from "../../assets/images/servicesbanner.jpg";
import homepagebanner from "../../assets/videos/home-banner.mp4";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
const Banner = ({ page, desc }) => {
  return (
    <div
      data-aos="fade-down"
      className="h-[40vh] sm:h-[55vh] md:h-[70vh] w-full relative"
    >
      {page === "Services" ? (
        <ReactPlayer
          url={homepagebanner}
          loop
          muted
          width="100vw"
          height="100%"
          playsinline
          playing
          className="react-player left-0 top-0 absolute object-cover h-full w-full"
        />
      ) : (
        // <img
        //   src={servicepagebannerimage}
        //   className="object-cover object-[100%_35%] h-full w-full"
        //   alt=""
        // />
        <img
          src={contactusbanner}
          className="object-cover object-[100%_35%] h-full w-full"
          alt=""
        />
      )}
      <div className="absolute top-0 w-full h-full bg-black/50"></div>
      {/* <img src={defaultBanner} className="object-cover h-full w-full" alt="" /> */}
      <div className="absolute py-2  top-[40%] left-1/2 -translate-x-1/2 w-full flex flex-col items-center px-3">
        <h1
          data-aos="fade-up"
          className="heading text-primary text-center font-raleway text-[2.18rem] md:text-7xl font-bold leading-tight"
        >
          {page}
        </h1>
        {/* <h2 className="font-raleway text-[2.18rem] md:text-7xl font-bold leading-tight text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[10%] text-center">
          {page}
        </h2> */}
        <div
          data-aos="fade-up"
          className="mt-5 text-base sm:text-xl font-medium px-3 py-2 w-fit rounded-full  flex flex-wrap justify-center text-white items-center gap-1 sm:gap-2"
        >
          {page === "Services" ? (
            <h4>
              Empowering Your Vision with Our
              <span className="text-primary font-medium"> AI</span> Expertise
            </h4>
          ) : (
            <>
              <Link to="/">Home</Link>
              <IoIosArrowForward />
              <h4>{page}</h4>
            </>
          )}
          {/* <IoIosArrowForward /> */}
          {/* <p>{title}</p> */}
        </div>
      </div>
      {/* <h2 className="font-raleway text-[2.18rem] md:text-7xl font-bold leading-tight text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[10%] text-center">
        {page}
      </h2> */}
    </div>
  );
};

export default Banner;
