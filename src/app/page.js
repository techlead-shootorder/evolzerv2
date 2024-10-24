import React, { Suspense } from "react";

const AboutUsContent = React.lazy(() => import("@/components/about-us/AboutUsContent"));
const HomePage = React.lazy(() => import("@/components/banner/HomePage"));
const CaseStudyPage = React.lazy(() => import("@/components/case-studies/CaseStudyPage"));
const Client = React.lazy(() => import("@/components/client/Client"));
const Discover = React.lazy(() => import("@/components/discover/Discover"));
const FeaturedService = React.lazy(() => import("@/components/FeaturedService/FeaturedService"));
const Footer = React.lazy(() => import("@/components/footer/Footer")); // You might need this later
const Industries = React.lazy(() => import("@/components/industries/Industries"));
const NewsletterStyleTwo = React.lazy(() => import("@/components/newsletter/NewsLetter"));
const Statistics = React.lazy(() => import("@/components/Stats/Statistics"));

export default function Home() {
  return (
    <>
      <Suspense fallback={<div></div>}>
        <HomePage />
        <Statistics />
        <AboutUsContent />
        <FeaturedService />
        <Discover />
        <Industries />
        <CaseStudyPage />
        <NewsletterStyleTwo />
        <Client />
      </Suspense>
    </>
  );
}
