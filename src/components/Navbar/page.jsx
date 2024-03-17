'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white-800 top-0 z-10 py-[23px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={'/assets/equinox-logo.png'}
                width={130}
                height={30}
                alt="logo"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex gap-10 space-x-4 text-lg font-semibold ">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/business-unit">Business Unit</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <NavLink href="/career">Career</NavLink>
            </div>
          </div>
          <div></div>
          <div className="md:hidden">
            {/* Hamburger menu */}
            <button
              type="button"
              className="text-white hover:text-gray-300 focus:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
              onClick={toggleMenu}
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 6h16a1 1 0 110 2H4a1 1 0 010-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isOpen && (
          <div className="mt-4 md:hidden">
            <div className="flex flex-col items-end space-y-2">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/business-unit">Business Unit</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <NavLink href="/career">Career</NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }) => {
  return <Link href={href}>{children}</Link>;
};

export default Navbar;
