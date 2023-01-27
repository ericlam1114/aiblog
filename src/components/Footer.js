import Link from 'next/link'
import React from 'react'

const Footer = () => (
  <footer className=" py-4">
    <div className="container mx-auto flex flex-wrap items-center">
      <div className="w-full md:w-1/3 text-center md:text-left">
        <Link legacyBehavior href='/privacypolicy'>
          <a className="text-gray-800 hover:text-yellow-200">Privacy Policy</a>
        </Link>
        
      </div>
      <div className="w-full md:w-1/3 text-center md:text-center">
        <a href="mailto:info@example.com" className="text-gray-800 hover:text-yellow-200">mark@themegoliath.com</a>
        <div className="text-gray-800">7611 Ben Ave</div>
        <div className="text-gray-800">North Hollywood, CA 91605</div>
      </div>
      <div className="w-full md:w-1/3 text-center md:text-right">
      <Link legacyBehavior href="/terms">
          <a className="text-gray-800 hover:text-yellow-200 ml-4">Terms & Conditions</a>
        </Link>
      </div>
    </div>
  </footer>
)

export default Footer