'use client';

import { motion } from 'framer-motion';

const matrixVariants = {
  initial: { opacity: 1 },
  animate: {
    opacity: [1, 0.8, 1, 0.9, 1],
    textShadow: [
      '0 0 2px rgba(0,255,0,0.7)',
      '0 0 4px rgba(0,255,0,0.7)',
      '0 0 6px rgba(0,255,0,0.7)',
      '0 0 8px rgba(0,255,0,0.7)',
      '0 0 2px rgba(0,255,0,0.7)',
    ],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
};

export default function Footer() {
  return (
    <motion.footer
      className="w-full py-8 bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          variants={matrixVariants}
          initial="initial"
          animate="animate"
        >
          <motion.p 
            className="text-[#00FF00] font-mono text-sm md:text-base tracking-wider"
            variants={matrixVariants}
            initial="initial"
            animate="animate"
          >
            <span className="text-[#00FF00]/50">&lt;</span>
            NÃO É UM CURSO COACH NUTELLA
            <span className="text-[#00FF00]/50">/&gt;</span>
          </motion.p>
          <motion.p 
            className="text-[#00FF00] font-mono text-base md:text-lg font-bold tracking-wider mt-1"
            variants={matrixVariants}
            initial="initial"
            animate="animate"
          >
            É ESTRATÉGIA DE SOBREVIVÊNCIA DIGITAL!
          </motion.p>
          <motion.p 
            className="text-gray-400 font-['Verdana'] text-xs md:text-sm mt-2 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            USUÁRIO-01: MELLØ — DÍVIDA EM ABRIL/2025: R$120.000,00
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
} 