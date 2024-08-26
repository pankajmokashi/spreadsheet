import React, { useState } from "react";

function SheetNameInput() {
  const [sheetName, setSheetname] = useState("Untitled spreadsheet");

  const handleBlur = () => {
    if (!sheetName.trim()) {
      setSheetname("Untitled spreadsheet");
    }
  };

  const handleClick = (e) => {
    e.target.select();
  };
  return (
    <input
      id="sheet-name"
      name="sheet-name"
      type="text"
      autoComplete="off"
      spellCheck="off"
      value={sheetName}
      onClick={(e) => handleClick(e)}
      onChange={(e) => setSheetname(e.target.value)}
      onBlur={handleBlur}
      className="block px-2 text-sm sm:text-base max-w-44 rounded-md border border-[#F9FBFD] hover:border-[#a3a5a7] bg-[#F9FBFD] outline-[#5757ff]"
    />
  );
}

export default SheetNameInput;
