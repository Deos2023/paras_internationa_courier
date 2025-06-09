'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Amit Banerjee',
    message: 'Paras International Courier has been our logistics partner for years. Their reliability and timely delivery have always impressed us.',
    location: 'Kolkata, West Bengal',
  },
  {
    name: 'Sneha Chatterjee',
    message: 'With over 25,000 customers, their service still feels personalized. Outstanding professionalism!',
    location: 'New Town, Kolkata',
  },
  {
    name: 'Rakesh Kumar',
    message: 'Started working with them last year—never had a single complaint. Top-notch service and coordination.',
    location: 'Ballygunge, Kolkata',
  },
  {
    name: 'Neha Singh',
    message: 'They handled our bulk shipments with precision and care. Truly a trusted name since 2008.',
    location: 'Salt Lake, West Bengal',
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 150 : -150,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 150 : -150,
    opacity: 0,
  }),
};

export default function TestimonialsSlider() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (dir) => {
    setIndex(([prev]) => {
      const newIndex = (prev + dir + testimonials.length) % testimonials.length;
      return [newIndex, dir];
    });
  };

  useEffect(() => {
    const interval = setInterval(() => paginate(1), 7000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className="relative py-20 px-4 sm:px-6 bg-gradient-to-br from-rose-50 to-white overflow-hidden">
      <div className="absolute top-10 right-20 w-96 h-96 bg-rose-200 rounded-full blur-3xl opacity-30 z-0" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2
          className="text-3xl md:text-5xl text-gray-800 font-bold mb-4"
          style={{ fontFamily: 'var(--font-lexendExa)' }}
        >
          What Our Clients Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-sm sm:text-base">
          Real feedback from customers who trust Paras International Courier for their logistics needs.
        </p>

        <motion.div layout className="relative overflow-hidden transition-all duration-500">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="bg-white/60 backdrop-blur-md border border-rose-200 rounded-2xl shadow-xl p-8 max-w-xl mx-auto text-left"
            >
              <Quote className="text-rose-500 mb-4 w-10 h-10" />
              <p className="text-gray-800 italic mb-6 text-base sm:text-lg leading-relaxed">
                "{testimonial.message}"
              </p>
              <div>
                <p className="font-semibold text-rose-600">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={() => paginate(-1)}
            className="p-3 rounded-full bg-white hover:bg-rose-100 transition shadow-md"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="text-rose-600" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="p-3 rounded-full bg-white hover:bg-rose-100 transition shadow-md"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="text-rose-600" />
          </button>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === index ? 'bg-rose-600 scale-110' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
