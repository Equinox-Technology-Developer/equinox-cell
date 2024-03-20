import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: '404 Not Found - Equinoxcell',
  description: 'Page not found',
};

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-start">
      <Image src="/assets/404.png" alt="404" width={754} height={754} />
      <button className="rounded-[40px] bg-secondary-500 px-[20px] py-[8px] text-[18px] font-semibold leading-[27.9px] text-white">
        <a href="/">Back Home</a>
      </button>
    </div>
  );
}
