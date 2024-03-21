'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-[99] h-full max-h-[80px] bg-white py-[18px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
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
          <div className="hidden lg:block">
            <div className="flex gap-10 space-x-4 text-lg font-semibold ">
              <NavLink href="/">
                <span
                  className={
                    pathname == '/'
                      ? 'border-b-[2px] border-secondary-500 pb-[10px]'
                      : ''
                  }
                >
                  Home
                </span>
              </NavLink>
              <NavLink href="/about">
                <span
                  className={
                    pathname == '/about'
                      ? 'border-b-[2px] border-secondary-500 pb-[10px]'
                      : ''
                  }
                >
                  About
                </span>
              </NavLink>
              <NavLink href="/business-unit">
                <span
                  className={
                    pathname == '/business-unit'
                      ? 'border-b-[2px] border-secondary-500 pb-[10px]'
                      : ''
                  }
                >
                  Bussiness Unit
                </span>
              </NavLink>
              <NavLink href="/contact">
                <span
                  className={
                    pathname == '/contact'
                      ? 'border-b-[2px] border-secondary-500 pb-[10px]'
                      : ''
                  }
                >
                  Contact
                </span>
              </NavLink>
              <NavLink href="/career">
                <span
                  className={
                    pathname == '/career'
                      ? 'border-b-[2px] border-secondary-500 pb-[10px]'
                      : ''
                  }
                >
                  Career
                </span>
              </NavLink>
            </div>
          </div>
          <div className="hidden lg:block">
            <button className="rounded-[40px] bg-[#4CB9E7] px-[20px] py-[8px] text-[18px] font-semibold leading-[27.9px] text-white">
              Subscribe
            </button>
          </div>
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
