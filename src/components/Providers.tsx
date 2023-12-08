"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });
  return <>{children}</>;
};

export default Providers;
