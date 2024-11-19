"use client"
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import CVDownload from "../DownloadCV";
import { motion } from "framer-motion"
const SocialLinks: React.FC = () => {
  return (
    <div className="flex lg:justify-center items-center lg:flex-row flex-col justify-center gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <div className="flex lg:justify-center justify-center gap-6">
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-500 hover:text-cyan-400 transition duration-300"
          >
            <FaGithub size={40} />
          </Link>
          <Link
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-500 hover:text-cyan-400 transition duration-300"
          >
            <FaInstagram size={40} />
          </Link>
          <Link
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-500 hover:text-cyan-400 transition duration-300"
          >
            <FaTwitter size={40} />
          </Link>
        </div>

      </motion.div>

      <CVDownload />
    </div>

  );
};

export default SocialLinks;
