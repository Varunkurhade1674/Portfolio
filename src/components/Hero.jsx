import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';

// Reusable Typewriter for the rotating roles
const RoleWriter = () => {
  const words = personalInfo.roles;
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIdx];
    const speed = isDeleting ? 50 : 100;
    const pause = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIdx === currentWord.length) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && charIdx === 0) {
        setIsDeleting(false);
        setWordIdx((prev) => (prev + 1) % words.length);
      } else {
        setCharIdx((prev) => prev + (isDeleting ? -1 : 1));
        setText(currentWord.substring(0, charIdx + (isDeleting ? -1 : 1)));
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, wordIdx]);

  return (
    <span className="text-emerald-400 font-semibold tracking-wide">
      {text}
      <span className="animate-pulse text-blue-400 ml-1">|</span>
    </span>
  );
};


export default function Hero() {
  // Stagger variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full flex items-center justify-center bg-[#050508] overflow-hidden px-4 md:px-8 lg:px-12 py-24"
    >
      {/* Background Decorators */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Neon Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Main Grid Container */}
      <motion.div 
        className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        
        {/* LEFT SIDE: Main Content */}
        <div className="flex flex-col items-start text-left space-y-7 max-w-2xl relative z-10">
          
          <motion.div variants={itemVariants} className="flex flex-col space-y-5">

            {/* Title Section */}
            <div className="space-y-2">
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]" 
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5a0] to-[#00d2ff]">Varun</span>
              </h1>
              <div 
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-300 leading-tight h-10 md:h-12 flex items-center" 
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <RoleWriter />
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants} 
            className="text-slate-400 text-lg md:text-[20px] leading-relaxed max-w-lg" 
            style={{ fontFamily: 'var(--font-body)' }}
          >
            I build intelligent, scalable AI systems. Passionate about multi-agent workflows, RAG architectures, and crafting AI-driven experiences that solve complex real-world problems.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-5 pt-4 w-full sm:w-auto">
            <a href="#projects" className="btn btn-primary group">
              Explore My Work
              <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            
            <a href="#contact" className="btn btn-outline">
              Let's Talk
            </a>
          </motion.div>
          
        </div>

        {/* RIGHT SIDE: Profile Image */}
        <motion.div 
          variants={itemVariants}
          className="relative w-full max-w-sm mx-auto mt-16 lg:mt-0 flex justify-center items-center"
        >
          {/* Main Image Container */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[340px] lg:h-[340px] rounded-full p-1.5 bg-gradient-to-tr from-emerald-500/40 via-blue-500/40 to-purple-500/40 shadow-[0_0_60px_rgba(16,185,129,0.15)] group">
            
            {/* Inner Ring */}
            <div className="w-full h-full rounded-full bg-[#050508] p-2">
               <img 
                 src="/profile.jpeg" 
                 alt="Varun Kurhade" 
                 className="w-full h-full object-cover object-top rounded-full border border-white/5 group-hover:scale-[1.02] transition-transform duration-500"
               />
            </div>
            
            {/* Ambient Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500/20 via-blue-500/20 to-purple-500/20 blur-[60px] -z-10 group-hover:opacity-100 opacity-60 transition-opacity duration-500" />
            
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
