import React from 'react';
import HeroBanner from '@/components/HeroBanner/page';

export const metadata = {
  title: 'Equinoxcell | About',
  description: 'If you care what about equinoxcell? just read the message here',
};

const About = () => {
  return (
    <div>
      <HeroBanner
        title={
          <span style={{ color: '#ffffff' }}>
            Innovating Goods for The{' '}
            <span style={{ color: '#59D5E0' }}>Greater Good</span>
          </span>
        }
        subtitle="Our talent assessments screen and identify the best candidates and make your hiring decisions faster, easier, and bias-free."
        imageUrl={'/assets/hero-image-about.png'}
        gradient={'left'}
      />
      <h1>About</h1>
    </div>
  );
};

export default About;
