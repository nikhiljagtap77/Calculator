const Button = ({ name, clickHandler, orange, wide }) => {
  const handleClick = (e) => {
    clickHandler(e.target.value);
  };
  return (
    <div
      className={`flex justify-center items-center w-full ${
        wide ? "col-span-2" : ""
      }`}
    >
      <button
        onClick={handleClick}
        value={name}
        className={`w-full text-black p-2 text-sm sm:text-base ${
          orange
            ? "bg-orange-700 hover:bg-orange-500 focus:bg-orange-300"
            : "bg-gray-200 hover:bg-gray-400"
        } border border-gray-800 overflow-hidden`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
