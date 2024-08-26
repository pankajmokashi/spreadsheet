import useStore from "@/stores/useStore";
import React from "react";
import Icons from "./Icons";
import SearchIcon from "./SearchIcon";

const Toolbar = () => {
  const { currentSheet, sheets, updateCell, undo, redo } = useStore();

  const currentSheetData = sheets[currentSheet] || {};
  const { cells } = currentSheetData;
  const selectedCell = currentSheetData.selectedCell;
  const currentFormatting = cells[selectedCell]?.formatting || [];

  const handleFormattingClick = (format) => {
    let updatedFormatting = [...currentFormatting];

    const alignmentFormats = ["text-left", "text-center", "text-right"];
    if (alignmentFormats.includes(format)) {
      updatedFormatting = updatedFormatting.filter(
        (f) => !alignmentFormats.includes(f)
      );
    }

    if (updatedFormatting.includes(format)) {
      updatedFormatting = updatedFormatting.filter((f) => f !== format);
    } else {
      updatedFormatting.push(format);
    }
    updateCell(selectedCell, undefined, updatedFormatting);
  };

  const isFormatSelected = (format) => currentFormatting.includes(format);

  return (
    <div className="bg-[#EDF2FA] h-10 rounded-full flex items-center px-4 gap-1 tool-scroll">
      <div className="flex items-center gap-1">
        <SearchIcon />
        <Icons name="undo" onClick={undo} />
        <Icons name="redo" onClick={redo} />
        <Icons name="print" />
        <Icons name="imagesearch_roller" />
      </div>
      <div className="h-6 border-l-2 border-slate-400 hidden sm:flex"></div>
      <div className="items-center gap-1 hidden sm:flex">
        <Icons name="attach_money" />
        <Icons name="percent" />
        <Icons name="decimal_decrease" />
        <Icons name="decimal_increase" />
        <Icons name="123" />
      </div>
      <div className="h-6 border-l-2 border-slate-400 hidden md:flex"></div>
      <div className="items-center gap-1 hidden md:flex">
        <Icons
          name="format_bold"
          onClick={() => handleFormattingClick("font-medium")}
          selected={isFormatSelected("font-medium")}
        />
        <Icons
          name="format_italic"
          onClick={() => handleFormattingClick("italic")}
          selected={isFormatSelected("italic")}
        />
        <Icons
          name="strikethrough_s"
          onClick={() => handleFormattingClick("line-through")}
          selected={isFormatSelected("line-through")}
        />
        <Icons name="format_color_text" />
        <Icons name="format_color_fill" />
      </div>
      <div className="h-6 border-l-2 border-slate-400 hidden lg:flex"></div>
      <div className="items-center gap-1 hidden lg:flex">
        <Icons name="border_all" />
        <Icons name="cell_merge" />
        <Icons
          name="format_align_left"
          onClick={() => handleFormattingClick("text-left")}
          selected={isFormatSelected("text-left")}
        />
        <Icons
          name="format_align_justify"
          onClick={() => handleFormattingClick("text-center")}
          selected={isFormatSelected("text-center")}
        />
        <Icons
          name="format_align_right"
          onClick={() => handleFormattingClick("text-right")}
          selected={isFormatSelected("text-right")}
        />
      </div>
      <div className="h-6 border-l-2 border-slate-400 hidden xl:block"></div>
      <div className="items-center gap-1 hidden xl:flex">
        <Icons name="vertical_align_top" />
        <Icons name="vertical_align_center" />
        <Icons name="vertical_align_bottom" />
        <Icons name="format_text_overflow" />
        <Icons name="format_text_wrap" />
        <Icons name="format_text_clip" />
      </div>
      <div className="h-6 border-l-2 border-slate-400 hidden"></div>
      <div className="items-center gap-1 hidden">
        <Icons name="link" />
        <Icons name="add_comment" />
        <Icons name="insert_chart" />
        <Icons name="filter_alt" />
        <Icons name="functions" />
      </div>
    </div>
  );
};

export default Toolbar;
