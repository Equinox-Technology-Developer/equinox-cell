const HeroBanner = ({ title, subtitle, imageUrl, gradient }) => {
  const backgroundStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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
      <div
        style={{ ...backgroundStyle }}
        className="h-[425px] w-full object-cover object-center md:h-[768px] lg:h-[676px]"
      >
        <div
          className={`absolute inset-0 mt-[67px] h-[425px] w-full bg-gradient-to-l from-[#66666600] to-[#0000009E] md:h-[768px] lg:mt-[80px] lg:h-[676px] ${gradientClass}`}
        >
          <div className="absolute inset-0 flex h-full w-full items-center justify-center text-center">
            <div className="mx-auto max-w-[1086px] space-y-8 px-[24px] md:px-0">
              <h1 className="text-[40px] font-bold leading-[48px] text-white">
                {title}
              </h1>
              <p className="font-regular text-center text-[14px] leading-[27.9px] text-white md:text-[20px] lg:text-start">
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
