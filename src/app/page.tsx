"use client";
import AiFeature from "@/components/AiFeature";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import UseCase from "@/components/UseCase";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const featureRef = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);
  return (
    <>
      <Navbar ref={pricingRef} />
      <Hero ref={featureRef} />
      <AiFeature ref={featureRef} />
      <Features />
      <UseCase />
      <Pricing ref={pricingRef} />
      <Footer />
    </>
  );
}
