import { FaSearch } from 'react-icons/fa';

const YourComponent = ({ searchQuery, handleSearchInputChange }) => {
  return (
    <div className="relative flex flex-col items-center justify-center bg-gray-200 px-16 py-8">
      <div className="relative">
        <input
          className="text-black-300 w-[313px] rounded-[40px] border-[1px] border-[#cecece] bg-[#F4F4F4] px-[12px] py-2 pr-[80px] transition-all duration-200 ease-in-out focus:border-[#1E86FF] focus:outline-none xl:w-[646px]"
          type="text"
          placeholder="Search Job"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <div className="absolute right-2 top-[7px] flex items-center justify-center ">
          <div className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 px-3 py-1 text-white">
            <FaSearch className="" />
            <p className="text-sm text-white">Search</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
