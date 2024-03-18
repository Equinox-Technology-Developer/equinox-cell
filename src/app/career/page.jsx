'use client';
import { useState } from 'react';
import {
  CapitalizeHeading,
  HeroBanner,
  JobCategories,
  SearchJobs,
} from '@/components/page';

// Mock data for job categories and jobs
const jobCategories = ['Finance', 'Marketing', 'Engineering'];
const jobs = [
  {
    name: 'Job 1',
    time: 'Full-time',
    staff_level: 'Beginner',
    division: 'Finance',
    location: 'Jakarta',
    availability: 2,
  },
  {
    name: 'Job 2',
    time: 'Part-time',
    staff_level: 'Intermediate',
    division: 'Marketing',
    location: 'New York',
    availability: 1,
  },
  {
    name: 'Job 3',
    time: 'Full-time',
    staff_level: 'Advanced',
    division: 'Engineering',
    location: 'San Francisco',
    availability: 3,
  },
  // Add more job objects as needed
];

const Career = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchQuery(''); // Reset search query when selecting a category
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
      <section>
        <CapitalizeHeading>find your dream job!</CapitalizeHeading>
        <div>
          {/* Search Bar */}
          <SearchJobs
            searchQuery={searchQuery}
            handleSearchInputChange={handleSearchInputChange}
          />

          {/* Job Categories */}
          <JobCategories
            categories={[...jobCategories]}
            selectedCategory={selectedCategory}
            handleCategoryClick={handleCategoryClick}
          />

          {/* Job Listings */}
          <div>
            <h2>Job Listings</h2>
            {filteredJobs.length > 0 ? (
              <ul>
                {filteredJobs.map((job) => (
                  <li key={job.name}>
                    <div>Name: {job.name}</div>
                    <div>Time: {job.time}</div>
                    <div>Staff Level: {job.staff_level}</div>
                    <div>Division: {job.division}</div>
                    <div>Location: {job.location}</div>
                    <div>Availability: {job.availability}</div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No jobs found.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
