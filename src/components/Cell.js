import useStore from "@/stores/useStore";
import { useEffect, useState } from "react";

const Cell = ({ id, selected }) => {
  const { sheets, currentSheet, setSelectedCell, updateCell } = useStore();
  const [value, setValue] = useState("");

  const currentSheetData = sheets[currentSheet] || {};
  const { cells } = currentSheetData;

  useEffect(() => {
    setValue(cells[id]?.value || "");
  }, [id, cells]);

  const handleClick = () => {
    setSelectedCell(id);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    updateCell(id, event.target.value);
  };

  const formattingClasses = cells[id]?.formatting?.join(" ") || "";

  return (
    <div
      className={`px-1 border text-center w-24 min-w-24 text-sm h-7 ${
        selected ? "border-2 border-blue-600" : "border-gray-300"
      }`}
      onClick={handleClick}
    >
      <input
        value={value}
        onChange={handleChange}
        className={`w-full h-full outline-none ${formattingClasses} flex`}
      />
    </div>
  );
};

export default Cell;
