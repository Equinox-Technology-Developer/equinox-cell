import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="h-full w-full">
        <Image
          src={'/assets/hero-image-homepage.png'}
          width={1440}
          height={676}
          alt="hero-image"
          className="h-[676px] w-full object-cover object-center"
        />
        <div className="absolute inset-0 mt-[76px] h-[676px] w-full bg-gradient-to-b from-[#66666600] to-[#0000009E]">
          <div className="absolute inset-0 flex h-[676px] w-full items-center justify-center text-center">
            <div className="mx-auto max-w-[1086px] space-y-8">
              <h1 className="text-[40px] font-bold leading-[48px] text-white">
                Accelerate Your Career with Us:{' '}
                <span className="text-[#59D5E0]">Fast Track </span>,{' '}
                <span className="text-[#59D5E0]">Big Bonuses </span>, and
                <span className="text-[#59D5E0]"> Elite Benefits </span> Await
                Exceptional Talent!
              </h1>
              <p className="font-regular text-[20px] leading-[27.9px] text-white">
                Our talent assessments screen and identify the best candidates
                and make your hiring decisions faster, easier, and bias-free.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="h-full w-full space-y-3 lg:py-[40px]">
        <h2 className="text-center text-[40px] font-bold leading-[27.9px]">
          Equinox Technology LLC
        </h2>
        <p className="text-medium flex justify-center text-center text-[18px] leading-[27.9px]">
          We think big, start small, and move fast! A small team passionate
          about retail and technology
        </p>
      </section>
      <section className="container mx-auto flex flex-row py-[80px]">
        <div className="flex w-1/2 flex-col justify-center space-y-6">
          <h2 className="text-[40px] font-semibold leading-[27.9px]">About</h2>
          <p>
            Equinox Technology is a dynamic retail & SaaS enterprise,
            spearheading innovation in the e-commerce retail space. Specializing
            in a diverse range of products including home & garden essentials,
            cutting-edge electronics, and exquisite art pieces, we are committed
            to enriching the online shopping experience for our customers.
          </p>
          <button className="w-fit rounded-[40px] bg-gradient-to-l from-[#59D5E0] to-[#4CB9E7] px-6 py-[6px] text-[18px] text-white">
            <a href="/about">See more</a>
          </button>
        </div>
        <div className="w-1/2">
          <Image
            src={'/assets/about-image.png'}
            width={646}
            height={400}
            alt="about-image"
            className="h-auto w-full rounded-[20px] object-cover object-center"
          />
        </div>
      </section>
      <section className="container mx-auto flex flex-col py-[80px]">
        <p className="text-center text-[18px] font-medium leading-[27.9px]">
          Where Innovation Meets Craftsmanship in the Furniture Industry!
        </p>
        <h2 className="text-center text-[40px] font-bold leading-[48px]">
          Work that touches the lives of millions
        </h2>
        <div className="mt-[42px] grid grid-cols-3 gap-x-[24px]">
          <div className="py-2">
            <h3 className="bg-gradient-to-l from-[#59D5E0] to-[#4CB9E7] bg-clip-text text-center text-[54px] font-bold leading-[54px] text-transparent">
              $1.999K+
            </h3>
            <p className="bg-gradient-to-l from-[#59D5E0] to-[#4CB9E7] bg-clip-text text-center text-[24px] font-semibold leading-[24px] text-transparent">
              Total Sales
            </p>
            <p className="text-center leading-[24px]">
              of organizations using talent assessment tests saw a reduction in
              mis-hires
            </p>
          </div>
          <div className="py-2">
            <h3 className="bg-gradient-to-l from-[#59D5E0] to-[#4CB9E7] bg-clip-text text-center text-[54px] font-bold leading-[54px] text-transparent">
              88%+
            </h3>
            <p className="bg-gradient-to-l from-[#59D5E0] to-[#4CB9E7] bg-clip-text text-center text-[24px] font-semibold leading-[24px] text-transparent">
              Organic Sales
            </p>
            <p className="text-center leading-[24px]">
              of organizations using talent assessment tools reported a
              reduction in cost-to-hire
            </p>
          </div>
          <div className="py-2">
            <h3 className="bg-gradient-to-l from-[#59D5E0] to-[#4CB9E7] bg-clip-text text-center text-[54px] font-bold leading-[54px] text-transparent">
              8+
            </h3>
            <p className="bg-gradient-to-l from-[#59D5E0] to-[#4CB9E7] bg-clip-text text-center text-[24px] font-semibold leading-[24px] text-transparent">
              Subsidiary Company
            </p>
            <p className="text-center leading-[24px]">
              of candidates said they prefer a hiring process that includes
              talent assessment tests
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col space-y-[42px]">
        <div className="container mx-auto">
          <h2 className="text-center text-[40px] font-bold leading-[48px]">
            Our Brands
          </h2>
          <div className="flex w-full justify-center">
            <p className="max-w-[936px] text-center text-[18px] leading-[27.9px]">
              In this fast-moving world,  we aim to make the world a better
              place to live in. We are determined to expand our brands across
              the continents while providing the best user experience for our
              customers.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div className="relative">
            <Image
              src={'/assets/cover-sohnne.png'}
              width={460}
              height={576}
              className="h-auto w-full object-cover object-center"
            />
            <div className="absolute inset-0 w-full bg-gradient-to-b from-[#66666600] to-[#0000009E]">
              <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center px-[31.5px] text-center">
                <Image
                  src={'/assets/logo-sohnne.svg'}
                  width={200}
                  height={80}
                />
                <p className="mt-[32px] max-w-[297px] text-center text-white">
                  Lorem ipsum dolor sit amet consectetur. Sed ultrices ut
                  viverra consectetur aliquam a ultricies lacinia. Hac sagittis
                  est lorem ipsum porttitor. Arcu dis eu velit massa volutpat
                  velit augue. Congue habitant pretium elementum nulla
                  adipiscing.
                </p>
                <a
                  href="#"
                  className="absolute bottom-[47px] flex items-center gap-x-[12px] text-[#4CB9E7]"
                >
                  <p>View more</p>
                  <span>
                    <FaArrowRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src={'/assets/cover-enigwatch.png'}
              width={460}
              height={576}
              className="h-auto w-full object-cover object-center"
            />
            <div className="absolute inset-0 w-full bg-gradient-to-b from-[#66666600] to-[#0000009E]">
              <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center px-[31.5px] text-center">
                <Image
                  src={'/assets/logo-enigwatch.svg'}
                  width={200}
                  height={80}
                />
                <p className="mt-[32px] max-w-[297px] text-center text-white">
                  Lorem ipsum dolor sit amet consectetur. Sed ultrices ut
                  viverra consectetur aliquam a ultricies lacinia. Hac sagittis
                  est lorem ipsum porttitor. Arcu dis eu velit massa volutpat
                  velit augue. Congue habitant pretium elementum nulla
                  adipiscing.
                </p>
                <a
                  href="#"
                  className="absolute bottom-[47px] flex items-center gap-x-[12px] text-[#4CB9E7]"
                >
                  <p>View more</p>
                  <span>
                    <FaArrowRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src={'/assets/cover-artdigest.png'}
              width={460}
              height={576}
              className="h-auto w-full object-cover object-center"
            />
            <div className="absolute inset-0 w-full bg-gradient-to-b from-[#66666600] to-[#0000009E]">
              <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center px-[31.5px] text-center">
                <Image
                  src={'/assets/logo-artdigest.svg'}
                  width={200}
                  height={80}
                />
                <p className="mt-[32px] max-w-[297px] text-center text-white">
                  Lorem ipsum dolor sit amet consectetur. Sed ultrices ut
                  viverra consectetur aliquam a ultricies lacinia. Hac sagittis
                  est lorem ipsum porttitor. Arcu dis eu velit massa volutpat
                  velit augue. Congue habitant pretium elementum nulla
                  adipiscing.
                </p>
                <a
                  href="#"
                  className="absolute bottom-[47px] flex items-center gap-x-[12px] text-[#4CB9E7]"
                >
                  <p>View more</p>
                  <span>
                    <FaArrowRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src={'/assets/cover-koizuma.png'}
              width={460}
              height={576}
              className="h-auto w-full object-cover object-center"
            />
            <div className="absolute inset-0 w-full bg-gradient-to-b from-[#66666600] to-[#0000009E]">
              <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center px-[31.5px] text-center">
                <Image
                  src={'/assets/logo-koizuma.svg'}
                  width={200}
                  height={80}
                />
                <p className="mt-[32px] max-w-[297px] text-center text-white">
                  Lorem ipsum dolor sit amet consectetur. Sed ultrices ut
                  viverra consectetur aliquam a ultricies lacinia. Hac sagittis
                  est lorem ipsum porttitor. Arcu dis eu velit massa volutpat
                  velit augue. Congue habitant pretium elementum nulla
                  adipiscing.
                </p>
                <a
                  href="#"
                  className="absolute bottom-[47px] flex items-center gap-x-[12px] text-[#4CB9E7]"
                >
                  <p>View more</p>
                  <span>
                    <FaArrowRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto flex flex-col space-y-[42px] py-[80px]">
        <h2 className="text-center text-[40px] font-bold leading-[48px]">
          Contact Us
        </h2>
        <div className="flex w-full justify-center">
          <p className="max-w-[936px] text-center text-[18px] leading-[27.9px]">
            Let your visitors know how to reach out to you, or learn more about
            a product or service. If you add a button, link it to your preferred
            email address.
          </p>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <p className="text-center font-semibold">Call us at</p>
            <p className="text-center">+62-811-3000-800</p>
          </div>
          <div>
            <p className="text-center font-semibold">Contact us at</p>
            <p className="text-center">support@equinoxcell.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}
