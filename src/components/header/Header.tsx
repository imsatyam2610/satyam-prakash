"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const descriptions = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Coder",
    "Graphic Designer",
    "Video Editor",
  ];
  let currentDescriptionIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  useEffect(() => {
    const typeDescription = () => {
      const currentDescription = descriptions[currentDescriptionIndex];
      const currentLength = typedText.length;

      if (!isDeleting) {
        setTypedText(currentDescription.substring(0, charIndex + 1));
        charIndex++;
      } else {
        setTypedText(currentDescription.substring(0, charIndex - 1));
        charIndex--;
      }

      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentDescriptionIndex =
          (currentDescriptionIndex + 1) % descriptions.length;
      }

      if (!isDeleting && charIndex === currentDescription.length) {
        isDeleting = true;
      }
    };

    const typeInterval = setInterval(typeDescription, 100);
    return () => clearInterval(typeInterval);
  }, []);

  return (
    <header className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Column (Text) */}
        <div className="max-w-lg">
          <p className="text-4xl font-bold">Hi, I am</p>
          <h1 className="text-5xl font-bold">Satyam Prakash</h1>
          <p className="text-2xl my-6 font-bold">
            <span>I am </span>
            <span className="text-violet-600">{`${typedText}`}</span>
          </p>
          <p>
            I am always looking for new and innovative ways to bring my clients'
            visions to life. I believe that webpage is about more than just
            making things look pretty - it's about solving problems and creating
            intuitive, enjoyable experiences for users.
          </p>
          <p className="my-5">
            Whether I'm working on a website, mobile app, or other digital
            product, I bring my commitment to design excellence and
            user-centered thinking to every project I work on. I look forward to
            the opportunity to bring my skills and passion to your next project.
          </p>
        </div>

        {/* Right Column (Image) */}
        <div>
          <Image
            src="/satyam-with-macbook.png"
            alt="Your Image"
            className="rounded-[120px]"
            width={560}
            height={520}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
