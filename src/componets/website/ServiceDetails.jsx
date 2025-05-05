import { Navigate, useLocation } from "react-router-dom";
import Testimonials from "../common/Testimonials";
import { allServices } from "../../constant";

const ServiceDetails = () => {
  const { pathname } = useLocation();

  const service = allServices.find((service) => service.link === pathname);

  if (!service) {
    return <Navigate to={-1} />;
  }
  return (
    <div className="flex flex-col gap-10">
      <img
        data-aos="fade-up"
        src={service.image}
        loading="lazy"
        className="aspect-video object-cover rounded-xl object-center"
        alt="web development"
      />
      <div className="flex flex-col gap-4 md:px-5">
        {/* Service Description */}
        <div
          dangerouslySetInnerHTML={{ __html: service.detailContent }}
          data-aos="fade-up"
          className="desc"
        ></div>

        {/* Points List */}
        <div data-aos="fade-up" className="pt-4">
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
