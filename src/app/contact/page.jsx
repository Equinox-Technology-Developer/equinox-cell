import HeroBanner from '@/components/HeroBanner/page';
import { FaLinkedin } from 'react-icons/fa6';
import { FiPhone } from 'react-icons/fi';
import { MdMailOutline } from 'react-icons/md';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main>
      <HeroBanner
        title={<span style={{ color: '#ffffff' }}>Contact</span>}
        subtitle="Our talent assessments screen and identify the best candidates and make your hiring decisions faster, easier, and bias-free."
        imageUrl={'/assets/hero-image-contact.png'}
        gradient={'left'}
      />
      <section className="container mx-auto space-y-[42px] py-[80px]">
        <h2 className="text-center text-[40px] font-bold leading-[48px]">
          Contact Us
        </h2>
        <p className="text-center text-[18px] leading-[27.9px]">
          Let your visitors know how to reach out to you, or learn more about a
          product or service. If you add a button, link it to your preferred
          email address.
        </p>
        <div className="grid grid-cols-3 gap-x-[40px]">
          <div className="flex flex-col items-center gap-y-2">
            <p className="text-[18px] font-semibold leading-[27.9px]">
              Call us at
            </p>
            <div className="flex flex-row items-center gap-x-1">
              <FiPhone size={24} className="text-neutral-500" />
              <p className="text-[15px] font-light leading-[27.9px]">
                +62-811-3000-800
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-2">
            <p className="text-[18px] font-semibold leading-[27.9px]">
              Message us at
            </p>
            <div className="flex flex-row items-center gap-x-1">
              <MdMailOutline size={24} className="text-neutral-500" />
              <p className="text-[15px] font-light leading-[27.9px]">
                support@equinoxcell.com
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-2">
            <p className="text-[18px] font-semibold leading-[27.9px]">
              Follow Us
            </p>
            <div className="flex flex-row items-center gap-x-1">
              <Link href="https://www.linkedin.com/company/equinoxtechnology">
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
