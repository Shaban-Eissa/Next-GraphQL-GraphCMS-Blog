import React, { useContext } from "react";

import Link from "next/link";

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className=" w-full flex justify-between items-center py-8">
        <div className="">
          <Link href="/">
            <span className="cursor-pointer font-bold text-md md:text-2xl text-black">
              GraphQL Blog
            </span>
          </Link>
        </div>

        <div className="flex justify-between items-center">
          <Link href="/">
            <span className="mr-8 fo text-lg cursor-pointer hidden md:inline-block">Login</span>
          </Link>
          <div className="bg-black rounded-xl px-3 py-2">
            <Link href="/">
              <span className="text-white cursor-pointer">Get Started</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
