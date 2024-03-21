'use client';

import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaLinkedin } from 'react-icons/fa6';
import { FiPhone } from 'react-icons/fi';
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
            className="h-[676px] w-full object-cover object-center"
          />
          <div className="absolute inset-0 mt-[80px] h-[676px] w-full bg-gradient-to-l from-[#66666600] to-[#0000009E]">
            <div className="absolute inset-0 flex h-[676px] w-full items-center justify-start text-start">
              <div className="container mx-auto w-full space-y-8">
                <div className="w-full space-y-[24px] px-4 lg:w-1/2 lg:px-0">
                  <h1 className="text-center text-[30px] font-bold leading-[48px] text-white md:text-[40px] lg:text-start">
                    Innovating Goods for The <br />
                    <span className="text-secondary-500">Greater Good</span>
                  </h1>
                  <p className="font-regular text-center text-[20px] leading-[27.9px] text-white lg:text-start">
                    Our talent assessments screen and identify the best
                    candidates and make your hiring decisions faster, easier,
                    and bias-free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h-full w-full space-y-3 px-4 py-6 lg:px-0 lg:py-[40px]">
          <h2 className="text-center text-[40px] font-bold leading-[27.9px]">
            Equinox Technology LLC
          </h2>
          <p className="text-medium flex justify-center text-center text-[18px] leading-[27.9px]">
            We think big, start small, and move fast! A small team passionate
            about retail and technology
          </p>
        </section>
        <section className="container mx-auto flex flex-row py-[80px]">
          <div className="flex w-1/2 flex-col justify-center space-y-6">
            <h2 className="text-[40px] font-semibold leading-[27.9px]">
              About
            </h2>
            <p>
              Equinox Technology is a dynamic retail & SaaS enterprise,
              spearheading innovation in the e-commerce retail space.
              Specializing in a diverse range of products including home &
              garden essentials, cutting-edge electronics, and exquisite art
              pieces, we are committed to enriching the online shopping
              experience for our customers.
            </p>
            <button className="w-fit rounded-[40px] bg-gradient-to-l from-[#59D5E0] to-[#4CB9E7] px-6 py-[6px] text-[18px] text-white">
              <a href="/about">See more</a>
            </button>
          </div>
          <div className="w-1/2">
            <Image
              src={'/assets/about-image.png'}
              width={646}
              height={400}
              alt="about-image"
              className="h-auto w-full rounded-[20px] object-cover object-center"
            />
          </div>
        </section>
        <section className="container mx-auto flex flex-col py-[80px]">
          <p className="text-center text-[18px] font-medium leading-[27.9px]">
            Where Innovation Meets Craftsmanship in the Furniture Industry!
          </p>
          <h2 className="text-center text-[40px] font-bold leading-[48px]">
            Work that touches the lives of millions
          </h2>
          <div className="mt-[42px] grid grid-cols-3 gap-x-[24px]">
            <div className="py-2">
              <h3 className="bg-gradient-to-l from-[#59D5E0] to-[#4CB9E7] bg-clip-text text-center text-[54px] font-bold leading-[54px] text-transparent">
                $1.999K+
              </h3>
              <p className="bg-gradient-to-l from-[#59D5E0] to-[#4CB9E7] bg-clip-text text-center text-[24px] font-semibold leading-[24px] text-transparent">
                Total Sales
              </p>
              <p className="text-center leading-[24px]">
                of organizations using talent assessment tests saw a reduction
                in mis-hires
              </p>
            </div>
            <div className="py-2">
              <h3 className="bg-gradient-to-l from-[#59D5E0] to-[#4CB9E7] bg-clip-text text-center text-[54px] font-bold leading-[54px] text-transparent">
                88%+
              </h3>
              <p className="bg-gradient-to-l from-[#59D5E0] to-[#4CB9E7] bg-clip-text text-center text-[24px] font-semibold leading-[24px] text-transparent">
                Organic Sales
              </p>
              <p className="text-center leading-[24px]">
                of organizations using talent assessment tools reported a
                reduction in cost-to-hire
              </p>
            </div>
            <div className="py-2">
              <h3 className="bg-gradient-to-l from-[#59D5E0] to-[#4CB9E7] bg-clip-text text-center text-[54px] font-bold leading-[54px] text-transparent">
                8+
              </h3>
              <p className="bg-gradient-to-l from-[#59D5E0] to-[#4CB9E7] bg-clip-text text-center text-[24px] font-semibold leading-[24px] text-transparent">
                Subsidiary Company
              </p>
              <p className="text-center leading-[24px]">
                of candidates said they prefer a hiring process that includes
                talent assessment tests
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
              <div className="bg-primary-900">
                <div className="container mx-auto py-[60px]">
                  <h2 className="text-center text-[40px] font-bold leading-[48px] text-white">
                    The Journey
                  </h2>
                  <div className="mt-[20px] grid w-full grid-cols-2 px-[60px] py-[46px]">
                    <div className="h-full w-full">
                      <Image
                        src={'/assets/hero-image-journey.png'}
                        width={496}
                        height={414}
                        className="h-auto w-full"
                        alt="journey-image"
                      />
                    </div>
                    <div className="h-full w-full">
                      <div className="relative flex h-full flex-col items-end justify-center space-y-[12px]">
                        <h2 className="text-right text-[48px] font-semibold leading-[24px] text-white">
                          2017
                        </h2>
                        <p className="max-w-[462px] text-right text-[16px] leading-[24px] text-white">
                          Equinox Technology LLC firstly established in San
                          Francisco as a business that runs as a small commerce
                        </p>
                        <div className="absolute bottom-0 right-0">
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
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-primary-900">
                <div className="container mx-auto py-[60px]">
                  <h2 className="text-center text-[40px] font-bold leading-[48px] text-white">
                    The Journey
                  </h2>
                  <div className="mt-[20px] grid w-full grid-cols-2 px-[60px] py-[46px]">
                    <div className="h-full w-full">
                      <Image
                        src={'/assets/hero-image-journey-2018.png'}
                        width={496}
                        height={414}
                        className="h-auto w-full"
                        alt="journey-image"
                      />
                    </div>
                    <div className="h-full w-full">
                      <div className="relative flex h-full flex-col items-end justify-center space-y-[12px]">
                        <h2 className="text-right text-[48px] font-semibold leading-[24px] text-white">
                          2018
                        </h2>
                        <p className="max-w-[462px] text-right text-[16px] leading-[24px] text-white">
                          Having a sole runner for the business, Laurent Putra,
                          started his way to gather more funds in due to expand
                          the business.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-primary-900">
                <div className="container mx-auto py-[60px]">
                  <h2 className="text-center text-[40px] font-bold leading-[48px] text-white">
                    The Journey
                  </h2>
                  <div className="mt-[20px] grid w-full grid-cols-2 px-[60px] py-[46px]">
                    <div className="h-full w-full">
                      <Image
                        src={'/assets/hero-image-journey-2019.png'}
                        width={496}
                        height={414}
                        className="h-auto w-full"
                        alt="journey-image"
                      />
                    </div>
                    <div className="h-full w-full">
                      <div className="relative flex h-full flex-col items-end justify-center space-y-[12px]">
                        <h2 className="text-right text-[48px] font-semibold leading-[24px] text-white">
                          2019
                        </h2>
                        <p className="max-w-[462px] text-right text-[16px] leading-[24px] text-white">
                          Having had its way in San Francisco, The company
                          decides to have its arm open to start operations in
                          Indonesia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-primary-900">
                <div className="container mx-auto py-[60px]">
                  <h2 className="text-center text-[40px] font-bold leading-[48px] text-white">
                    The Journey
                  </h2>
                  <div className="mt-[20px] grid w-full grid-cols-2 px-[60px] py-[46px]">
                    <div className="h-full w-full">
                      <Image
                        src={'/assets/hero-image-journey-2020.png'}
                        width={496}
                        height={414}
                        className="h-auto w-full"
                        alt="journey-image"
                      />
                    </div>
                    <div className="h-full w-full">
                      <div className="relative flex h-full flex-col items-end justify-center space-y-[12px]">
                        <h2 className="text-right text-[48px] font-semibold leading-[24px] text-white">
                          2020
                        </h2>
                        <p className="max-w-[462px] text-right text-[16px] leading-[24px] text-white">
                          The promising growth and increasing base of customers
                          made its promising for the company to expands its
                          e-commerce business, numbers of employees and brands.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-primary-900">
                <div className="container mx-auto py-[60px]">
                  <h2 className="text-center text-[40px] font-bold leading-[48px] text-white">
                    The Journey
                  </h2>
                  <div className="mt-[20px] grid w-full grid-cols-2 px-[60px] py-[46px]">
                    <div className="h-full w-full">
                      <Image
                        src={'/assets/hero-image-journey.png'}
                        width={496}
                        height={414}
                        className="h-auto w-full"
                        alt="journey-image"
                      />
                    </div>
                    <div className="h-full w-full">
                      <div className="relative flex h-full flex-col items-end justify-center space-y-[12px]">
                        <h2 className="text-right text-[48px] font-semibold leading-[24px] text-white">
                          2021
                        </h2>
                        <p className="max-w-[462px] text-right text-[16px] leading-[24px] text-white">
                          The growth for Equinox Technology became more evident
                          internally and externally and the business in this
                          year experience high increase of employees, companies
                          functions/departments, and we have a new larger
                          office!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-primary-900">
                <div className="container mx-auto py-[60px]">
                  <h2 className="text-center text-[40px] font-bold leading-[48px] text-white">
                    The Journey
                  </h2>
                  <div className="mt-[20px] grid w-full grid-cols-2 px-[60px] py-[46px]">
                    <div className="h-full w-full">
                      <Image
                        src={'/assets/hero-image-journey-2022.png'}
                        width={496}
                        height={414}
                        className="h-auto w-full"
                        alt="journey-image"
                      />
                    </div>
                    <div className="h-full w-full">
                      <div className="relative flex h-full flex-col items-end justify-center space-y-[12px]">
                        <h2 className="text-right text-[48px] font-semibold leading-[24px] text-white">
                          2022
                        </h2>
                        <p className="max-w-[462px] text-right text-[16px] leading-[24px] text-white">
                          We continues to grow, welcoming many more departments
                          and employees for our businesses and move to a bigger
                          office once more.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-primary-900">
                <div className="container mx-auto py-[60px]">
                  <h2 className="text-center text-[40px] font-bold leading-[48px] text-white">
                    The Journey
                  </h2>
                  <div className="mt-[20px] grid w-full grid-cols-2 px-[60px] py-[46px]">
                    <div className="h-full w-full">
                      <Image
                        src={'/assets/hero-image-journey-2023.png'}
                        width={496}
                        height={414}
                        className="h-auto w-full"
                        alt="journey-image"
                      />
                    </div>
                    <div className="h-full w-full">
                      <div className="relative flex h-full flex-col items-end justify-center space-y-[12px]">
                        <h2 className="text-right text-[48px] font-semibold leading-[24px] text-white">
                          2023
                        </h2>
                        <p className="max-w-[462px] text-right text-[16px] leading-[24px] text-white">
                          Welcoming challenges and growth, the Equinox
                          Technology Company expands our business to provide
                          even more service on various fields, venturing from
                          media to floristries with dedicated team.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-primary-900">
                <div className="container mx-auto py-[60px]">
                  <h2 className="text-center text-[40px] font-bold leading-[48px] text-white">
                    The Journey
                  </h2>
                  <div className="mt-[20px] grid w-full grid-cols-2 px-[60px] py-[46px]">
                    <div className="h-full w-full">
                      <Image
                        src={'/assets/hero-image-journey-2024.png'}
                        width={496}
                        height={414}
                        className="h-auto w-full"
                        alt="journey-image"
                      />
                    </div>
                    <div className="h-full w-full">
                      <div className="relative flex h-full flex-col items-end justify-center space-y-[12px]">
                        <h2 className="text-right text-[48px] font-semibold leading-[24px] text-white">
                          2024
                        </h2>
                        <p className="max-w-[462px] text-right text-[16px] leading-[24px] text-white">
                          New year, New Ambitions! We are welcoming the year
                          with more employees and moving to a new office to
                          accommodate our business affairs. We are branching out
                          to new industries as part of our ambitions and are
                          preparing for our new streamline of business this
                          year.
                        </p>
                      </div>
                    </div>
                  </div>
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
        <section className="container mx-auto py-[80px]">
          <h2 className="text-center text-[40px] font-bold leading-[48px]">
            Company Structure
          </h2>
          <div className="mt-[42px] grid grid-rows-4 space-y-[42px]">
            <div className="grid grid-cols-1 justify-items-center">
              <div className="h-full w-full">
                <p className="text-center text-[18px] font-semibold leading-[27.9px]">
                  Laurent Putra
                </p>
                <p className="text-center text-[16px] font-light leading-[28px]">
                  CEO
                </p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-x-[40px]">
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
            <div className="grid grid-cols-4 gap-x-[40px]">
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
          <div className="container mx-auto">
            <h2 className="text-center text-[40px] font-bold leading-[48px]">
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
              slidesPerView={4}
              spaceBetween={0}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
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
                    className="h-auto w-full object-cover object-center "
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
        <section className="container mx-auto space-y-[42px] py-[80px]">
          <h2 className="text-center text-[40px] font-bold leading-[48px]">
            Contact Us
          </h2>
          <p className="text-center text-[18px] leading-[27.9px]">
            Let your visitors know how to reach out to you, or learn more about
            a product or service. If you add a button, link it to your preferred
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
    </Layout>
  );
}
