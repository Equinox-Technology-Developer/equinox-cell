'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  CapitalizeHeading,
  HeroBanner,
  JobCategories,
  JobList,
  SearchJobs,
} from '@/components/page';

import { getAllJob } from '@/lib/jobs/page';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './Career.module.scss';
import Layout from '@/components/Layout/page';

const departments = [
  {
    division: 'Marketing & Content Writer',
    imageUrl: '/assets/Deparment Marketing 2.png',
  },
  {
    division: 'Design & UX',
    imageUrl: '/assets/Department Design & UX.png',
  },
  {
    division: 'Full Stack Developer',
    imageUrl: '/assets/Department Web Developer.png',
  },
  {
    division: 'Ads, Affiliates & Social Media',
    imageUrl: '/assets/Department Ads Affiliate.png',
  },
  {
    division: 'MHuman Capital & Talent Acquisition',
    imageUrl: '/assets/Department HRD.png',
  },
  {
    division: 'Customer Relationship Management (CRM)',
    imageUrl: '/assets/Department CRM.png',
  },
  {
    division: 'Purchasing',
    imageUrl: '/assets/Department Purchasing.png',
  },
  {
    division: 'Finance',
    imageUrl: '/assets/Deparment Finance.png',
  },
];
const testimonialHR = [
  {
    name: 'Jerome Bell',
    testimonial: `“Lorem ipsum dolor sit amet consectetur. Sapien viverra in
    faucibus scelerisque platea ullamcorper donec gravida.
    Pharetra convallis commodo a porta. Mattis nulla morbi arcu
    sagittis auctor malesuada sit sapien. Lacus quis tempor
    sapien porttitor viverra placerat.”`,
    position: 'Regional Head of Human Resource',
    imgUrl: '/assets/Tiara.png',
  },
  {
    name: 'Jerome Bell',
    testimonial: `“Lorem ipsum dolor sit amet consectetur. Sapien viverra in
    faucibus scelerisque platea ullamcorper donec gravida.
    Pharetra convallis commodo a porta. Mattis nulla morbi arcu
    sagittis auctor malesuada sit sapien. Lacus quis tempor
    sapien porttitor viverra placerat.”`,
    position: 'Regional Head of Human Resource',
    imgUrl: '/assets/Tiara.png',
  },
  {
    name: 'Tiara',
    testimonial: `“Having to work for Equinox Technology has had a big impact
    on my career. Aside from the benefits that it offers for me,
    I have plenty of opportunities to learn from business
    practices to industry niches. I started here as part of the
    copywriting team, however as my career progresses, now I
    have a seat as a manager for the Human Resources Department.
    This was all due to all the support I experienced from the
    Equinox Family and Team. The supportive environment is very
    important.”`,
    position: 'Regional Head of Human Resource',
    imgUrl: '/assets/Tiara.png',
  },
  {
    name: 'Tiara',
    testimonial: `“Having to work for Equinox Technology has had a big impact
    on my career. Aside from the benefits that it offers for me,
    I have plenty of opportunities to learn from business
    practices to industry niches. I started here as part of the
    copywriting team, however as my career progresses, now I
    have a seat as a manager for the Human Resources Department.
    This was all due to all the support I experienced from the
    Equinox Family and Team. The supportive environment is very
    important.”`,
    position: 'Regional Head of Human Resource',
    imgUrl: '/assets/Tiara.png',
  },
];

const Career = () => {
  const Jobs = getAllJob();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOptions, setFilterOptions] = useState({
    division: [],
    staff_level: [],
    location: [],
  });

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchQuery('');
    setFilterOptions({ division: [], staff_level: [], location: [] });
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const uniqueValues = (key) => [...new Set(Jobs.map((job) => job[key]))];

  const filteredJobs = Jobs.filter(
    (job) =>
      (selectedCategory ? job.division === selectedCategory : true) &&
      (searchQuery
        ? job.name.toLowerCase().includes(searchQuery.toLowerCase())
        : true) &&
      (filterOptions.division.length === 0 ||
        filterOptions.division.includes(job.division)) &&
      (filterOptions.staff_level.length === 0 ||
        filterOptions.staff_level.includes(job.staff_level)) &&
      (filterOptions.location.length === 0 ||
        filterOptions.location.includes(job.location)),
  );

  const showAllButton = filteredJobs.length > 9;

  return (
    <>
      <Layout>
        {/* Banner Hero Career Page */}
        <HeroBanner
          title={
            <span style={{ color: '#ffffff' }}>
              Accelerate Your Career with Us:{' '}
              <span style={{ color: '#59D5E0' }}>
                {' '}
                Fast Track, Big Bonuses, and Elite Benefits
              </span>
              <span style={{ color: '#ffffff' }}>
                {' '}
                Await Exceptional Talent!
              </span>
            </span>
          }
          subtitle="We're on the constant run to achieve great things and we'd love for you to be a part of that journey with us!"
          imageUrl={'/assets/hero-image-career.png'}
          gradient={'bottom'}
        />

        {/* Career Page Content */}
        <section className="w-full">
          <div className="container mx-auto flex w-full flex-col items-center justify-center gap-11 px-16 py-20">
            <CapitalizeHeading className>
              find your dream job!
            </CapitalizeHeading>
            <SearchJobs
              searchQuery={searchQuery}
              handleSearchInputChange={handleSearchInputChange}
            />
            <JobCategories
              categories={[...uniqueValues('division')]}
              selectedCategory={selectedCategory}
              handleCategoryClick={handleCategoryClick}
            />
            <JobList jobs={filteredJobs} /> {/* Use JobList component */}
            {showAllButton && (
              <Link href="/career/career-filtered">
                <button
                  className="mt-4 max-w-[101px] rounded-[81.5px] border border-secondary-500 bg-white px-3 py-[6px] text-secondary-500 transition-all duration-300 ease-in-out hover:bg-secondary-500 hover:text-white"
                  onClick={() => setSelectedCategory('')}
                >
                  Show All
                </button>
              </Link>
            )}
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full">
          <div className="container mx-auto justify-center gap-11 pb-16">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              loop={true}
              loopFillGroupWithBlank={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              modules={[Navigation, Pagination]}
              className={`${styles.swiperContainer}`}
              style={{
                '--swiper-pagination-color': '#4CB9E7',
                '--swiper-pagination-bullet-inactive-color': '#4CB9E766',
                '--swiper-pagination-bullet-inactive-opacity': '1',
                '--swiper-pagination-bullet-size': '14px',
                '--swiper-pagination-bullet-horizontal-gap': '6px',
              }}
            >
              {testimonialHR.map((testimonial, index) => (
                <SwiperSlide key={index} className="career-slide-testimonial">
                  <div className={styles.testimonialCard}>
                    <p>
                      <i>{testimonial.testimonial}</i>
                    </p>
                    <div className="flex flex-col items-center gap-1">
                      <Image
                        src={testimonial.imgUrl}
                        width={40}
                        height={40}
                        radius={100}
                        alt={`${testimonial.name} Profile Picture`}
                      />
                      <h3>{testimonial.name}</h3>
                      <p>{testimonial.position}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Department of Equinox Technology Section */}
        <section className="flex w-full flex-col items-center gap-8 py-20">
          <div className="container mx-auto flex w-full flex-col items-center justify-center">
            <CapitalizeHeading>
              department of equinox technology
            </CapitalizeHeading>
          </div>
          <div className="container mx-auto w-full">
            <ul className="grid w-full grid-cols-4 gap-6">
              {departments.map((department) => (
                <li
                  className="flex flex-col items-center justify-center gap-3 text-center"
                  key={department.division}
                >
                  <Image
                    src={department.imageUrl}
                    width={313}
                    height={202}
                    alt={department.division}
                    className="w-full"
                  />
                  <p>{department.division}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* life at equinox technology Section */}
        <section className={`${styles.lifeAtEquinox} w-full`}>
          <div className="container mx-auto flex w-full flex-col items-center justify-center">
            <CapitalizeHeading>life at equinox technology</CapitalizeHeading>
            <Swiper
              effect={'coverflow'}
              loop={true}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation]}
              className={`career-swiper ${styles.mySwiper}`}
              style={{
                '--swiper-pagination-color': '#4CB9E7',
                '--swiper-pagination-bullet-inactive-color': '#4CB9E766',
                '--swiper-pagination-bullet-inactive-opacity': '1',
                '--swiper-pagination-bullet-size': '14px',
                '--swiper-pagination-bullet-horizontal-gap': '6px',
              }}
            >
              <SwiperSlide
                className={`career-swiper-slide ${styles.swiper_slide}`}
              >
                <Image
                  src={'/assets/Silde1.png'}
                  alt="Carousel Slider Career Page 1"
                  layout="fill"
                  objectFit="cover"
                  className={styles.img}
                />
              </SwiperSlide>
              <SwiperSlide
                className={`career-swiper-slide ${styles.swiper_slide}`}
              >
                <Image
                  src={'/assets/Silde2.png'}
                  alt="Carousel Slider Career Page"
                  layout="fill"
                  objectFit="cover"
                  className={styles.img}
                />
              </SwiperSlide>
              <SwiperSlide
                className={`career-swiper-slide ${styles.swiper_slide}`}
              >
                <Image
                  src={'/assets/Silde3.png'}
                  alt="Carousel Slider Career Page"
                  layout="fill"
                  objectFit="cover"
                  className={styles.img}
                />
              </SwiperSlide>
              <SwiperSlide
                className={`career-swiper-slide ${styles.swiper_slide}`}
              >
                <Image
                  src={'/assets/Silde4.png'}
                  alt="Carousel Slider Career Page"
                  layout="fill"
                  objectFit="cover"
                  className={styles.img}
                />
              </SwiperSlide>
              <SwiperSlide
                className={`career-swiper-slide ${styles.swiper_slide}`}
              >
                <Image
                  src={'/assets/Silde5.png'}
                  alt="Carousel Slider Career Page"
                  layout="fill"
                  objectFit="cover"
                  className={styles.img}
                />
              </SwiperSlide>
              <SwiperSlide
                className={`career-swiper-slide ${styles.swiper_slide}`}
              >
                <Image
                  src={'/assets/Silde6.png'}
                  alt="Carousel Slider Career Page"
                  layout="fill"
                  objectFit="cover"
                  className={styles.img}
                />
              </SwiperSlide>
              {/* Add more SwiperSlides with similar Image components */}
            </Swiper>
          </div>
        </section>

        {/* Our Value */}
        <section className="px-16 py-20">
          <div className="container mx-auto">
            <div className="flex justify-between gap-6">
              <Image
                src={'/assets/agreement-workplace 2.png'}
                width={646}
                height={722}
                alt={'agreement-workplace 2'}
              />
              <div className=" flex max-w-[746px] flex-col items-center justify-center gap-6">
                <CapitalizeHeading>Our Value</CapitalizeHeading>
                <p className="text-lg">
                  Equinox Technology thrives with our diversity and integrity,
                  throughout our operations the sets of values we uphold are:
                </p>
                <ol className="self-start text-lg">
                  <li>
                    <h4 className=" font-normal">1. Kaizen</h4>
                    <p className="pl-6">
                      We prioritize continuous improvement and encourage
                      proactive problem-solving among our employees.
                    </p>
                    <h4 className=" font-normal">2. Integrity</h4>
                    <p className="pl-6">
                      We hold ourselves to the highest ethical standards,
                      valuing honesty, sincerity, and moral uprightness.
                    </p>
                    <h4 className=" font-normal">3. Customer-Centric</h4>
                    <p className="pl-6">
                      We focus on anticipating and meeting customer needs with
                      superior products and services, always aiming to exceed
                      their expectations.
                    </p>
                    <h4 className=" font-normal">4. Innovation</h4>
                    <p className="pl-6">
                      We embrace creativity and innovation. we ensure that we
                      remain relevant and responsive, By constantly exploring
                      new ideas and technologies.
                    </p>
                    <h4 className=" font-normal">5. Collaboration</h4>
                    <p className="pl-6">
                      CollaborationWe believe in harnessing teamwork and diverse
                      perspectives for collective success. Through open
                      communication and collaboration the best solutions stem
                      from pooling talents and expertise.
                    </p>
                    <h4 className=" font-normal">6. Empowerment</h4>
                    <p className="pl-6">
                      We empower our employees to take ownership, make
                      decisions, and grow personally and professionally,
                      fostering an environment where everyone can thrive and
                      contribute to our success.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Career;
