'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {
  CapitalizeHeading,
  HeroBanner,
  SearchFilteredJobs,
} from '@/components/page';

import { GrLocation } from 'react-icons/gr';
import { SiBookmeter } from 'react-icons/si';
import { LiaUserTieSolid } from 'react-icons/lia';
import {
  BiBriefcase,
  BiSolidDownArrow,
  BiChevronRight,
  BiChevronLeft,
} from 'react-icons/bi';
import { getAllJob } from '@/lib/jobs/page';
import Layout from '@/components/Layout/page';

const faqItems = [
  {
    question: 'How long is the recruitment process from Equinox?',
    answer: '1-2 weeks after candidates apply',
  },
  {
    question: 'Can I reschedule the aptitude test or interview?',
    answer:
      'You can change the schedule of the Aptitude test and Interview through the Calendly link that has been provided via email',
  },
  {
    question: 'Will I be notified if I pass the recruitment process?',
    answer:
      'You will only be notified via email if you pass the recruitment process. If there is no information from us, then you are declared unsuccessful.',
  },
  {
    question: 'Can I apply my CV to any of the open divisions?',
    answer:
      'Please list more than one division of interest. We will find the right position for you.',
  },
];

const CareerPage = () => {
  const Jobs = getAllJob();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOptions, setFilterOptions] = useState({
    division: [],
    staff_level: [],
    location: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleFilterChange = (filter, value) => {
    const newOptions = filterOptions[filter].includes(value)
      ? filterOptions[filter].filter((option) => option !== value)
      : [...filterOptions[filter], value];
    setFilterOptions({ ...filterOptions, [filter]: newOptions });
    setCurrentPage(1);
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

  const totalPages = Math.ceil(filteredJobs.length / 10);

  // Calculate starting and ending indexes for the current page
  const startIndex = (currentPage - 1) * 10;
  const endIndex = currentPage * 10;

  // Slice jobs based on current page
  const currentJobs = filteredJobs.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate total number of jobs
  const totalJobs = filteredJobs.length;

  return (
    <>
      <Layout>
        {/* Banner Career Filtered Jobs */}
        <section className="h-full w-full">
          <HeroBanner imageUrl={'/assets/hero-image-career-filtered.png'} />
        </section>

        {/* Filtered Jobs */}
        <section className="w-full">
          <SearchFilteredJobs
            searchQuery={searchQuery}
            handleSearchInputChange={handleSearchInputChange}
          />
          <div className="container mx-auto flex flex-col items-center ">
            {/* Filtered Section */}
            <div className="] flex w-full justify-between gap-5 py-[60px]">
              {/* Filtered */}
              <div className="flex max-w-[313px] flex-col gap-6 ">
                <div className="flex flex-col justify-center gap-4">
                  <h3 className="flex items-center gap-[10px]">
                    <LiaUserTieSolid size={20} color="#4CB9E7" /> Division
                  </h3>
                  {uniqueValues('division').map((value) => (
                    <div className="flex items-center gap-3" key={value}>
                      <input
                        type="checkbox"
                        id={value}
                        checked={filterOptions.division.includes(value)}
                        onChange={() => handleFilterChange('division', value)}
                      />
                      <label htmlFor={value}>{value}</label>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col justify-center gap-4">
                  <h3 className="flex items-center gap-[10px]">
                    <SiBookmeter size={20} color="#4CB9E7" /> Staff Level
                  </h3>
                  {uniqueValues('staff_level').map((value) => (
                    <div className="flex items-center gap-3" key={value}>
                      <input
                        type="checkbox"
                        id={value}
                        checked={filterOptions.staff_level.includes(value)}
                        onChange={() =>
                          handleFilterChange('staff_level', value)
                        }
                      />
                      <label htmlFor={value}>{value}</label>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col justify-center gap-4">
                  <h3 className="flex items-center gap-[10px]">
                    <GrLocation size={20} color="#4CB9E7" /> Location
                  </h3>
                  {uniqueValues('location').map((value) => (
                    <div className="flex items-center gap-3" key={value}>
                      <input
                        type="checkbox"
                        id={value}
                        checked={filterOptions.location.includes(value)}
                        onChange={() => handleFilterChange('location', value)}
                      />
                      <label htmlFor={value}>{value}</label>
                    </div>
                  ))}
                </div>
                {/* Similar checkbox sections for staff_level and location */}
              </div>

              {/* Jobs Listing */}
              <div className="flex w-full flex-col gap-8">
                <div className="flex justify-between">
                  <h2 className=" text-4xl font-semibold">
                    Available Positions
                  </h2>
                  <h2 className="font-medium text-heading-secondary">
                    {totalJobs} {totalJobs >= 2 ? 'Positions' : 'Position'}
                  </h2>
                </div>
                {currentJobs.length > 0 ? (
                  <ul>
                    {currentJobs.map((job, index) => (
                      <li
                        key={job.name}
                        className={` flex flex-col gap-4 border-t p-4 ${index === currentJobs.length - 1 ? 'border-b' : ''} border-gray-200`}
                      >
                        <Link
                          href={`${job.URL}`}
                          className="flex flex-col gap-5 p-4"
                        >
                          <div className=" flex items-center gap-6  ">
                            <h3>{job.name}</h3>
                            <div className="rounded-[20px] bg-secondary-500 bg-opacity-10 px-3 py-1 text-xs">
                              <p className="text-secondary-500">{job.time}</p>
                            </div>
                          </div>
                        </Link>
                        <div className="flex items-center justify-between">
                          <Link
                            href={`${job.URL}`}
                            className="flex w-full flex-col gap-5 p-4"
                          >
                            <div className="flex w-full flex-col gap-4">
                              <p className="flex items-center gap-3">
                                <SiBookmeter size={20} color="#AFAFAF" />
                                {job.staff_level}
                              </p>
                              <p className="flex items-center gap-3">
                                <LiaUserTieSolid size={20} color="#AFAFAF" />
                                {job.division}
                              </p>
                              <p className="flex items-center gap-3">
                                <BiBriefcase size={20} color="#AFAFAF" />
                                {job.availability} Opening
                              </p>
                              <p className="flex items-center gap-3">
                                <GrLocation size={20} color="#AFAFAF" />
                                {job.location}
                              </p>
                            </div>
                          </Link>
                          <div className="flex flex-col items-center justify-center gap-5">
                            <Link href={`${job.URL}`}>
                              <button className="rounded-full border border-secondary-500 bg-white px-6 py-2 text-secondary-500">
                                View
                              </button>
                            </Link>
                            <Link href={job.submit_URL}>
                              <button className="rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 px-6 py-2 text-white">
                                Apply
                              </button>
                            </Link>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className=" flex flex-col items-center gap-10 pt-52">
                    <Image
                      src={'/assets/default-no-job-found.png'}
                      width={100}
                      height={100}
                      alt="No job found"
                    />
                    <p className=" text-xl text-[#ADACAC]">
                      No matches found. Let's give another query a whirl, shall
                      we?
                    </p>
                  </div>
                )}
                {/* Pagination */}
                <div className="flex self-center">
                  {/* Render left arrow if currentPage is not the first page */}
                  {currentPage > 1 && (
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      className="mx-1 rounded-full bg-transparent px-3 py-1"
                    >
                      <BiChevronLeft />
                    </button>
                  )}

                  {/* Render page numbers */}
                  {Array.from(
                    { length: totalPages > 6 ? 6 : totalPages },
                    (_, i) => {
                      const page = currentPage + i;
                      return page > 0 && page <= totalPages ? (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`mx-1 rounded-full px-3 py-1 ${page === currentPage ? 'bg-secondary-500 text-white' : 'bg-transparent'}`}
                        >
                          {page}
                        </button>
                      ) : null;
                    },
                  )}

                  {/* Render right arrow if currentPage is not the last page */}
                  {currentPage < totalPages && (
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      className="mx-1 rounded-full bg-transparent px-3 py-1"
                    >
                      <BiChevronRight />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recruitment Process */}
        <section className="w-full">
          <div className="container mx-auto flex flex-col items-center">
            <Image
              src="/assets/SectionProcessRecruitment.png"
              width={1440}
              height={1184}
              alt="Recruitment Process"
              className="responsive-image-career-filtered"
            />
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full py-32">
          <div className="container mx-auto flex flex-col items-center gap-16">
            <div className="flex flex-col items-center gap-6">
              <CapitalizeHeading>Frequent Ask Questions</CapitalizeHeading>
              <p className="max-w-[1086px] text-center text-xl">
                Got questions about joining our team? Here are the answers to
                some of our most frequently asked questions to help guide you!
              </p>
            </div>
            <div className="faq-accordion flex flex-col gap-6 divide-y divide-gray-300 lg:min-w-[868px]">
              {faqItems.map((item, index) => (
                <div key={index} className="accordion-item w-full pt-[25px]">
                  <button
                    className={`accordion-title flex w-full items-center justify-between text-start ${activeIndex === index ? 'bg-white' : 'bg-white'}`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <span>{item.question}</span>
                    <BiSolidDownArrow
                      className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}
                    />
                  </button>
                  <div
                    className={`accordion-content max-w-[868px] px-8 pt-7 text-base text-[#6E6E6E] ${activeIndex === index ? 'block' : 'hidden'}`}
                  >
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default CareerPage;
