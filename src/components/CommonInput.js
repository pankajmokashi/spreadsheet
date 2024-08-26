import useStore from "@/stores/useStore";
import { useEffect, useState } from "react";

const CommonInput = () => {
  const { sheets, currentSheet, updateCell } = useStore();
  const [value, setValue] = useState("");

  const currentSheetData = sheets[currentSheet] || {};
  const selectedCell = currentSheetData.selectedCell;
  const { cells } = currentSheetData;

  useEffect(() => {
    setValue(cells[selectedCell]?.value || "");
  }, [selectedCell, cells]);

  const handleChange = (event) => {
    setValue(event.target.value);
    updateCell(selectedCell, event.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      className="w-full h-full outline-none text-sm"
    />
  );
};

export default CommonInput;
