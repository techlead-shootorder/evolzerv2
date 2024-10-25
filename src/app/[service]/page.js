import CaseStudyPage from "@/components/case-studies/CaseStudyPage";
import Client from "@/components/client/Client";
import IndustriesCater from "@/components/industries/Industries";
import NewsletterStyleTwo from "@/components/newsletter/NewsLetter";
import AboutService from "@/components/services-components/AboutService";
import Banner from "@/components/services-components/Banner";
import Faqs from "@/components/services-components/Faqs";
import Process from "@/components/services-components/Process";
import TechStackAndTools from "@/components/services-components/TechStackAndTools";
import WhatWeDo from "@/components/services-components/WhatWeDo";
import { webdevfaqsfaqs } from "@/utils/faqs";
import {
  webDevelopmentDatabases,
  webDevelopmentFrameworks,
  webDevelopmentPlatforms,
  webDevelopmentStacks,
  webDevelopmentTools,
} from "@/utils/techstack";
import { notFound } from "next/navigation"; // Use Next.js 13 notFound() function

// Define the list of valid services
const services = [
  "app-development",
  "mobile-application",
  "web-development",
  "software-development",
  "implementation",
  "sap-application",
  "sale-force",
  "hubspot",
  "intelligent-data",
  "data-annotation",
  "data-engineering",
  "data-management",
  "ai",
  "generative-ai",
  "enterprise-ai",
];
export const WebDevServices = [
  {
    imageUrl: "/images/web-services/web-con.jpg",
    card_title: "Web Consultation Services",
    card_subtitle:
      "We access your business and provide expert advice to help you make informed decisions and help you choose suitable solutions.",
  },
  {
    imageUrl: "/images/web-services/Web-design.jpg",
    card_title: "Website Design",
    card_subtitle:
      "We design the layout, user interface, visual appeal, and user experience of a website to ensure it is aesthetically pleasing, easy to navigate, and aligned with your brand’s identity.",
  },
  {
    imageUrl: "/images/web-services/front-end.jpg",
    card_title: "Front-end Development",
    card_subtitle:
      "This entails using HTML, CSS, JavaScript, and also various front-end frameworks to create visual and interactive elements on the website that the users interact with directly.",
  },
  {
    imageUrl: "/images/web-services/back-end-development.jpg",
    card_title: "Back-end Development",
    card_subtitle:
      "Using technologies such as PHP, Python, Ruby, and Node.js we work on the server-side of the website.",
  },
  {
    imageUrl: "/images/web-services/website-optimization.jpg",
    card_title: "Website Optimization",
    card_subtitle:
      "We optimize websites to enhance their performance, speed, and search engine optimization. Our tailored optimization strategies make sure your web application delivers an exceptional user experience and ranks higher in search results.",
  },
  {
    imageUrl: "/images/web-services/E-commerce.jpg",
    card_title: "E-commerce Development",
    card_subtitle:
      "We also specialize in developing captivating E-commerce solutions that help drive your sales and engage customers to uplift your business.",
  },
];

// This function generates static paths for the service pages
export async function generateStaticParams() {
  return services.map((service) => ({
    service,
  }));
}

// The page component for each service
export default function ServicePage({ params }) {
  const { service } = params;

  // Check if `service` param exists
  if (!service) {
    console.log("Service not found - missing service param");
    notFound(); // Redirect to 404 page if `service` is missing
  }

  // Safely check if service exists in the services array
  const matchedService = services.find(
    (s) => s.toLowerCase() === service?.toLowerCase()
  );

  // If the service is not valid, show the 404 page
  if (!matchedService) {
    notFound(); // Use Next.js built-in notFound function
  }

  const serviceData = {
    title: matchedService.replace("-", " "), // Format the service title
    description: `This is the page for ${matchedService.replace("-", " ")}`,
  };

  return (
    <div>
      <Banner
        pageTitle={"Expert Web Development"}
        banner={"/images/banner-image/web-application.png"}
        pagesubtitle={
          "Crafting user-friendly, responsive and high-performing websites that shine online, using the latest technologies and best practices to help you stand out in the crowd."
        }
      />
      <AboutService />
      <WhatWeDo heading="What We Do" service={WebDevServices} />
      <Process />
      <TechStackAndTools
        stacks={webDevelopmentStacks}
        tools={webDevelopmentTools}
        framework={webDevelopmentFrameworks}
        database={webDevelopmentDatabases}
        platform={webDevelopmentPlatforms}
      />
      <Faqs faq={webdevfaqsfaqs} />
      <IndustriesCater bg="bg-white" />
      <CaseStudyPage />
      <NewsletterStyleTwo />
      <Client />
    </div>
  );
}
