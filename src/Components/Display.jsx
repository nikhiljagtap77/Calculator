const Display = ({ value }) => {
  return (
    <div className="min-w-48 min-h-10 mt-6 border-2 rounded border-black bg-white">
      <h4 className="text-black text-right px-2 text-xl">{value}</h4>
    </div>
  );
};

export default Display;
