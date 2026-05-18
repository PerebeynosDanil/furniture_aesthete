'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export default function FadeIn({ children, delay = 0, direction = 'up' }: FadeInProps) {
  // Настройки направления появления
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      className='w-full'
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ 
        once: true,      // Анимация сработает только 1 раз (при первом скроле)
        amount: 0.15     // Блок начнет проявляться, когда 15% его высоты зашли на экран
      }}
      transition={{
        duration: 0.7,   // Длительность анимации (0.7 секунды)
        delay: delay,    // Задержка старта (полезно для сеток/карт)
        ease: [0.21, 0.47, 0.32, 0.98], // Красивая плавная кривая скорости
      }}
    >
      {children}
    </motion.div>
  );
}