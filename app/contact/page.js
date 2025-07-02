"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactPage = () => {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `New Website Enquiry:%0A%0AName: ${encodeURIComponent(form.firstname)} ${encodeURIComponent(form.lastname)}%0AEmail: ${encodeURIComponent(form.email)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/918582879403?text=${text}`, '_blank');
  };

  return (
    <div className="relative bg-[#f9f5f0] font-corm overflow-hidden">
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
            Contact <span className="text-red-400">Us</span>
          </h1>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Trusted logistics partner since 2008 — serving over 25,000+ happy customers across India.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
      >
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div variants={item} className="p-6 sm:p-8 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl sm:text-2xl font-semibold mb-6 text-neutral-600">Reach Out to Us</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={container} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div variants={item}>
                  <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                  <input type="text" id="firstname" name="firstname" value={form.firstname} onChange={handleChange} className="w-full px-4 py-2 border text-gray-700 border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 transition" required />
                </motion.div>
                <motion.div variants={item}>
                  <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                  <input type="text" id="lastname" name="lastname" value={form.lastname} onChange={handleChange} className="w-full px-4 py-2 border text-gray-700 border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 transition" required />
                </motion.div>
              </motion.div>

              <motion.div variants={item}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input type="email" id="email" name="email" value={form.email} onChange={handleChange} className="w-full px-4 py-2 border text-gray-700 border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 transition" required />
              </motion.div>

              <motion.div variants={item}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"></textarea>
              </motion.div>

              <motion.button variants={item} type="submit" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition duration-300">
                Submit Via WhatsApp
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={container} className="space-y-6">
            <motion.div variants={item} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-neutral-600">Contact Information</h3>
              <motion.div variants={container} className="space-y-4 text-sm">
                <motion.div variants={item} className="flex items-start" whileHover={{ x: 5 }}>
                  <FaMapMarkerAlt className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-800">Address 1 :</p>
                    <p className="text-gray-600">46F, Rafi Ahmed Kidwai Road, Sundaram Complex, Opposite West Bengal Board office, Park Street , Kolkata 700016</p>
                  </div>
                  <div>
                    <p className="text-gray-800">Address 2 :</p>
                    <p className="text-gray-600">11, Crooked Lane, Ground Floor Near The Lalit Great Eastern Hotel
Kolkata - 700069</p>
                  </div>
                </motion.div>

                <motion.div variants={item} className="flex items-start" whileHover={{ x: 5 }}>
                  <FaPhone className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-800 font-medium">Phone:</p>
                    <p className="text-gray-600">+91 8582879403</p>
                    <p className="text-gray-600">+91 9831559403</p>
                    <p className="text-gray-600">+91 03348042027</p>
                  </div>
                </motion.div>

                <motion.div variants={item} className="flex items-start" whileHover={{ x: 5 }}>
                  <FaEnvelope className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-800 font-medium">Email:</p>
                    <p className="text-gray-600">parasinternational21@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div variants={item} className="pt-4">
                  <p className="text-gray-800 font-semibold">Thanks and Regards,</p>
                  <p className="text-gray-600">Paras International Courier</p>
                </motion.div>
              </motion.div>
            </motion.div>
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
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="w-full"
          ></iframe>
        </motion.div>
            {/* Map section stays unchanged unless you want to update location */}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;
