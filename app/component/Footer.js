'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0C3B4A] to-red-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Paras International Courier</h3>
            <p className="text-gray-300 mb-6">
              Established in 2008, Paras International Courier proudly serves 25,000+ satisfied clients with unmatched dedication and service quality.
            </p>
            <div className="flex gap-4">
              <a href="#" target="_blank" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Import & Export Solutions</li>
              <li>Freight & Logistics Management</li>
              <li>Supply Chain Consulting</li>
              <li>Warehousing & Fulfillment</li>
              <li>Customs Clearance Support</li>
            </ul>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-white transition">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white transition">Services</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-white transition">Gallery</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition">Contact</a></li>
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex flex-col items-start gap-3">
                <div className='flex gap-2'>
                  <Phone className="w-5 h-5 mt-1 text-blue-400" />
                <div>
                  <p className="text-gray-300">8582879403</p>
                </div>
                </div>
                <div className='flex gap-2'>
                  <Phone className="w-5 h-5 mt-1 text-blue-400" />
                <div>
                  <p className="text-gray-300">9831559403</p>
                </div>
                </div>
                <div className='flex gap-2'>
                  <Phone className="w-5 h-5 mt-1 text-blue-400" />
                <div>
                  <p className="text-gray-300">03348042027</p>
                </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-blue-400" />
                <span className="text-gray-300">parasinternational21@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-blue-400" />
                <span className="text-gray-300">
                  46F, Rafi Ahmed Kidwai Road, Sundaram Complex, Opposite West Bengal Board office, Park Street , Kolkata 700016
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-white my-12"
        />

         <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="overflow-hidden shadow-xl"
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

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-white0 text-sm text-center pt-10 md:text-left"
          >
            © {new Date().getFullYear()} Paras International Courier. All rights reserved.<br />
            Website Developed & Maintained by Digital Exposure Online Services
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Sitemap</a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

