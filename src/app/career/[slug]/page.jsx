import Layout from '@/components/Layout/page';
import { JobList } from '@/components/page';
import { getAllJob, getJobsBySlug } from '@/lib/jobs/page';
import Link from 'next/link';

const JobDetailsPage = ({ params: { slug } }) => {
  const job = getJobsBySlug(slug);

  const allJobs = getAllJob();
  const relatedJobs = allJobs.filter(
    (relatedJob) =>
      relatedJob.division === job.division && relatedJob.slug !== job.slug,
  );

  return (
    <>
      <Layout>
        {/* Banner Job Detail */}
        <section className="w-full bg-gradient-to-r from-secondary-500 to-primary-500">
          <div className="container mx-auto py-20 ">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h1 className="py-8 text-center text-4xl font-bold text-white">
                  {job.name}
                </h1>
                <Link href={`/career/${job.slug}/submit-url`}>
                  <button className="rounded-full bg-white px-6 py-3">
                    {' '}
                    Apply Now
                  </button>
                </Link>
              </div>
              <div className="flex flex-wrap items-start justify-between text-xl font-semibold text-white">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-7">
                    <p className="min-w-[120px]">Division</p>
                    <p>: {job.division}</p>
                  </div>
                  <div className="flex items-center gap-7">
                    <p className="min-w-[120px]">Location</p>
                    <p>: {job.location}</p>
                  </div>
                  <div className="flex items-center gap-7">
                    <p className="min-w-[120px]">Availability</p>
                    <p>: {job.availability}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-7">
                    <p className="min-w-[120px]">Application is Open Until</p>
                    <p>: 31 Maret 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="w-full px-44 py-20">
          <div className="container mx-auto flex flex-col items-start justify-center gap-16">
            {/* overview */}
            <div className="flex flex-col gap-5">
              <h2 className=" text-xl">Overview</h2>
              <p>{job.overview}</p>
            </div>
            {/* Key Responsibilites */}
            <div className="flex flex-col gap-5">
              <h2 className=" text-xl">Key Responsibilites</h2>
              <ul className="flex flex-col gap-2">
                {job.key_responsibilities.map((key, index) => (
                  <li className="ml-5 list-disc" key={index}>
                    {key}
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Qualifications */}
            <div className="flex flex-col gap-5">
              <h2 className=" text-xl">Key Qualifications</h2>
              <ul className="flex flex-col gap-2">
                {job.key_qualifications.map((key, index) => (
                  <li className="ml-5 list-disc" key={index}>
                    {key}
                  </li>
                ))}
              </ul>
            </div>

            {/* function of department */}
            <div className="flex flex-col gap-5">
              <h2 className=" text-xl">Function of the Department</h2>
              <p>{job.function_of_department}</p>
            </div>

            {/* About Company */}
            <div className="flex max-w-[916px] flex-col gap-6 rounded-lg border border-solid border-gray-300 p-6 text-sm">
              <div className="flex flex-col gap-3">
                <h2 className=" text-xl">About company</h2>
                <p>
                  Equinox Technology is a dynamic retail & SaaS enterprise,
                  spearheading innovation in the e-commerce retail space.
                  Specializing in a diverse range of products including home &
                  garden essentials, cutting-edge electronics, and exquisite art
                  pieces, we are committed to enriching the online shopping
                  experience for our customers.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className=" text-xl">Office Address</h2>
                <p>
                  Pantai Indah Kapuk: Melody 2 Street No. 6, Pejaringan, North
                  Jakarta, Jakarta
                </p>
                <p>
                  Sahid Sudirman Center: 56th Floor, Unit C. Jend Sudirman
                  Street, Kav 86, Karet Tengsin, Tanah Abang, Central Jakarta,
                  Jakarta
                </p>
              </div>
            </div>

            {/* Apply Job */}
            <div className="self-center">
              <Link href={`${job.URL}/submit-form`}>
                <button className="rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 px-6 py-2 text-white">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Job*/}
        <section className=" px-44 py-20">
          <div className="container mx-auto">
            <h2 className="mb-4 text-2xl font-semibold">Related Jobs</h2>
            <JobList jobs={relatedJobs} />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default JobDetailsPage;
