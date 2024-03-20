import HeroBanner from '@/components/HeroBanner/page';
import { FiPhone } from 'react-icons/fi';
import { MdMailOutline } from 'react-icons/md';
import { GrSend } from 'react-icons/gr';

export default function ContactPage() {
  return (
    <main>
      <HeroBanner
        title={<span style={{ color: '#ffffff' }}>Contact</span>}
        subtitle="Our talent assessments screen and identify the best candidates and make your hiring decisions faster, easier, and bias-free."
        imageUrl={'/assets/hero-image-contact.png'}
        gradient={'left'}
      />
      <section className="container mx-auto flex h-full flex-row items-center gap-x-[80px] space-y-[42px] py-[120px]">
        <div className="h-full w-1/2 space-y-[32px]">
          <h2 className="text-[40px] font-semibold leading-[27.9px]">
            Don’t Hestite to Contact Us
          </h2>
          <p className="text-[18px] leading-[27.9px] ">
            You can comfortably send us your cooperation messages at any time.
            We will do our best to get the answer back to your email as soon as
            possible. If you need a quick response, call the number below
          </p>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <FiPhone className="mr-[20px] text-[24px] text-secondary-500" />
              <p className="text-light leading-[28px]">+62-811-3000-800</p>
            </div>
            <div className="flex items-center">
              <MdMailOutline className="mr-[20px] text-[24px] text-secondary-500" />
              <p className="text-light leading-[28px]">
                support@equinoxcell.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-1/2 justify-center">
          <form className="h-full w-full max-w-[583px] rounded-[20px] px-[24px] py-[32px] shadow-md">
            <div className="flex items-center gap-x-[16px]">
              <p className="text-[24px] font-medium leading-[27.9px]">
                Get In Touch
              </p>
              <GrSend className="text-[32px] text-black" />
            </div>
            <p className="mt-[12px] text-[16px] font-light leading-[28px]">
              We're Eager And Ready To Help!
            </p>
            <div className="mt-[20px] flex flex-col space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="h-[48px] rounded-[5px] border-[0.75px] border-[#CBCBCB] px-[16px] py-[10px] placeholder:text-[16px] placeholder:text-[#CBCBCB]"
              />
              <input
                type="email"
                placeholder="Email"
                className="h-[48px] rounded-[5px] border-[0.75px] border-[#CBCBCB] px-[16px] py-[10px] placeholder:text-[16px] placeholder:text-[#CBCBCB]"
              />
              <textarea
                placeholder="Your Message"
                className="min-h-[108px] rounded-[5px] border-[0.75px] border-[#CBCBCB] px-[16px] py-[10px] placeholder:text-[16px] placeholder:text-[#CBCBCB]"
              />
              <nutton
                type="submit"
                className="h-[40px] rounded-[5px] bg-secondary-500 px-[24px] py-[6px] text-center text-white"
              >
                Send Message
              </nutton>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
