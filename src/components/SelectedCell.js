import useStore from "@/stores/useStore";
import { useEffect, useState } from "react";

const SelectedCell = () => {
  const { sheets, currentSheet, setSelectedCell } = useStore();
  const [cell, setCell] = useState("");

  const currentSheetData = sheets[currentSheet] || {};
  const selectedCell = currentSheetData.selectedCell;

  useEffect(() => {
    setCell(selectedCell);
  }, [selectedCell]);

  const handleChange = (event) => {
    setCell(event.target.value);
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      setSelectedCell(cell);
    }
  };

  const handleBlur = () => {
    setSelectedCell(cell);
  };

  return (
    <input
      value={cell}
      onChange={handleChange}
      onKeyUp={handleEnterKeyPress}
      onBlur={handleBlur}
      className="w-full h-full px-2 hover:bg-[#edeef0] text-xs rounded-l outline-blue-500"
    />
  );
};

export default SelectedCell;
