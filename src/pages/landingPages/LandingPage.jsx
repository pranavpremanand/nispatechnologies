import React, { useState } from "react";
import Contact from "../../componets/landingPages/Contact";
import {
  appLandingAbout,
  companyDetails,
  webLandingAbout,
} from "../../constant";
import { Link as ScrollLink } from "react-scroll";
import WhyChooseUs from "../../componets/common/WhyChooseUs";
import LandingServices from "../../componets/landingPages/LandingServices";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
import Testimonials from "../../componets/common/Testimonials";
import Portfolio from "../../componets/landingPages/Portfolio";
import ReactPlayer from "react-player";
import landingpagevideo from "../../assets/videos/home-banner.mp4";
import Faqs from "../../componets/common/Faqs";
import { useForm } from "react-hook-form";
import Credibility from "../../componets/common/Credibility";
import image from "../../assets/images/contactimage.jpg";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const LandingPage = ({ page }) => {
  const isWebDevelopment = Boolean(page === "web-development");
  const [spinner, setSpinner] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    setSpinner(true);

    var emailBody = "Name: " + data.fullName + "\n\n";
    emailBody += "Email: " + data.email + "\n\n";
    emailBody += "Phone: " + data.mobileNumber + "\n\n";
    emailBody += "Message:\n" + data.message;

    var payload = {
      to: companyDetails.email,
      subject: "You have a new message from NispaTechnologies",
      body: emailBody,
      name: "NispaTechnologies",
    };

    await fetch("https://send-mail-redirect-boostmysites.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("Email sent successfully");
        reset();
        navigate("/thank-you");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };

  return (
    <>
      {/* Hero Banner Section */}
      <section id="banner" className="h-screen relative">
        <ReactPlayer
          url={landingpagevideo}
          loop
          muted
          width="100vw"
          height="100%"
          playsinline
          playing
          className="react-player left-0 top-0 absolute object-cover h-full w-full"
        />
        <div className="bg-black/50 absolute w-full h-full"></div>
        <div
          data-aos="fade-up"
          className="pt-[3rem] wrapper flex items-center h-full"
        >
          <div className="relative z-10 px-6 justify-center h-full flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto">
            <div className="rounded-text-box border-white/70 font-medium text-white">
              {isWebDevelopment
                ? "Professional Web Development"
                : "Expert Mobile App Development"}
            </div>
            {isWebDevelopment ? (
              <h1 className="heading-1 text-white leading-tight">
                Custom Web Solutions That{" "}
                <span className="text-primary">Drive Business Growth</span>
              </h1>
            ) : (
              <h1 className="heading-1 text-white leading-tight">
                Powerful Mobile Apps Built for{" "}
                <span className="text-primary">User Engagement</span>
              </h1>
            )}
            <p className="text-white desc font-medium">
              {isWebDevelopment
                ? "We create high-performance websites with cutting-edge technology to boost your online presence and conversions."
                : "Transform your ideas into intuitive mobile experiences with our cross-platform development expertise."}
            </p>
            <ScrollLink
              to="contact"
              smooth
              offset={-90}
              className="primary-btn mt-2"
              aria-label="Get started with our development services"
            >
              Get Free Consultation
            </ScrollLink>
          </div>
        </div>
      </section>

      <Contact />

      {/* About Us Section */}
      <section
        id="about"
        className="py-[3rem] bg-backgroundcolor text-primarytextcolor wrapper"
      >
        <div
          data-aos="fade-up"
          className="gradient-rounded-text-box mx-auto lg:mx-0"
        >
          {isWebDevelopment
            ? "Web Development Experts"
            : "App Development Specialists"}
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div
            data-aos="fade-right"
            className="flex h-full flex-col gap-7 text-center lg:text-start"
          >
            <div className="flex flex-col gap-7">
              <h2 className="heading-2">
                {isWebDevelopment
                  ? "Bespoke Web Development Services Tailored to Your Needs"
                  : "Custom Mobile Applications That Deliver Results"}
              </h2>
              <p className="desc">
                {isWebDevelopment
                  ? "Our team of certified developers creates responsive, SEO-optimized websites using modern technologies like React, Next.js, and Node.js. We focus on delivering fast-loading, secure websites that convert visitors into customers."
                  : "Specializing in both native and cross-platform development, we build apps with intuitive UX, robust backend integration, and cutting-edge features to help your business succeed in competitive app markets."}
              </p>
            </div>
            <div className="flex justify-center lg:justify-start gap-5 mt-4">
              <ScrollLink
                to="contact"
                smooth
                offset={-90}
                className="primary-btn"
                aria-label="Contact our development team"
              >
                Get a Quote
              </ScrollLink>
              <ScrollLink
                to="services"
                smooth
                offset={-80}
                className="secondary-btn"
                aria-label="View our development services"
              >
                View Services
              </ScrollLink>
            </div>
          </div>
          <div data-aos="fade-left" className="h-full">
            <img
              src={isWebDevelopment ? webLandingAbout : appLandingAbout}
              className="object-contain max-h-[30rem] w-full rounded-lg"
              alt={
                isWebDevelopment
                  ? "Web development process"
                  : "Mobile app development workflow"
              }
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <LandingServices page={page} />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Portfolio Showcase */}
      <Portfolio page={page} />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Credibility Indicators */}
      <Credibility />

      {/* FAQ Section */}
      <Faqs />

      {/* Contact Form Section */}
      <section
        data-aos="fade-up"
        id="contact"
        className="py-[2rem] sm:py-[5rem] text-primarytextcolor bg-backgro-gradient-revert"
      >
        <div className="wrapper">
          <div className="h-full grid md:grid-cols-2 gap-10 py-5">
            <div className="flex flex-col gap-4">
              <h2 className="heading-2">Start Your Project Today</h2>
              <p className="desc">
                Partner with{" "}
                <span className="font-semibold">NispaTechnologies</span> for{" "}
                {isWebDevelopment
                  ? "web development"
                  : "mobile app development"}{" "}
                services that deliver results. Our team is ready to help you
                build a solution that meets your business objectives.
              </p>
              <img
                src={image}
                alt="Our development team at work"
                className="max-h-[21rem] object-cover rounded-xl"
                loading="lazy"
              />
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 md:px-[1rem] text-black"
              aria-label="Project inquiry form"
            >
              <div className="hover:scale-105 transition-all duration-500">
                <label htmlFor="fullName" className="mb-6 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="mt-1 w-full bg-[#faf3ef] placeholder-slate-800 outline-none border-2 rounded-sm font-light border-primary px-2 py-3"
                  placeholder="Enter Full Name"
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  style={{
                    borderImageSource:
                      "linear-gradient(90deg, rgba(250,120,67,0.545) 0%, rgba(164,164,164,0.612) 100%)",
                    borderImageSlice: 1,
                  }}
                />
                {errors.fullName && (
                  <span className="text-red-500 text-sm">
                    {errors.fullName.message}
                  </span>
                )}
              </div>

              <div className="hover:scale-105 transition-all duration-500">
                <label htmlFor="mobileNumber" className="mb-6 font-medium">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobileNumber"
                  className="mt-1 w-full bg-[#faf3ef] outline-none placeholder-slate-800 border-2 rounded-sm font-light border-primary px-2 py-3"
                  placeholder="Enter Mobile Number"
                  {...register("mobileNumber", {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^\+?[\d\s\-()]{6,14}\d$/,
                      message: "Invalid phone number",
                    },
                  })}
                  style={{
                    borderImageSource:
                      "linear-gradient(90deg, rgba(250,120,67,0.545) 0%, rgba(164,164,164,0.612) 100%)",
                    borderImageSlice: 1,
                  }}
                />
                {errors.mobileNumber && (
                  <span className="text-red-500 text-sm">
                    {errors.mobileNumber.message}
                  </span>
                )}
              </div>

              <div className="hover:scale-105 transition-all duration-500">
                <label htmlFor="email" className="mb-6 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 w-full bg-[#faf3ef] outline-none placeholder-slate-800 border-2 rounded-sm font-light border-primary px-2 py-3"
                  placeholder="Enter Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  style={{
                    borderImageSource:
                      "linear-gradient(90deg, rgba(250,120,67,0.545) 0%, rgba(164,164,164,0.612) 100%)",
                    borderImageSlice: 1,
                  }}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="hover:scale-105 transition-all duration-500">
                <label htmlFor="message" className="mb-6 font-medium">
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 w-full bg-[#faf3ef] outline-none placeholder-slate-800 border-2 rounded-sm font-light border-primary px-2 py-3"
                  placeholder="Tell us about your project"
                  {...register("message", { required: "Message is required" })}
                  style={{
                    borderImageSource:
                      "linear-gradient(90deg, rgba(250,120,67,0.545) 0%, rgba(164,164,164,0.612) 100%)",
                    borderImageSlice: 1,
                  }}
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <button className="primary-btn" type="submit">
                {spinner ? "Sending..." : "Get Proposal"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
