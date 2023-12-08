import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <section className="relative bg-gray-300 py-4">
      <div className="flex items-center justify-center gap-1 text-muted-foreground">
        Made with ❤️ by{" "}
        <span className="font-bold underline">
          <Link href={"https://twitter.com/_mohdziyad"}>Ziyad</Link>
        </span>
      </div>
    </section>
  );
};

export default Footer;
