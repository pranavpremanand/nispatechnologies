import React from "react";
import { Link } from "react-router-dom";

const UnlockEfficiency = () => {
  return (
    <section className="py-[3rem] text-primarytextcolor bg-backgroundcolor">
      <div
        data-aos-offset={-400}
        data-aos="fade-up"
        className="wrapper flex flex-col text-primarytextcolor items-center gap-5 text-center"
      >
        <div className="gradient-rounded-text-box">Unlock Efficiency</div>
        <h2 className="heading-2">
          Transforming Businesses Through AI Solutions
        </h2>
        <p className="desc max-w-[40rem] text-center">
          We are a leading provider of AI solutions that help businesses improve
          their efficiency and productivity. Our team of experts uses the latest
          technologies to develop custom solutions tailored to your specific
          needs.
        </p>
        <Link to="/contact-us" className="primary-btn mt-3">
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default UnlockEfficiency;
