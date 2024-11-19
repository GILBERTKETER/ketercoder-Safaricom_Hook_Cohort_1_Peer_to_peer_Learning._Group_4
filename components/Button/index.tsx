import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string; 
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 border-2 border-cyan-500 text-white text-lg font-medium rounded-md bg-transparent hover:bg-cyan-500 hover:text-black transition-all duration-300 ease-in-out focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
