import React from "react";
import { Link } from "react-router-dom";
import Contact from "../../componets/landingPages/Contact";
import aboutUsImg from "../../assets/images/aboutuscontent.jpg";
import WhyChooseUs from "../../componets/common/WhyChooseUs";
import ReactPlayer from "react-player";
import { homeBannerVideo } from "../../constant";
import OurServices from "../../componets/website/OurServices";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
import Testimonials from "../../componets/common/Testimonials";
import Faqs from "../../componets/common/Faqs";
import Credibility from "../../componets/common/Credibility";
import CommonProject from "../../componets/website/CommonProject";

const Home = () => {
  return (
    <>
      <div id="banner" className="h-screen relative">
        <ReactPlayer
          url={homeBannerVideo}
          loop
          muted
          width="100%"
          height="100%"
          playsinline
          playing
          className="absolute"
        />
        <div className="bg-gradient-to-r to-black/50 from-transparent absolute w-full h-full"></div>
        <div className="pt-[3rem] wrapper flex items-center h-full">
          <div
            data-aos="fade-up"
            className="relative z-10 px-6 justify-center h-full text-white flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto"
          >
            {/* <div className="rounded-text-box border-white/70 font-medium">
              IT Services
            </div> */}
            <h1 className="heading-1">
              Unlock the Power of{" "}
              <span className="text-primary">Technology</span> to Move Your
              Business Forward
            </h1>
            <p className="desc">
              We specialize in creating powerful digital experiences and
              delivering solutions that simplify complex challenges.
            </p>
            <Link to="/contact-us" className="primary-btn mt-2">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <section className="py-[3rem] bg-backgroundcolor text-primarytextcolor wrapper">
        <div
          data-aos="fade-right"
          className="gradient-rounded-text-box mx-auto lg:mx-0"
        >
          About Us
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-right" className="flex h-full flex-col gap-7">
            <div className="flex flex-col gap-7 text-center lg:text-start">
              <h2 className="heading-2">
                Smart digital solutions, tailored for ambitious brands.
              </h2>
              <p className="desc">
                Intelligent digital
                solutions, customized for forward-thinking brands. At
                NispaTechnologies, we
                don't merely develop software—we assist organizations in growth with technology-led strategy.
                Whether you're bringing a digital product to
                market, revitalizing old systems,
                or venturing into cutting-edge technology, our multi-functional
                team is ready to bring
                your idea to the world with transparency, agility, and accuracy.
              </p>
            </div>
            <div className="flex gap-5 mt-4 justify-center lg:justify-start">
              <Link to="/contact-us" className="primary-btn">
                Contact Us
              </Link>
              <Link to="/services" className="secondary-btn">
                Our Services
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="h-full max-h-[300px] max-w-[400px] lg:max-w-full  lg:max-h-[382px] "
          >
            <img
              src={aboutUsImg}
              className=" h-full rounded-lg w-full  mx-auto object-cover"
              alt=""
            />
          </div>
        </div>
      </section>
      <OurServices length={3} />
      <section className="py-[3rem] bg-[#333333] text-white">
        <div
          data-aos-offset={-400}
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-3"
        >
          <div className="gradient-rounded-text-box mx-auto mb-4">
            Why Choose Us
          </div>
          <h1 className="heading-2 mb-5">
            What Makes Us Different?
          </h1>

          <div className="max-w-[50rem] mx-auto flex flex-col gap-7">
            <div>
              <h3 className="text-xl font-semibold mb-2">Strategy-Driven</h3>
              <p className="desc">
                We don't dive into code without getting to know your business
                first. Our projects start with deep discovery, market research,
                and user insights—because the right answer begins with the right
                question.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Outcomes, Not Deliverables
              </h3>
              <p className="desc">
                Anyone can deliver code. What we do is deliver results—scalable
                platforms, user-focused applications, and high-performing
                systems that drive your growth well after launch.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Collaboration is Included
              </h3>
              <p className="desc">
                We're not "another agency." We work as part of your team—clear,
                flexible, and always for your objectives. Your success is the
                one metric we care about.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Tech-Forward, People-First
              </h3>
              <p className="desc">
                We're at the leading edge of technology, but our thinking is
                always people-first. From UX and product strategy to software
                architecture and machine learning, we design for the people who
                will use it.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CommonProject />
      <WhyChooseUs />
      <UnlockEfficiency />
      <Testimonials />
      <Credibility />
      <Faqs />
      <div>
        <Contact />
      </div>
    </>
  );
};

export default Home;
