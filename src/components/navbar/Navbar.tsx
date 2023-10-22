import Link from "next/link";
import React from "react";
import { SiFacebook, SiInstagram, SiGithub } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";

const Navbar: React.FC = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto md:flex justify-between items-center align-middle">
        
        <div className="flex space-x-4">
          {/* Add your left menu items here */}
          <Link href="/" className="p-1 bg-violet-200 rounded-md">
            Home
          </Link>
          <Link href="#about" className="p-1 bg-orange-200 rounded-md">
            About
          </Link>
          <Link href="#skills" className="p-1 bg-blue-200 rounded-md">
            Skills
          </Link>
          <Link href="#Projects" className="p-1 bg-green-200 rounded-md">
            Projects
          </Link>
          <Link href="#Experience" className="p-1 bg-yellow-200 rounded-md">
            Experience
          </Link>
        </div>

        <div className="rounded-full bg-black p-3 float-left max-md:mt-2">
          <Link href="#" className="text-2xl font-bold text-white">
            SP
          </Link>
        </div>

        {/* Right Column */}
        <div className="flex space-x-4 float-right max-md:mt-6">
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
