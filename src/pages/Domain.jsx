import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import heroBg from "../assets/images/hero-bg.webp";

const domains = [
  { title: "HEALTH-TECH", icon: "🩺", quote: "Tech that saves lives." },
  { title: "IOT", icon: "📡", quote: "The world, wired and alive." },
  { title: "AI", icon: "🤖", quote: "Intelligence, engineered." },
  { title: "BLOCKCHAIN", icon: "⛓️", quote: "Trust, rewritten." },
  { title: "SUSTAINABILITY", icon: "🌱", quote: "Innovation for tomorrow." },
];

const Domain = () => {
  const SIZE = 700;
  const BIG_RADIUS = SIZE / 2;
  const DOMAIN_SIZE = 180;
  const angleStep = 360 / domains.length;
  const ORBIT_RADIUS = BIG_RADIUS - DOMAIN_SIZE / 2;

  const rotation = useMotionValue(0);
  const inverseRotation = useTransform(rotation, (v) => -v);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <img
        src={heroBg}
        alt="Domains background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative" style={{ width: SIZE, height: SIZE }}>
        
        <motion.div
          className="absolute inset-0 rounded-full border border-purple-500/50
                     shadow-[0_0_150px_rgba(168,85,247,0.8)]
                     animate-pulseGlow"
        />

        
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     w-[220px] h-[220px] rounded-full
                     flex items-center justify-center
                     bg-white/10 backdrop-blur-xl
                     border border-purple-400
                     shadow-[0_0_100px_rgba(168,85,247,1),
                             0_0_200px_rgba(168,85,247,0.6),
                             0_0_300px_rgba(168,85,247,0.3)]
                     animate-pulseAura"
        >
          <span className="text-3xl font-bold tracking-widest text-purple-200">
            DOMAINS
          </span>
        </motion.div>

        
        <motion.div
          className="absolute inset-0"
          style={{ rotate: rotation }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {domains.map((domain, index) => {
            const angle = (index * angleStep - 90) * (Math.PI / 180);
            const x = ORBIT_RADIUS * Math.cos(angle);
            const y = ORBIT_RADIUS * Math.sin(angle);

            return (
              <div
                key={index}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
              >
                
                <motion.div
                  className="rounded-full bg-white/10 backdrop-blur-xl
                             border border-white/30
                             shadow-[0_0_40px_rgba(168,85,247,0.6)]
                             hover:scale-110 hover:border-purple-400
                             hover:shadow-[0_0_80px_rgba(168,85,247,1),
                                           inset_0_0_50px_rgba(168,85,247,0.7)]
                             animate-pulseOrb"
                  style={{ width: DOMAIN_SIZE, height: DOMAIN_SIZE }}
                >
                   
                  <motion.div
                    style={{ rotate: inverseRotation }}
                    className="w-full h-full flex flex-col items-center justify-center
                               text-white text-center px-3"
                  >
                    <div className="text-4xl mb-1">{domain.icon}</div>
                    <p className="text-xs font-semibold tracking-widest">
                      {domain.title}
                    </p>
                    <p className="text-[13px] leading-snug text-purple-200 mt-2 italic">
                      “{domain.quote}”
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>


        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full blur-sm"
            style={{
              left: `${Math.random() * SIZE}px`,
              top: `${Math.random() * SIZE}px`,
            }}
            animate={{
              x: [0, Math.random() * 10 - 5, 0],
              y: [0, Math.random() * 10 - 5, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Domain;
