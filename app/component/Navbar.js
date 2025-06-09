'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Globe, Lock, MapPin, Mail, Menu, X } from 'lucide-react'
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (href) => pathname === href

  // Close menu when a link is clicked (on mobile)
  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header className="text-white w-full absolute top-0 left-0 z-50 sm:px-10 p-2 sm:p-0">
      {/* Top Bar */}
      <div className="hidden sm:block text-sm w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex justify-between items-center flex-wrap gap-2">
          <div className="flex gap-4 items-center flex-wrap text-xs">
            <div className="flex items-center gap-1">
              <MapPin size={14} className="text-red-500" />
              <span>46F, Rafi Ahmed Kidwai Road, Sundaram Complex, Opposite West Bengal Board office, Park Street , Kolkata 700016</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={14} className="text-red-500" />
              <span>parasinternational21@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs font-medium">
            <button className="hover:underline">Help</button>
            <button className="hover:underline">Support</button>
            <button className="hover:underline">Faqs</button>
            <div className="hidden sm:flex items-center gap-2 text-lg ml-2">
              <FaTwitter />
              <FaFacebookF />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#124e66] w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          {/* Logo & Desktop Links */}
          <div className="flex items-center gap-6">
            {/* Logo */}
            <div className="bg-red-600 px-4 py-2 -skew-x-12">
              <div className="flex items-center skew-x-12">
                <span className="text-xl font-semibold">Paras International Courier</span>
              </div>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex gap-6 text-white font-medium text-sm">
              {navLinks.map(({ name, href }) => (
                <a
                  key={href}
                  href={href}
                  className={ isActive(href) ? 'text-red-400 underline font-bold underline-offset-4' : 'font-semibold'}
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Icons & Hamburger */}
          <div className="flex items-center gap-4">
            <Link href={"tel:8582879403"} className='hidden sm:block border rounded-3xl border-white text-sm font-semibold text-white p-2'>
              PH : 8582879403
            </Link>
            {/* Hamburger menu for mobile */}
            <button
              className="lg:hidden flex items-center justify-center p-2 rounded-md focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Links */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex flex-col">
            <div className="flex justify-end p-4">
              <button
                className="text-white"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={32} />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center space-y-6 text-lg font-semibold">
              {navLinks.map(({ name, href }) => (
                <a
                  key={href}
                  href={href}
                  className={isActive(href) ? 'text-red-400 underline underline-offset-4' : ''}
                  onClick={handleLinkClick}
                >
                  {name}
                </a>
              ))}
              <Link
                href={"tel:8582879403"}
                className='border rounded-3xl border-white text-sm font-semibold text-white p-2'
                onClick={handleLinkClick}
              >
                PH : 8582879403
              </Link>
              <div className="flex gap-4 text-2xl mt-4">
                <FaTwitter />
                <FaFacebookF />
                <FaInstagram />
                <FaYoutube />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
