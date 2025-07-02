'use client'

import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, PackageCheck, Phone, Truck, Warehouse, WarehouseIcon } from 'lucide-react'
import TestimonialsSlider from './component/Testimonials'
import InspirationGrid from './component/InspirationGrid'
import Static from './component/Static'
import ReachSection from './component/ReachSec'
import { BrandBar } from './component/BrandBar'
import { DeliveryOptionsSlider } from './component/DeliveryOptionsSlider'

const newServices = [
  {
    title: 'Warehouse Storage',
    image: '/services/warehouse.jpg', // Place this image in public/services/
    icon: '/icons/warehouse.png',     // Place this icon in public/icons/
  },
  {
    title: 'Air Freight',
    image: '/services/airfreight.jpg',
    icon: '/icons/airport.png',
  },
  {
    title: 'Rail Cargo',
    image: '/services/railcargo.jpg',
    icon: '/icons/train.png',
  },
  {
    title: 'Customs Clearance',
    image: '/services/customs.jpg',
    icon: '/icons/customs.png',
  },
]

const services = [
  {
    title: 'Domestic Courier',
    image: '/del1.jpg',
    icon: '/icons/domestic.svg',
  },
  {
    title: 'International Shipping',
    image: '/int.jpg',
    icon: '/icons/international.svg',
  },
  {
    title: 'Express Delivery',
    image: '/exp.jpg',
    icon: '/icons/express.svg',
  },
  {
    title: 'Cargo & Freight',
    image: '/cargo.jpg',
    icon: '/icons/cargo.svg',
  },
]

export default function HeroSection() {
   const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' })
    }
  }
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const truckVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

 const inter = [
  {
    src: '/brand/inter/2 (1).png',
    alt: 'DHL',
    link: 'https://www.dhl.com/',
  },
  {
    src: '/brand/inter/2 (2).png',
    alt: 'FedEx',
    link: 'https://www.fedex.com/',
  },
  {
    src: '/brand/inter/2 (3).png',
    alt: 'UPS',
    link: 'https://www.ups.com/',
  },
  {
    src: '/brand/inter/2 (4).png',
    alt: 'Aramex',
    link: 'https://www.aramex.com/',
  },
  {
    src: '/brand/inter/2 (5).png',
    alt: 'Skynet',
    link: 'https://www.skynet.net/',
  },
];

const domestic = [
  {
    src: '/brand/domestic/3 (1).png',
    alt: 'Bluedart',
    link: 'https://www.bluedart.com/' ,
  },
  {
    src: '/brand/domestic/3 (2).png',
    alt: 'DTDC',
    link: 'https://www.dtdc.in/',
  },
  {
    src: '/brand/domestic/3 (3).png',
    alt: 'Delhivery',
    link: 'https://www.delhivery.com/',
  },
  {
    src: '/brand/domestic/3 (4).png',
    alt: 'EcomExpress',
    link: 'https://ecomexpress.in/',
  },
  {
    src: '/brand/domestic/3 (5).png',
    alt: 'XpressBees',
    link: 'https://www.xpressbees.com/',
  },
  {
    src: '/brand/domestic/3 (6).png',
    alt: 'Proffesional',
    link: "https://www.tpcindia.com/",
  },
  {
    src: '/brand/domestic/3 (7).png',
    alt: 'Bombax',
    link: 'https://bombax.in/',
  },
  {
    src: '/brand/domestic/3 (8).png',
    alt: 'Movin',
    link: 'https://www.movin.in/',
  },
  {
    src: '/brand/domestic/3 (9).png',
    alt: 'Gati',
    link: 'https://www.gati.com/',
  },
];
0.

  return (
   <>
    
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center text-white">
      
      {/* Left Shadow */}
      <div className="absolute left-0 top-0 sm:w-1/4 w-1/2 h-full bg-gradient-to-r from-[#0a1f24] to-transparent z-10 pointer-events-none" />
      
      {/* Background Image (your image) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero3.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Shadow */}
      <div className="absolute right-0 top- w-4/5 h-full bg-gradient-to-l from-[#033542] to-transparent z-10 pointer-events-none" />

      {/* ✈️ Flying Plane Animation */}
<motion.div
  initial={{ x: '-120vw', y: '0%' }}       // Start from far left, top edge
  animate={{ x: '100vw', y: '0%' }}        // End off-screen to the right, top edge
  transition={{
    duration: 14,
    repeat: Infinity,
    repeatType: 'loop',
    ease: 'linear'
  }}
  className="absolute sm:top-[-50px] top-10 z-50 w-[200px] h-[200px] md:w-[500px] md:h-[500px]"
>
  <Image
    src="/plane3.png"
    alt="Flying Plane"
    width={500}
    height={500}
    className="object-contain w-full h-full"
    priority
  />
</motion.div>

{/* Flying plane right to left */}
{/* <motion.div
  initial={{ x: '120vw', y: '0%' }}
  animate={{ x: '-100vw', y: '0%' }}
  transition={{
    duration: 18,
    repeat: Infinity,
    repeatType: 'loop',
    ease: 'linear'
  }}
  className="absolute top-[50px] z-40 w-[150px] h-[150px] md:w-[300px] md:h-[300px]"
>
  <Image
    src="/plane3.png"
    alt="Flying Plane Right to Left"
    width={400}
    height={400}
    className="object-contain w-full h-full scale-x-[-1]" // Flip horizontally
    priority
  />
</motion.div> */}





      {/* Content */}
      <div className="relative z-20 max-w-7xl sm:mt-20 mx-auto px-4 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between w-full h-full py-12 lg:py-0">
        
        {/* Truck */}
       
<motion.div
  initial={{ x: '-100vw' }}           // Start off-screen left
  animate={{ x: 0 }}                  // Animate to original position
  transition={{
    type: "spring",
    stiffness: 60,
    damping: 15,
    delay: 1.5,                       // Optional: delay for effect
  }}
  className="w-full flex justify-center lg:mt-28"
>
  <Image
    src="/truck4.png"
    alt="Truck"
    width={900}
    height={800}
    className="object-contain max-w-[350px] opacity-90 sm:max-w-[380px] lg:max-w-[600px]"
  />
</motion.div>

        {/* Text */}
        <div  className="w-full max-w-6xl text-center lg:text-left mb-10 lg:mb-0">
          <p className="text-sm font-semibold text-white/80 uppercase">Safe Transportation & Logistics</p>
          <h1 className="text-3xl sm:text-6xl font-bold leading-tight mt-2 mb-6">
            Flexible logistics<br />
            Fast Delivery, &<br />
            secure package
          </h1>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 justify-center lg:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/services"
              className="bg-red-600 hover:bg-red-700 transition-colors text-white py-3 px-6 rounded-md font-semibold"
            >
              View services
            </motion.a>
            <a href="/about" className="font-medium underline underline-offset-4 decoration-red-500">
              Who we are
            </a>
          </div>
          <div className='sm:-mx-20 pt-2  '>
            <DeliveryOptionsSlider/>
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg viewBox="0 0 1920 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFFFFF" d="M0,0 C600,200 1320,0 1920,100 L2920,200 L0,120 Z"></path>
        </svg>
      </div>
    </section>

{/* <BrandBar/> */}

<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
      Our Trusted Brands
    </h2>
    <div className="flex flex-col md:flex-row gap-0 md:gap-0 items-stretch">
      
      {/* International Brands */}
      <div className="flex-1 px-4">
        <h3 className="text-xl mb-6 text-center text-blue-700">
          International Brands
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 items-center justify-items-center">
          {inter.map((brand, idx) => (
            <a
              key={idx}
              href={brand.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded  flex items-center justify-center hover:shadow-md transition"
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={130}
                height={130}
                className="object-contain max-h-28"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Vertical Divider */}
      <div className="hidden md:flex items-center">
        <div className="w-px h-full bg-gray-600 mx-2" style={{ minHeight: 220 }} />
      </div>

      {/* Domestic Brands */}
      <div className="flex-1 px-4">
        <h3 className="text-xl mb-6 text-center text-green-700">
          Domestic Brands
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-0 items-center justify-items-center">
          {domestic.map((brand, idx) => (
            <a
              key={idx}
              href={brand.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded  flex items-center justify-center hover:shadow-md transition"
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={250}
                height={250}
                className="object-contain max-w-40"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>






<section className="py-12 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Delivery Time Options (same as before) */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
          Delivery Time Options
        </h3>
        <ul className="space-y-3">
          <li className="flex items-center">
            <span className="bg-red-100 text-red-600 p-1 rounded-full mr-3">
              <Truck className="w-4 h-4" />
            </span>
            <span className="font-medium">TDD (Time Definite Delivery):</span>
            <span className="ml-2 text-gray-600">10:30 AM | 12:00 PM | 2:00 PM</span>
          </li>
          <li className="flex items-center">
            <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-3">
              <PackageCheck className="w-4 h-4" />
            </span>
            <span className="font-medium">Same Day Delivery</span>
          </li>
          <li className="flex items-center">
            <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3">
              <WarehouseIcon className="w-4 h-4" />
            </span>
            <span className="font-medium">Overnight Delivery</span>
          </li>
          <li className="flex items-center">
            <span className="bg-purple-100 text-purple-600 p-1 rounded-full mr-3">
              <Truck className="w-4 h-4" />
            </span>
            <span className="font-medium">Next Day Delivery</span>
          </li>
          <li className="flex items-center">
            <span className="bg-yellow-100 text-yellow-600 p-1 rounded-full mr-3">
              <Truck className="w-4 h-4" />
            </span>
            <span className="font-medium">Standard LTL Logistics (B2B)</span>
          </li>
        </ul>
      </div>

      {/* Enhanced Payment Options with COD Highlight */}
      <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-red-100 relative">
        {/* Highlight Badge */}
        <div className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          POPULAR
        </div>
        
        <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
          Payment Options
        </h3>
        
        {/* COD Option - Highlighted */}
        <div className="mb-6 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
          <div className="flex items-start">
            <div className="bg-red-100 text-red-600 p-2 rounded-full mr-4 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg text-red-700">COD (Cash on Delivery)</h4>
              <p className="text-gray-700 mt-1">
                <span className="font-semibold text-red-600">Fast settlement within 7 days</span> of delivery. 
                Get your payments quickly with our reliable COD system.
              </p>
              <div className="mt-2 flex items-center text-sm text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Payments processed every Tuesday and Friday
              </div>
            </div>
          </div>
        </div>

        {/* Other Payment Methods */}
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="bg-gray-100 text-gray-600 p-2 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <span className="font-medium">Credit/Debit Cards</span>
          </div>
          <div className="flex items-center">
            <div className="bg-gray-100 text-gray-600 p-2 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <span className="font-medium">Bank Transfers</span>
          </div>
          <div className="flex items-center">
            <div className="bg-gray-100 text-gray-600 p-2 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="font-medium">Digital Wallets</span>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          *COD payment settlement within 7 days of delivery confirmation
        </p>
      </div>
    </div>
  </div>
</section>











<section className="relative bg-white w-full min-h-screen overflow-hidden">
  {/* Decorative Plane Images */}
  <div className="absolute top-4 left-0 w-40 h-40 opacity-60 z-50 pointer-events-none">
    <Image src="/bgplane.png" alt="Decorative Plane" fill className="object-contain" />
  </div>
  <div className="absolute bottom-0 right-0 w-44 h-44 opacity-50 z-50 pointer-events-none rotate-12">
    <Image src="/bgplane.png" alt="Decorative Plane" fill className="object-contain" />
  </div>

  {/* Soft Shades */}
  <div className="absolute top-0 right-0 w-72 h-72 pointer-events-none z-50"
    style={{ background: 'radial-gradient(circle at 80% 20%, rgba(12,59,74,0.18) 0%, transparent 40%)' }} />
  <div className="absolute bottom-0 left-0 w-60 h-60 pointer-events-none z-50"
    style={{ background: 'radial-gradient(circle at 20% 80%, rgba(255,0,0,0.08) 0%, transparent 40%)' }} />

  {/* Main Section */}
  <section className="bg-white py-16 px-4 sm:px-6 md:px-8 relative z-10">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-10 sm:mb-12">
        <p className="text-red-600 font-semibold uppercase tracking-wide  sm:text-base">
          Paras International Courier
        </p>
        <h2 className="text-3xl sm:text-3xl md:text-5xl font-bold text-gray-900 mt-2 leading-snug">
          Fastest & Reliable Courier <br className="hidden sm:block" />
          Solution & Services
        </h2>
        <p className="text-gray-600 mt-4 text-sm sm:text-base">
          Address: 46E, Rafi Ahmed Kidwai Road, Kolkata – 700016<br />
          Phone: 9831559403 | Email: parasinternational21@gmail.com
        </p>
      </div>

      <div className="relative w-full py-6 sm:py-8">
        {/* Slider */}
        <div className="py-4 bg-gradient-to-b from-gray-50 to-white">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-4 md:space-x-6 scrollbar-hide scroll-smooth px-1 sm:px-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="min-w-[85vw] max-w-[85vw] sm:min-w-[300px] sm:max-w-[320px] flex-shrink-0 bg-white shadow-xl border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer [clip-path:polygon(30px_0,100%_0,100%_100%,0_100%,0_30px)]"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="relative h-48 sm:h-56 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 85vw, 320px"
                    priority={i === 0}
                  />
                </div>
                <div className="p-4 flex items-center gap-3">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-800">{service.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows - Desktop Only */}
        <button
          onClick={() => scroll(-1)}
          className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white rounded-full w-10 h-10 items-center justify-center shadow-md z-10"
          aria-label="Scroll Left"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => scroll(1)}
          className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white rounded-full w-10 h-10 items-center justify-center shadow-md z-10"
          aria-label="Scroll Right"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  </section>
</section>






{/* --- Additional Services Bar Section  --- */}


<ReachSection/>



   



    <section className="bg-white py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <p className="text-red-600 font-semibold uppercase tracking-wide">
            Safe Transportation & Logistics
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 leading-tight">
            Modern transport system <br /> & secure packaging
          </h1>
          <p className="text-gray-600 mt-4">
            Since 2008, <strong>Paras International Courier</strong> has built trust with over <strong>25,000+ satisfied customers</strong> by providing safe, reliable logistics and courier services.
          </p>

          {/* Services List */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center gap-2">
              <PackageCheck className="text-red-500" />
              <span className="text-sm font-medium text-gray-800">Packaging & Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <WarehouseIcon className="text-red-500" />
              <span className="text-sm font-medium text-gray-800">Warehousing</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="text-red-500" />
              <span className="text-sm font-medium text-gray-800">Transport Processing</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-6">
            <div className="flex items-center gap-3 text-lg font-semibold text-red-600">
              <Phone />
              <span>+91 85828 79403</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Contact: Paras International Courier | Email: <a href="mailto:parasinternational21@gmail.com" className="underline">parasinternational21@gmail.com</a>
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative h-60 rounded-lg overflow-hidden">
            <Image src="/cargo.jpg" alt="Air Cargo" fill className="object-cover" />
          </div>
          <div className="relative h-60 rounded-lg overflow-hidden">
            <Image src="/exp.jpg" alt="Truck Shipping" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/30 flex justify-center items-center">
              <button className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-xl">
                ▶
              </button>
            </div>
          </div>
        </div>
      </div>

<section className="relative bg-white w-full min-h-screen overflow-hidden flex items-center justify-center text-white">
  {/* Decorative Plane Images */}
  <div className="absolute top-10 left-0 sm:w-72 sm:h-72 opacity-60 z-50 pointer-events-none">
    <Image src="/bgplane.png" alt="Decorative Plane" fill className="object-contain" />
  </div>
  <div className="absolute bottom-0 right-0 w-80 h-80 opacity-50 z-50 pointer-events-none rotate-12">
    <Image src="/bgplane.png" alt="Decorative Plane" fill className="object-contain" />
  </div>
  {/* Soft Shades */}
  <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none z-50"
       style={{ background: 'radial-gradient(circle at 80% 20%, rgba(12,59,74,0.18) 0%, transparent 40%)' }} />
  <div className="absolute bottom-0 left-0 w-80 h-80 pointer-events-none z-50"
       style={{ background: 'radial-gradient(circle at 20% 80%, rgba(255,0,0,0.08) 0%, transparent 40%)' }} />
  {/* ...rest of your content... */}
   <TestimonialsSlider/>
      
</section>
     
      <Static/>
      

      <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="overflow-hidden shadow-xl mt-14"
        >

          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3684.762087334379!2d88.3554444!3d22.5505833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDMzJzAyLjEiTiA4OMKwMjEnMTkuNiJF!5e0!3m2!1sen!2sin!4v1748091566133!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="w-full"
          ></iframe>
        </motion.div>

      {/* Bottom Banner */}
      <div className="mt-16 bg-[#0c3b4a] text-white">
        <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-2 items-center">
          <div>
            <p className="text-red-500 font-medium uppercase text-sm">Safe Transportation & Logistics</p>
            <h2 className="text-2xl md:text-3xl font-semibold mt-2">We ensure safe transportation & quality delivery</h2>
          </div>
          <div className="mt-4 md:mt-0 text-end">
            <a
              href="/services"
              className="inline-block bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-sm font-semibold"
            >
              View services
            </a>
          </div>
        </div>
      </div>
    </section>
   </>




  )
}
