import React from "react";
import {
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  aboutusintroone,
  aboutusintrotwo,
  aboutUsItems,
  whyChooseUsContent,
} from "../../constant";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
import OurServices from "../../componets/website/OurServices";
import Testimonials from "../../componets/common/Testimonials";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Credibility from "../../componets/common/Credibility";
import ReactPlayer from "react-player";
import servicepagebanner from "../../assets/videos/servicepagebanner.mp4";
const AboutUs = () => {
  return (
    <>
      <div
        data-aos="fade-down"
        className=" h-[40vh] sm:h-[55vh] md:h-[70vh] relative"
      >
        <img
          src={aboutUsBanner}
          className="object-cover object-[100%_35%] h-full w-full"
          alt=""
        />
        <div className="absolute top-0 w-full h-full bg-black/50"></div>

        {/* <h2 className="font-raleway text-[2.18rem] md:text-7xl font-bold leading-tight text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[10%] text-center">
          About Us
        </h2> */}
        <div className="absolute py-2  top-[40%] left-1/2 -translate-x-1/2 w-full flex flex-col items-center px-3">
          <h1
            data-aos="fade-up"
            className="heading text-white text-center font-raleway text-[2.18rem] md:text-7xl font-bold leading-tight"
          >
            About Us
          </h1>
          {/* <h2 className="font-raleway text-[2.18rem] md:text-7xl font-bold leading-tight text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[10%] text-center">
          {page}
        </h2> */}
          <div
            data-aos="fade-up"
            className="mt-5 text-base sm:text-xl font-medium px-3 py-2 w-fit rounded-full  flex flex-wrap justify-center text-white items-center gap-1 sm:gap-2"
          >
            <Link to="/">Home</Link>
            <IoIosArrowForward />
            <h4 className="text-white">About us</h4>
            {/* <IoIosArrowForward /> */}
            {/* <p>{title}</p> */}
          </div>
        </div>
      </div>
      <div className="py-[2rem] sm:py-[2rem] text-primarytextcolor text-center">
        <section className=" px-4 py-6 sm:py-12 md:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              {/* Left Content */}
              <div className="">
                <div
                  data-aos="fade-up"
                  className="gradient-rounded-text-box mb-6"
                >
                  Know About Us
                </div>
                <h1
                  data-aos="fade-up"
                  className="mb-6 heading-2 text-start font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
                >
                  Driven by Ideas. Defined by Innovation. Built to Scale.
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-lg text-start leading-relaxed text-gray-600"
                >
                  At NispaTechnologies,
                  we blend considerate design, intelligent engineering,
                  and profound industry expertise to deliver strong digital
                  products. We're a technology firm with a
                  clear mission—resolving intricate business challenges through customized software, cutting-edge digital
                  platforms, and tech stacks ready for the future.
                  <br />
                  <br />
                  Over the years, we’ve helped startups launch, enterprises
                  innovate, and mid-sized businesses scale. From day one, our
                  goal has been the same: to deliver solutions that work in the
                  real world—not just on paper.
                </p>
              </div>

              {/* Right Images */}
              <div className="relative max-w-[300px] sm:ml-20  sm:max-w-[400px] h-[300px]">
                {/* Circuit Board Image */}
                <div className="absolute top-0 right-0 max-w-[250px] sm:max-w-[300px]  overflow-hidden rounded-lg shadow-xl">
                  <img
                    data-aos="fade-up"
                    src={aboutusintroone}
                    alt="Circuit board with glowing components"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* People Image */}
                <div className="absolute left-0 bottom-10 sm:bottom-0 max-h-[140px] sm:max-h-[180px] max-w-[200px] sm:max-w-[250px] overflow-hidden rounded-lg shadow-xl">
                  <img
                    data-aos="fade-up"
                    src={aboutusintrotwo}
                    alt="Team members working together"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-6 sm:py-16 bg-gradient-to-b from-background to-background/80">
          <div className="wrapper mx-auto px-4">
            <div className="text-center mb-16">
              <h3
                className="text-4xl font-bold mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Why Clients Work With Us
              </h3>
              <p
                className="text-xl text-muted-foreground max-w-2xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                We’re passionate about helping you achieve your goals through
                technology. Here are some reasons why you should work with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aboutUsItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="transition-all duration-300 hover:opacity-75 h-[270px] w-full object-cover"
                    />
                  </div>
                  <div className={`p-6 `}>
                    <h4 className="text-xl font-medium mb-2">{item.title}</h4>
                    <p className="text-sm text-card-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <UnlockEfficiency />
        
        {/* <section className="relative py-6 sm:py-16 px-4 md:py-12 ">
        
          <div className="max-w-7xl mx-auto">
            <h2
              data-aos="fade-up"
              className="heading-2 font-bold text-center mb-12 text-black"
            >
              Why Choose NispaTechnologies?
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {whyChooseUsContent.map((feature, index) => (
                <div
                  data-aos="fade-up"
                  key={index}
                  className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                      {feature.img}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-orange-600">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </div>
      <OurServices length={3} />
      <Credibility />
      <Testimonials />
    </>
  );
};

export default AboutUs;
