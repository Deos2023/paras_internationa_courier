"use client";
import { motion } from 'framer-motion';
import { Truck, PackageCheck, Warehouse, Clock, CalendarCheck, Star } from 'lucide-react';

const deliveryOptions = [
  {
    icon: <Clock className="w-4 h-4" />,
    bg: "bg-white",
    text: "text-red-600",
    border: "border-red-500/30",
    title: "TDD Delivery",
    highlight: true,
    stars: 3,
    glowColor: "rgba(220, 38, 38, 0.9)" // brighter red
  },
  {
    icon: <PackageCheck className="w-4 h-4" />,
    bg: "bg-white",
    text: "text-blue-600",
    border: "border-blue-500/30",
    title: "Same Day",
    highlight: false,
    stars: 2,
    glowColor: "rgba(37, 99, 235, 0.9)" // brighter blue
  },
  {
    icon: <Warehouse className="w-4 h-4" />,
    bg: "bg-white",
    text: "text-green-600",
    border: "border-green-500/30",
    title: "Overnight",
    highlight: false,
    stars: 2,
    glowColor: "rgba(34, 197, 94, 0.9)" // brighter green
  },
  {
    icon: <CalendarCheck className="w-4 h-4" />,
    bg: "bg-white",
    text: "text-purple-600",
    border: "border-purple-500/30",
    title: "Next Day",
    highlight: false,
    stars: 1,
    glowColor: "rgba(168, 85, 247, 0.9)" // brighter purple
  },
  {
    icon: <Truck className="w-4 h-4" />,
    bg: "bg-white",
    text: "text-amber-600",
    border: "border-amber-500/30",
    title: "LTL Logistics",
    highlight: false,
    stars: 1,
    glowColor: "rgba(245, 158, 11, 0.9)" // brighter amber
  }
];

export function DeliveryOptionsSlider() {
  const options = [...deliveryOptions, ...deliveryOptions];

  return (
    <div className="relative overflow-hidden py-2">
      <motion.ul 
        className="flex gap-4"
        style={{ width: 'max-content' }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20,
          ease: 'linear',
        }}
      >
        {options.map((option, idx) => (
          <motion.li 
            key={idx} 
            className={`
              relative flex items-center px-3 py-2 my-4 min-w-max rounded-lg
              ${option.bg} ${option.border} border
              ${option.highlight ? 'ring-2 ring-red-400' : ''}
            `}
            whileHover={{ scale: 1.05 }}
            animate={{
              boxShadow: [
                `0 0 5px 1px ${option.glowColor}`,
                `0 0 10px 6px ${option.glowColor}`,
                `0 0 5px 1px ${option.glowColor}`
              ],
              opacity: [0.9, 1, 0.9]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
          >
            {/* Golden stars with subtle pulse */}
            <motion.div 
              className="absolute -top-2 -right-2 flex"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {[...Array(option.stars)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-3 h-3 fill-yellow-400 text-yellow-400" 
                />
              ))}
            </motion.div>
            
            <span className={`${option.text} mr-2`}>
              {option.icon}
            </span>
            <span className={`text-sm font-bold ${option.text}`}>
              {option.title}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}