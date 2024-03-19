const HeroBanner = ({ title, subtitle, imageUrl, gradient }) => {
  const backgroundStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '700px',
  };

  let gradientClass = '';
  switch (gradient) {
    case 'bottom':
      gradientClass = 'bg-gradient-to-b from-[#66666600] to-[#0000009E]';
      break;
    case 'top':
      gradientClass = 'bg-gradient-to-t from-[#66666600] to-[#0000009E]';
      break;
    case 'right':
      gradientClass = 'bg-gradient-to-r from-[#66666600] to-[#0000009E]';
      break;
    case 'left':
      gradientClass = 'bg-gradient-to-l from-[#66666600] to-[#0000009E]';
      break;
    default:
      gradientClass = '';
  }

  return (
    <section className="h-full w-full">
      <div style={backgroundStyle}>
        <div
          className={`absolute inset-0 mt-[80px] h-[700px] w-full ${gradientClass}`}
        >
          <div className="absolute inset-0 flex h-full w-full items-center justify-center text-center">
            <div className="mx-auto max-w-[1086px] space-y-8">
              <h1 className="text-[40px] font-bold leading-[48px] text-white">
                {title}
              </h1>
              <p className="font-regular text-[20px] leading-[27.9px] text-white">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
