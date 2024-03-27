'use client';
import { useState } from 'react';
import Link from 'next/link';
import { HiLanguage } from 'react-icons/hi2';
import { IoMdArrowDropdown } from 'react-icons/io';
import { BiPhone } from 'react-icons/bi';
import { MdMailOutline } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa6';

const Topbar = () => {
  return (
    <nav className="z-[99] h-[24px] bg-secondary-500 py-[4px] md:h-[32px] md:pb-[8px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[6px]">
            <HiLanguage className="text-[12px] text-white md:text-[18px]" />
            <p className="text-[12px] text-white md:text-[14px]">English</p>
            {/* <IoMdArrowDropdown className="text-[12px] text-white md:text-[16px]" /> */}
          </div>
          <div className="flex items-center gap-[12px] md:gap-[16px]">
            <Link href="tel:+628113000800">
              <BiPhone className="text-[14px] text-white md:text-[18px]" />
            </Link>
            <Link href="/contact">
              <MdMailOutline className="text-[14px] text-white md:text-[18px]" />
            </Link>
            <Link href="https://www.linkedin.com/company/equinoxtechnology">
              <FaLinkedin className="text-[14px] text-white md:text-[18px]" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }) => {
  return <Link href={href}>{children}</Link>;
};

export default Topbar;
