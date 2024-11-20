"use client"
import React from 'react';
import { motion } from 'framer-motion';

const EducationAndInterests = () => {
    const educationData = [
        {
            degree: "Bachelor of Science in Mathematics and Computer Science",
            institution: "Tom Mboya University",
            year: "2021 - 2025",
            details: "Studying Mathematics and Computer Science"
        },
        {
            degree: "Software Engineering",
            institution: "Powerlearn Project Academy",
            year: "2024 - 2025",
            details: "Currently pursuing Software Engineering certification"
        }
    ];

    const interests = [
        "Artificial Intelligence & Machine Learning",
        "Cloud Architecture & DevOps",
        "Backend Development",
        "System Design & Architecture"
    ];

    return (
        <div className="w-full max-w-4xl mt-20 mx-auto space-y-8 px-4 relative overflow-hidden">
            {/* Education Section */}
            <motion.div
                initial="visible"
                className="relative"
            >
                <motion.div
                    className="w-full flex flex-col items-center justify-center mb-6"
                >
                    <div className='mb-6 w-full flex items-center justify-center text-center gap-2'>
                        <h2 className="text-3xl font-bold bg-white bg-clip-text text-transparent">
                            Educational Background
                        </h2>
                    </div>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
                    <p className="text-gray-300 max-w-2xl mx-auto text-center">Here is a glimpse of my educational background, showcasing the foundation that has equipped me with the knowledge and skills to excel in the tech industry.</p>
                </motion.div>

                <div className="space-y-4 w-full">
                    {educationData.map((edu, index) => (
                        <motion.div key={index}
                            className="rounded-2xl shadow-md border-t-4 sm:border-t-0 sm:border-l-4 border-cyan-500 hover:shadow-lg transition-shadow w-full"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-transparent" />
                                <div className="backdrop-blur-lg bg-white/5 border border-cyan-500/20 rounded-2xl p-4 md:p-8 shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 relative">
                                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-xl font-semibold text-white break-words">{edu.degree}</h3>
                                            <p className="text-cyan-300">{edu.institution}</p>
                                            <p className="text-gray-300 mt-2">{edu.details}</p>
                                        </div>
                                        <span className="inline-block px-3 py-1 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-500 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 w-full sm:w-auto text-center">
                                            {edu.year}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Interests Section */}
            <motion.div
                initial="visible"
                className="relative mt-12 w-full"
            >
                <motion.div
                    className="w-full flex flex-col items-center justify-center mb-6"
                >
                    <div className='mb-6 w-full flex items-center justify-center text-center gap-2'>
                        <h2 className="text-3xl font-bold bg-white bg-clip-text text-transparent">
                            Professional Interests
                        </h2>
                    </div>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
                    <p className="text-gray-300 max-w-2xl mx-auto text-center">These are some of my personal interests that shape my approach to development and creativity, reflecting my passion for continuous learning and innovation in the tech space.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    {interests.map((interest, index) => (
                        <motion.div
                            key={index}
                            className="rounded-lg shadow-md w-full"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-transparent" />
                                <div className="backdrop-blur-lg bg-white/5 border border-cyan-500/20 rounded-2xl p-4 shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 relative">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-2 h-2 rounded-full bg-cyan-500 flex-shrink-0"></div>
                                        <p className="text-white break-words">{interest}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 -z-10">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.05, 0.08, 0.05]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    className="w-72 h-72 bg-cyan-500 rounded-full blur-3xl"
                />
            </div>
            <div className="absolute bottom-0 left-0 -z-10">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.05, 0.08, 0.05]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 4
                    }}
                    className="w-72 h-72 bg-white rounded-full blur-3xl"
                />
            </div>
        </div>
    );
};

export default EducationAndInterests;