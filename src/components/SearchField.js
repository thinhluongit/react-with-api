import { useContext, useState } from "react";
import { ImageContext } from "../App";

const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
    handleButtonSearch();
  };

  const handleEnterSearch = (event) => {
    if (event.key === "Enter") handleButtonSearch();
    setSearchImage(setSearchValue);
  };

  const handleButtonSearch = () => {
    fetchData(
      `search/photos?page=1&query=${searchValue}&client_id=E5jdH79V41lyawttDtgi_7P9XmL9odpVpiqo_P8zV2U`
    );
    setSearchValue("");
  };
  return (
    <div className="flex">
      <input
        className="bg-gray-50 border border-gray-300 text-sm w-full
        indent-2 p-2.5 outline-none focus:border-blue-500
        focus:ring-2 rounded-tl rounded-bl"
        type="search"
        placeholder="Search..."
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
      />
      <button
        onClick={handleButtonSearch}
        className="bg-blue-600 px-6 py-2.5 text-white">
        Search
      </button>
    </div>
  );
};

export default SearchField;
