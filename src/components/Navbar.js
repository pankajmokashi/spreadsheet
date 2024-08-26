import Image from "next/image";
import { useState } from "react";
import Toolbar from "./Toolbar";
import LargeIcons from "./LargeIcons";
import SheetNameInput from "./SheetNameInput";

const menu = [
  { name: "File" },
  { name: "Edit" },
  { name: "View" },
  { name: "Insert" },
  { name: "Format" },
  { name: "Data" },
  { name: "Tools" },
  { name: "Extensions" },
  { name: "Help" },
];

export default function Navbar() {


  return (
    <nav className="bg-[#F9FBFD] h-28">
      <div className="px-4 py-1 flex flex-col gap-1">
        <div className="h-14 flex ">
          <div className="h-14 w-10 min-w-10 flex-center">
            <Image
              src={
                "https://storage.googleapis.com/googwebreview.appspot.com/grow-ext-cloud-images-uploads/7uffzv9dk4sn-oKltkiyx7pJHtXJFSwmNs-77ef39278e12bebc75a572fef3e18a20-Sheets_TemplateTileSimple_Logo.svg"
              }
              alt="logo"
              width={150}
              height={150}
              className="w-full"
            />
          </div>
          <div className="h-14 flex flex-col overflow-x-auto nav-scroll">
            <div className=" h-7 flex gap-1 items-center">
              <div className="text-[#444746]">
                <SheetNameInput />
              </div>
              <div className="px-1 hover:bg-[#edeef0] flex-center rounded-full cursor-pointer">
                <span className="material-symbols-outlined text-gray-500 text-xl">
                  star
                </span>
              </div>
              <div className="px-1 hover:bg-[#edeef0] flex-center rounded-full cursor-pointer">
                <span className="material-symbols-outlined text-gray-500 text-xl">
                  drive_file_move
                </span>
              </div>
              <div className="px-1 hover:bg-[#edeef0] flex-center rounded-full cursor-pointer">
                <span className="material-symbols-outlined text-gray-500 text-xl">
                  cloud_done
                </span>
              </div>
            </div>
            <div className="h-7 flex items-center">
              {menu.map((item) => (
                <div
                  key={item.name}
                  className="text-sm px-2 h-full hover:bg-[#edeef0] cursor-pointer flex-center rounded"
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
          <div className=" flex items-center pl-4 flex-grow justify-end gap-2 sticky right-0 bg-[#F9FBFD]">
            <LargeIcons name1="history" addClass="hidden lg:flex" />
            <LargeIcons name1="cloud_done" addClass="hidden lg:flex" />
            <LargeIcons
              name1="videocam"
              name2="keyboard_arrow_down"
              addClass="px-4 hidden lg:flex"
            />
            <LargeIcons
              name1="person_add"
              addClass="bg-[#B2D7EF] hidden lg:flex"
            />
            <LargeIcons name1="person" addClass="bg-[#e4e4e4] flex-center" />
          </div>
        </div>
        <Toolbar />
      </div>
    </nav>
  );
}
