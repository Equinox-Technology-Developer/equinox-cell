import React from 'react';
import HeroBanner from '@/components/HeroBanner/page';
import Image from 'next/image';
import { BsCheck2Circle } from 'react-icons/bs';

export const metadata = {
  title: 'Equinoxcell | About',
  description: 'If you care what about equinoxcell? just read the message here',
};

export default function About() {
  return (
    <main>
      <section className="h-full w-full">
        <HeroBanner
          title={
            <span style={{ color: '#ffffff' }}>
              Innovating Goods for The{' '}
              <span style={{ color: '#59D5E0' }}>Greater Good</span>
            </span>
          }
          subtitle="Our talent assessments screen and identify the best candidates and make your hiring decisions faster, easier, and bias-free."
          imageUrl={'/assets/hero-image-about.png'}
          gradient={'left'}
        />
        <div className="container mx-auto flex justify-center py-[40px]">
          <Image src={'/assets/equinox-about.svg'} width={390} height={80} />
        </div>
        <div className="w-full bg-[#F4F4F4]">
          <div className="container mx-auto flex justify-center pb-[40px] pt-[60px]">
            <p className="max-w-[934px] text-center text-[18px] leading-[27.9px]">
              Equinox Technology is a dynamic retail & SaaS enterprise,
              spearheading innovation in the e-commerce retail space.
              Specializing in a diverse range of products including home &
              garden essentials, cutting-edge electronics, and exquisite art
              pieces, we are committed to enriching the online shopping
              experience for our customers.
            </p>
          </div>
        </div>
      </section>
      <section className="h-full w-full">
        <div className="py-[60px]">
          <Image
            src="/assets/hero-image-vision.png"
            width={1440}
            height={400}
            className="h-[400px] w-full object-cover object-center"
          />
          <div className="container mx-auto mt-[32px] space-y-[24px]">
            <h2 className="text-center text-[40px] font-semibold leading-[27.9px]">
              Our Vision
            </h2>
            <p className="text-center text-[18px] leading-[27.9px]">
              To be the top 3 leader in every business we pursue, inspiring
              excellence through innovation, quality, andunparalleled customer
              experiences
            </p>
          </div>
        </div>
      </section>
      <section className="h-full w-full">
        <div className="py-[60px]">
          <Image
            src="/assets/hero-image-mission.png"
            width={1440}
            height={400}
            className="h-[400px] w-full object-cover object-center"
          />
          <div className="container mx-auto mt-[32px] space-y-[24px]">
            <h2 className="text-center text-[40px] font-semibold leading-[27.9px]">
              Our Mision
            </h2>
          </div>
          <div className="container mx-auto grid  grid-cols-3 gap-x-[75.5px] pt-[42px]">
            <div className="flex flex-col items-center">
              <Image
                src={'/assets/mission-strive.svg'}
                width={100}
                height={100}
              />
              <p className="max-w-[313px] text-center text-[16px] leading-[24px]">
                Strive for excellence in every aspect of our operations
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={'/assets/mission-relationship.svg'}
                width={100}
                height={100}
              />
              <p className="max-w-[313px] text-center text-[16px] leading-[24px]">
                Build and maintain strong relationships with colleagues,
                customers, suppliers, and partners
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={'/assets/mission-innovation.svg'}
                width={100}
                height={100}
              />
              <p className="max-w-[313px] text-center text-[16px] leading-[24px]">
                Foster a culture of innovation, collaboration, and continuous
                learning
              </p>
            </div>
          </div>
          <div className="container mx-auto grid max-w-[1090px] grid-cols-2 pt-[42px]">
            <div className="max-w-1/2 flex flex-col items-center">
              <Image
                src={'/assets/mission-contribute.svg'}
                width={100}
                height={100}
              />
              <p className="max-w-[313px] text-center text-[16px] leading-[24px]">
                Contribute to the well-being of our employees, customers, and
                Indonesia by creating more jobs
              </p>
            </div>
            <div className="max-w-1/2 flex flex-col items-center justify-center">
              <Image
                src={'/assets/mission-achive.svg'}
                width={100}
                height={100}
              />
              <p className="max-w-[313px] text-center text-[16px] leading-[24px]">
                Achieve 250 Billion in revenue and 100 employees
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[500px] bg-primary-900 py-[50px]">
        <div className="container mx-auto flex h-full flex-row">
          <div className="flex w-1/2 items-center">
            <h2 className="max-w-[684px] text-[40px] leading-[48px] text-white">
              Revolutionizing E-Commerce with a Blend of Innovation and
              Technology
            </h2>
          </div>
          <div className="flex w-1/2 flex-col items-center justify-center gap-y-[24px]">
            <ul className="flex flex-col gap-y-[24px]">
              <li className="flex items-center gap-x-[24px]">
                <BsCheck2Circle size={26} className="text-success-500" />
                <p className="text-[20px] font-semibold text-white">
                  Headquartered in San Francisco{' '}
                </p>
              </li>
              <li className="flex items-center gap-x-[24px]">
                <BsCheck2Circle size={26} className="text-success-500" />
                <p className="text-[20px] font-semibold text-white">
                  Product Excellence and User-Friendly Design
                </p>
              </li>
              <li className="flex items-center gap-x-[24px]">
                <BsCheck2Circle size={26} className="text-success-500" />
                <p className="text-[20px] font-semibold text-white">
                  Agile and Customer-Centric
                </p>
              </li>
              <li className="flex items-center gap-x-[24px]">
                <BsCheck2Circle size={26} className="text-success-500" />
                <p className="text-[20px] font-semibold text-white">
                  diverse and Passionate Team
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="container mx-auto flex flex-row gap-x-[20px] py-[80px]">
        <div className="flex w-1/2 flex-col justify-center space-y-6">
          <h2 className="text-[40px] font-semibold leading-[27.9px]">
            As A Publisher
          </h2>
          <p className="text-[18px] leading-[27.9px]">
            We are thrilled to be your go-to source for accurate and trustworthy
            data and insights on the ever-evolving world of online marketing,
            web, and SEO industry. Our data and metrics are highly trusted by
            leading media outlets in the industry.
          </p>
          <p className="text-[18px] leading-[27.9px]">
            Contact us at 
            <span className="underline">support@equinoxcell.com</span> for media
            inquiries.
          </p>
        </div>
        <div className="w-1/2">
          <Image
            src={'/assets/hero-image-publisher.png'}
            width={646}
            height={400}
            alt="about-image"
            className="h-auto w-full rounded-[20px] object-cover object-center"
          />
        </div>
      </section>
      <section className="container mx-auto flex flex-row gap-x-[20px] py-[80px]">
        <div className="w-1/2">
          <Image
            src={'/assets/hero-image-equinox.png'}
            width={646}
            height={400}
            alt="about-image"
            className="h-auto w-full rounded-[20px] object-cover object-center"
          />
        </div>
        <div className="flex w-1/2 flex-col items-end justify-center space-y-6">
          <h2 className="text-[40px] font-semibold leading-[27.9px]">
            Why Work at Equinox?
          </h2>
          <p className="text-end text-[18px] leading-[27.9px]">
            At Equinox, we're not just about e-commerce; we're about creating a
            workplace that's as dynamic and diverse as the products we sell. Our
            headquarters in the vibrant city of San Francisco sets the stage for
            an exciting, fast-paced journey in the world of home & garden,
            electronics, and arts retail.
          </p>
        </div>
      </section>
      <section className="container mx-auto py-[60px]">
        <h2 className="text-center text-[40px] font-semibold leading-[27.9px]">
          Life at Equinox Technology
        </h2>
        <div className="mt-[42px] grid grid-cols-2 gap-y-[24px]">
          <p className="w-full text-[20px] font-semibold">
            Embrace the Equinox Culture:
          </p>
          <p className="text-justify text-[18px] leading-[27.9px]">
            Here, you're stepping into a flat hierarchy environment - where
            ideas flow freely and innovation is the daily bread. We live by a
            simple, yet powerful motto: "First do it, then do it right, then do
            it better." It's not just a tagline; it's our way of life.
          </p>
          <p className="w-full text-[20px] font-semibold">
            Growth and Opportunities:
          </p>
          <p className="text-justify text-[18px] leading-[27.9px]">
            At Equinox, the sky's the limit when it comes to personal and
            professional growth. We're constantly exploring new horizons in the
            e-commerce landscape, offering ample opportunities for you to take
            on new challenges, and leave your mark on the company. Whether it's
            introducing a groundbreaking product line or revolutionizing
            customer experience.
          </p>
          <p className="w-full text-[20px] font-semibold">
            Independent Decision Making:
          </p>
          <p className="text-justify text-[18px] leading-[27.9px]">
            Here, your ability to make informed, independent decisions is highly
            valued. We encourage you to not just think outside the box but to
            redefine it. Show us how your ideas can add value to the business,
            and we'll give you the platform to bring them to life.
          </p>
          <p className="w-full text-[20px] font-semibold">
            A Diverse and Team:
          </p>
          <p className="text-justify text-[18px] leading-[27.9px]">
            You'll join a melting pot of individuals from all walks of life,
            each bringing their unique flavor to the table. We're a quirky mix
            of tech enthusiasts, creative minds, and problem solvers who
            collectively thrive on challenges and innovation.
          </p>
          <p className="w-full text-[20px] font-semibold">
            Join the Equinox Experience:
          </p>
          <p className="text-justify text-[18px] leading-[27.9px]">
            If you're looking for a workplace that's energetic, creative, and
            constantly pushing the boundaries of e-commerce, look no further.
            You'll not just be joining a company; you'll be becoming a part of a
            journey that redefines the retail experience. So, are you ready to
            be part of something extraordinary?
          </p>
        </div>
      </section>
    </main>
  );
}
