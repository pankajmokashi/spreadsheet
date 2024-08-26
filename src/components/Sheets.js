import useStore from "@/stores/useStore";

const Sheets = () => {
  const { sheets, currentSheet, setCurrentSheet, addSheet, clearAllData } =
    useStore();

  const generateUniqueSheetName = () => {
    let index = 1;
    let newSheetName = `Sheet${index}`;
    while (sheets[newSheetName]) {
      index += 1;
      newSheetName = `Sheet${index}`;
    }
    return newSheetName;
  };

  const handleAddSheet = () => {
    const sheetName = generateUniqueSheetName();
    addSheet(sheetName);
    setCurrentSheet(sheetName);
  };

  return (
    <div className="flex gap-2 items-center h-9 max-h-9 pl-16 tool-scroll">
      <div
        className="w-7 hover:bg-[#dddee0] flex-center rounded-full lg:flex cursor-pointer"
        onClick={handleAddSheet}
      >
        <span className="material-symbols-outlined text-gray-700 text-xl">
          add
        </span>
      </div>
      <div className=" w-7 hover:bg-[#dddee0] flex-center rounded-full lg:flex cursor-pointer">
        <span className="material-symbols-outlined text-gray-700 text-xl">
          menu
        </span>
      </div>
      <div className="h-full flex gap-2 font-medium flex-grow mr-2">
        {Object.keys(sheets).map((sheetName) => (
          <div
            key={sheetName}
            className={`flex items-center px-2 cursor-pointer text-sm ${
              sheetName === currentSheet ? "bg-[#E1E9F7] text-[#0B57D0]" : ""
            }`}
            onClick={() => setCurrentSheet(sheetName)}
          >
            <span>{sheetName}</span>
            <span className="material-symbols-outlined hover:bg-[#dddee0] rounded-full">
              arrow_drop_down
            </span>
          </div>
        ))}
      </div>
      <div
        className="w-7 min-w-7 hover:bg-[#dddee0] flex-center rounded-full lg:flex cursor-pointer mr-4"
        onClick={clearAllData}
      >
        <span className="material-symbols-outlined text-gray-700 text-xl">
          delete
        </span>
      </div>
    </div>
  );
};

export default Sheets;
