import AiFeature from "@/components/AiFeature";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import UseCase from "@/components/UseCase";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AiFeature />
      <Features />
      <UseCase />
      <Pricing />
    </>
  );
}
