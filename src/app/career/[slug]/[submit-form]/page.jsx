'use client';
import Layout from '@/components/Layout/page';
import { getJobsBySlug } from '@/lib/jobs/page';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { FiAlertTriangle } from 'react-icons/fi';

const MAX_FILE_SIZE = 2000000;

const JobDetailsPage = ({ params: { slug } }) => {
  const schema = yup
    .object({
      name: yup.string().required('name is required.'),
      email: yup
        .string()
        .email('Invalid email.')
        .required('Email is required.'),
      phone: yup.number().required('Phone is required.'),
      recentEducation: yup.string().nullable(),
      joinDate: yup.date().nullable(),
      domicile: yup.string().nullable(),
      knowAboutEquinox: yup.string().required('This field is required.'),
      resume: yup.mixed().required('This field is required.'),
      transcript: yup.mixed().required('This field is required.'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
          <form
            className="container mx-auto px-4 py-6 md:px-10 md:py-10 lg:px-0 lg:py-16"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col lg:gap-y-[30px]">
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
                    {...register('name')}
                  />
                  {errors.name && (
                    <div className="mt-2 flex items-center gap-[7px]">
                      <FiAlertTriangle className="text-error-500" />
                      <span className="text-[12px] text-error-500">
                        {errors.name?.message &&
                          errors.name.message.replace(/^\w/, (c) =>
                            c.toUpperCase(),
                          )}
                      </span>
                    </div>
                  )}
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
                    {...register('email')}
                  />
                  {errors.email && (
                    <div className="mt-2 flex items-center gap-[7px]">
                      <FiAlertTriangle className="text-error-500" />
                      <span className="text-[12px] text-error-500">
                        {errors.email?.message &&
                          errors.email.message.replace(/^\w/, (c) =>
                            c.toUpperCase(),
                          )}
                      </span>
                    </div>
                  )}
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
                    {...register('phone')}
                  />
                  {errors.phone && (
                    <div className="mt-2 flex items-center gap-[7px]">
                      <FiAlertTriangle className="text-error-500" />
                      <span className="text-[12px] text-error-500">
                        {errors.phone?.message &&
                          errors.phone.message.replace(/^\w/, (c) =>
                            c.toUpperCase(),
                          )}
                      </span>
                    </div>
                  )}
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
                    placeholder="Recent Education"
                    className="rounded-[5px] border-[0.75px] border-[#CBCBCB] px-[16px] py-[10px] placeholder:text-[#CBCBCB]"
                    {...register('recentEducation')}
                  />
                  {errors.recentEducation && (
                    <div className="mt-2 flex items-center gap-[7px]">
                      <FiAlertTriangle className="text-error-500" />
                      <span className="text-[12px] text-error-500">
                        {errors.recentEducation?.message &&
                          errors.recentEducation.message.replace(/^\w/, (c) =>
                            c.toUpperCase(),
                          )}
                      </span>
                    </div>
                  )}
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
                    {...register('joinDate')}
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
                    {...register('domicile')}
                  />
                  {errors.domicile && (
                    <div className="mt-2 flex items-center gap-[7px]">
                      <FiAlertTriangle className="text-error-500" />
                      <span className="text-[12px] text-error-500">
                        {errors.domicile?.message &&
                          errors.domicile.message.replace(/^\w/, (c) =>
                            c.toUpperCase(),
                          )}
                      </span>
                    </div>
                  )}
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
                    {...register('knowAboutEquinox')}
                  />
                  {errors.knowAboutEquinox && (
                    <div className="mt-2 flex items-center gap-[7px]">
                      <FiAlertTriangle className="text-error-500" />
                      <span className="text-[12px] text-error-500">
                        {errors.knowAboutEquinox?.message &&
                          errors.knowAboutEquinox.message.replace(/^\w/, (c) =>
                            c.toUpperCase(),
                          )}
                      </span>
                    </div>
                  )}
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
                    {...register('resume')}
                  />
                  {errors.resume && (
                    <div className="mt-2 flex items-center gap-[7px]">
                      <FiAlertTriangle className="text-error-500" />
                      <span className="text-[12px] text-error-500">
                        {errors.resume?.message &&
                          errors.resume.message.replace(/^\w/, (c) =>
                            c.toUpperCase(),
                          )}
                      </span>
                    </div>
                  )}
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
                    {...register('transcript')}
                  />
                  {errors.transcript && (
                    <div className="mt-2 flex items-center gap-[7px]">
                      <FiAlertTriangle className="text-error-500" />
                      <span className="text-[12px] text-error-500">
                        {errors.transcript?.message &&
                          errors.transcript.message.replace(/^\w/, (c) =>
                            c.toUpperCase(),
                          )}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex w-full justify-center">
              <input
                type="submit"
                value="Send"
                className="mt-[40px] cursor-pointer rounded-[40px] bg-gradient-to-r from-secondary-500 to-primary-500 px-[24px] py-[6px] text-white md:mt-[60px]"
              />
            </div>
          </form>
        </section>
      </Layout>
    </>
  );
};

export default JobDetailsPage;
