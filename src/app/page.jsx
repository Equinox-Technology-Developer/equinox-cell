import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="container mx-auto flex h-[76px] items-center justify-between py-[23px]">
        <Image
          src={'/assets/Equinox Technology - Logo 2.png'}
          width={130}
          height={30}
          alt="logo"
        />
        <button className="rounded-[40px] bg-[#4CB9E7] px-[20px] py-[8px] text-white">
          Home
        </button>
      </nav>
      <section className="">
        <Image
          src={'/assets/HeroImage.png'}
          width={1440}
          height={676}
          alt="hero-image"
          className="absolute left-0 top-0 z-[-1] mt-[76px] h-[676px] w-full object-cover object-center"
        />
        <div className="absolute h-[676px] w-full bg-gradient-to-b from-[#66666600] to-[#0000009E]"></div>
        <div className="absolute flex h-[676px] w-full items-center justify-center text-center">
          <div className="mx-auto max-w-[1086px] space-y-8">
            <h1 className="text-[40px] font-bold leading-[48px] text-white">
              Accelerate Your Career with Us:{' '}
              <span className="text-[#59D5E0]">Fast Track </span>,{' '}
              <span className="text-[#59D5E0]">Big Bonuses </span>, and
              <span className="text-[#59D5E0]"> Elite Benefits </span> Await
              Exceptional Talent!
            </h1>
            <p className="font-regular text-[20px] leading-[27.9px] text-white">
              Our talent assessments screen and identify the best candidates and
              make your hiring decisions faster, easier, and bias-free.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
