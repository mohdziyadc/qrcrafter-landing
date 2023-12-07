"use client";
import Link from "next/link";
import React, {
  MutableRefObject,
  forwardRef,
  startTransition,
  useRef,
  useState,
} from "react";

import Image from "next/image";
import LogoImage from "public/qrCrafter-Logo.png";
import { ArrowRightIcon, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useRouter } from "next/navigation";

type Props = {};

const Navbar = forwardRef<HTMLElement, Props>(({}: Props, ref) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleMenuClick = () => setToggleMenu(!toggleMenu);
  const { push } = useRouter();

  const pricingRef = ref as MutableRefObject<HTMLInputElement>;

  return (
    <nav className="max-w-full px-6 py-4 z-10">
      <div className="flex justify-between items-center">
        <div className=" flex flex-row justify-center items-center font-bold text-4xl">
          <div className="mr-2">
            <Image
              src={LogoImage}
              alt="logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
          </div>
          <div>QRCrafter</div>
        </div>
        <div className=" hidden md:flex flex-row text-lg justify-center items-center">
          <div className="mr-5">
            <Link href={"/"}>Home</Link>
          </div>
          <div className="mr-5">
            <Link href={"/try"}>Try</Link>
          </div>
          <div className="mr-5">
            <p
              className="hover:cursor-pointer"
              onClick={() =>
                pricingRef.current.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Pricing
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center ">
          <Button
            onClick={() => {
              push("/sign-up");
            }}
          >
            Sign up
          </Button>
        </div>

        <div className="md:hidden" onClick={handleMenuClick}>
          {!toggleMenu ? (
            <Menu className="w-8 h-8" />
          ) : (
            <X className="h-8 w-8" />
          )}
        </div>
      </div>
      {toggleMenu && (
        <div className="fixed  pr-10 z-20  w-full  lg:hidden">
          <Card className="w-full mt-2">
            <CardContent>
              <div className="flex flex-col text-lg items-center justify-center  ">
                <Link
                  href="/"
                  className="py-3 hover:bg-muted text-center rounded-md w-full"
                >
                  Home
                </Link>
                <Link
                  href="/pricing"
                  className="py-3 hover:bg-muted text-center rounded-md w-full"
                >
                  Pricing
                </Link>
                <Link
                  href="#"
                  className="py-3 hover:bg-muted text-center rounded-md w-full"
                >
                  Try
                </Link>

                <Button className="w-full">Sign Up</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </nav>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;
