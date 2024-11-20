import React from 'react';

interface LoadingSpinnerProps {
  message?: string;
  logoSrc: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message = "Loading your portfolio...", logoSrc }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="relative flex items-center justify-center">
        {/* Rotating and Scaling Logo */}
        <img
          src={logoSrc}
          alt="Logo"
          className="w-24 h-24 animate-logo-spin-scale"
        />
        {/* Glowing Background Circle */}
        <div className="absolute w-32 h-32 bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 rounded-full blur-2xl opacity-50"></div>
      </div>
      {/* Loading Message */}
      <p className="mt-4 text-xl font-semibold animate-pulse">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
