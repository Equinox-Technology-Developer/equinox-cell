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
        title="Innovating Goods for The Greater Good"
        subtitle="Our talent assessments screen and identify the best candidates and make your hiring decisions faster, easier, and bias-free."
        highlightedWord="Greater Good"
        imageUrl={'/assets/about-image.png'}
      />
      <h1>About</h1>
    </div>
  );
};

export default About;
