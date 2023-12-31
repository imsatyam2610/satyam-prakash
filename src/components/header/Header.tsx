"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="p-4 max-md:mt-14">
      <div className="container mx-auto md:flex justify-between items-center">
        {/* Left Column (Text) */}
        <div className="max-w-lg">
          <p className="text-4xl font-bold">Hi, I am</p>
          <h1 className="text-5xl font-bold">Satyam Prakash</h1>
          <p className="text-2xl my-6 font-bold">
            <span>I am </span>
            <span className="text-violet-600"></span>
          </p>
          <p>
            I am always looking for new and innovative ways to bring my clients
            visions to life. I believe that a webpage is about more than just
            making things look pretty - its about solving problems and creating
            intuitive, enjoyable experiences for users.
          </p>
          <p className="my-5">
            Whether Im working on a website, mobile app, or other digital
            product, I bring my commitment to design excellence and
            user-centered thinking to every project I work on. I look forward to
            the opportunity to bring my skills and passion to your next project.
          </p>
        </div>

        <div>
          <Image
            src="/Satyam-with-macbook.png"
            alt="Your Image"
            className="rounded-[120px] max-md:rounded-full"
            width={560}
            height={520}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
