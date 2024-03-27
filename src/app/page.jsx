'use client';

import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BiPhone } from 'react-icons/bi';
import { MdMailOutline } from 'react-icons/md';
import Link from 'next/link';
import Layout from '@/components/Layout/page';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './home.module.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const metadata = {
  title: 'Homepage | Equinox',
  description: `Our talent assessments screen and identify the best candidates and make your hiring decisions faster, easier, and bias-free.`,
};

export default function Home() {
  useEffect(() => {
    document.title = metadata.title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute('content', metadata.description);
  });

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}`;
  };

  const [hoverStates, setHoverStates] = useState({
    sohnne: false,
    enigwatch: false,
    artdigest: false,
    koizuma: false,
    millionbloom: false,
    expert: false,
    tph: false,
    eternity: false,
    vertu: false,
  });

  const handleMouseEnter = (key) => {
    setHoverStates((prevStates) => ({
      ...prevStates,
      [key]: true,
    }));
  };

  const handleMouseLeave = (key) => {
    setHoverStates((prevStates) => ({
      ...prevStates,
      [key]: false,
    }));
  };

  return (
    <Layout>
      <main className="min-h-screen">
        <section className="h-full w-full">
          <Image
            src={'/assets/hero-image-homepage.png'}
            width={1440}
            height={676}
            alt="hero-image"
            className="h-[425px] w-full object-cover object-center md:h-[768px] lg:h-[676px]"
          />
          <div className="absolute inset-0 mt-[91px] h-[425px] w-full bg-gradient-to-l from-[#66666600] to-[#0000009E] md:h-[768px] lg:mt-[112px] lg:h-[676px]">
            <div className="absolute inset-0 flex h-[425px] w-full items-center justify-start text-start md:h-[768px] lg:h-[676px]">
              <div className="container mx-auto w-full space-y-8">
                <div className="w-full space-y-[24px] px-4 md:px-[60px] lg:w-1/2 lg:px-0">
                  <h1 className="text-center text-[30px] font-bold leading-[48px] text-white md:text-[40px] lg:text-start">
                    Innovating Goods for The <br />
                    <span className="text-secondary-500">Greater Good</span>
                  </h1>
                  <p className="font-regular text-center text-[20px] leading-[27.9px] text-white lg:text-start">
                    Innovations in modern smarthome, unique interior items make
                    the company thrive through international markets
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h-full w-full space-y-3 px-4 py-6 md:px-[32px] md:pt-[32px] lg:px-0 lg:py-[40px]">
          <h2 className="text-center text-[30px] font-bold leading-[27.9px] md:text-[40px]">
            Equinox Technology LLC
          </h2>
          <p className="text-medium flex justify-center text-center text-[18px] leading-[27.9px]">
            We think big, start small, and move fast! A small team passionate
            about retail and technology
          </p>
        </section>
        <section className="container mx-auto flex flex-col-reverse px-4 py-6 md:px-[32px] md:pt-[32px] lg:flex-row lg:px-0 lg:py-[80px]">
          <div className="mt-[24px] flex w-full flex-col justify-center space-y-6 lg:mt-0 lg:w-1/2">
            <h2 className="text-center text-[30px] font-semibold leading-[27.9px] md:text-[40px] lg:text-start">
              About
            </h2>
            <p className="text-center text-[14px] md:text-[18px] lg:text-start">
              Equinox Technology is a dynamic retail & SaaS enterprise,
              spearheading innovation in the e-commerce retail space.
              Specializing in a diverse range of products including home &
              garden essentials, cutting-edge electronics, and exquisite art
              pieces, we are committed to enriching the online shopping
              experience for our customers.
            </p>
            <div className="flex w-full justify-center lg:justify-start">
              <button className="w-fit rounded-[40px] bg-gradient-to-l from-[#59D5E0] to-[#4CB9E7] px-6 py-[6px] text-center text-[18px] text-white">
                <a href="/about">See more</a>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src={'/assets/about-image.png'}
              width={646}
              height={400}
              alt="about-image"
              className="h-auto w-full rounded-[20px] object-cover object-center"
            />
          </div>
        </section>
        <section className="container mx-auto flex flex-col px-4 py-6 md:px-[32px] md:pt-[32px] lg:px-0 lg:py-[80px]">
          <p className="text-center text-[14px] font-medium leading-[27.9px] md:text-[18px]">
            Where Innovation Meets Craftsmanship in the Furniture Industry!
          </p>
          <h2 className="text-center text-[30px] font-bold leading-[48px] md:text-[40px]">
            Work that touches the lives of millions
          </h2>
          <div className="mt-[42px] grid grid-cols-1 gap-x-[24px] lg:grid-cols-3">
            <div className="space-y-[10px] py-2">
              <h3 className="bg-gradient-to-l from-[#59D5E0] to-[#4CB9E7] bg-clip-text text-center text-[32px] font-bold leading-[32px] text-transparent md:text-[54px] md:leading-[54px]">
                $1.999K+
              </h3>
              <p className="bg-gradient-to-l from-[#59D5E0] to-[#4CB9E7] bg-clip-text text-center text-[20px] font-semibold leading-[24px] text-transparent md:text-[24px]">
                Total Sales
              </p>
              <p className="pt-[2px] text-center text-[14px] leading-[24px] md:text-[16px]">
                Customers in various countries who already trust us as a smart
                home shopping place
              </p>
            </div>
            <div className="space-y-[10px] py-2">
              <h3 className="bg-gradient-to-l from-[#59D5E0] to-[#4CB9E7] bg-clip-text text-center text-[32px] font-bold leading-[32px] text-transparent md:text-[54px] md:leading-[54px]">
                88%+
              </h3>
              <p className="bg-gradient-to-l from-[#59D5E0] to-[#4CB9E7] bg-clip-text text-center text-[20px] font-semibold leading-[24px] text-transparent md:text-[24px]">
                Organic Sales
              </p>
              <p className="pt-[2px] text-center text-[14px] leading-[24px] md:text-[16px]">
                Top the smart home market place search with our best products
              </p>
            </div>
            <div className="space-y-[10px] py-2">
              <h3 className="bg-gradient-to-l from-[#59D5E0] to-[#4CB9E7] bg-clip-text text-center text-[32px] font-bold leading-[32px] text-transparent md:text-[54px] md:leading-[54px]">
                8+
              </h3>
              <p className="bg-gradient-to-l from-[#59D5E0] to-[#4CB9E7] bg-clip-text text-center text-[20px] font-semibold leading-[24px] text-transparent md:text-[24px]">
                Subsidiary Company
              </p>
              <p className="pt-[2px] text-center text-[14px] leading-[24px] md:text-[16px]">
                Expansion into several brands with their own characteristics and
                uniqueness
              </p>
            </div>
          </div>
        </section>
        <section>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
              type: 'bullets',
              bulletClass: `swiper-pagination-bullet ${styles['feature-pagination']}`,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
            style={{
              '--swiper-pagination-color': '#4CB9E7',
              '--swiper-pagination-bullet-inactive-color': '#ffffff',
              '--swiper-pagination-bullet-inactive-opacity': '1',
              '--swiper-pagination-bullet-size': '10px',
              '--swiper-pagination-bullet-horizontal-gap': '6px',
            }}
          >
            <SwiperSlide>
              <div className="relative min-h-[844px] bg-primary-900">
                <div className="container mx-auto py-[60px]">
                  <h2 className="text-center text-[30px] font-bold leading-[48px] text-white md:text-[40px]">
                    The Journey
                  </h2>
                  <div className="mt-0 grid w-full grid-cols-1 px-[16px] py-[16px] md:px-[40px] md:py-[24px] lg:mt-[20px] lg:grid-cols-2 lg:px-[60px] lg:py-[46px]">
                    <div className="h-full w-full">
                      <Image
                        src={'/assets/hero-image-journey.png'}
                        width={496}
                        height={414}
                        className="h-auto max-h-[414px] w-full object-cover object-center"
                        alt="journey-image"
                      />
                    </div>
                    <div className="mt-[24px] h-full w-full lg:mt-0">
                      <div className="relative flex h-full flex-col items-center justify-center space-y-[12px] lg:items-end">
                        <h2 className="mb-[11px] text-right text-[48px] font-semibold leading-[24px] text-white lg:mb-0">
                          2017
                        </h2>
                        <p className="max-w-[462px] text-center text-[16px] leading-[24px] text-white  lg:text-right">
                          Equinox Technology LLC firstly established in San
                          Francisco as a business that runs as a small commerce
                        </p>
                        <div className="absolute hidden lg:bottom-0 lg:right-0 lg:block">
                          <Image
                            src={'/assets/equinox-technology-logo-3.svg'}
                            width={212}
                            height={49}
                            alt="equinox-technology-logo"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[70px] left-1/2 -translate-x-1/2 -translate-y-1/2 lg:hidden">
                  <Image
                    src={'/assets/equinox-technology-logo-3.svg'}
                    width={212}
                    height={49}
                    alt="equinox-technology-logo"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative min-h-[844px] bg-primary-900">
                <div className="container mx-auto py-[60px]">
                  <h2 className="text-center text-[30px] font-bold leading-[48px] text-white md:text-[40px]">
                    The Journey
                  </h2>
                  <div className="mt-0 grid w-full grid-cols-1 px-[16px] py-[16px] md:px-[40px] md:py-[24px] lg:mt-[20px] lg:grid-cols-2 lg:px-[60px] lg:py-[46px]">
                    <div className="h-full w-full">
                      <Image
                        src={'/assets/hero-image-journey-2018.png'}
                        width={496}
                        height={414}
                        className="h-auto max-h-[414px] w-full object-cover object-center"
                        alt="journey-image"
                      />
                    </div>
                    <div className="mt-[24px] h-full w-full lg:mt-0">
                      <div className="relative flex h-full flex-col items-center justify-center space-y-[12px] lg:items-end">
                        <h2 className="mb-[11px] text-right text-[48px] font-semibold leading-[24px] text-white lg:mb-0">
                          2018
                        </h2>
                        <p className="max-w-[462px] text-center text-[16px] leading-[24px] text-white  lg:text-right">
                          Having a sole runner for the business, Laurent Putra,
                          started his way to gather more funds in due to expand
                          the business.
                        </p>
                        <div className="absolute hidden lg:bottom-0 lg:right-0 lg:block">
                          <Image
                            src={'/assets/equinox-technology-logo-3.svg'}
                            width={212}
                            height={49}
                            alt="equinox-technology-logo"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[70px] left-1/2 -translate-x-1/2 -translate-y-1/2 lg:hidden">
                  <Image
                    src={'/assets/equinox-technology-logo-3.svg'}
                    width={212}
                    height={49}
                    alt="equinox-technology-logo"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative min-h-[844px] bg-primary-900">
                <div className="container mx-auto py-[60px]">
                  <h2 className="text-center text-[30px] font-bold leading-[48px] text-white md:text-[40px]">
                    The Journey
                  </h2>
                  <div className="mt-0 grid w-full grid-cols-1 px-[16px] py-[16px] md:px-[40px] md:py-[24px] lg:mt-[20px] lg:grid-cols-2 lg:px-[60px] lg:py-[46px]">
                    <div className="h-full w-full">
                      <Image
                        src={'/assets/hero-image-journey-2019.png'}
                        width={496}
                        height={414}
                        className="h-auto max-h-[414px] w-full object-cover object-center"
                        alt="journey-image"
                      />
                    </div>
                    <div className="mt-[24px] h-full w-full lg:mt-0">
                      <div className="relative flex h-full flex-col items-center justify-center space-y-[12px] lg:items-end">
                        <h2 className="mb-[11px] text-right text-[48px] font-semibold leading-[24px] text-white lg:mb-0">
                          2019
                        </h2>
                        <p className="max-w-[462px] text-center text-[16px] leading-[24px] text-white  lg:text-right">
                          Having had its way in San Francisco, The company
                          decides to have its arm open to start operations in
                          Indonesia
                        </p>
                        <div className="absolute hidden lg:bottom-0 lg:right-0 lg:block">
                          <Image
                            src={'/assets/equinox-technology-logo-3.svg'}
                            width={212}
                            height={49}
                            alt="equinox-technology-logo"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[70px] left-1/2 -translate-x-1/2 -translate-y-1/2 lg:hidden">
                  <Image
                    src={'/assets/equinox-technology-logo-3.svg'}
                    width={212}
                    height={49}
                    alt="equinox-technology-logo"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative min-h-[844px] bg-primary-900">
                <div className="container mx-auto py-[60px]">
                  <h2 className="text-center text-[30px] font-bold leading-[48px] text-white md:text-[40px]">
                    The Journey
                  </h2>
                  <div className="mt-0 grid w-full grid-cols-1 px-[16px] py-[16px] md:px-[40px] md:py-[24px] lg:mt-[20px] lg:grid-cols-2 lg:px-[60px] lg:py-[46px]">
                    <div className="h-full w-full">
                      <Image
                        src={'/assets/hero-image-journey-2020.png'}
                        width={496}
                        height={414}
                        className="h-auto max-h-[414px] w-full object-cover object-center"
                        alt="journey-image"
                      />
                    </div>
                    <div className="mt-[24px] h-full w-full lg:mt-0">
                      <div className="relative flex h-full flex-col items-center justify-center space-y-[12px] lg:items-end">
                        <h2 className="mb-[11px] text-right text-[48px] font-semibold leading-[24px] text-white lg:mb-0">
                          2020
                        </h2>
                        <p className="max-w-[462px] text-center text-[16px] leading-[24px] text-white  lg:text-right">
                          The promising growth and increasing base of customers
                          made its promising for the company to expands its
                          e-commerce business, numbers of employees and brands.
                        </p>
                        <div className="absolute hidden lg:bottom-0 lg:right-0 lg:block">
                          <Image
                            src={'/assets/equinox-technology-logo-3.svg'}
                            width={212}
                            height={49}
                            alt="equinox-technology-logo"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[70px] left-1/2 -translate-x-1/2 -translate-y-1/2 lg:hidden">
                  <Image
                    src={'/assets/equinox-technology-logo-3.svg'}
                    width={212}
                    height={49}
                    alt="equinox-technology-logo"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative min-h-[844px] bg-primary-900">
                <div className="container mx-auto py-[60px]">
                  <h2 className="text-center text-[30px] font-bold leading-[48px] text-white md:text-[40px]">
                    The Journey
                  </h2>
                  <div className="mt-0 grid w-full grid-cols-1 px-[16px] py-[16px] md:px-[40px] md:py-[24px] lg:mt-[20px] lg:grid-cols-2 lg:px-[60px] lg:py-[46px]">
                    <div className="h-full w-full">
                      <Image
                        src={'/assets/hero-image-journey-2021.png'}
                        width={496}
                        height={414}
                        className="h-auto max-h-[414px] w-full object-cover object-center"
                        alt="journey-image"
                      />
                    </div>
                    <div className="mt-[24px] h-full w-full lg:mt-0">
                      <div className="relative flex h-full flex-col items-center justify-center space-y-[12px] lg:items-end">
                        <h2 className="mb-[11px] text-right text-[48px] font-semibold leading-[24px] text-white lg:mb-0">
                          2021
                        </h2>
                        <p className="max-w-[462px] text-center text-[16px] leading-[24px] text-white  lg:text-right">
                          The growth for Equinox Technology became more evident
                          internally and externally and the business in this
                          year experience high increase of employees, companies
                          functions/departments, and we have a new larger
                          office!
                        </p>
                        <div className="absolute hidden lg:bottom-0 lg:right-0 lg:block">
                          <Image
                            src={'/assets/equinox-technology-logo-3.svg'}
                            width={212}
                            height={49}
                            alt="equinox-technology-logo"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[70px] left-1/2 -translate-x-1/2 -translate-y-1/2 lg:hidden">
                  <Image
                    src={'/assets/equinox-technology-logo-3.svg'}
                    width={212}
                    height={49}
                    alt="equinox-technology-logo"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative min-h-[844px] bg-primary-900">
                <div className="container mx-auto py-[60px]">
                  <h2 className="text-center text-[30px] font-bold leading-[48px] text-white md:text-[40px]">
                    The Journey
                  </h2>
                  <div className="mt-0 grid w-full grid-cols-1 px-[16px] py-[16px] md:px-[40px] md:py-[24px] lg:mt-[20px] lg:grid-cols-2 lg:px-[60px] lg:py-[46px]">
                    <div className="h-full w-full">
                      <Image
                        src={'/assets/hero-image-journey-2022.png'}
                        width={496}
                        height={414}
                        className="h-auto max-h-[414px] w-full object-cover object-center"
                        alt="journey-image"
                      />
                    </div>
                    <div className="mt-[24px] h-full w-full lg:mt-0">
                      <div className="relative flex h-full flex-col items-center justify-center space-y-[12px] lg:items-end">
                        <h2 className="mb-[11px] text-right text-[48px] font-semibold leading-[24px] text-white lg:mb-0">
                          2022
                        </h2>
                        <p className="max-w-[462px] text-center text-[16px] leading-[24px] text-white  lg:text-right">
                          We continues to grow, welcoming many more departments
                          and employees for our businesses and move to a bigger
                          office once more.
                        </p>
                        <div className="absolute hidden lg:bottom-0 lg:right-0 lg:block">
                          <Image
                            src={'/assets/equinox-technology-logo-3.svg'}
                            width={212}
                            height={49}
                            alt="equinox-technology-logo"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[70px] left-1/2 -translate-x-1/2 -translate-y-1/2 lg:hidden">
                  <Image
                    src={'/assets/equinox-technology-logo-3.svg'}
                    width={212}
                    height={49}
                    alt="equinox-technology-logo"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative min-h-[844px] bg-primary-900">
                <div className="container mx-auto py-[60px]">
                  <h2 className="text-center text-[30px] font-bold leading-[48px] text-white md:text-[40px]">
                    The Journey
                  </h2>
                  <div className="mt-0 grid w-full grid-cols-1 px-[16px] py-[16px] md:px-[40px] md:py-[24px] lg:mt-[20px] lg:grid-cols-2 lg:px-[60px] lg:py-[46px]">
                    <div className="h-full w-full">
                      <Image
                        src={'/assets/hero-image-journey-2023.png'}
                        width={496}
                        height={414}
                        className="h-auto max-h-[414px] w-full object-cover object-center"
                        alt="journey-image"
                      />
                    </div>
                    <div className="mt-[24px] h-full w-full lg:mt-0">
                      <div className="relative flex h-full flex-col items-center justify-center space-y-[12px] lg:items-end">
                        <h2 className="mb-[11px] text-right text-[48px] font-semibold leading-[24px] text-white lg:mb-0">
                          2023
                        </h2>
                        <p className="max-w-[462px] text-center text-[16px] leading-[24px] text-white  lg:text-right">
                          Welcoming challenges and growth, the Equinox
                          Technology Company expands our business to provide
                          even more service on various fields, venturing from
                          media to floristries with dedicated team.
                        </p>
                        <div className="absolute hidden lg:bottom-0 lg:right-0 lg:block">
                          <Image
                            src={'/assets/equinox-technology-logo-3.svg'}
                            width={212}
                            height={49}
                            alt="equinox-technology-logo"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[70px] left-1/2 -translate-x-1/2 -translate-y-1/2 lg:hidden">
                  <Image
                    src={'/assets/equinox-technology-logo-3.svg'}
                    width={212}
                    height={49}
                    alt="equinox-technology-logo"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative min-h-[844px] bg-primary-900">
                <div className="container mx-auto py-[60px]">
                  <h2 className="text-center text-[30px] font-bold leading-[48px] text-white md:text-[40px]">
                    The Journey
                  </h2>
                  <div className="mt-0 grid w-full grid-cols-1 px-[16px] py-[16px] md:px-[40px] md:py-[24px] lg:mt-[20px] lg:grid-cols-2 lg:px-[60px] lg:py-[46px]">
                    <div className="h-full w-full">
                      <Image
                        src={'/assets/hero-image-journey-2024.png'}
                        width={496}
                        height={414}
                        className="h-auto max-h-[414px] w-full object-cover object-center"
                        alt="journey-image"
                      />
                    </div>
                    <div className="mt-[24px] h-full w-full lg:mt-0">
                      <div className="relative flex h-full flex-col items-center justify-center space-y-[12px] lg:items-end">
                        <h2 className="mb-[11px] text-right text-[48px] font-semibold leading-[24px] text-white lg:mb-0">
                          2024
                        </h2>
                        <p className="max-w-[462px] text-center text-[16px] leading-[24px] text-white  lg:text-right">
                          New year, New Ambitions! We are welcoming the year
                          with more employees and moving to a new office to
                          accommodate our business affairs. We are branching out
                          to new industries as part of our ambitions and are
                          preparing for our new streamline of business this
                          year.
                        </p>
                        <div className="absolute hidden lg:bottom-0 lg:right-0 lg:block">
                          <Image
                            src={'/assets/equinox-technology-logo-3.svg'}
                            width={212}
                            height={49}
                            alt="equinox-technology-logo"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[70px] left-1/2 -translate-x-1/2 -translate-y-1/2 lg:hidden">
                  <Image
                    src={'/assets/equinox-technology-logo-3.svg'}
                    width={212}
                    height={49}
                    alt="equinox-technology-logo"
                  />
                </div>
              </div>
            </SwiperSlide>
            <div
              className="absolute bottom-4 right-4 z-10  flex h-12 w-12 items-center justify-center font-bold text-[#59D5E0]"
              slot="container-end"
            >
              <svg
                viewBox="0 0 48 48"
                ref={progressCircle}
                className="absolute left-0 top-0 z-10 h-full w-full rotate-90 transform fill-none stroke-[#59D5E0] stroke-[4px] text-blue-500"
                style={{
                  strokeDashoffset: 'calc(125.6 * (1 - var(--progress)))',
                  strokeDasharray: '125.6',
                }}
              >
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </section>
        <section className="container mx-auto px-4 py-6 lg:py-[80px]">
          <h2 className="text-center text-[30px] font-bold leading-[48px] md:text-[40px]">
            Company Structure
          </h2>
          <div className="mt-[42px] grid gap-y-[24px] lg:space-y-[42px]">
            <div className="grid grid-cols-1 justify-items-center">
              <div className="h-fit w-full">
                <p className="text-center text-[18px] font-semibold leading-[27.9px]">
                  Laurent Putra
                </p>
                <p className="text-center text-[16px] font-light leading-[28px]">
                  CEO
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-[40px] space-y-[24px] md:grid-cols-2 lg:grid-cols-4 lg:space-y-0">
              <div className="h-full w-full">
                <p className="text-center text-[18px] font-semibold leading-[27.9px]">
                  Ian
                </p>
                <p className="text-center text-[16px] font-light leading-[28px]">
                  General Manager & Creative
                </p>
              </div>
              <div className="h-full w-full">
                <p className="text-center text-[18px] font-semibold leading-[27.9px]">
                  Tiara
                </p>
                <p className="text-center text-[16px] font-light leading-[28px]">
                  Human Resource
                </p>
              </div>
              <div className="h-full w-full">
                <p className="text-center text-[18px] font-semibold leading-[27.9px]">
                  Diego
                </p>
                <p className="text-center text-[16px] font-light leading-[28px]">
                  Business Development
                </p>
              </div>
              <div className="h-full w-full">
                <p className="text-center text-[18px] font-semibold leading-[27.9px]">
                  Irene
                </p>
                <p className="text-center text-[16px] font-light leading-[28px]">
                  Purchasing
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-[40px] space-y-[24px] md:grid-cols-2 lg:grid-cols-4 lg:space-y-0">
              <div className="h-full w-full">
                <p className="text-center text-[18px] font-semibold leading-[27.9px]">
                  Wanti
                </p>
                <p className="text-center text-[16px] font-light leading-[28px]">
                  FInance
                </p>
              </div>
              <div className="h-full w-full">
                <p className="text-center text-[18px] font-semibold leading-[27.9px]">
                  Ermy
                </p>
                <p className="text-center text-[16px] font-light leading-[28px]">
                  Web Developer
                </p>
              </div>
              <div className="h-full w-full">
                <p className="text-center text-[18px] font-semibold leading-[27.9px]">
                  Rifqi & Andrew
                </p>
                <p className="text-center text-[16px] font-light leading-[28px]">
                  Copywriter
                </p>
              </div>
              <div className="h-full w-full">
                <p className="text-center text-[18px] font-semibold leading-[27.9px]">
                  Rayhan
                </p>
                <p className="text-center text-[16px] font-light leading-[28px]">
                  SEO
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 justify-items-center">
              <p className="text-center text-[18px] font-semibold leading-[27.9px]">
                Alfianto
              </p>
              <p className="text-center text-[16px] font-light leading-[28px]">
                CRM
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col space-y-[42px]">
          <div className="container mx-auto px-4">
            <h2 className="mb-3 text-center text-[40px] font-bold leading-[48px]">
              Our Brands
            </h2>
            <div className="flex w-full justify-center">
              <p className="max-w-[936px] text-center text-[18px] leading-[27.9px]">
                In this fast-moving world,  we aim to make the world a better
                place to live in. We are determined to expand our brands across
                the continents while providing the best user experience for our
                customers.
              </p>
            </div>
          </div>
          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('sohnne')}
                  onMouseLeave={() => handleMouseLeave('sohnne')}
                >
                  <Image
                    src={'/assets/cover-sohnne.png'}
                    width={460}
                    height={576}
                    className="h-auto w-full object-cover object-center"
                    alt="sohnne-cover-image"
                  />
                  <div className="absolute inset-0 w-full bg-gradient-to-b from-[#66666600] to-[#000000CC]">
                    <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center px-[31.5px] text-center">
                      <Image
                        src={'/assets/logo-sohnne.svg'}
                        width={200}
                        height={80}
                        alt="sohnne-logo"
                      />
                      <p className="mt-[32px] max-w-[297px] text-center text-white">
                        Sohnne, born in the heart of San Francisco, redefines
                        the essence of furniture and lifestyle. With a core
                        belief that designer furniture is a right, not a
                        privilege, we unite a team of expert engineers,
                        innovative architects, and imaginative designers.
                      </p>
                      <a
                        href="https://sohnne.com"
                        className={`absolute flex items-center gap-x-[12px] text-[#4CB9E7] transition-all ${hoverStates.sohnne ? 'bottom-[47px]' : 'bottom-[-47px]'}`}
                      >
                        <p>View more</p>
                        <span>
                          <FaArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('enigwatch')}
                  onMouseLeave={() => handleMouseLeave('enigwatch')}
                >
                  <Image
                    src={'/assets/cover-enigwatch.png'}
                    width={460}
                    height={576}
                    className="h-auto w-full object-cover object-center"
                    alt="enigwatch-cover-image"
                  />
                  <div className="absolute inset-0 w-full bg-gradient-to-b from-[#66666600] to-[#000000CC]">
                    <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center px-[31.5px] text-center">
                      <Image
                        src={'/assets/logo-enigwatch.svg'}
                        width={200}
                        height={80}
                        alt="enigwatch-logo"
                      />
                      <p className="mt-[32px] max-w-[297px] text-center text-white">
                        As a company, Enigwatch has spent the preceding three
                        decades perfecting its wares via meticulous planning,
                        precise execution, the use of only the highest quality
                        materials, and an exceptional eye for aesthetics.
                      </p>
                      <a
                        href="https://enigwatch.com"
                        className={`absolute flex items-center gap-x-[12px] text-[#4CB9E7] transition-all ${hoverStates.enigwatch ? 'bottom-[47px]' : 'bottom-[-47px]'}`}
                      >
                        <p>View more</p>
                        <span>
                          <FaArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('artdigest')}
                  onMouseLeave={() => handleMouseLeave('artdigest')}
                >
                  <Image
                    src={'/assets/cover-artdigest.png'}
                    width={460}
                    height={576}
                    className="h-auto w-full object-cover object-center"
                    alt="artdigest-cover-image"
                  />
                  <div className="absolute inset-0 w-full bg-gradient-to-b from-[#66666600] to-[#000000CC]">
                    <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center px-[31.5px] text-center">
                      <Image
                        src={'/assets/logo-artdigest.svg'}
                        width={200}
                        height={80}
                        alt="artdigest-logo"
                      />
                      <p className="mt-[32px] max-w-[297px] text-center text-white">
                        Designed with the idea that a house & office should be
                        comfortable and expressive. All of our goods are
                        expertly crafted and put through stringent quality
                        testing. The luxury home décor brand Artdigest promises
                        a concept that finds a balance between artistic
                        expression and superior functionality.
                      </p>
                      <a
                        href="https://artdigest.co"
                        className={`absolute flex items-center gap-x-[12px] text-[#4CB9E7] transition-all ${hoverStates.artdigest ? 'bottom-[47px]' : 'bottom-[-47px]'}`}
                      >
                        <p>View more</p>
                        <span>
                          <FaArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('koizuma')}
                  onMouseLeave={() => handleMouseLeave('koizuma')}
                >
                  <Image
                    src={'/assets/cover-koizuma.png'}
                    width={460}
                    height={576}
                    className="h-auto w-full object-cover object-center"
                    alt="koizuma-cover-image"
                  />
                  <div className="absolute inset-0 w-full bg-gradient-to-b from-[#66666600] to-[#000000CC]">
                    <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center px-[31.5px] text-center">
                      <Image
                        src={'/assets/logo-koizuma.svg'}
                        width={200}
                        height={80}
                        alt="koizuma-logo"
                      />
                      <p className="mt-[32px] max-w-[297px] text-center text-white">
                        Koizuma is a brand dedicated to supporting all women's
                        beauty. Our mission is to help every woman feel
                        confident and beautiful in her own skin. We are
                        passionate about designing devices that grant women
                        their wish for smooth, hair-free skin.
                      </p>
                      <a
                        href="https://koizuma.com"
                        className={`absolute flex items-center gap-x-[12px] text-[#4CB9E7] transition-all ${hoverStates.koizuma ? 'bottom-[47px]' : 'bottom-[-47px]'}`}
                      >
                        <p>View more</p>
                        <span>
                          <FaArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('millionbloom')}
                  onMouseLeave={() => handleMouseLeave('millionbloom')}
                >
                  <Image
                    src={'/assets/cover-million-bloom.png'}
                    width={460}
                    height={576}
                    className="h-auto w-full object-cover object-center"
                    alt="koizuma-cover-image"
                  />
                  <div className="absolute inset-0 w-full bg-gradient-to-b from-[#66666600] to-[#000000CC]">
                    <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center px-[31.5px] text-center">
                      <Image
                        src={'/assets/logo-million-bloom.svg'}
                        width={200}
                        height={80}
                        alt="million-bloom-logo"
                      />
                      <p className="mt-[32px] max-w-[297px] text-center text-white">
                        Armed with her knowledge and resources, Olivia Kurniawan
                        founded The Million Bloom Indonesia in 2022. She is
                        determined to create superior quality, long-lasting
                        fresh flowers, fast delivery at a friendly price.
                      </p>
                      <a
                        href="https://millionbloom.com"
                        className={`absolute flex items-center gap-x-[12px] text-[#4CB9E7] transition-all ${hoverStates.millionbloom ? 'bottom-[47px]' : 'bottom-[-47px]'}`}
                      >
                        <p>View more</p>
                        <span>
                          <FaArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('expert')}
                  onMouseLeave={() => handleMouseLeave('expert')}
                >
                  <Image
                    src={'/assets/cover-10-expert.png'}
                    width={460}
                    height={576}
                    className="h-auto w-full object-cover object-center"
                    alt="koizuma-cover-image"
                  />
                  <div className="absolute inset-0 w-full bg-gradient-to-b from-[#66666600] to-[#000000CC]">
                    <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center px-[31.5px] text-center">
                      <Image
                        src={'/assets/logo-10-expert.svg'}
                        width={200}
                        height={80}
                        alt="10-expert-logo"
                      />
                      <p className="mt-[32px] max-w-[297px] text-center text-white">
                        At 10Expert, our primary mission is to help shoppers
                        navigate the internet in the most informed and
                        cost-effective way. Our team of experienced journalists
                        and product experts has developed a rigorous testing
                        process to identify the most reliable and useful
                        products available. 
                      </p>
                      <a
                        href="https://10expert.com"
                        className={`absolute flex items-center gap-x-[12px] text-[#4CB9E7] transition-all ${hoverStates.expert ? 'bottom-[47px]' : 'bottom-[-47px]'}`}
                      >
                        <p>View more</p>
                        <span>
                          <FaArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('tph')}
                  onMouseLeave={() => handleMouseLeave('tph')}
                >
                  <Image
                    src={'/assets/cover-tph.png'}
                    width={460}
                    height={576}
                    className="h-auto w-full object-cover object-center"
                    alt="koizuma-cover-image"
                  />
                  <div className="absolute inset-0 w-full bg-gradient-to-b from-[#66666600] to-[#000000CC]">
                    <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center px-[31.5px] text-center">
                      <Image
                        src={'/assets/logo-tph.svg'}
                        width={200}
                        height={80}
                        alt="tph-logo"
                      />
                      <p className="mt-[32px] max-w-[297px] text-center text-white">
                        Joseph, an architect with an eye for minimalist
                        elegance, and Elizabeth, an environmental scientist with
                        a passion for sustainable practices, met during a
                        community project focused on eco-friendly housing. Their
                        connection was instant, both personally and
                        professionally.
                      </p>
                      <a
                        href="https://thepanelhub.com"
                        className={`absolute flex items-center gap-x-[12px] text-[#4CB9E7] transition-all ${hoverStates.tph ? 'bottom-[47px]' : 'bottom-[-47px]'}`}
                      >
                        <p>View more</p>
                        <span>
                          <FaArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('eternity')}
                  onMouseLeave={() => handleMouseLeave('eternity')}
                >
                  <Image
                    src={'/assets/cover-eternity-flower.png'}
                    width={460}
                    height={576}
                    className="h-auto w-full object-cover object-center"
                    alt="koizuma-cover-image"
                  />
                  <div className="absolute inset-0 w-full bg-gradient-to-b from-[#66666600] to-[#000000CC]">
                    <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center px-[31.5px] text-center">
                      <Image
                        src={'/assets/logo-eternity-flower.svg'}
                        width={200}
                        height={80}
                        alt="eternity-flower-logo"
                      />
                      <p className="mt-[32px] max-w-[297px] text-center text-white">
                        Joseph, an architect with an eye for minimalist
                        elegance, and Elizabeth, an environmental scientist with
                        a passion for sustainable practices, met during a
                        community project focused on eco-friendly housing. Their
                        connection was instant, both personally and
                        professionally.
                      </p>
                      <a
                        href="https://eternityflower.com"
                        className={`absolute flex items-center gap-x-[12px] text-[#4CB9E7] transition-all ${hoverStates.eternity ? 'bottom-[47px]' : 'bottom-[-47px]'}`}
                      >
                        <p>View more</p>
                        <span>
                          <FaArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('vertu')}
                  onMouseLeave={() => handleMouseLeave('vertu')}
                >
                  <Image
                    src={'/assets/cover-vertu-living.png'}
                    width={460}
                    height={576}
                    className="h-auto w-full object-cover object-center"
                    alt="koizuma-cover-image"
                  />
                  <div className="absolute inset-0 w-full bg-gradient-to-b from-[#66666600] to-[#000000CC]">
                    <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center px-[31.5px] text-center">
                      <Image
                        src={'/assets/logo-vertu-living.svg'}
                        width={200}
                        height={80}
                        alt="vertu-living-logo"
                      />
                      <p className="mt-[32px] max-w-[297px] text-center text-white">
                        Joseph, an architect with an eye for minimalist
                        elegance, and Elizabeth, an environmental scientist with
                        a passion for sustainable practices, met during a
                        community project focused on eco-friendly housing. Their
                        connection was instant, both personally and
                        professionally.
                      </p>
                      <a
                        href="https://vertuliving.com"
                        className={`absolute flex items-center gap-x-[12px] text-[#4CB9E7] transition-all ${hoverStates.vertu ? 'bottom-[47px]' : 'bottom-[-47px]'}`}
                      >
                        <p>View more</p>
                        <span>
                          <FaArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className="container mx-auto space-y-[42px] px-4 py-6 md:px-[40px] md:py-[40px] lg:py-[80px]">
          <h2 className="text-center text-[40px] font-bold leading-[48px]">
            Contact Us
          </h2>
          <p className="text-center text-[18px] leading-[27.9px]">
            Let your visitors know how to reach out to you, or learn more about
            a product or service. If you add a button, link it to your preferred
            email address.
          </p>
          <div className="grid grid-cols-1 gap-x-[32px] gap-y-6 md:grid-cols-2 lg:gap-y-0">
            <div className="flex w-fit flex-col items-center gap-y-2 rounded-[20px] bg-white px-4 py-6 shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)] md:justify-self-end">
              <BiPhone size={60} className="text-secondary-500" />
              <p className="text-[18px] font-semibold leading-[27.9px]">
                Call us at
              </p>
              <div className="flex flex-row items-center gap-x-1">
                <p className="text-center text-[15px] font-light leading-[27.9px] lg:max-w-[392px]">
                  Interested work in Equinox? Just pick up the phone to chat
                  with a human resource (HR) team.
                </p>
              </div>
              <Link href="tel:+628113000800">
                <button className="rounded-[40px] bg-gradient-to-l from-primary-500 to-secondary-500 px-[24px] py-[8px] text-white">
                  Call us
                </button>
              </Link>
            </div>
            <div className="flex w-fit flex-col items-center gap-y-2 rounded-[20px] bg-white px-4 py-6 shadow-[0_4px_10px_0px_rgba(0,0,0,0.15)]">
              <MdMailOutline size={60} className="text-secondary-500" />
              <p className="text-[18px] font-semibold leading-[27.9px]">
                Contact
              </p>
              <div className="flex flex-row items-center gap-x-1">
                <p className="text-center text-[15px] font-light leading-[27.9px] lg:max-w-[392px]">
                  Sometimes you need a little help from your friends. Or would
                  like to enquire about job opportunities. I’m here.
                </p>
              </div>
              <Link href="/contact">
                <button className="rounded-[40px] bg-gradient-to-l from-primary-500 to-secondary-500 px-[24px] py-[8px] text-white">
                  Email us
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
