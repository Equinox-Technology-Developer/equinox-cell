import { FaSearch } from 'react-icons/fa';

const YourComponent = ({ searchQuery, handleSearchInputChange }) => {
  return (
    <div className="relative flex justify-between">
      <input
        className="text-black-300 w-[646px] rounded-[40px] border-[1px] border-[#cecece] bg-[#F4F4F4] px-[12px] py-2 pr-[24px] transition-all duration-200 ease-in-out focus:border-[#1E86FF] focus:outline-none"
        type="text"
        placeholder="Search Job"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 flex -translate-y-1/2 transform cursor-pointer items-center justify-center gap-2 rounded-[81.5px] bg-gradient-to-l from-primary-500 to-secondary-500 px-3 py-[6px] text-white"
      >
        <FaSearch />
        <p className="text-[16px]">Search</p>
      </button>
    </div>
  );
};

export default YourComponent;
