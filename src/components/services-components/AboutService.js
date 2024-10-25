import Image from "next/image";

const AboutService = () => {
  return (
    <div className="services-details-area py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Section */}
          <div className="lg:w-1/2 services-details">
            <div className="services-details-desc mb-8 lg:mb-0 lg:pr-8">
              <h3 className="text-[25px]  font-semibold mb-4">
                Elevate your online presence with our professional web
                development.
              </h3>
              <p className="text-gray-700 leading-relaxed">
                At Evolzer, we&apos;sve got you covered when it comes to web
                development. Whether you are a start-up or an established
                organization, we are here to make your ideas into reality. Our
                team of talented designers and developers create responsive and
                custom web applications, ensuring that your website not only
                performs well but is also user-friendly. We stay up-to-date with
                the latest technologies and best industry practices to ensure
                your website stands out in the competitive digital landscape.
              </p>
            </div>
          </div>
          {/* Image Section */}
          <div className="lg:w-1/2 w-full">
            <div className="services-details-image w-full animate__animated animate__fadeInUp">
              <Image
                src={"/images/services-details-image/web-development.jpg"}
                alt="Web Development Services"
                layout="responsive"
                className="rounded-md"
                width={549}
                height={411}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutService;
