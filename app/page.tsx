"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  FaTools, FaBook, FaGamepad, FaRocket, FaStar, 
  FaExternalLinkAlt, FaGithub, FaPalette, FaCode, 
  FaDatabase, FaGraduationCap, FaCrown 
} from "react-icons/fa";

export default function Home() {
  const [filter, setFilter] = useState("ALL");

  const sidebarResources = [
    { name: "JS Mastery", desc: "Premium Academy", link: "https://js-apps-three.vercel.app", icon: <FaCrown />, glow: "shadow-[0_0_15px_rgba(250,204,21,0.3)]", border: "border-yellow-400/50", text: "text-yellow-400" },
    { name: "Coding King", desc: "Resource Hub", link: "https://coding-king.vercel.app", icon: <FaBook />, glow: "shadow-[0_0_15px_rgba(34,197,94,0.3)]", border: "border-emerald-400/50", text: "text-emerald-400" },
    { name: "Programs4Beginners", desc: "Step-by-step", link: "https://programs4beginners.vercel.app", icon: <FaGraduationCap />, glow: "shadow-[0_0_15px_rgba(59,130,246,0.3)]", border: "border-blue-400/50", text: "text-blue-400" },
    { name: "Asterisk patterns", desc: "Logic Lab", link: "https://asterisk-lemon.vercel.app", icon: <FaStar />, glow: "shadow-[0_0_15px_rgba(192,38,211,0.3)]", border: "border-fuchsia-400/50", text: "text-fuchsia-400" },
    { name: "One-Liners", desc: "Efficiency", link: "https://killer-one-liners.vercel.app", icon: <FaRocket />, glow: "shadow-[0_0_15px_rgba(249,115,22,0.3)]", border: "border-orange-400/50", text: "text-orange-400" },
  ];

  const tools = [
    { 
      name: "SQL Visualizer", 
      cat: "ENGINEERING", 
      desc: "Database mapping engine.", 
      link: "https://sql-visualizer.vercel.app", // Cambia por tu link real
      icon: <FaDatabase />, 
      color: "from-amber-400 to-orange-500",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      name: "File Renamer", 
      cat: "ENGINEERING", 
      desc: "Massive pattern renaming.", 
      link: "https://file-renamer-ten-chi.vercel.app", 
      icon: <FaTools />, 
      color: "from-emerald-400 to-cyan-500",
      image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Infographic Gen", 
      cat: "DESIGN", 
      desc: "Social visual engine.", 
      link: "https://infographic-generator-phi.vercel.app", 
      icon: <FaPalette />, 
      color: "from-fuchsia-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "GH Generator", 
      cat: "DESIGN", 
      desc: "Profile card engine.", 
      link: "https://github-card-generator-flame.vercel.app", 
      icon: <FaGithub />, 
      color: "from-slate-300 to-slate-500",
      image: "https://images.unsplash.com/photo-1618401471353-b98aadebc255?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Logic Clash", 
      cat: "GAMES", 
      desc: "Multiplayer battle arena.", 
      link: "https://coding-clash.vercel.app", 
      icon: <FaGamepad />, 
      color: "from-rose-500 to-red-700",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop"
    },
  ];

  const filtered = filter === "ALL" ? tools : tools.filter(t => t.cat === filter);

  return (
    <main className="flex h-screen w-screen bg-[#020408] text-white overflow-hidden font-sans">
      
      {/* --- SIDEBAR --- */}
      <aside className="w-80 h-full bg-[#0a0f1a] border-r border-emerald-500/30 flex flex-col z-50">
        <div className="p-8 bg-[#0d1425]">
          <h2 className="text-xl font-black uppercase italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 flex items-center gap-2">
             ACADEMY
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
          {sidebarResources.map((res, i) => (
            <Link key={i} href={res.link} target="_blank" className="block group">
              <motion.div 
                whileHover={{ scale: 1.02, x: 5 }}
                className={`p-4 rounded-2xl bg-[#111827]/80 border ${res.border} ${res.glow} transition-all duration-300`}
              >
                <div className="flex items-center gap-4">
                  <div className={`text-2xl ${res.text}`}>{res.icon}</div>
                  <div>
                    <h4 className="text-[11px] font-black uppercase text-white tracking-wide">{res.name}</h4>
                    <p className="text-[9px] text-slate-500 font-bold uppercase">{res.desc}</p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </aside>

      {/* --- MAIN HUB --- */}
      <section className="flex-1 h-full overflow-y-auto bg-[#020408] relative custom-scrollbar">
        <div className="max-w-6xl mx-auto p-12 lg:p-20 relative z-10">
          
          <header className="mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10vw] lg:text-[8rem] font-black italic uppercase leading-[0.8] tracking-tighter mb-8"
            >
              <span className="text-white">COOL</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 animate-gradient-x">
                TOOLS
              </span>
            </motion.h1>
            
            <nav className="flex gap-3 flex-wrap">
              {["ALL", "ENGINEERING", "DESIGN", "GAMES"].map(c => (
                <button 
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-6 py-2 rounded-full font-black text-[10px] tracking-widest uppercase transition-all border-2 ${
                    filter === c 
                    ? "bg-emerald-500 border-emerald-400 text-black shadow-[0_0_20px_rgba(16,185,129,0.5)]" 
                    : "bg-white/5 border-white/10 text-slate-500 hover:border-emerald-500/50 hover:text-emerald-400"
                  }`}
                >
                  {c}
                </button>
              ))}
            </nav>
          </header>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <Link key={item.name} href={item.link} target="_blank">
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -10 }}
                    className="group relative h-[400px] rounded-[2.5rem] overflow-hidden border border-white/10"
                  >
                    {/* Background Image con Overlay */}
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-[#020408]/40 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative h-full p-10 flex flex-col justify-end z-10">
                      <div className={`text-4xl mb-4 bg-gradient-to-br ${item.color} bg-clip-text text-transparent`}>
                        {item.icon}
                      </div>
                      <h3 className="text-4xl font-black uppercase italic text-white mb-2 tracking-tighter">
                        {item.name}
                      </h3>
                      <p className="text-slate-300 text-sm font-medium mb-6">
                        {item.desc}
                      </p>
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400">
                        OPEN PROJECT <FaExternalLinkAlt />
                      </div>
                    </div>

                    {/* Efecto de borde Neon al hover */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-500/50 rounded-[2.5rem] transition-all duration-500" />
                  </motion.div>
                </Link>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #10b98133; border-radius: 10px; }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
      `}</style>
    </main>
  );
}