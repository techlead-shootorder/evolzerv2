import Banner from '@/components/services-components/Banner';
import { notFound } from 'next/navigation'; // Use Next.js 13 notFound() function

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

// This function generates static paths for the service pages
export async function generateStaticParams() {
  console.log('Generating paths for services:', services);
  return services.map(service => ({
    service,
  }));
}

// The page component for each service
export default function ServicePage({ params }) {
  const { service } = params;

  // Debug: log the incoming service parameter
  console.log("Received service:", service);

  // Check if `service` param exists
  if (!service) {
    console.log("Service not found - missing service param");
    notFound(); // Redirect to 404 page if `service` is missing
  }

  // Safely check if service exists in the services array
  const matchedService = services.find(s => s.toLowerCase() === service?.toLowerCase());

  console.log("Matched service:", matchedService);

  // If the service is not valid, show the 404 page
  if (!matchedService) {
    console.log("Service not found - invalid service:", service);
    notFound(); // Use Next.js built-in notFound function
  }

  const serviceData = {
    title: matchedService.replace("-", " "), // Format the service title
    description: `This is the page for ${matchedService.replace("-", " ")}`,
  };

  return (
    <div>
    <Banner pageTitle={"Web Development"} banner={"/images/banner-image/web-application.png"} pagesubtitle={"Crafting user-friendly, responsive and high-performing websites that shine online, using the latest technologies and best practices to help you stand out in the crowd."} />
    </div>
  );
}
