import React from 'react';
import { FaLinkedin } from 'react-icons/fa6';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-4 bg-[#f6f6f6] py-[60px] text-center">
      <div className="max-w-[646px] text-base">
        <p>Sahid Sudirman Center</p>
        <p>
          56th Floor, Unit C. Jend Sudirman Street, Kav 86, Karet Tengsin, Tanah
          Abang, Central Jakarta, Jakarta 10220
        </p>
      </div>
      <div className="flex gap-3 text-sm font-normal">
        <p>© 2024 Equinox Technology LLC</p>
        <p>Report Abuse</p>
      </div>
      <Link href="https://www.linkedin.com/company/equinoxtechnology">
        <FaLinkedin size={24} />
      </Link>
    </div>
  );
};

export default Footer;
