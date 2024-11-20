"use client"
import React from 'react';
import { motion } from 'framer-motion';
// import { FaGraduationCap, FaLaptopCode } from 'react-icons/fa';
import GradientSection from '../Gradient';
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="w-full max-w-4xl mt-20 mx-auto space-y-8 p-6 relative">
            {/* Education Section */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="relative"
            >
                <motion.div
                    variants={itemVariants}
                    className="w-full flex flex-col items-center justify-center space-x-4 mb-6"
                >
                    <div className='mb-6 w-full flex items-center justify-center text-center gap-2'>
                        {/* <FaGraduationCap className="text-4xl text-cyan-500" /> */}
                        <h2 className="text-3xl font-bold bg-white bg-clip-text text-transparent">
                            Educational Background
                        </h2>
                    </div>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
                    <p className="text-gray-300 max-w-2xl mx-auto">Here is a glimpse of my educational background, showcasing the foundation that has equipped me with the knowledge and skills to excel in the tech industry.</p>
                </motion.div>

                <div className="space-y-4">
                    {educationData.map((edu, index) => (
                        <motion.div key={index}
                            variants={itemVariants}
                            className="rounded-2xl shadow-md border-t-4 sm:border-t-0 sm:border-l-4 border-cyan-500 hover:shadow-lg transition-shadow"
                        >
                            <GradientSection>
                                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                                        <p className="text-cyan-300">{edu.institution}</p>
                                        <p className="text-gray-300 mt-2">{edu.details}</p>
                                    </div>
                                    <span className="inline-block px-3 py-1 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-500 px-6 py-3 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 w-full sm:w-auto text-center">
                                        {edu.year}
                                    </span>
                                </div>
                            </GradientSection>
                        </motion.div>
                    ))}
                </div>


            </motion.div>

            {/* Interests Section */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="relative mt-12"
            >
                <motion.div
                    variants={itemVariants}
                    className="w-full flex flex-col items-center justify-center space-x-4 mb-6"
                >
                    <div className='mb-6 w-full flex items-center justify-center text-center gap-2'>
                        {/* <FaLaptopCode className="text-4xl text-cyan-500" /> */}
                        <h2 className="text-3xl font-bold bg-white bg-clip-text text-transparent">
                            Professional Interests
                        </h2>
                    </div>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />


                    <p className="text-gray-300 max-w-2xl mx-auto">These are some of my personal interests that shape my approach to development and creativity, reflecting my passion for continuous learning and innovation in the tech space.</p>
                </motion.div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {interests.map((interest, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className=" rounded-lg shadow-md p-4"
                        >
                            <GradientSection>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                                    <p className="text-white">{interest}</p>
                                </div>
                            </GradientSection>
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