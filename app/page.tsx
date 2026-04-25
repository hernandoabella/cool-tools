"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  FaTools, FaBook, FaGamepad, FaRocket, FaStar, 
  FaExternalLinkAlt, FaGithub, FaPalette, FaCode, FaUsers,
  FaBolt, FaCrown, FaFilter
} from "react-icons/fa";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Light mode - clean & simple aesthetic
  const lightTheme = {
    cardBg: "bg-white",
    cardBorder: "border-gray-200",
    cardHover: "border-indigo-300",
    accentGradient: "from-indigo-500 to-indigo-600",
    iconBase: "bg-indigo-50 border border-indigo-100",
  };

  // All items with categories
  const allItems = [
    // Tools
    { name: "File Renamer Pro", desc: "Batch rename files with previews", link: "https://file-renamer-ten-chi.vercel.app", icon: <FaTools className="text-indigo-500" />, category: "tool" },
    { name: "Infographic Gen", desc: "Stunning infographics in seconds", link: "https://infographic-generator-phi.vercel.app", icon: <FaPalette className="text-indigo-500" />, category: "tool" },
    { name: "GitHub Card Gen", desc: "Elegant GitHub profile cards", link: "https://github-card-generator-flame.vercel.app", icon: <FaGithub className="text-indigo-500" />, category: "tool" },
    { name: "Testimonial Gen", desc: "Beautiful testimonial cards", link: "https://testimonial-card-generator.vercel.app", icon: <FaUsers className="text-indigo-500" />, category: "tool" },
    { name: "Fancy Code Lines", desc: "Code → artistic illustrations", link: "https://fancy-code-lines.vercel.app", icon: <FaCode className="text-indigo-500" />, category: "tool" },
    { name: "Follower Party", desc: "Celebrate social milestones", link: "https://follower-party.vercel.app", icon: <FaRocket className="text-indigo-500" />, category: "tool" },
    // Collections
    { name: "JS-APPS Collection", desc: "Master JavaScript interactively", link: "https://js-apps-three.vercel.app", icon: <FaCode className="text-indigo-500" />, category: "learn" },
    { name: "ASTERISK Patterns", desc: "Creative pattern programs", link: "https://asterisk-lemon.vercel.app", icon: <FaStar className="text-indigo-500" />, category: "learn" },
    { name: "Programs4Beginners", desc: "Beginner coding exercises", link: "https://programs4beginners.vercel.app", icon: <FaBook className="text-indigo-500" />, category: "learn" },
    { name: "Killer One-Liners", desc: "Powerful one-liner functions", link: "https://killer-one-liners.vercel.app", icon: <FaRocket className="text-indigo-500" />, category: "learn" },
    // Resource & Game
    { name: "Coding King", desc: "Essential dev resources", link: "https://coding-king.vercel.app", icon: <FaBook className="text-indigo-500" />, category: "resource" },
    { name: "Coding Clash", desc: "Epic coding duels & battles", link: "https://coding-clash.vercel.app", icon: <FaGamepad className="text-indigo-500" />, category: "game" },
  ];

  // Filter items based on active category
  const filteredItems = activeCategory === "all" 
    ? allItems 
    : allItems.filter(item => item.category === activeCategory);

  // Category counts
  const counts = {
    all: allItems.length,
    tool: allItems.filter(i => i.category === "tool").length,
    learn: allItems.filter(i => i.category === "learn").length,
    resource: allItems.filter(i => i.category === "resource").length,
    game: allItems.filter(i => i.category === "game").length,
  };

  const categories = [
    { id: "all", label: "all", icon: <FaFilter className="text-xs" />, color: "gray" },
    { id: "tool", label: "tools", icon: <FaTools className="text-xs" />, color: "indigo" },
    { id: "learn", label: "learning", icon: <FaBook className="text-xs" />, color: "blue" },
    { id: "resource", label: "resources", icon: <FaCode className="text-xs" />, color: "green" },
    { id: "game", label: "games", icon: <FaGamepad className="text-xs" />, color: "purple" },
  ];

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Main container - centered, single page layout */}
      <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-6">
        <div className="max-w-6xl w-full mx-auto">
          
          {/* Header - with cool glasses emoji */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-3 bg-white shadow-sm rounded-xl px-5 py-3 border border-gray-200 mb-4"
            >
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-white text-xl">😎</span>
              </div>
              <div className="text-left">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                  cool tools
                </h1>
                <p className="text-gray-500 text-xs">developer tooling · free & open</p>
              </div>
            </motion.div>

            {/* Simple stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center gap-3 text-xs mb-5"
            >
              <div className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full">
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                <span className="text-gray-600">{allItems.length} tools</span>
              </div>
              <div className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full">
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                <span className="text-gray-600">100% free</span>
              </div>
              <div className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full">
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                <span className="text-gray-600">no signup</span>
              </div>
            </motion.div>

            {/* Category Filter - Chiclets style */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex flex-wrap justify-center gap-2"
            >
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    activeCategory === cat.id
                      ? `bg-${cat.color}-500 text-white shadow-sm`
                      : `bg-gray-100 text-gray-600 hover:bg-gray-200`
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                  <span className={`text-[10px] ${
                    activeCategory === cat.id ? "opacity-80" : "text-gray-400"
                  }`}>
                    ({counts[cat.id as keyof typeof counts]})
                  </span>
                </button>
              ))}
            </motion.div>
          </motion.div>

          {/* Grid - filtered tools with animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.02, duration: 0.2 }}
                  whileHover={{ y: -2, scale: 1.01 }}
                  className={`relative group rounded-lg border ${lightTheme.cardBorder} bg-white shadow-sm hover:shadow-md transition-all duration-200`}
                >
                  {/* Category badge */}
                  <div className="absolute top-2 right-2 z-10">
                    <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded ${
                      item.category === 'tool' ? 'bg-indigo-50 text-indigo-600' :
                      item.category === 'learn' ? 'bg-blue-50 text-blue-600' :
                      item.category === 'resource' ? 'bg-green-50 text-green-600' :
                      'bg-purple-50 text-purple-600'
                    }`}>
                      {item.category === 'tool' ? 'tool' : item.category === 'learn' ? 'learn' : item.category === 'resource' ? 'resource' : 'game'}
                    </span>
                  </div>

                  <div className="p-4">
                    {/* Icon and title */}
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className={`p-1.5 rounded-lg ${lightTheme.iconBase} transition-transform duration-200 group-hover:scale-105`}>
                        {item.icon}
                      </div>
                      <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">
                        {item.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-500 text-xs mb-3 leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>

                    {/* Button */}
                    <Link
                      href={item.link}
                      target="_blank"
                      className={`inline-flex items-center justify-center gap-1.5 bg-gradient-to-r ${lightTheme.accentGradient} text-white text-xs font-medium px-3 py-1.5 rounded-lg hover:shadow transition-all duration-200 w-full`}
                    >
                      <span>open</span>
                      <FaExternalLinkAlt className="text-[8px]" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-sm">no tools in this category</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Subtle background decoration */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40" />
      </div>

      <style jsx>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  );
}