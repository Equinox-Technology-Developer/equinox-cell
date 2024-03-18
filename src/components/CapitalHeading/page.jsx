const CapitalizeHeading = ({ children }) => {
  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return <h1>{capitalizeFirstLetter(children)}</h1>;
};

export default CapitalizeHeading;
