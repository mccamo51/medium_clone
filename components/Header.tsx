import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return <header className="flex justify-between max-w-7xl mx-auto p-4">
      <div className="flex items-center">
          <Link href="/post">
          <img src="/img/logo.png" className="w-44 object-contain cursor-pointer"/>
          </Link>
          <div className="hidden md:inline-flex items-center space-x-5">
              <h3>About</h3> 
              <h3>Contact</h3>
              <h3 className="text-white bg-green-800 rounded-full px-4 py-[2px]">Follow</h3>
          </div>

      </div>
      <div className="flex items-center pr-3 text-sm">
          <div className="text-green-800">
              Sign in
          </div>
          <Link href="/getStarted">
          <div className="border-[1px] px-2 rounded-xl text-sm py-1 ml-3 cursor-pointer border-green-800">
              Get Started
          </div>
          </Link>
      </div>
  </header>;
}

export default Header;
