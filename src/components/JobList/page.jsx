import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GrLocation } from 'react-icons/gr';
import { SiBookmeter } from 'react-icons/si';
import { LiaUserTieSolid } from 'react-icons/lia';
import { BiBriefcase } from 'react-icons/bi';

const JobList = ({ jobs }) => {
  return (
    <div className="flex w-full flex-col items-center justify-between">
      {jobs.length > 0 ? (
        <ul className="grid w-full grid-cols-3 gap-6">
          {jobs.slice(0, 9).map((job) => (
            <li className="job-card flex flex-col" key={job.name}>
              <Link href={job.URL} className="flex flex-col gap-6">
                <div className=" flex items-center gap-6  ">
                  <h3>{job.name}</h3>
                  <div className="rounded-[20px] bg-secondary-500 bg-opacity-10 px-3 py-1 text-xs">
                    <p className="text-secondary-500">{job.time}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="flex items-center gap-3">
                    {' '}
                    <SiBookmeter size={20} color="#AFAFAF" /> {job.staff_level}
                  </p>
                  <p className="flex items-center gap-3">
                    {' '}
                    <LiaUserTieSolid size={20} color="#AFAFAF" /> {job.division}
                  </p>
                  <p className="flex items-center gap-3">
                    {' '}
                    <BiBriefcase size={20} color="#AFAFAF" /> {job.availability}
                  </p>
                  <p className="flex items-center gap-3">
                    {' '}
                    <GrLocation size={20} color="#AFAFAF" /> {job.location}
                  </p>
                </div>
              </Link>
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
          <p>No matches found. Let's give another query a whirl, shall we?</p>
        </div>
      )}
    </div>
  );
};

export default JobList;
