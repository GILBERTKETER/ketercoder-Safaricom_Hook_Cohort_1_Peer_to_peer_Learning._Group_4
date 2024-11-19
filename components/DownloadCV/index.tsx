"use client"
import { HiDownload } from "react-icons/hi";
import { motion } from 'framer-motion';

const CVDownload = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
        >


            <a href="/docs/cv.pdf"
                download="Gilbert_Keter_CV.pdf"
                className="group relative inline-flex items-center gap-2 bg-cyan-500/10 hover:bg-cyan-500/20 
        text-cyan-500 px-6 py-3 rounded-full transition-all duration-300 
        hover:shadow-lg hover:shadow-cyan-500/20">
                <HiDownload className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
                <span className="font-medium">Download CV</span>

                {/* Optional animated dots background */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-[radial-gradient(#00b4d8_1px,transparent_1px)] 
          [background-size:16px_16px] opacity-10" />
                </div>
            </a>
        </motion.div>
     );
};

export default CVDownload;