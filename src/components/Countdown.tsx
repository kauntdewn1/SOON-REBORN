'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type CountdownProps = {
  targetDate: string;
};

type TimeLeft = {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
};

const matrixVariants = {
  initial: { opacity: 1 },
  animate: {
    opacity: [1, 0.8, 1, 0.9, 1],
    textShadow: [
      '0 0 2px rgba(220,0,0,0.7)',
      '0 0 4px rgba(220,0,0,0.7)',
      '0 0 6px rgba(220,0,0,0.7)',
      '0 0 8px rgba(220,0,0,0.7)',
      '0 0 2px rgba(220,0,0,0.7)',
    ],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
};

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  const calculateTimeLeft = (): TimeLeft => {
    try {
      const target = new Date(targetDate);
      const now = new Date();

      if (isNaN(target.getTime())) {
        throw new Error('Data inválida');
      }

      const difference = target.getTime() - now.getTime();
      
      if (difference < 0) {
        return {
          dias: 0,
          horas: 0,
          minutos: 0,
          segundos: 0,
        };
      }

      return {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    } catch (err) {
      setError('Erro ao calcular a contagem regressiva');
      return {
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0,
      };
    }
  };

  useEffect(() => {
    setIsClient(true);
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isClient) {
    return (
      <div className="text-white text-center mt-8 font-mono">
        <div className="flex justify-center gap-6 text-lg md:text-2xl">
          {['dias', 'horas', 'minutos', 'segundos'].map((label) => (
            <div key={label} className="flex flex-col items-center">
              <span className="text-[#DC0000] text-3xl md:text-5xl font-bold tracking-wider">
                00
              </span>
              <span className="uppercase text-sm tracking-widest text-[#DC0000]/80">{label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center mt-8 font-mono">
        {error}
      </div>
    );
  }

  return (
    <motion.div
      className="text-white text-center mt-8 z-20 relative font-mono"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className="text-2xl md:text-3xl font-bold mb-4 text-[#DC0000] tracking-wider"
        variants={matrixVariants}
        initial="initial"
        animate="animate"
      >
        [SYSTEM COUNTDOWN]
      </motion.h2>
      <div className="flex justify-center gap-6 text-lg md:text-2xl">
        {Object.entries(timeLeft).map(([label, value]) => (
          <motion.div 
            key={label} 
            className="flex flex-col items-center"
            variants={matrixVariants}
            initial="initial"
            animate="animate"
          >
            <span className="text-[#DC0000] text-3xl md:text-5xl font-bold tracking-wider relative">
              {String(value).padStart(2, '0')}
              <span className="absolute -right-1 top-0 text-[#DC0000]/20 text-sm">_</span>
            </span>
            <span className="uppercase text-sm tracking-widest text-[#DC0000]/80">{label}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
