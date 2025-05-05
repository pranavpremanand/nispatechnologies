import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
} from "../../constant";
import whyus1 from "../../assets/images/whyus1.jpg";
import whyus2 from "../../assets/images/whyus2.jpg";

const WhyChooseUs = () => {
  const totalYrs = 4;
  const totalOnTimeCompletionPercentage = 100;
  const totalExperts = 20;
  const totalClients = 70;

  const [yrs, setYrs] = useState(0);
  const [onTimeCompletion, setOnTimeCompletion] = useState(0);
  const [experts, setExperts] = useState(0);
  const [clients, setClients] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      const yrsInterval = setInterval(() => {
        setYrs((prev) => Math.min(prev + 1, totalYrs));
      }, 100);

      const expertsInterval = setInterval(() => {
        setExperts((prev) => Math.min(prev + 1, totalExperts));
      }, 100);

      const clientsInterval = setInterval(() => {
        setClients((prev) => Math.min(prev + 1, totalClients));
      }, 50);

      const completionInterval = setInterval(() => {
        setOnTimeCompletion((prev) =>
          Math.min(prev + 1, totalOnTimeCompletionPercentage)
        );
      }, 20);

      return () => {
        clearInterval(yrsInterval);
        clearInterval(expertsInterval);
        clearInterval(clientsInterval);
        clearInterval(completionInterval);
      };
    }
  }, [inView]);

  return (
    <section className="py-[3rem] bg-backgroundcolor">
      <div className="wrapper text-center text-primarytextcolor flex flex-col gap-7">
        <div
          data-aos-offset={-200}
          data-aos="fade-up"
          className="gradient-rounded-text-box mx-auto"
        >
          Why Choose NispaTechnologies
        </div>
        <div className="flex flex-col gap-5">
          <h2 data-aos-offset={-200} data-aos="fade-up" className="heading-2">
            Elevating Your Business with Smart, Scalable AI-Powered Solutions
          </h2>
          <p
            data-aos-offset={-200}
            data-aos="fade-up"
            className="desc max-w-[40rem] mx-auto"
          >
            NispaTechnologies is your trusted IT partner for intelligent, scalable, and
            tailor-made digital solutions powered by AI. Our expert team collaborates
            closely with clients to turn ideas into impactful products that drive
            growth, boost efficiency, and deliver measurable results.
          </p>

          {/* First Row */}
          <div className="flex flex-col-reverse md:grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[60rem] mr-auto">
            <div className="flex flex-col gap-5">
              <div
                data-aos-offset={-200}
                data-aos="fade-right"
                className="p-5 border border-primary rounded-xl w-full h-fit"
              >
                <div className="flex w-full text-start items-center justify-between gap-3">
                  <h5 className="text-xl font-semibold">Proven Technical Excellence</h5>
                  <img
                    src={whyChooseUsIcon1}
                    className="h-[3rem] object-contain mb-3"
                    alt="Technical Expertise Icon"
                  />
                </div>
                <p className="desc text-primarytextcolor text-start mt-3">
                  With years of experience in IT services, our team engineers cutting-edge,
                  customized digital solutions that align perfectly with your business
                  goals and industry needs.
                </p>
              </div>

              <div
                data-aos-offset={-200}
                data-aos="fade-right"
                className="p-5 border border-primary rounded-xl w-full h-fit"
              >
                <div className="flex w-full text-start items-center justify-between gap-3">
                  <h5 className="text-xl font-semibold">Future-Ready Innovation</h5>
                  <img
                    src={whyChooseUsIcon2}
                    className="h-[3rem] object-contain mb-3"
                    alt="Innovation Icon"
                  />
                </div>
                <p className="desc text-primarytextcolor text-start mt-3">
                  We embrace emerging technologies and evolving trends to deliver
                  agile, adaptable solutions that empower your business to stay ahead
                  of the curve.
                </p>
              </div>
            </div>

            <div
              data-aos-offset={-200}
              data-aos="fade-up"
              className="w-fit mx-auto md:mx-0"
            >
              <img
                src={whyus1}
                alt="Teamwork Illustration"
                className="h-[392px] object-cover  rounded-xl"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[60rem] ml-auto">
            <div
              data-aos-offset={-200}
              data-aos="fade-up"
              className="w-fit md:w-full flex justify-end sm:mx-auto md:mx-0"
            >
              <img
                src={whyus2}
                alt="Collaboration Illustration"
                className="max-h-[416px] w-full min-h-[300px] rounded-xl object-cover"
              />
            </div>

            <div className="flex flex-col gap-5 h-full">
              <div
                data-aos-offset={-200}
                data-aos="fade-left"
                className="p-5 border border-primary rounded-xl w-full h-full"
              >
                <div className="flex w-full text-start items-center justify-between gap-3">
                  <h5 className="text-xl font-semibold">Transparent Collaboration</h5>
                  <img
                    src={whyChooseUsIcon3}
                    className="h-[3rem] object-contain mb-3"
                    alt="Communication Icon"
                  />
                </div>
                <p className="desc text-primarytextcolor text-start mt-3">
                  We prioritize clear communication and client involvement at every
                  stage to ensure a seamless development experience and long-term
                  success.
                </p>
              </div>

              <div
                data-aos-offset={-200}
                data-aos="fade-left"
                className="p-5 border border-primary rounded-xl w-full h-full"
              >
                <div className="flex w-full text-start items-center justify-between gap-3">
                  <h5 className="text-xl font-semibold">End-to-End Security & Compliance</h5>
                  <img
                    src={whyChooseUsIcon4}
                    className="h-[3rem] object-contain mb-3"
                    alt="Security Icon"
                  />
                </div>
                <p className="desc text-primarytextcolor text-start mt-3">
                  We implement strict data security protocols, regular audits, and
                  regulatory compliance practices to protect your business and ensure
                  peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Section */}
        <div className="pt-[3rem]">
          <div
            ref={ref}
            data-aos-offset={-200}
            data-aos="fade-up"
            className="w-full text-white grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 lg:gap-5 rounded-3xl bg-gradient-to-r from-secondary to-primary p-[2rem]"
          >
            <div className="w-full flex flex-col items-center justify-center">
              <div className="flex flex-col gap-3 relative w-fit">
                <h1 className="heading-1">{yrs}</h1>
                <span className="absolute top-1 -right-3 text-lg">+</span>
              </div>
              <p className="font-medium mt-3">Years in the Industry</p>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <div className="flex flex-col gap-3 relative w-fit">
                <h1 className="heading-1">{experts}</h1>
                <span className="absolute top-1 -right-3 text-lg">+</span>
              </div>
              <p className="font-medium mt-3">Certified IT Experts</p>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <div className="flex flex-col gap-3 relative w-fit">
                <h1 className="heading-1">{clients}</h1>
                <span className="absolute top-1 -right-3 text-lg">+</span>
              </div>
              <p className="font-medium mt-3">Satisfied Clients</p>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <div className="flex flex-col gap-3 relative w-fit">
                <h1 className="heading-1">{onTimeCompletion}</h1>
                <span className="absolute top-1 -right-3 text-lg">%</span>
              </div>
              <p className="font-medium mt-3">Timely Project Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
