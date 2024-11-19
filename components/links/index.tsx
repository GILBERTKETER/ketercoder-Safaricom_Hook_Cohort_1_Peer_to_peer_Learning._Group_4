import Link from 'next/link';
import React from 'react';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const SocialLinks: React.FC = () => {
  return (
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
  );
};

export default SocialLinks;
