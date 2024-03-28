import HeroBanner from '@/components/HeroBanner/page';
import { FiPhone } from 'react-icons/fi';
import { MdMailOutline } from 'react-icons/md';
import { GrSend } from 'react-icons/gr';
import Layout from '@/components/Layout/page';

export const metadata = {
  title: 'Contact | Equinox',
  description:
    'Our talent assessments screen and identify the best candidates and make your hiring decisions faster, easier, and bias-free.',
};

export default function ContactPage() {
  return (
    <Layout>
      <main>
        <HeroBanner
          title={<span style={{ color: '#ffffff' }}>Contact</span>}
          subtitle="Want to get in touch? Here’s how you can reach us!"
          imageUrl={'/assets/hero-image-contact.png'}
          gradient={'left'}
        />
        <section className="container mx-auto flex h-full flex-col items-center gap-x-[80px] space-y-[42px] px-4 py-[40px] md:px-[40px] md:py-[80px] lg:flex-row lg:px-0 lg:py-[120px]">
          <div className="h-full w-full space-y-[32px] lg:w-1/2">
            <h2 className="text-[24px] font-semibold leading-[27.9px] md:text-[40px]">
              Don’t Hestite to Contact Us
            </h2>
            <p className="text-[14px] leading-[27.9px] md:text-[18px]">
              You can comfortably send us your cooperation messages at any time.
              We will do our best to get the answer back to your email as soon
              as possible. If you need a quick response, call the number below
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <FiPhone className="mr-[20px] text-[24px] text-secondary-500" />
                <p className="text-light text-[14px] leading-[28px] md:text-[16px]">
                  +62-811-3000-800
                </p>
              </div>
              <div className="flex items-center">
                <MdMailOutline className="mr-[20px] text-[24px] text-secondary-500" />
                <p className="text-light text-[14px] leading-[28px] md:text-[16px]">
                  support@equinoxcell.com
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-start lg:w-1/2">
            <form className="h-full w-full max-w-[583px] rounded-[20px] px-[24px] py-[32px] shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)]">
              <div className="flex items-center gap-x-[16px]">
                <p className="text-[18px] font-medium leading-[27.9px] md:text-[24px]">
                  Get In Touch
                </p>
                <GrSend className="text-[24px] text-black md:text-[32px]" />
              </div>
              <p className="mt-[12px] text-[14px] font-light leading-[28px] md:text-[16px]">
                We're Eager And Ready To Help!
              </p>
              <div className="mt-[20px] flex flex-col space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-[48px] rounded-[5px] border-[0.75px] border-[#CBCBCB] px-[16px] py-[10px] placeholder:text-[14px] placeholder:text-[#CBCBCB] md:placeholder:text-[16px]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="h-[48px] rounded-[5px] border-[0.75px] border-[#CBCBCB] px-[16px] py-[10px] placeholder:text-[14px] placeholder:text-[#CBCBCB] md:placeholder:text-[16px]"
                />
                <textarea
                  placeholder="Your Message"
                  className="min-h-[108px] rounded-[5px] border-[0.75px] border-[#CBCBCB] px-[16px] py-[10px] placeholder:text-[14px] placeholder:text-[#CBCBCB] md:placeholder:text-[16px]"
                />
                <button
                  type="submit"
                  className="h-[40px] rounded-[5px] bg-secondary-500 px-[24px] py-[6px] text-center text-white hover:bg-secondary-400"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
}
