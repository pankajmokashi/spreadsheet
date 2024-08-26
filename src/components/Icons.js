
const Icons = ({ name, onClick, selected }) => {
  return (
    <div
      onClick={onClick}
      className={`px-2 flex-center rounded cursor-pointer ${
        selected ? "bg-blue-200" : "hover:bg-[#e4e5e6]"
      }`}
    >
      <span className="material-symbols-outlined text-gray-700 text-lg">
        {name}
      </span>
    </div>
  );
};
export default Icons;