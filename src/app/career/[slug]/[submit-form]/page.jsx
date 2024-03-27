import Layout from '@/components/Layout/page';
import { getJobsBySlug } from '@/lib/jobs/page';
import Link from 'next/link';
import { Input } from 'postcss';

const JobDetailsPage = ({ params: { slug } }) => {
  const job = getJobsBySlug(slug);
  return (
    <>
      <Layout>
        {/* Banner */}
        {/* Banner Job Detail */}
        <section className="w-full bg-gradient-to-r from-secondary-500 to-primary-500">
          <div className="container mx-auto py-20 ">
            <h1 className="py-8 text-center text-4xl font-bold text-white">
              {job.name}
            </h1>
          </div>
        </section>

        {/* Input Field */}
        <section>
          <div className="container mx-auto px-4 py-6 md:px-10 md:py-10 lg:px-0 lg:py-16">
            <form className="flex flex-col lg:gap-y-[30px]">
              <div className="grid grid-cols-1 gap-x-[20px] lg:grid-cols-2">
                <div className="flex flex-col gap-[6px]">
                  <label
                    htmlFor="name"
                    className="text-base font-semibold text-black md:text-[18px]"
                  >
                    Full Name <span className="text-error-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Full Name"
                    className="rounded-[5px] border-[0.75px] border-[#CBCBCB] px-[16px] py-[10px] placeholder:text-[#CBCBCB]"
                  />
                </div>
                <div className="mt-[24px] flex flex-col gap-[6px] lg:mt-0">
                  <label
                    htmlFor="email"
                    className="text-base font-semibold text-black md:text-[18px]"
                  >
                    Email <span className="text-error-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="rounded-[5px] border-[0.75px] border-[#CBCBCB] px-[16px] py-[10px] placeholder:text-[#CBCBCB]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-[20px] lg:grid-cols-2">
                <div className="mt-[24px] flex flex-col gap-[6px] lg:mt-0">
                  <label
                    htmlFor="phone"
                    className="text-base font-semibold text-black md:text-[18px]"
                  >
                    Phone Number <span className="text-error-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Phone Number"
                    className="rounded-[5px] border-[0.75px] border-[#CBCBCB] px-[16px] py-[10px] placeholder:text-[#CBCBCB]"
                    pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                    maxlength="12"
                  />
                </div>
                <div className="mt-[24px] flex flex-col gap-[6px] lg:mt-0">
                  <label
                    htmlFor="email"
                    className="text-base font-semibold text-black md:text-[18px]"
                  >
                    Recent Education
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="rounded-[5px] border-[0.75px] border-[#CBCBCB] px-[16px] py-[10px] placeholder:text-[#CBCBCB]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-[20px] lg:grid-cols-2">
                <div className="mt-[24px] flex flex-col gap-[6px] lg:mt-0">
                  <label
                    htmlFor="join-date"
                    className="text-base font-semibold text-black md:text-[18px]"
                  >
                    Join Date
                  </label>
                  <input
                    id="join-date"
                    type="date"
                    placeholder="Join Date"
                    className="rounded-[5px] border-[0.75px] border-[#CBCBCB] px-[16px] py-[10px] placeholder:text-[#CBCBCB]"
                  />
                </div>
                <div className="mt-[24px] flex flex-col gap-[6px] lg:mt-0">
                  <label
                    htmlFor="domicile"
                    className="text-base font-semibold text-black md:text-[18px]"
                  >
                    Domicile
                  </label>
                  <input
                    id="domicile"
                    type="text"
                    placeholder="Domicile"
                    className="rounded-[5px] border-[0.75px] border-[#CBCBCB] px-[16px] py-[10px] placeholder:text-[#CBCBCB]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 space-y-[30px]">
                <div className="mt-[24px] flex flex-col gap-[6px] lg:mt-0">
                  <label
                    htmlFor="know-about-equinox"
                    className="text-base font-semibold text-black md:text-[18px]"
                  >
                    From where did you know about Equinox Technology
                    <span className="text-error-500">*</span>
                  </label>
                  <input
                    id="know-about-equinox"
                    type="text"
                    placeholder="from where did you know about Equinox Technology"
                    className="w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] px-[16px] py-[10px] placeholder:text-[#CBCBCB]"
                  />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label
                    htmlFor="resume"
                    className="text-base font-semibold text-black md:text-[18px]"
                  >
                    Resume (max 2MB)<span className="text-error-500">*</span>
                  </label>
                  <input
                    id="resume"
                    type="file"
                    placeholder="from where did you know about Equinox Technology"
                    className="w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] px-[16px] py-[10px] placeholder:text-[#CBCBCB]"
                    accept=".doc, .docx, .pdf"
                  />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label
                    htmlFor="transcript"
                    className="text-base font-semibold text-black md:text-[18px]"
                  >
                    Transcript (max 2MB)
                    <span className="text-error-500">*</span>
                  </label>
                  <input
                    id="transcript"
                    type="file"
                    placeholder="from where did you know about Equinox Technology"
                    className="w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] px-[16px] py-[10px] placeholder:text-[#CBCBCB]"
                    accept=".doc, .docx, .pdf"
                  />
                </div>
              </div>
            </form>
            <div className="flex w-full justify-center">
              <button
                type="submit"
                value="Send"
                className="mt-[40px] rounded-[40px] bg-gradient-to-r from-secondary-500 to-primary-500 px-[24px] py-[6px] text-white md:mt-[60px]"
              >
                Send
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default JobDetailsPage;
