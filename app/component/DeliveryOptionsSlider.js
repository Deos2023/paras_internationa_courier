"use client";
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Truck, PackageCheck, WarehouseIcon } from 'lucide-react'

const deliveryOptions = [
  {
    icon: <Truck className="w-4 h-4" />,
    bg: "bg-red-100",
    text: "text-red-600",
    title: "TDD (Time Definite Delivery)",
    subtitle: ""
  },
  {
    icon: <PackageCheck className="w-4 h-4" />,
    bg: "bg-blue-100",
    text: "text-blue-600",
    title: "Same Day Delivery",
    subtitle: ""
  },
  {
    icon: <WarehouseIcon className="w-4 h-4" />,
    bg: "bg-green-100",
    text: "text-green-600",
    title: "Overnight Delivery",
    subtitle: ""
  },
  {
    icon: <Truck className="w-4 h-4" />,
    bg: "bg-purple-100",
    text: "text-purple-600",
    title: "Next Day Delivery",
    subtitle: ""
  },
  {
    icon: <Truck className="w-4 h-4" />,
    bg: "bg-yellow-100",
    text: "text-yellow-600",
    title: "Standard LTL Logistics (B2B)",
    subtitle: ""
  }
]

export function DeliveryOptionsSlider() {
  // Duplicate the options for seamless infinite scroll
  const options = [...deliveryOptions, ...deliveryOptions]

  return (
    <section className=" py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="overflow-hidden relative">
          <motion.ul 
            className="flex gap-20"
            style={{ width: 'max-content' }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20, // Adjust speed here
              ease: 'linear',
            }}
          >
            {options.map((option, idx) => (
              <li key={idx} className="flex bg-white p-2 items-center min-w-max">
                <span className={`${option.bg} ${option.text} p-1 rounded-full mr-3`}>
                  {option.icon}
                </span>
                <span className="font-semibold text-red-700">{option.title}</span>
                {option.subtitle && (
                  <span className="ml-2 text-gray-600">{option.subtitle}</span>
                )}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}