import HeroBanner from '@/components/HeroBanner/page';

export default function ContactPage() {
  return (
    <div>
      <HeroBanner
        title={<span style={{ color: '#ffffff' }}>Contact</span>}
        subtitle="Our talent assessments screen and identify the best candidates and make your hiring decisions faster, easier, and bias-free."
        imageUrl={'/assets/hero-image-contact.png'}
        gradient={'left'}
      />
      <h1>About</h1>
    </div>
  );
}
