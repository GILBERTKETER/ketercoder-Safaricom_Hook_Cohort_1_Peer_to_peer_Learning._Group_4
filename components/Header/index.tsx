"use client";
import Button from "../Button";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function PortfolioHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      ref={headerRef}
      className="w-full py-4 lg:px-6 fixed top-0 left-0 z-10 bg-black shadow-cyan-500/50 shadow-md transition-all duration-300 ease-in-out h-20"
    >
      <div className="w-full flex justify-between items-center gap-2">
        <div className="flex justify-between items-center gap-2 w-[auto]">
          <Image
            width={64}
            height={64}
            alt="logo"
            src="/images/logo.png"
            className="rounded-full"
          />
          <h1 className="text-2xl sm:text-3xl font-extrabold text-cyan-500">
            Ketercoder
          </h1>
        </div>

        {/* Icon to toggle the menu on small screens */}
        <div className="lg:hidden flex items-center">
          <div
            onClick={handleClick}
            className="px-2 text-cyan-500 text-2xl cursor-pointer hover:text-white"
          >
            {isMenuOpen ? (
              <FaTimes className="text-cyan-500" />
            ) : (
              <FaBars className="text-cyan-500" />
            )}
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="w-[auto] lg:flex hidden justify-between gap-10 items-center">
          <div className="sm:flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 transition-all duration-300 ease-in-out">
            <a
              href="#home"
              className="text-white text-lg hover:text-cyan-500 transition-all"
            >
              Home
            </a>


            <a
              href="#services"
              className="text-white text-lg hover:text-cyan-500 transition-all"
            >
              Services
            </a>
            <a
              href="#skills"
              className="text-white text-lg hover:text-cyan-500 transition-all"
            >
              Skills
            </a>
            <a
              href="#experiences"
              className="text-white text-lg hover:text-cyan-500 transition-all"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-white text-lg hover:text-cyan-500 transition-all"
            >
              Projects
            </a>
            <a
              href="#certifications"
              className="text-white text-lg hover:text-cyan-500 transition-all"
            >
              Certifications
            </a> <a
              href="#testimonials"
              className="text-white text-lg hover:text-cyan-500 transition-all"
            >
              Testimonials
            </a>
          </div>
          <div>
            <Link href="/#contact">
              <Button>Contact me</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu (grid layout) */}
      <div
        ref={menuRef}
        className={`lg:hidden absolute top-20 left-0 right-0 bg-black p-6 transition-all duration-500 linear ${isMenuOpen ? "grid grid-cols-2 gap-3" : "hidden"
          }`}
      >
        <a
          href="#about"
          className="text-lg text-cyan-500 hover:text-cyan-700 transition-all"
        >
          Home
        </a>
        <a
          href="#services"
          className="text-lg text-cyan-500 hover:text-cyan-700 transition-all"
        >
          Services
        </a>
        <a
          href="#skills"
          className="text-lg text-cyan-500 hover:text-cyan-700 transition-all"
        >
          Skills
        </a>
        <a
          href="#experiences"
          className="text-lg text-cyan-500 hover:text-cyan-700 transition-all"
        >
          Experience
        </a>
        <a
          href="#projects"
          className="text-lg text-cyan-500 hover:text-cyan-700 transition-all"
        >
          Projects
        </a>
        <a
          href="#certifications"
          className="text-lg text-cyan-500 hover:text-cyan-700 transition-all"
        >
          Certifications
        </a>
        <a
          href="#testimonials"
          className="text-lg text-cyan-500 hover:text-cyan-700 transition-all"
        >
          Testimonials
        </a>
        <Link href="/#contact">

          <Button>Contact me</Button>
        </Link>
      </div>
    </header>
  );
}
