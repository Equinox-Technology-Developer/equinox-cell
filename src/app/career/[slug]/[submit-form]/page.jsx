'use client';
import Layout from '@/components/Layout/page';
import { getJobsBySlug } from '@/lib/jobs/page';
import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { FiAlertTriangle } from 'react-icons/fi';
import { CiCalendarDate } from 'react-icons/ci';
import Swal from 'sweetalert2';

const MAX_FILE_SIZE = 2000000;
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const JobDetailsPage = ({ params: { slug } }) => {
  const [showAlert, setShowAlert] = useState(false);

  const schema = yup
    .object({
      name: yup.string().required('Name is required.'),
      email: yup
        .string()
        .email('Invalid email.')
        .required('Email is required.'),
      phone: yup
        .string()
        .required('Phone number is required.')
        .matches(phoneRegExp, 'Phone number is not valid'),
      recentEducation: yup.string().nullable(),
      joinDate: yup.date().nullable(),
      domicile: yup.string().nullable(),
      knowAboutEquinox: yup.string().required('This field is required.'),
      portfolio: yup.string().nullable(),
      resume: yup
        .mixed()
        .test('fileSize', 'The file is too large', (value) => {
          if (!value.length) return true;
          return value[0].size <= MAX_FILE_SIZE;
        })
        .required('This field is required.'),
      transcript: yup
        .mixed()
        .test('fileSize', 'The file is too large', (value) => {
          if (!value.length) return true;
          return value[0].size <= MAX_FILE_SIZE;
        })
        .required('This field is required.'),
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
    schema
      .validate(data)
      .then((valid) => {
        if (valid) {
          setShowAlert(true);
        }
      })
      .catch((error) => console.log(error));
  };

  const job = getJobsBySlug(slug);

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn-success',
      cancelButton: 'btn-danger',
    },
    buttonsStyling: false,
  });
  swalWithBootstrapButtons
    .fire({
      title: 'Are you sure?',
      text: 'What data has been filled in correctly?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: 'Submit Successful',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
          title: 'Oops...',
          text: 'Something went wrong!',
          icon: 'error',
          confirmButtonText: 'Back',
        });
      }
    });
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
                    placeholder="ex. John Doe"
                    className={`rounded-[5px] border-[0.75px] border-[#CBCBCB] px-[16px] py-[10px] outline-secondary-500 placeholder:text-[#CBCBCB]  ${errors.name ? 'border-error-500' : 'border-[#CBCBCB]'}`}
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
                    placeholder="ex. johndoe@gmail.com"
                    className={`rounded-[5px] border-[0.75px] border-[#CBCBCB] px-[16px] py-[10px] outline-secondary-500 placeholder:text-[#CBCBCB] ${errors.email ? 'border-error-500' : 'border-[#CBCBCB]'}`}
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
                    type="number"
                    placeholder="ex. 083628263286"
                    className={`rounded-[5px] border-[0.75px] border-[#CBCBCB] px-[16px] py-[10px] outline-secondary-500 placeholder:text-[#CBCBCB] ${errors.phone ? 'border-error-500' : 'border-[#CBCBCB]'}`}
                    min="0"
                    step="1"
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
                    type="text"
                    placeholder="(ex. Bachelors Degree_Institution_GPA)"
                    className={`rounded-[5px] border-[0.75px] border-[#CBCBCB] px-[16px] py-[10px] outline-secondary-500 placeholder:text-[#CBCBCB] ${errors.recentEducation ? 'border-error-500' : 'border-[#CBCBCB]'}`}
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
                  <div className="relative">
                    <input
                      id="join-date"
                      type="text"
                      placeholder="ex. 13-03-1999"
                      onFocus={(e) => (e.target.type = 'date')}
                      className={`w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] px-[16px] py-[10px] outline-secondary-500 placeholder:text-[#CBCBCB] ${errors.joinDate ? 'border-error-500' : 'border-[#CBCBCB]'}`}
                      {...register('joinDate')}
                    />
                    <CiCalendarDate className="absolute right-[12px] top-[50%] -translate-y-1/2 transform cursor-pointer text-[24px] text-black" />
                  </div>
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
                    placeholder="(ex. Kuala Lumpur, Malaysia)"
                    className={`rounded-[5px] border-[0.75px] border-[#CBCBCB] px-[16px] py-[10px] outline-secondary-500 placeholder:text-[#CBCBCB] ${errors.domicile ? 'border-error-500' : 'border-[#CBCBCB]'}`}
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
                    placeholder="ex. Linkedin"
                    className="w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] px-[16px] py-[10px] outline-secondary-500 placeholder:text-[#CBCBCB]"
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
                <div className="mt-[24px] flex flex-col gap-[6px] lg:mt-0">
                  <label
                    htmlFor="portfolio"
                    className="text-base font-semibold text-black md:text-[18px]"
                  >
                    Portofolio
                  </label>
                  <input
                    id="portfolio"
                    type="text"
                    placeholder="URL/Git/Other Link (ex. johndoe.com)"
                    className="w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] px-[16px] py-[10px] outline-secondary-500 placeholder:text-[#CBCBCB]"
                    {...register('portfolio')}
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
                    className="w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] px-[16px] py-[10px] outline-secondary-500 file:rounded-[40px] file:border-[1px] file:border-secondary-500 file:bg-transparent file:text-secondary-500 placeholder:text-[#CBCBCB]"
                    accept=".pdf"
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
                    className="w-full rounded-[5px] border-[0.75px] border-[#CBCBCB] px-[16px] py-[10px] outline-secondary-500 file:rounded-[40px] file:border-[1px] file:border-secondary-500 file:bg-transparent file:text-secondary-500 placeholder:text-[#CBCBCB]"
                    accept=".pdf"
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
        {showAlert && swalWithBootstrapButtons}
      </Layout>
    </>
  );
};

export default JobDetailsPage;
