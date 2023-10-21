import Link from "next/link";
import React from "react";
import { SiFacebook, SiInstagram, SiGithub } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";

const Navbar: React.FC = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Column */}
        <div className="flex space-x-4">
          {/* Add your left menu items here */}
          <Link href="/" className="">
            Home
          </Link>
          <Link href="#about" className="">
            About
          </Link>
          <Link href="#skills" className="">
            Skills
          </Link>
          <Link href="#Projects">Projects</Link>
          <Link href="#Experience">Experience</Link>
        </div>

        {/* Center Logo */}
        <div className="rounded-full bg-black p-3">
          <Link href="#" className="text-2xl font-bold text-white">
            SP
          </Link>
        </div>

        {/* Right Column */}
        <div className="flex space-x-4">
          <Link href="#" className="text-[#0072b1]">
            <BsLinkedin size={24} />
          </Link>
          <Link href="https://github.com/imsatyam2610">
            <SiGithub size={24} />
          </Link>
          <Link href="#" className="text-[#3b5998]">
            <SiFacebook size={24} />
          </Link>
          <Link href="#" className="">
            <RiTwitterXFill size={24} />
          </Link>
          <Link href="#" className="">
            <SiInstagram size={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
