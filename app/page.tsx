"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaTools, FaFolder, FaBook, FaGamepad, FaRocket, FaStar, FaExternalLinkAlt, FaGithub, FaPalette, FaCode, FaUsers } from "react-icons/fa";

export default function Home() {
  const tools = [
    { 
      name: "File Renamer Pro", 
      desc: "Batch rename files with previews and smart organization", 
      link: "https://file-renamer-ten-chi.vercel.app",
      icon: <FaTools className="text-cyan-400" />,
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-gray-800",
      borderColor: "border-cyan-500/20"
    },
    { 
      name: "Infographic Generator", 
      desc: "Create stunning infographics for social media in seconds", 
      link: "https://infographic-generator-phi.vercel.app",
      icon: <FaPalette className="text-purple-400" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gray-800",
      borderColor: "border-purple-500/20"
    },
    { 
      name: "GitHub Card Generator", 
      desc: "Design elegant GitHub profile cards with animations", 
      link: "https://github-card-generator-flame.vercel.app",
      icon: <FaGithub className="text-gray-300" />,
      color: "from-gray-600 to-gray-400",
      bgColor: "bg-gray-800",
      borderColor: "border-gray-500/20"
    },
    { 
      name: "Testimonial Generator", 
      desc: "Craft beautiful testimonial cards that convert", 
      link: "https://testimonial-card-generator.vercel.app",
      icon: <FaUsers className="text-emerald-400" />,
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-gray-800",
      borderColor: "border-emerald-500/20"
    },
    { 
      name: "Fancy Code Lines", 
      desc: "Transform code into artistic illustrations", 
      link: "https://fancy-code-lines.vercel.app",
      icon: <FaCode className="text-orange-400" />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gray-800",
      borderColor: "border-orange-500/20"
    },
    { 
      name: "Follower Party", 
      desc: "Celebrate your social media milestones in style", 
      link: "https://follower-party.vercel.app",
      icon: <FaRocket className="text-pink-400" />,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-gray-800",
      borderColor: "border-pink-500/20"
    },
  ];

  const collections = [
    { 
      name: "JS-APPS Collection", 
      desc: "Interactive apps to master JavaScript programming", 
      link: "https://js-apps-three.vercel.app",
      icon: <FaCode className="text-indigo-400" />,
      color: "from-indigo-500 to-purple-500"
    },
    { 
      name: "ASTERISK Patterns", 
      desc: "Beautiful pattern programs for creative coding", 
      link: "https://asterisk-lemon.vercel.app",
      icon: <FaStar className="text-yellow-400" />,
      color: "from-yellow-500 to-amber-500"
    },
    { 
      name: "Programs4Beginners", 
      desc: "Beginner-friendly coding exercises and solutions", 
      link: "https://programs4beginners.vercel.app",
      icon: <FaBook className="text-emerald-400" />,
      color: "from-emerald-500 to-teal-500"
    },
    { 
      name: "Killer One-Liners", 
      desc: "Powerful one-liner functions for efficient coding", 
      link: "https://killer-one-liners.vercel.app",
      icon: <FaRocket className="text-red-400" />,
      color: "from-red-500 to-pink-500"
    },
  ];

  const resources = [
    { 
      name: "Coding King", 
      desc: "Essential resources and quick references for developers", 
      link: "https://coding-king.vercel.app",
      icon: <FaBook className="text-purple-400" />,
      color: "from-purple-500 to-indigo-500"
    },
  ];

  const games = [
    { 
      name: "Coding Clash", 
      desc: "Battle friends in epic coding challenges and duels", 
      link: "https://coding-clash.vercel.app",
      icon: <FaGamepad className="text-blue-400" />,
      color: "from-blue-500 to-cyan-500"
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
        <h2 className="text-3xl font-bold text-white mb-4">
          {title}
        </h2>
        {description && (
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
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
            className={`relative group overflow-hidden rounded-2xl ${item.bgColor || 'bg-gray-800'} ${item.borderColor || 'border-gray-700'} border-2 shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm`}
          >
            {/* Gradient accent */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`} />
            
            <div className="p-6">
              {/* Icon and Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-900 rounded-xl shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-gray-100 transition-colors">
                  {item.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {item.desc}
              </p>

              {/* Action Button */}
              <Link
                href={item.link}
                target="_blank"
                className={`inline-flex items-center gap-2 bg-gradient-to-r ${item.color} text-white font-semibold px-5 py-3 rounded-xl hover:shadow-lg transition-all duration-300 group/btn hover:scale-105`}
              >
                <span>Explore Tool</span>
                <FaExternalLinkAlt className="text-sm group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Hover effect background */}
            <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 py-8">
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
            className="inline-flex items-center gap-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-2xl border border-gray-700 mb-8"
          >
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">😎</span>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-cyan-500 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
            </div>
            <div className="text-left">
              <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Cool Tools
              </h1>
              <p className="text-gray-400 text-lg mt-2 font-medium">
                Premium developer tools collection
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-8 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <span>{tools.length + collections.length + resources.length + games.length} Tools</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
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
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-900/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-blue-900/20 rounded-full blur-3xl opacity-30 animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 -z-5 opacity-5" 
           style={{
             backgroundImage: `linear-gradient(#333 1px, transparent 1px),
                              linear-gradient(90deg, #333 1px, transparent 1px)`,
             backgroundSize: '50px 50px'
           }}>
      </div>
    </main>
  );
}