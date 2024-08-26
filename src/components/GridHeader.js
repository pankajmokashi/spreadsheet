import React from "react";
import SelectedCell from "./SelectedCell";
import CommonInput from "./CommonInput";

function GridHeader() {
  
  return (
    <div className="row h-7 px-2 flex items-center">
      <div className="w-full h-5 flex gap-2">
        <div className="w-20 min-w-20 h-full hover:bg-[#edeef0] rounded flex">
          <SelectedCell />
          <div className="w-5 h-full flex-center cursor-pointer">
            <span className="material-symbols-outlined text-gray-600">
              arrow_drop_down
            </span>
          </div>
        </div>
        <div className="border-l border-slate-400"></div>
        <div className="flex-grow flex gap-2 items-center">
          <div className="w-5 h-full flex-center">
            <span className="material-symbols-outlined text-gray-400 text-lg">
              function
            </span>
          </div>
          <div className="flex-grow h-full flex items-center">
            <CommonInput />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridHeader;
