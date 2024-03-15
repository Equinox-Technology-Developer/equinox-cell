import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">

      <section className="h-full w-full">
        <Image
          src={'/assets/HeroImage.png'}
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
            <a href="/about">

            See more
            </a>
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
            <a href="/about">

            See more
            </a>
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
    </main>
  );
}
