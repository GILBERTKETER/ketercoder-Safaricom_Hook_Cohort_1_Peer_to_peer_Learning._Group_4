import Image from "next/image";
import React from "react";
import './Hero.css'; 

export default function Hero() {
  return (
    <section className=" w-full h-screen flex flex-col lg:flex-row justify-center items-center bg-transparent">
      <div className="lg:text-right text-center px-4 py-6 max-w-4xl w-full lg:w-1/2">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4">
          Gilbert Keter
        </h1>
        <p className="text-xl sm:text-2xl text-white opacity-75 mb-8">
          Full-stack Developer | Innovator | Problem Solver
        </p>
        <div className="flex lg:justify-end justify-center items-center gap-6">
          <a href="#projects" className="text-lg sm:text-xl font-semibold text-cyan-500 hover:underline">
            View My Projects
          </a>
          <a href="#contact" className="text-lg sm:text-xl font-semibold text-cyan-500 hover:underline">
            Contact Me
          </a>
        </div>
      </div>
      <div className="lg:w-1/2 w-full h-[auto] flex justify-center items-start lg:items-center">
        <div className="relative w-100 h-100 rounded-full overflow-hidden sparkling-border shadow-lg">
          <Image
            width={500}
            height={500}
            src="/images/me.png"
            alt="Gilbert Keter"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}