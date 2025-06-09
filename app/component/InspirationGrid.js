'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const inspirations = [
  { title: 'Living Room', image: '/images/1 (14).jpeg' },
  { title: 'Master Bedroom', image: '/images/1 (15).jpeg' },
  { title: 'False Ceiling', image: '/images/1 (17).jpeg' },
  { title: 'Homes by MD Modular', image: '/images/1 (20).jpeg' },
  { title: 'Kitchen', image: '/images/1 (25).jpeg' },
  { title: 'Wardrobe', image: '/images/1 (32).jpeg' },
]

export default function InspirationGrid() {
  return (
    <section className="py-16 px-6  md:px-10 bg-white">
     <div className=' max-w-7xl mx-auto'>
       <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Inspiration for home interior designs
          </h2>
          <p className="text-gray-600 mt-1">
            Give your home a new look with these interior design ideas curated for you
          </p>
        </div>
        <Link href="/gallery">
          <span className="text-pink-600 font-medium hover:underline cursor-pointer">
            View All →
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {inspirations.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl group"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-3 left-3 bg-black/70 text-white text-sm px-3 py-1 rounded">
              {item.title}
            </div>
          </motion.div>
        ))}
      </div>
     </div>
    </section>
  )
}
