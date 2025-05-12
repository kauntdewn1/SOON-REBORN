'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import FormConvertKit from './ConvertKitForm';

const glowVariants = {
  initial: {
    filter: 'drop-shadow(0 0 10px rgba(255, 0, 0, 0.5))',
    opacity: 1,
  },
  animate: {
    filter: [
      'drop-shadow(0 0 10px rgba(255, 0, 0, 0.5))',
      'drop-shadow(0 0 20px rgba(255, 0, 0, 0.8))',
      'drop-shadow(0 0 15px rgba(255, 0, 0, 0.6))',
      'drop-shadow(0 0 25px rgba(255, 0, 0, 0.9))',
      'drop-shadow(0 0 10px rgba(255, 0, 0, 0.5))',
    ],
    opacity: [1, 0.3, 1, 0.7, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  },
};

const floatingImageVariants = {
  initial: { 
    opacity: 0.1,
    scale: 1,
    x: 0,
    y: 0
  },
  animate: {
    opacity: [0.1, 0.25, 0.15, 0.2, 0.1],
    scale: [1, 1.05, 1, 1.02, 1],
    x: [0, 20, -20, 10, 0],
    y: [0, -20, 20, -10, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  }
};

const textGlowVariants = {
  initial: {
    textShadow: '0 0 10px rgba(255, 0, 0, 0.5)',
    opacity: 1,
  },
  animate: {
    textShadow: [
      '0 0 10px rgba(255, 0, 0, 0.5)',
      '0 0 20px rgba(255, 0, 0, 0.8)',
      '0 0 15px rgba(255, 0, 0, 0.6)',
      '0 0 25px rgba(255, 0, 0, 0.9)',
      '0 0 10px rgba(255, 0, 0, 0.5)',
    ],
    opacity: [1, 0.9, 1, 0.95, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  },
};

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.section 
      className="relative py-16 text-center h-[80vh] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="absolute inset-0 -z-10"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.9 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <Image
          src="https://res.cloudinary.com/dgyocpguk/image/upload/v1745630512/1_hbyge2.png"
          alt="Background"
          fill
          className="object-cover brightness-125 contrast-125"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </motion.div>
      <motion.div
        className="absolute inset-0 -z-5"
        variants={floatingImageVariants}
        initial="initial"
        animate="animate"
      >
        <Image
          src="https://res.cloudinary.com/dgyocpguk/image/upload/v1745630513/netto_binv6m.png"
          alt="Floating Background"
          fill
          className="object-contain"
          priority
        />
      </motion.div>
      <motion.div
        className="relative w-full max-w-3xl mx-auto mb-4"
        initial={{ scale: 0.8, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.8,
          delay: 0.5,
          type: "spring",
          stiffness: 100
        }}
      >
        <AnimatePresence>
          {mounted && (
            <motion.div 
              className="relative"
              variants={glowVariants}
              initial="initial"
              animate="animate"
            >
              <Image
                src="https://res.cloudinary.com/dgyocpguk/image/upload/v1745797780/logo_horz_verm_ichwjl.png"
                alt="FLOW//REBORN"
                width={800}
                height={200}
                className="w-full h-auto"
                priority
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.div
        className="relative max-w-4xl mx-auto px-4"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.8,
          delay: 1,
          type: "spring",
          stiffness: 100
        }}
      >
        <motion.p 
          className="text-lg md:text-xl text-white font-mono tracking-wider leading-relaxed"
          variants={textGlowVariants}
          initial="initial"
          animate="animate"
        >
          <span className="text-[#DC0000] font-bold">O bunker dos sobreviventes</span> que reconheceram suas dívidas e se juntarão para{' '}
          <span className="text-[#DC0000] font-bold">virar o jogo</span> contra o sistema e todos que provocaram isso.
        </motion.p>

        <motion.div 
          className="relative group mt-10 hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div 
            className="text-[#DC0000] cursor-pointer text-sm tracking-widest font-mono"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            ⬤ CAMADA BLOQUEADA
          </motion.div>

          <motion.a 
            href="https://app.convertkit.com/forms/5ed24b54bc/view"
            className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-block px-6 py-3 bg-[#DC0000] text-white text-xs tracking-widest rounded shadow-lg font-mono hover:bg-[#DC0000]/90"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            RECEBER ACESSO ANTECIPADO
          </motion.a>
        </motion.div>

        {mounted && <FormConvertKit />}
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/70 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      />
    </motion.section>
  );
}