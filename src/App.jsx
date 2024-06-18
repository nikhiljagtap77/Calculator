import { useState } from "react";
import Display from "./Components/Display";
import ButtonPanel from "./Components/ButtonPanel";
import calculate from "./logic/calculate";

export default function App() {
  const [state, SetState] = useState({
    next: null,
    total: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    SetState(calculate(state, buttonName));
  };

  return (
    <div className="max-container flex justify-center items-center flex-col gap-1 p-4">
      <div className="border-4 border-gray-500 rounded-lg p-4">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-2xl text-black mb-4 ">
          CALCULATOR
        </h1>
        <Display value={state.next || state.total || 0} />
        <ButtonPanel handleClick={handleClick} />
      </div>
    </div>
  );
}
