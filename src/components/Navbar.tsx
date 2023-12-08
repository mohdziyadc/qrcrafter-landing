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
import { ArrowRightIcon, Menu, MoveRightIcon, X } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import SignUp from "./SignUpForm";
import WaitlistDialog from "./WaitlistDialog";

type Props = {};

const Navbar = forwardRef<HTMLElement, Props>(({}: Props, ref) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleMenuClick = () => setToggleMenu(!toggleMenu);
  const { push } = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);

  const pricingRef = ref as MutableRefObject<HTMLInputElement>;

  return (
    <>
      <nav className="max-w-full px-6 py-4 z-10 bg-primary-foreground rounded-lg m-4 border-2 ">
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
            {/* <div className="mr-5">
              <Link href={"/try"}>Try</Link>
            </div> */}
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
                setIsSignUp(true);
              }}
            >
              <div className="flex flex-row justify-center items-center">
                <div>Sign up</div>
                <div>
                  <MoveRightIcon className="h-6 w-6 ml-4" />
                </div>
              </div>
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
          <div className="absolute left-1/2 transform -translate-x-1/2 w-full z-20   lg:hidden">
            <Card className="w-full mt-2">
              <CardContent>
                <div className="flex flex-col text-lg items-center justify-center  ">
                  <Link
                    href="/"
                    className="py-3 hover:bg-muted text-center rounded-md w-full"
                  >
                    Home
                  </Link>
                  <p
                    onClick={() => {
                      pricingRef.current.scrollIntoView({
                        behavior: "smooth",
                      });
                      setToggleMenu(false);
                    }}
                    className="py-3 hover:cursor-pointer hover:bg-muted text-center rounded-md w-full"
                  >
                    Pricing
                  </p>
                  {/* <Link
                    href="#"
                    className="py-3 hover:bg-muted text-center rounded-md w-full"
                  >
                    Try
                  </Link> */}

                  <Button className="w-full" onClick={() => setIsSignUp(true)}>
                    Sign Up
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </nav>
      <WaitlistDialog openDialog={isSignUp} setOpenDialog={setIsSignUp} />
    </>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;
