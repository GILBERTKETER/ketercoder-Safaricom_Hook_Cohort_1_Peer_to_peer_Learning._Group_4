import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBuilding, FaClock } from 'react-icons/fa';

import { IconType } from 'react-icons';
interface IconWithClassName extends IconType {
  className?: string;
}

interface ExperienceMetric {
  value: number;
  label: string;
  icon: IconWithClassName;
}

const ExperienceMetrics: React.FC = () => {
  const metrics: ExperienceMetric[] = [
    {
      value: 3,
      label: 'Years Experience',
      icon: FaClock as IconWithClassName
    },
    {
      value: 6,
      label: 'Companies',
      icon: FaBuilding as IconWithClassName
    },
    {
      value: 10,
      label: 'Projects',
      icon: FaCode as IconWithClassName
    }
  ];

  const circleVariants = {
    hidden: { 
      scale: 0,
      opacity: 0 
    },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const numberVariants = {
    hidden: { 
      opacity: 0,
      y: 20 
    },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: custom * 0.2 + 0.5
      }
    })
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Experience Overview</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"/>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <motion.div
                className="relative mb-6"
                variants={circleVariants}
              >
                {/* Outer circle */}
                <div className="w-48 h-48 rounded-full border-4 border-cyan-500/20 flex items-center justify-center relative">
                  {/* Inner circle with gradient */}
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-cyan-500/20 to-transparent flex items-center justify-center">
                    {/* Icon */}
                    <metric.icon className="absolute text-cyan-500 text-3xl top-8" />
                    {/* Number */}
                    <motion.div
                      className="flex items-center"
                      variants={numberVariants}
                      custom={index}
                    >
                      <span className="text-5xl font-bold text-white">{metric.value}</span>
                      <span className="text-2xl text-cyan-500 ml-1">+</span>
                    </motion.div>
                  </div>
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-full border-4 border-cyan-500 opacity-20 animate-pulse" />
                </div>
              </motion.div>
              
              {/* Label */}
              <motion.p
                className="text-xl text-gray-300 font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.8 }}
              >
                {metric.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceMetrics;