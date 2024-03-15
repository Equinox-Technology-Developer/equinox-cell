import React from 'react'
import Image from 'next/image'

const Career = () => {
  return (
    // Banner Hero Career Page
    <section className='mx-auto'>
      <Image
        src={'/assets/SectionHeroImage.png'}
        width={1920}
        height={30}
        alt="logo"
      />
    </section>
  )
}

export default Career