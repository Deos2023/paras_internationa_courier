'use client'

import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { Truck, Plane, Train, Ship, Package, Warehouse, Clock, Shield } from 'lucide-react'
import Static from '../component/Static'
import { DeliveryOptionsSlider } from '../component/DeliveryOptionsSlider'

const services = [
  {
    title: 'Domestic Courier',
    icon: <Truck className="w-8 h-8 text-red-600" />,
    image: '/del1.jpg',
    description: 'Reliable nationwide delivery with real-time tracking',
    features: [
      'Same-day & next-day options',
      'Door-to-door service',
      'Secure handling',
      'Competitive pricing'
    ]
  },
  {
    title: 'International Shipping',
    icon: <Plane className="w-8 h-8 text-red-600" />,
    image: '/int.jpg',
    description: 'Global logistics solutions tailored to your needs',
    features: [
      '150+ countries served',
      'Customs clearance',
      'Air & sea freight',
      'End-to-end tracking'
    ]
  },
  {
    title: 'Express Delivery',
    icon: <Clock className="w-8 h-8 text-red-600" />,
    image: '/exp.jpg',
    description: 'Urgent deliveries when time is critical',
    features: [
      'Time-definite delivery',
      'Priority handling',
      'Dedicated vehicles',
      '24/7 support'
    ]
  },
  {
    title: 'Cargo & Freight',
    icon: <Package className="w-8 h-8 text-red-600" />,
    image: '/cargo.jpg',
    description: 'Heavy load transportation solutions',
    features: [
      'Full truckload (FTL)',
      'Less than truckload (LTL)',
      'Specialized equipment',
      'Dangerous goods handling'
    ]
  },
  {
    title: 'Warehouse Storage',
    icon: <Warehouse className="w-8 h-8 text-red-600" />,
    image: '/hero1.jpg',
    description: 'Secure storage with inventory management',
    features: [
      'Climate-controlled options',
      'Bonded warehousing',
      'Pick & pack services',
      'Stock management'
    ]
  },
  {
    title: 'Customs Clearance',
    icon: <Shield className="w-8 h-8 text-red-600" />,
    image: '/hero2.jpg',
    description: 'Expert handling of import/export documentation',
    features: [
      'Licensed customs brokers',
      'Duty optimization',
      'Fast clearance',
      'Compliance assurance'
    ]
  }
]

export default function ServicesPage() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[77vh] overflow-hidden flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/exp.jpg"
            alt="Our Services"
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
            Our <span className="text-red-400">Services</span>
          </h1>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comprehensive logistics solutions tailored to your business needs
          </p>
          <div className='max-w-3xl mx-auto pt-5'>
            <DeliveryOptionsSlider/>
          </div>
        </motion.div>
        
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Logistics <span className="text-red-600">Solutions</span>
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              We offer end-to-end logistics services with the highest standards of reliability and security
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative h-48 w-full">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="bg-white p-2 rounded-full">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white ml-3">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-red-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 text-red-600 hover:text-red-800 font-medium flex items-center transition-colors">
                    Learn more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


<Static/>
      {/* Specialized Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized <span className="text-red-600">Services</span>
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              Tailored solutions for unique logistics challenges
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeUp} className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/hero2.jpg" 
                alt="Specialized Services"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-8">
              {[
                {
                  icon: <Shield className="w-8 h-8 text-red-600" />,
                  title: "Hazardous Materials",
                  description: "Certified handling and transportation of dangerous goods"
                },
                {
                  icon: <Package className="w-8 h-8 text-red-600" />,
                  title: "Temperature Control",
                  description: "Refrigerated transport for perishable goods"
                },
                {
                  icon: <Train className="w-8 h-8 text-red-600" />,
                  title: "Oversized Loads",
                  description: "Specialized equipment for heavy and oversized cargo"
                },
                {
                  icon: <Ship className="w-8 h-8 text-red-600" />,
                  title: "Project Cargo",
                  description: "End-to-end management for complex shipments"
                }
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#033542] to-[#0a5a6e] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Need a Custom Logistics Solution?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Our experts will design a tailored service package for your specific requirements.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a 
              href="tel:9831559403" 
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full flex items-center justify-center gap-2 transition-colors"
            >
              Call Now
            </a>
            <a 
              href="/contact" 
              className="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-3 px-8 rounded-full flex items-center justify-center gap-2 transition-colors"
            >
              Request Quote
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}