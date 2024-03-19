'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import {
  CapitalizeHeading,
  HeroBanner,
  JobCategories,
  SearchJobs,
} from '@/components/page';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { GrLocation } from 'react-icons/gr';
import { SiBookmeter } from 'react-icons/si';
import { LiaUserTieSolid } from 'react-icons/lia';
import { BiBriefcase } from 'react-icons/bi';

import styles from './Career.module.scss';

const jobCategories = [
  'Human Capital & Talent Acquisition, Finance',
  'Full Stack Web Developer',
  'Marketing & Content Writter',
  'Design & UX',
  'Engineering',
  'Ads, Affiliates & Social Media',
  'CRM',
  'Finance',
  'Purchasing',
];
const jobs = [
  // Job 1
  {
    name: 'Finance',
    time: 'Fulltime',
    staff_level: 'Staff Level',
    division: 'Finance',
    location: 'Jakarta, Indonesia',
    availability: 2,
  },
  // Job 2
  {
    name: 'Human Resource',
    time: 'Fulltime',
    staff_level: 'Staff Level',
    division: 'Human Capital & Talent Acquisition',
    location: 'Jakarta, Indonesia',
    availability: 2,
  },
  // Job 3
  {
    name: 'Web Developer',
    time: 'Fulltime',
    staff_level: 'Staff Level',
    division: 'Full Stack Web Developer',
    location: 'Jakarta, Indonesia',
    availability: 2,
  },
  // Job 4
  {
    name: 'Copywritting',
    time: 'Fulltime',
    staff_level: 'Staff Level',
    division: 'Marketing & Content Writer',
    location: 'Jakarta, Indonesia',
    availability: 2,
  },
  // Job 5
  {
    name: 'Personal Assistant',
    time: 'Fulltime',
    staff_level: 'Staff Level',
    division: 'Personal Assistant',
    location: 'Jakarta, Indonesia',
    availability: 2,
  },
  // Job 6
  {
    name: 'Affiliate',
    time: 'Fulltime',
    staff_level: 'Staff Level',
    division: 'Ads, Affiliate & Social Media',
    location: 'Jakarta, Indonesia',
    availability: 2,
  },
  // Job 7
  {
    name: 'CRM',
    time: 'Fulltime',
    staff_level: 'Staff Level',
    division: 'CRM',
    location: 'Jakarta, Indonesia',
    availability: 2,
  },
  // Job 8
  {
    name: 'Purchasing',
    time: 'Fulltime',
    staff_level: 'Staff Level',
    division: 'Purchasing',
    location: 'Jakarta, Indonesia',
    availability: 2,
  },
  // Job 9
  {
    name: 'Grapich Designer',
    time: 'Fulltime',
    staff_level: 'Staff Level',
    division: 'Design & UX',
    location: 'Jakarta, Indonesia',
    availability: 2,
  },
  {
    name: 'Grapich Designer',
    time: 'Fulltime',
    staff_level: 'Staff Level',
    division: 'Design & UX',
    location: 'Jakarta, Indonesia',
    availability: 2,
  },
  // Add more job objects as needed
];

const Career = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchQuery('');
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredJobs = jobs.filter(
    (job) =>
      (selectedCategory ? job.division === selectedCategory : true) &&
      (searchQuery
        ? job.name.toLowerCase().includes(searchQuery.toLowerCase())
        : true),
  );

  const showAllButton = filteredJobs.length > 9;

  return (
    <>
      {/* Banner Hero Career Page */}
      <HeroBanner
        title={
          <span style={{ color: '#ffffff' }}>
            Accelerate Your Career with Us:{' '}
            <span style={{ color: '#59D5E0' }}>
              {' '}
              Fast Track, Big Bonuses, and Elite Benefits
            </span>
            <span style={{ color: '#ffffff' }}> Await Exceptional Talent!</span>
          </span>
        }
        subtitle="We're on the constant run to achieve great things and we'd love for you to be a part of that journey with us!"
        imageUrl={'/assets/CareerHeroImage.png'}
      />

      {/* Career Page Content */}
      <section className="w-full">
        <div className="container mx-auto flex w-full flex-col items-center justify-center gap-11 px-16 py-32">
          <CapitalizeHeading className>find your dream job!</CapitalizeHeading>
          <SearchJobs
            searchQuery={searchQuery}
            handleSearchInputChange={handleSearchInputChange}
          />
          <JobCategories
            categories={[...jobCategories]}
            selectedCategory={selectedCategory}
            handleCategoryClick={handleCategoryClick}
          />
          <div className="flex w-full flex-col items-center justify-between">
            {filteredJobs.length > 0 ? (
              <ul className="grid w-full grid-cols-3 gap-6">
                {filteredJobs.slice(0, 9).map((job) => (
                  <li className="job-card flex flex-col gap-5" key={job.name}>
                    <div className=" flex items-center gap-6  ">
                      <h3>{job.name}</h3>
                      <div className="rounded-[20px] bg-secondary-500 bg-opacity-10 px-3 py-1 text-xs">
                        <p className="text-secondary-500">{job.time}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="flex items-center gap-3">
                        {' '}
                        <SiBookmeter size={20} color="#AFAFAF" />{' '}
                        {job.staff_level}
                      </p>
                      <p className="flex items-center gap-3">
                        {' '}
                        <LiaUserTieSolid size={20} color="#AFAFAF" />{' '}
                        {job.division}
                      </p>
                      <p className="flex items-center gap-3">
                        {' '}
                        <BiBriefcase size={20} color="#AFAFAF" />{' '}
                        {job.availability}
                      </p>
                      <p className="flex items-center gap-3">
                        {' '}
                        <GrLocation size={20} color="#AFAFAF" /> {job.location}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex flex-col items-center gap-5">
                <Image
                  src={'/assets/default-no-job-found.png'}
                  width={100}
                  height={100}
                  alt="No job found"
                />
                <p>
                  No matches found. Let's give another query a whirl, shall we?
                </p>
              </div>
            )}
            {showAllButton && (
              <button
                className="mt-4 max-w-[101px] rounded-[81.5px] border border-secondary-500 bg-white px-3 py-[6px] text-secondary-500 transition-all duration-300 ease-in-out hover:bg-secondary-500 hover:text-white"
                onClick={() => setSelectedCategory('')}
              >
                Show All
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Department of Equinox Technology Section */}
      <section className="w-full">
        <div className="container mx-auto flex w-full flex-col items-center justify-center">
          <CapitalizeHeading>
            department of equinox technology
          </CapitalizeHeading>
          <Swiper
            effect={'coverflow'}
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
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className={styles.swiper_slide}>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Career;
