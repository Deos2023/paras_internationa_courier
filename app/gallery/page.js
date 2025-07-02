
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } }
};

// Option 1: If keeping current filenames

const images = Array.from({ length: 9 }, (_, i) => `/img/1 (${i + 1}).jpg`);

// Option 2: Better - use simpler filenames (recommended)
// const images = Array.from({ length: 20 }, (_, i) => `/img/gallery-${i}.jpeg`);

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Debug: Log the first image path
  console.log("First image path:", images[0]);

  return (
    <div className="relative bg-[#f9f5f0] font-corm overflow-hidden">
   {/* Hero Section */}
         <section className="relative w-full h-[70vh] overflow-hidden flex items-center justify-center text-white">
           <div className="absolute inset-0 z-0">
             <Image
               src="/del1.jpg"
               alt="About Paras International"
               fill
               className="object-cover"
               priority
             />
             <div className="absolute inset-0 bg-[#033542]/80"></div>
           </div>
   
           <motion.div 
             initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="relative z-10 text-center px-4"
           >
             <h1 className="text-4xl md:text-6xl font-bold mb-6">
               Our <span className="text-red-400">Paras International Gallery</span>
             </h1>
             <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
             <p className="text-xl md:text-2xl max-w-3xl mx-auto">
               Trusted logistics partner since 2008, delivering excellence across India and beyond
             </p>
           </motion.div>
         </section>
    <section className="bg-[#f9f5f0] py-16">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {images.map((src, index) => {
          // Debug: Log each image path
          console.log(`Image ${index}:`, src);
          
          return (
            <div key={index} className="cursor-pointer" onClick={() => setSelectedImage(src)}>
              <Image
                src={src}
                alt={`Gallery image ${index}`}
                width={500}
                height={300}
                className="w-full h-64 object-cover  shadow-md transition-transform hover:scale-105 duration-300"
                loading={index > 3 ? "lazy" : "eager"} // Load first few images eagerly
                onError={(e) => {
                  console.error(`Failed to load image: ${src}`);
                  e.target.style.display = 'none'; // Hide broken images
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Lightbox remains same */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}>
          <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Enlarged"
              fill
              style={{ objectFit: 'contain' }}
              className=" shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
    </div>
  );
}