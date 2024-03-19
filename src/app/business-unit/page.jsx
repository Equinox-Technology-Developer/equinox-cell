'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function BusinessUnitPage() {
  const [hoverState, setHoverState] = useState({
    logoSohnne: false,
    logoEnigwatch: false,
    logoArtdigest: false,
    logoKoizuma: false,
    logoMillionBloom: false,
    logo10Expert: false,
    logoThePanelHub: false,
    logoEternityFlower: false,
    logoVertuLiving: false,
  });

  const handleHover = (key) => {
    setHoverState({
      ...hoverState,
      [key]: !hoverState[key],
    });
  };

  const products = [
    {
      name: 'Sohnne',
      img: '/assets/business-unit-sohnne.png',
      description:
        'Sohnne, born in the heart of San Francisco, redefines the essence of furniture and lifestyle. With a core belief that designer furniture is a right, not a privilege, we unite a team of expert engineers, innovative architects, and imaginative designers. Together, we craft not just furniture, but experiences, focusing on supreme quality and distinctive products. Embracing Purposeful Design and Thoughtful Living, Sohnne is where craftsmanship meets artistry in every creation. ',
      url: 'https://sohnne.com/',
    },
    {
      name: 'Enigwatch',
      img: '/assets/business-unit-enigwatch.png',
      description:
        'As a company, Enigwatch has spent the preceding three decades perfecting its wares via meticulous planning, precise execution, the use of only the highest quality materials, and an exceptional eye for aesthetics. By combining robust safety measures with technical know-how and a splash of ingenuity, Enigwatch has developed an expertise in creating designs that will stand the test of time.',
      url: 'https://enigwatch.com/',
    },
    {
      name: 'Artdigest',
      img: '/assets/business-unit-artdigest.png',
      description:
        'Designed with the idea that a house & office should be comfortable and expressive. All of our goods are expertly crafted and put through stringent quality testing. The luxury home décor brand Artdigest promises a concept that finds a balance between artistic expression and superior functionality.',
      url: 'https://artdigest.co/',
    },
    {
      name: '10Expert',
      img: '/assets/business-unit-10expert.png',
      description:
        'At 10Expert, our primary mission is to help shoppers navigate the internet in the most informed and cost-effective way. Our team of experienced journalists and product experts has developed a rigorous testing process to identify the most reliable and useful products available. We rigorously test new products, interview trusted sources, and consult industry insiders to ensure that all products featured on 10Expert are top-tier. In other words, we use our prodigious expertise as your personal shopping advisor to make sure you get only the best value for your money.',
      url: 'https://10expert.com/',
    },
    {
      name: 'Million Bloom',
      img: '/assets/business-unit-million-bloom.png',
      description:
        'America and all its civilising advancements are always inspiring. Having lived in America for many years, Olivia Kurniawan experienced how easy it is to buy beautiful flowers online. Armed with only her mobile phone and a mobile application, she can easily buy a bouquet that is delivered straight to her doorstep with fresh and charming flowers. ',
      url: 'https://millionbloom.com/',
    },
    {
      name: 'Koizuma',
      img: '/assets/business-unit-koizuma.png',
      description:
        "Koizuma is a brand dedicated to supporting all women's beauty. Our mission is to help every woman feel confident and beautiful in her own skin. We are passionate about designing devices that grant women their wish for smooth, hair-free skin.",
      url: 'https://koizuma.com/',
    },
    {
      name: 'The Panel-hub',
      img: '/assets/business-unit-the-panel-hub.png',
      description:
        'Our founders, Joseph and Elizabeth Davis, are the heart and soul behind our brand. Their story is one of love, not just for each other but for the environment and beautiful, functional design. Joseph, an architect with an eye for minimalist elegance, and Elizabeth, an environmental scientist with a passion for sustainable practices, met during a community project focused on eco-friendly housing. Their connection was instant, both personally and professionally. They shared a vision of creating a home that was not only aesthetically pleasing but also environmentally responsible. This shared dream laid the foundation for The Panel Hub®.',
      url: 'https://thepanelhub.com/',
    },
    {
      name: 'Eternity Flowers',
      img: '/assets/business-unit-eternity-flowers.png',
      description:
        "Eternity Flower began as a humble venture with a profound vision: to celebrate the enduring beauty of flowers without the frequent necessity of store visits. Our early years were spent establishing an online store, nurturing this dream in a quaint corner of a bustling city in the US. In 2015, our ambition led us to California's fertile soil where we cultivated our own rose garden, transforming us from a simple flower shop to creators of enduring beauty.",
      url: 'https://eternityflowers.com/',
    },
    {
      name: 'Vertu Living',
      img: '/assets/business-unit-vertu-living.png',
      description:
        'Vertu Living is a furniture & lifestyle company. Made with the belief that designer furniture should be accessible to everyone. Vertu Living is a team of engineers, architects, and designers who work together to offer designer furniture and one-of-a-kind products with the best quality and experience. We believe in Purposeful Design and thoughtful Living.',
      url: 'https://vertuliving.com/',
    },
  ];

  return (
    <main className="min-h-screen">
      <section className="h-full w-full">
        <Image
          src={'/assets/hero-image-business-unit.png'}
          width={1440}
          height={676}
          alt="hero-image"
          className="h-[676px] w-full object-cover object-center"
        />
        <div className="absolute inset-0 mt-[80px] h-[676px] w-full bg-gradient-to-b from-[#66666600] to-[#0000009E]">
          <div className="absolute inset-0 flex h-[676px] w-full items-center justify-center text-center">
            <div className="mx-auto max-w-[1086px] space-y-8">
              <h1 className="text-[40px] font-bold leading-[48px] text-white">
                Bussiness Unit
              </h1>
              <p className="font-regular text-[20px] leading-[27.9px] text-white">
                Our talent assessments screen and identify the best candidates
                and make your hiring decisions faster, easier, and bias-free.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F4F4F4] py-[60px]">
        <div className="container mx-auto flex w-full justify-center">
          <p className=" w-[934px] text-center text-[18px] leading-[27.9px]">
            Lorem ipsum dolor sit amet consectetur. Sed ultrices ut viverra
            consectetur aliquam a ultricies lacinia. Hac sagittis est lorem
            ipsum porttitor. Arcu dis eu velit massa volutpat velit augue.
            Congue habitant pretium elementum nulla adipiscing.
          </p>
        </div>
      </section>
      <section className="container mx-auto py-[60px]">
        <div className="flex flex-row flex-wrap justify-center gap-x-[32px]">
          <Image
            src={
              hoverState.logoSohnne
                ? '/assets/logo-sohnne-black.svg'
                : '/assets/logo-sohnne-gray.svg'
            }
            width={200}
            height={80}
            onMouseEnter={() => handleHover('logoSohnne')}
            onMouseLeave={() => handleHover('logoSohnne')}
            alt="logo-sohnne"
            className="trasition-all duration-300 ease-in-out"
          />
          <Image
            src={
              hoverState.logoEnigwatch
                ? '/assets/logo-enigwatch-black.svg'
                : '/assets/logo-enigwatch-gray.svg'
            }
            width={200}
            height={80}
            onMouseEnter={() => handleHover('logoEnigwatch')}
            onMouseLeave={() => handleHover('logoEnigwatch')}
            alt="logo-sohnne"
            className="trasition-all duration-300 ease-in-out"
          />
          <Image
            src={
              hoverState.logoArtdigest
                ? '/assets/logo-artdigest-black.svg'
                : '/assets/logo-artdigest-gray.svg'
            }
            width={200}
            height={80}
            onMouseEnter={() => handleHover('logoArtdigest')}
            onMouseLeave={() => handleHover('logoArtdigest')}
            alt="logo-sohnne"
            className="trasition-all duration-300 ease-in-out"
          />
          <Image
            src={
              hoverState.logoKoizuma
                ? '/assets/logo-koizuma-black.svg'
                : '/assets/logo-koizuma-gray.svg'
            }
            width={200}
            height={80}
            onMouseEnter={() => handleHover('logoKoizuma')}
            onMouseLeave={() => handleHover('logoKoizuma')}
            alt="logo-sohnne"
            className="trasition-all duration-300 ease-in-out"
          />
          <Image
            src={
              hoverState.logoMillionBloom
                ? '/assets/logo-million-bloom-black.svg'
                : '/assets/logo-million-bloom-gray.svg'
            }
            width={200}
            height={80}
            onMouseEnter={() => handleHover('logoMillionBloom')}
            onMouseLeave={() => handleHover('logoMillionBloom')}
            alt="logo-sohnne"
            className="trasition-all duration-300 ease-in-out"
          />
          <Image
            src={
              hoverState.logo10Expert
                ? '/assets/logo-10-expert-black.svg'
                : '/assets/logo-10-expert-gray.svg'
            }
            width={200}
            height={80}
            onMouseEnter={() => handleHover('logo10Expert')}
            onMouseLeave={() => handleHover('logo10Expert')}
            alt="logo-sohnne"
            className="trasition-all duration-300 ease-in-out"
          />
          <Image
            src={
              hoverState.logoThePanelHub
                ? '/assets/logo-the-panel-hub-black.svg'
                : '/assets/logo-the-panel-hub-gray.svg'
            }
            width={200}
            height={80}
            onMouseEnter={() => handleHover('logoThePanelHub')}
            onMouseLeave={() => handleHover('logoThePanelHub')}
            alt="logo-sohnne"
            className="trasition-all duration-300 ease-in-out"
          />
          <Image
            src={
              hoverState.logoEternityFlower
                ? '/assets/logo-eternity-flower-black.svg'
                : '/assets/logo-eternity-flower-gray.svg'
            }
            width={200}
            height={80}
            onMouseEnter={() => handleHover('logoEternityFlower')}
            onMouseLeave={() => handleHover('logoEternityFlower')}
            alt="logo-sohnne"
            className="trasition-all duration-300 ease-in-out"
          />
          <Image
            src={
              hoverState.logoVertuLiving
                ? '/assets/logo-vertu-living-black.svg'
                : '/assets/logo-vertu-living-gray.svg'
            }
            width={200}
            height={80}
            onMouseEnter={() => handleHover('logoVertuLiving')}
            onMouseLeave={() => handleHover('logoVertuLiving')}
            alt="logo-sohnne"
            className="trasition-all duration-300 ease-in-out"
          />
        </div>
      </section>
      <section className="h-full w-full">
        {products.map((product, index) => (
          <div key={index} className="py-[60px]">
            <Image
              src={product.img}
              width={1440}
              height={400}
              className="h-[400px] w-full object-cover object-center"
            />
            <div className="container mx-auto mt-[32px] space-y-[24px]">
              <h2 className="text-center text-[40px] font-semibold leading-[27.9px] ">
                {product.name}
              </h2>
              <p className="text-center text-[18px] leading-[27.9px]">
                {product.description}
              </p>
              <div className="flex w-full justify-center">
                <Link href={product.url}>
                  <button className="gradient-primary w-fit rounded-[40px] px-[24px] py-[6px] text-center text-[18px] leading-[27.9px] text-white">
                    Visit & Shop
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
