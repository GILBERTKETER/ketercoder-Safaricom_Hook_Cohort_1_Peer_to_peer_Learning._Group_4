"use client";
import React from "react";
import Button from "../Button"
import { motion } from 'framer-motion';
const Contact = () => {
  const [hasMounted, setHasMounted] = React.useState(false);
  
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  
  if (!hasMounted) {
    return null;
  }

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }} 
    className="relative mx-auto md:px-8 2xl:px-0">  
      <div id="contact" className="relative px-4 mx-auto md:px-8 2xl:px-0">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-transparent" />
        
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20">
          <div className="flex flex-col flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <div className="relative mx-auto w-full md:w-3/5 lg:w-3/4">
              {/* Main content container with glassmorphism effect */}
              <div className="backdrop-blur-lg bg-white/5 border border-cyan-500/20 rounded-2xl p-8 shadow-xl hover:shadow-cyan-500/5 transition-all duration-300">
                <section className="bg-transparent">
                  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
                      Contact Me
                    </h2>
                    {/* Add gradient line under title */}
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"/>
                    
                    <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">
                      Need assistance with coding, projects, or IT-related tasks? Feel free to reach out to me!
                    </p>
                    
                    <form action="#" className="space-y-8 bg-transparent">
                      <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                          Your email
                        </label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full p-3 rounded-lg bg-white/5 border border-cyan-500/20 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300"
                          placeholder="name@ketercoder.com" 
                          required 
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">
                          Subject
                        </label>
                        <input 
                          type="text" 
                          id="subject" 
                          className="w-full p-3 rounded-lg bg-white/5 border border-cyan-500/20 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300"
                          placeholder="Let us know how we can help you" 
                          required 
                        />
                      </div>
                      
                      <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
                          Your message
                        </label>
                        <textarea 
                          id="message" 
                          rows={6} 
                          className="w-full p-3 rounded-lg bg-white/5 border border-cyan-500/20 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300"
                          placeholder="Leave a comment..."
                        />
                      </div>
                      
                      <Button 
                        onClick={() => {console.log("sending message")}}
                        className="hover:shadow-cyan-500/20 transition-all duration-300"
                      >
                        Send message
                      </Button>
                    </form>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;