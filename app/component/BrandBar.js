
"use client";
import { useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const brandLogos = Array.from({ length: 14 }, (_, i) => ({
  src: `/brand/1 (${i + 1}).png`,
  alt: `Brand ${i + 1}`,
}))

export function  BrandBar() {
  // Duplicate the logos for seamless infinite scroll
  const logos = [...brandLogos, ...brandLogos]

  return (
    <section className="bg-white ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6 text-center">
          <p className="text-red-600 font-semibold uppercase tracking-wide">Our Trusted Brands</p>
        </div>
        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-12"
            style={{ width: 'max-content' }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30, // Adjust speed here
              ease: 'linear',
            }}
          >
            {logos.map((brand, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center min-w-[120px] h-44"
                style={{ flex: '0 0 120px' }}
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={300}
                  height={100}
                  className="object-contain  transition duration-300"
                  priority={idx < 4}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
