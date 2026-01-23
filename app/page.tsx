"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaTools, FaFolder, FaBook, FaGamepad, FaRocket, FaStar, FaExternalLinkAlt, FaGithub, FaPalette, FaCode, FaUsers } from "react-icons/fa";

export default function Home() {
  // Verde tecnológico - combinación cibernética
  const techGreen = {
    cardBg: "bg-gradient-to-br from-emerald-900/80 to-teal-800/90",
    cardBorder: "border-emerald-500/30",
    cardHover: "border-emerald-400/50",
    headerGradient: "from-emerald-400 via-cyan-400 to-teal-400",
    accentGradient: "from-emerald-500 to-cyan-500",
    iconBase: "bg-emerald-900/50 border border-emerald-600/30"
  };

  const tools = [
    { 
      name: "File Renamer Pro", 
      desc: "Batch rename files with previews and smart organization", 
      link: "https://file-renamer-ten-chi.vercel.app",
      icon: <FaTools className="text-emerald-300" />
    },
    { 
      name: "Infographic Generator", 
      desc: "Create stunning infographics for social media in seconds", 
      link: "https://infographic-generator-phi.vercel.app",
      icon: <FaPalette className="text-cyan-300" />
    },
    { 
      name: "GitHub Card Generator", 
      desc: "Design elegant GitHub profile cards with animations", 
      link: "https://github-card-generator-flame.vercel.app",
      icon: <FaGithub className="text-teal-300" />
    },
    { 
      name: "Testimonial Generator", 
      desc: "Craft beautiful testimonial cards that convert", 
      link: "https://testimonial-card-generator.vercel.app",
      icon: <FaUsers className="text-emerald-200" />
    },
    { 
      name: "Fancy Code Lines", 
      desc: "Transform code into artistic illustrations", 
      link: "https://fancy-code-lines.vercel.app",
      icon: <FaCode className="text-cyan-200" />
    },
    { 
      name: "Follower Party", 
      desc: "Celebrate your social media milestones in style", 
      link: "https://follower-party.vercel.app",
      icon: <FaRocket className="text-teal-200" />
    },
  ];

  const collections = [
    { 
      name: "JS-APPS Collection", 
      desc: "Interactive apps to master JavaScript programming", 
      link: "https://js-apps-three.vercel.app",
      icon: <FaCode className="text-emerald-300" />
    },
    { 
      name: "ASTERISK Patterns", 
      desc: "Beautiful pattern programs for creative coding", 
      link: "https://asterisk-lemon.vercel.app",
      icon: <FaStar className="text-cyan-300" />
    },
    { 
      name: "Programs4Beginners", 
      desc: "Beginner-friendly coding exercises and solutions", 
      link: "https://programs4beginners.vercel.app",
      icon: <FaBook className="text-teal-300" />
    },
    { 
      name: "Killer One-Liners", 
      desc: "Powerful one-liner functions for efficient coding", 
      link: "https://killer-one-liners.vercel.app",
      icon: <FaRocket className="text-emerald-200" />
    },
  ];

  const resources = [
    { 
      name: "Coding King", 
      desc: "Essential resources and quick references for developers", 
      link: "https://coding-king.vercel.app",
      icon: <FaBook className="text-cyan-300" />
    },
  ];

  const games = [
    { 
      name: "Coding Clash", 
      desc: "Battle friends in epic coding challenges and duels", 
      link: "https://coding-clash.vercel.app",
      icon: <FaGamepad className="text-teal-300" />
    },
  ];

  const Section = ({ title, items, description }: any) => (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-16"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-emerald-100 mb-4">
          {title}
        </h2>
        {description && (
          <p className="text-emerald-200/80 text-lg max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ 
              y: -8,
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            className={`relative group overflow-hidden rounded-2xl ${techGreen.cardBg} border-2 ${techGreen.cardBorder} hover:${techGreen.cardHover} shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm`}
          >
            {/* Gradient accent line */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${techGreen.accentGradient}`} />
            
            {/* Animated grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.02] bg-[length:50px_50px] bg-[linear-gradient(#00ff88_1px,transparent_1px),linear-gradient(90deg,#00ff88_1px,transparent_1px)]" />
            
            <div className="p-6 relative z-10">
              {/* Icon and Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-xl shadow-sm ${techGreen.iconBase}`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-emerald-50 group-hover:text-white transition-colors">
                  {item.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-emerald-200/70 mb-6 leading-relaxed">
                {item.desc}
              </p>

              {/* Action Button */}
              <Link
                href={item.link}
                target="_blank"
                className={`inline-flex items-center gap-2 bg-gradient-to-r ${techGreen.accentGradient} text-white font-semibold px-5 py-3 rounded-xl hover:shadow-lg transition-all duration-300 group/btn hover:scale-105 border border-emerald-400/20`}
              >
                <span>Explore Tool</span>
                <FaExternalLinkAlt className="text-sm group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Hover effect background */}
            <div className={`absolute inset-0 bg-gradient-to-r ${techGreen.accentGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`} />
            
            {/* Corner accents */}
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-emerald-400/50 opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-emerald-400/50 opacity-60 group-hover:opacity-100 transition-opacity"></div>
            
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-emerald-400 rounded-2xl opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500 -z-20"></div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900/30 to-gray-900 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 pt-12"
        >
          {/* Logo with Cool Face */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-4 bg-emerald-900/40 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-2xl border border-emerald-700/30 mb-8"
          >
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">😎</span>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-emerald-400 rounded-2xl blur-xl opacity-40 animate-pulse"></div>
            </div>
            <div className="text-left">
              <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-emerald-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                Cool Tools
              </h1>
              <p className="text-emerald-300 text-lg mt-2 font-medium">
                Premium developer tools collection
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-8 text-sm text-emerald-400"
          >
            <div className="flex items-center gap-2 bg-emerald-900/30 px-3 py-1 rounded-full border border-emerald-700/30">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span>{tools.length + collections.length + resources.length + games.length} Tools</span>
            </div>
            <div className="flex items-center gap-2 bg-emerald-900/30 px-3 py-1 rounded-full border border-emerald-700/30">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-2 bg-emerald-900/30 px-3 py-1 rounded-full border border-emerald-700/30">
              <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              <span>No Signup</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Sections with enhanced descriptions */}
        <Section 
          title="Premium Tools" 
          items={tools}
          description="Professional-grade tools to supercharge your workflow"
        />
        
        <Section 
          title="Learning Collections" 
          items={collections}
          description="Curated collections to level up your coding skills"
        />
        
        <Section 
          title="Resources" 
          items={resources}
          description="Must-have resources for every developer"
        />
        
        <Section 
          title="Games" 
          items={games}
          description="Learn coding through fun and interactive challenges"
        />

        
      </div>

      {/* Background decoration */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-800/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-800/20 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-teal-800/20 rounded-full blur-3xl opacity-50 animate-pulse delay-500"></div>
      </div>

      {/* Animated grid pattern */}
      <div className="fixed inset-0 -z-5 opacity-[0.03]" 
           style={{
             backgroundImage: `linear-gradient(#00ff88 1px, transparent 1px),
                              linear-gradient(90deg, #00ff88 1px, transparent 1px)`,
             backgroundSize: '50px 50px'
           }}>
      </div>

      {/* Floating tech elements */}
      <div className="fixed top-20 left-10 w-6 h-6 bg-emerald-400/10 rounded-full animate-bounce"></div>
      <div className="fixed top-40 right-20 w-4 h-4 bg-cyan-400/10 rounded-full animate-bounce delay-300"></div>
      <div className="fixed bottom-32 left-20 w-5 h-5 bg-teal-400/10 rounded-full animate-bounce delay-700"></div>
      <div className="fixed bottom-20 right-32 w-3 h-3 bg-emerald-400/10 rounded-full animate-bounce delay-500"></div>
    </main>
  );
}