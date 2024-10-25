"use client";
import React, { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import Header from "./Header";

const CombinedHeader = () => {
  const [isMobile, setIsMobile] = useState(false); // Initialize with a fallback

  const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(
      typeof window !== "undefined" ? window.innerWidth : 0
    );

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowWidth;
  };

  const windowWidth = useWindowWidth();

  // Update mobile state only on client mount
  useEffect(() => {
    setIsMobile(windowWidth < 768); // Adjust breakpoint as needed
  }, [windowWidth]);

  return (
    <>
      {isMobile ? <MobileMenu /> : <Header />}
    </>
  );
};

export default CombinedHeader;
