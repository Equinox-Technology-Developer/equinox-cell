const CapitalizeHeading = ({ children }) => {
  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <h2 className="text-[24px] leading-[48px] md:text-[40px]">
      {capitalizeFirstLetter(children)}
    </h2>
  );
};

export default CapitalizeHeading;
