'use client'

import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { Truck, Globe, ShieldCheck, Users, Clock, PackageCheck } from 'lucide-react'

export default function AboutPage() {
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
      <div className='text-neutral-700 bg-white'>
        {/* Hero Section */}
      <section className="relative w-full h-[70vh] overflow-hidden flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero2.jpg"
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
            About <span className="text-red-400">Paras International</span>
          </h1>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Trusted logistics partner since 2008, delivering excellence across India and beyond
          </p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeUp} className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/cargo.jpg" 
                alt="Our Story"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-red-600">Journey</span>
              </h2>
              <div className="w-20 h-1 bg-red-600 mb-6"></div>
              <p className="text-gray-600 mb-4">
                Founded in 2008, Paras International began as a small courier service in Kolkata with a single truck and a vision to revolutionize logistics in Eastern India.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we operate a fleet of over 50 vehicles and serve more than 25,000 satisfied customers across India and internationally. Our growth stems from an unwavering commitment to reliability, security, and customer satisfaction.
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Truck className="text-red-600" />
                </div>
                <div>
                  <p className="font-semibold">46F, Rafi Ahmed Kidwai Road, Sundaram Complex, Opposite West Bengal Board office, Park Street </p>
                  <p className="text-sm text-gray-500">Kolkata – 700016</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core <span className="text-red-600">Values</span>
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <ShieldCheck className="w-10 h-10 text-red-600" />,
                title: "Reliability",
                description: "Consistent, on-time deliveries you can count on"
              },
              {
                icon: <Globe className="w-10 h-10 text-red-600" />,
                title: "Global Reach",
                description: "Nationwide network with international capabilities"
              },
              {
                icon: <Users className="w-10 h-10 text-red-600" />,
                title: "Customer Focus",
                description: "Personalized solutions for every client's needs"
              },
              {
                icon: <Clock className="w-10 h-10 text-red-600" />,
                title: "Efficiency",
                description: "Optimized routes and processes for speed"
              },
              {
                icon: <PackageCheck className="w-10 h-10 text-red-600" />,
                title: "Secure Handling",
                description: "Advanced packaging and tracking systems"
              },
              {
                icon: <Truck className="w-10 h-10 text-red-600" />,
                title: "Innovation",
                description: "Continually improving our services"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all text-center"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

       <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="overflow-hidden shadow-xl mb-10"
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

      {/* Team Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-red-600">Leadership</span>
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              The dedicated professionals driving Paras International forward
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                image: "/team/ceo.jpg",
                name: "Muskan Parveen",
                position: "Founder & CEO",
                bio: "With 15+ years in logistics, Muskan built Paras International from the ground up."
              },
              {
                image: "/team/operations.jpg",
                name: "Rajesh Kumar",
                position: "Operations Head",
                bio: "Ensures seamless execution of all logistics operations."
              },
              {
                image: "/team/technology.jpg",
                name: "Priya Sharma",
                position: "Technology Director",
                bio: "Leads our digital transformation and tracking systems."
              },
              {
                image: "/team/customer.jpg",
                name: "Amit Patel",
                position: "Customer Relations",
                bio: "Your direct point of contact for all service needs."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 w-full">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#033542] to-[#0a5a6e] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Partner With Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Whether you need domestic courier services or international logistics solutions, we're here to help.
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
              href="mailto:parasinternational21@gmail.com" 
              className="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-3 px-8 rounded-full flex items-center justify-center gap-2 transition-colors"
            >
              Email Us
            </a>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  )
}