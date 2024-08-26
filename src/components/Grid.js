import useStore from "@/stores/useStore";
import Cell from "./Cell";

const Grid = () => {
  const { sheets, currentSheet } = useStore();
  const selectedCell = sheets[currentSheet]?.selectedCell;

  const rows = 100;
  const cols = 26;

  const selectedCol = selectedCell ? selectedCell.charAt(0) : "";
  const selectedRow = selectedCell ? parseInt(selectedCell.slice(1), 10) : null;

  console.log(selectedCol, selectedRow);

  const generateCells = () => {
    const cells = [];
    for (let row = 1; row <= rows; row++) {
      cells.push(
        <div className="flex" key={row}>
          <div
            className={` border border-gray-300 text-center w-12 min-w-12 h-7 sticky left-0 text-sm ${
              row === selectedRow ? "bg-blue-200" : "bg-white"
            }`}
          >
            {row}
          </div>
          {Array.from({ length: cols }, (_, colIndex) => {
            const cellId = `${String.fromCharCode(64 + colIndex + 1)}${row}`;
            return (
              <Cell
                key={cellId}
                id={cellId}
                selected={cellId === selectedCell}
              />
            );
          })}
        </div>
      );
    }
    return cells;
  };

  return (
    <div className="grid">
      <div className="flex sticky top-0 z-10 col-head h-7">
        <div className="bg-[#ebedef] border border-gray-300 border-b-[6px] border-r-[6px] flex-center w-12 min-w-12 sticky left-0"></div>
        {Array.from({ length: cols }, (_, colIndex) => {
          const cellId = `${String.fromCharCode(64 + colIndex + 1)}`;
          return (
            <div
              key={cellId}
              className={` border border-gray-300 flex-center w-24 min-w-24 text-sm ${
                cellId == selectedCol ? "bg-blue-200" : "bg-white"
              }`}
            >
              {cellId}
            </div>
          );
        })}
      </div>
      <div className="row-div">{generateCells()}</div>
    </div>
  );
};

export default Grid;
