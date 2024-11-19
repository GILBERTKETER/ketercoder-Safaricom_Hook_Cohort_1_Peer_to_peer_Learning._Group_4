const GradientSection: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <section className={`relative ${className}`}>
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-transparent" />

      {/* Content container */}
      <div className="backdrop-blur-lg bg-white/5 border border-cyan-500/20 rounded-2xl p-8 shadow-xl hover:shadow-cyan-500/5 transition-all duration-300">
        {children}
      </div>
    </section>
  );
};
export default GradientSection;