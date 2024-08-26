import React from "react";

function LargeIcons({ name1, name2, addClass }) {
  return (
    <div
      className={`p-2.5 hover:bg-[#edeef0] rounded-full cursor-pointer ${addClass}`}
    >
      <span className="material-symbols-outlined text-gray-700">{name1}</span>
      <span className="material-symbols-outlined text-gray-700">{name2}</span>
    </div>
  );
}

export default LargeIcons;
