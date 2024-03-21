import Layout from '@/components/Layout/page';
import { getJobsBySlug } from '@/lib/jobs/page';
import Link from 'next/link';

const JobDetailsPage = ({ params: { slug } }) => {
  const job = getJobsBySlug(slug);
  return (
    <>
      <Layout>
        {/* Banner */}
        {/* Banner Job Detail */}
        <section className="w-full bg-gradient-to-r from-secondary-500 to-primary-500">
          <div className="container mx-auto py-20 ">
            <h1 className="py-8 text-center text-4xl font-bold font-bold text-white">
              {job.name}
            </h1>
          </div>
        </section>

        {/* Input Field */}
        <section>
          <div className="container mx-auto py-16"></div>
        </section>
      </Layout>
    </>
  );
};

export default JobDetailsPage;
