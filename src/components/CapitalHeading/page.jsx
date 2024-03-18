const CapitalizeHeading = ({ children }) => {
  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <h2 className="text-[40px] leading-[48px]">
      {capitalizeFirstLetter(children)}
    </h2>
  );
};

export default CapitalizeHeading;
