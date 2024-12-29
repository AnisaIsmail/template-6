'use client'
import React, { useState } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch, IoIosMenu, IoIosClose } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import Image from 'next/image';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-100 px-4 py-2 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Furniro Logo"
            width={80}
            height={40}
            className="object-contain"
          />
          <p className="font-extrabold text-3xl">Furniro</p>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <a
              href="/"
              className="text-gray-700 hover:text-gray-500 transition duration-200"
              aria-label="Home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/shop"
              className="text-gray-700 hover:text-gray-500 transition duration-200"
              aria-label="Shop"
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="/blog"
              className="text-gray-700 hover:text-gray-500 transition duration-200"
              aria-label="Blog"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-gray-700 hover:text-gray-500 transition duration-200"
              aria-label="Contact"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Action Icons */}
        <div className="flex items-center space-x-6">
          <a href="/" className="text-gray-700 hover:text-gray-500">
            <IoIosSearch size={24} />
          </a>
          <a href="/" className="text-gray-700 hover:text-gray-500">
            <FaRegHeart size={24} />
          </a>
          <a href="/" className="text-gray-700 hover:text-gray-500">
            <IoCartOutline size={24} />
          </a>
          <a href="/" className="text-gray-700 hover:text-gray-500">
            <HiOutlineUser size={24} />
          </a>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-gray-500 focus:outline-none"
          >
            {menuOpen ? <IoIosClose size={30} /> : <IoIosMenu size={30} />} 
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-100 px-4 py-2 shadow-md">
          <ul className="space-y-4">
            <li>
              <a
                href="/"
                className="text-gray-700 hover:text-gray-500 transition duration-200"
                aria-label="Home"
              > 
                Home
              </a>
            </li>
            <li>
              <a
                href="/shop"
                className="text-gray-700 hover:text-gray-500 transition duration-200"
                aria-label="Shop"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="text-gray-700 hover:text-gray-500 transition duration-200"
                aria-label="Blog"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-700 hover:text-gray-500 transition duration-200"
                aria-label="Contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;