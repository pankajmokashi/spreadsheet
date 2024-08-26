import useStore from "@/stores/useStore";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { useState } from "react";

function SearchIcon() {
  const { sheets, currentSheet, setSelectedCell } = useStore();
  const [searchValue, setSearchValue] = useState("");

  const currentSheetData = sheets[currentSheet] || {};
  const { cells } = currentSheetData;

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    const cellId = Object.keys(cells).find(
      (key) => cells[key].value === searchValue
    );

    if (cellId === "undefined") {
      setSelectedCell("A1");
    } else {
      setSelectedCell(cellId);
    }
    setSearchValue("");
  };

  return (
    <Menu as="div" className="inline-block text-left">
      <div>
        <MenuButton
          className={`px-2 flex-center rounded cursor-pointer hover:bg-[#e4e5e6]`}
        >
          <span className="material-symbols-outlined text-gray-700 text-xl">
            search
          </span>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute left-10 z-20 p-1 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition"
      >
        <div className="flex gap-1 p-1">
          <input
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search"
            className="border border-[#cccdce] rounded text-xs outline-none px-1"
          />
          <button
            onClick={handleSearch}
            className="text-xs hover:bg-[#e4e5e6] p-1 px-2 rounded"
          >
            Search
          </button>
        </div>
      </MenuItems>
    </Menu>
  );
}

export default SearchIcon;
