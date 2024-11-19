import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({children, className }) => {
  return (
    <section className={`hover:bg-cyan-500 hover:text-black relative ${className}`}>
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-transparent" />

      {/* Content container */}
      <div className="backdrop-blur-lg bg-white/5 border border-cyan-500/20 rounded-md py-2 shadow-xl hover:shadow-cyan-500/5 transition-all duration-300">
        <button
          className="px-6 text-white text-lg font-medium bg-transparent transition-all duration-300 ease-in-out focus:outline-none"
        >
          {children}
        </button>
      </div>
    </section>
  );
};

export default Button;
