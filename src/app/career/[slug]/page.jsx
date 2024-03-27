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
          <div className="container mx-auto px-[22px] py-[58px] md:px-[40px] md:py-[44px] lg:py-20">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h1 className="text-center text-[30px] font-bold text-white md:text-[40px]">
                  {job.name}
                </h1>
                <Link href={`/career/${job.slug}/submit-form`}>
                  <button className="hidden rounded-full bg-white px-6 py-3 md:block">
                    {' '}
                    Apply Now
                  </button>
                </Link>
              </div>
              <div className="flex flex-wrap items-start justify-between font-semibold text-white">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-7">
                    <p className="min-w-[140px] max-w-[140px] text-[14px] font-semibold md:min-w-[245px] md:max-w-full md:text-[20px]">
                      Department
                    </p>
                    <p className="text-[12px] md:text-[16px]">
                      : {job.division}
                    </p>
                  </div>
                  <div className="flex items-center gap-7">
                    <p className="min-w-[140px] max-w-[140px] text-[14px] font-semibold md:min-w-[245px] md:max-w-full md:text-[20px]">
                      Location
                    </p>
                    <p className="text-[12px] md:text-[16px]">
                      : {job.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-7">
                    <p className="min-w-[140px] max-w-[140px] text-[14px] font-semibold md:min-w-[245px] md:max-w-full md:text-[20px]">
                      Position
                    </p>
                    <p className="text-[12px] md:text-[16px]">
                      : {job.availability}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-4 lg:mt-0">
                  <div className="flex items-start gap-7 md:items-center">
                    <p className="min-w-[140px] max-w-[140px] text-[14px] font-semibold md:min-w-[245px] md:max-w-full md:text-[20px]">
                      Application is Open Until
                    </p>
                    <p className="text-[12px] md:text-[16px]">
                      : 31 Maret 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="w-full px-[16px] py-[24px] md:px-10 md:py-10 lg:px-44 lg:py-20">
          <div className="container mx-auto flex flex-col items-start justify-center gap-6 lg:gap-16">
            {/* overview */}
            <div className="flex flex-col gap-5">
              <h2 className="text-base md:text-xl">Overview</h2>
              <p className="text-[12px] leading-[20px] md:text-[14px] md:leading-[24px]">
                {job.overview}
              </p>
            </div>
            {/* Key Responsibilites */}
            <div className="flex flex-col gap-5">
              <h2 className="text-base md:text-xl">Key Responsibilites</h2>
              <ul className="flex flex-col gap-2">
                {job.key_responsibilities.map((key, index) => (
                  <li
                    className="ml-5 list-disc text-[12px] leading-[20px] md:text-[14px] md:leading-[24px]"
                    key={index}
                  >
                    {key}
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Qualifications */}
            <div className="flex flex-col gap-5">
              <h2 className="text-base md:text-xl">Key Qualifications</h2>
              <ul className="flex flex-col gap-2">
                {job.key_qualifications.map((key, index) => (
                  <li
                    className="ml-5 list-disc text-[12px] leading-[20px] md:text-[14px] md:leading-[24px]"
                    key={index}
                  >
                    {key}
                  </li>
                ))}
              </ul>
            </div>

            {/* function of department */}
            <div className="flex flex-col gap-5">
              <h2 className="text-base md:text-xl">
                Function of the Department
              </h2>
              <p className="text-[12px] leading-[20px] md:text-[14px] md:leading-[24px]">
                {job.function_of_department}
              </p>
            </div>

            {/* About Company */}
            <div className="flex max-w-[916px] flex-col gap-6 rounded-lg border border-solid border-gray-300 p-6 text-sm">
              <div className="flex flex-col gap-3">
                <h2 className="text-base md:text-xl">About company</h2>
                <p className="text-[12px] leading-[20px] md:text-[14px] md:leading-[24px]">
                  Equinox Technology is a dynamic retail & SaaS enterprise,
                  spearheading innovation in the e-commerce retail space.
                  Specializing in a diverse range of products including home &
                  garden essentials, cutting-edge electronics, and exquisite art
                  pieces, we are committed to enriching the online shopping
                  experience for our customers.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-base md:text-xl">Office Address</h2>
                <p className="text-[12px] leading-[20px] md:text-[14px] md:leading-[24px]">
                  Pantai Indah Kapuk: Melody 2 Street No. 6, Pejaringan, North
                  Jakarta, Jakarta
                </p>
                <p className="text-[12px] leading-[20px] md:text-[14px] md:leading-[24px]">
                  Sahid Sudirman Center: 56th Floor, Unit C. Jend Sudirman
                  Street, Kav 86, Karet Tengsin, Tanah Abang, Central Jakarta,
                  Jakarta
                </p>
              </div>
            </div>

            {/* Apply Job */}
            <div className="self-center">
              <Link href={`/career/${slug}/submit-form`}>
                <button className="rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 px-6 py-2 text-white">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Job*/}
        <section className="px-[16px] py-[24px] md:px-10 md:py-10 lg:px-44 lg:py-20">
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
