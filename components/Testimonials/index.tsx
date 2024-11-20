"use client"
import Image from 'next/image';
import React from 'react';
import { useEffect, useState } from 'react';
import { FaQuoteRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import GradientSection from '../Gradient';
// Define types
interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    imageUrl: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Thokozani Tshabalala",
        role: "UI/UX Designer",
        company: "Medlink Project",
        content: "Bayede.I salute you, you are exceptional Keter. I want to learn your skills, you are so cool in web dev.",
        rating: 5,
        imageUrl: "/images/client3.jpeg",
    },
    {
        id: 2,
        name: "Anotida Expected",
        role: "AI/ML Expert",
        company: "Freelance Project",
        content: "If web development was football then Keter would be Messi, you are the GOAT in web development.",
        rating: 5,
        imageUrl: "/images/client2.avif",
    },
    {
        id: 3,
        name: "Faith Barare",
        role: "Compliance Officer",
        company: "TheBrcg",
        content: "You are so quick in what you do, Keter. I love the speed and interaction with me.",
        rating: 5,
        imageUrl: "/images/client1.avif",
    }
];


const TestimonialsCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }
    };

    const prevSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        }
    };

    const goToSlide = (index: number) => {
        if (!isAnimating && index !== currentSlide) {
            setIsAnimating(true);
            setCurrentSlide(index);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [currentSlide]);

    return (
        <div id='testimonials' className="relative w-full max-w-6xl mx-auto px-4 py-16">
            {/* Background gradient effects */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-transparent" /> */}

            {/* Main content container */}
            <div className="relative">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
                        Client Testimonials
                    </h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
                </div>

                {/* Testimonial carousel */}
                <div className="relative overflow-hidden">
                    <div
                        className="transition-transform duration-500 ease-out flex"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="w-full flex-shrink-0 px-4"
                            >
                                <div className="relative">
                                    {/* Quote icon */}
                                    <div className="absolute -top-6 -left-6">
                                        <FaQuoteRight className="w-12 h-12 text-cyan-500/20" />

                                    </div>

                                    {/* Testimonial card */}
                                    <GradientSection>

                                        <div className="flex items-center mb-6">
                                            {/* Profile image with gradient border */}
                                            <div className="relative h-20 w-20 flex items-center justify-center">
                                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-[2px] flex items-center justify-center">
                                                    <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                                                        <Image
                                                            width={80}
                                                            height={80}
                                                            src={testimonial.imageUrl}
                                                            alt={testimonial.name}
                                                            className="w-full h-full object-cover rounded-full"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Name and role */}
                                            <div className="ml-6">
                                                <h3 className="text-xl font-semibold text-white mb-1">
                                                    {testimonial.name}
                                                </h3>
                                                <p className="text-cyan-300 text-sm">
                                                    {testimonial.role}
                                                </p>
                                                <p className="text-gray-400 text-sm">
                                                    {testimonial.company}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Testimonial content */}
                                        <p className="text-gray-300 leading-relaxed mb-6">
                                            {testimonial.content}
                                        </p>

                                        {/* Rating stars */}
                                        <div className="flex gap-1">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className="w-5 h-5 text-yellow-500"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </GradientSection>

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 bottom-1/2 -translate-y-1/2 -translate-x-0 w-6 h-6 rounded-full bg-white/10 border border-cyan-500/20 backdrop-blur-lg flex items-center justify-center text-white hover:bg-white/20 transition-all"
                    >{" "}
                        <IoIosArrowBack className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 bottom-1/2 -translate-y-1/2 translate-x-0 w-6 h-6 rounded-full bg-white/10 border border-cyan-500/20 backdrop-blur-lg flex items-center justify-center text-white hover:bg-white/20 transition-all"
                    >{" "}
                        <IoIosArrowForward className="w-6 h-6" />

                    </button>

                    {/* Dot indicators */}
                    <div className="flex justify-center gap-3 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                title='Current'
                                type='button'
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                                    ? 'bg-cyan-500 w-8'
                                    : 'bg-white/20 hover:bg-white/40'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsCarousel;