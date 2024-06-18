import Button from "./Button";
const ButtonPanel = ({ handleClick }) => {
  return (
    <div className="border-2 rounded-md border-black min-w-48 max-w-48 mt-2">
      <div className="grid grid-cols-4 gap-2 px-2 mt-2">
        <Button name="AC" clickHandler={handleClick} />
        <Button name="+/-" clickHandler={handleClick} />
        <Button name="%" clickHandler={handleClick} />
        <Button name="÷" clickHandler={handleClick} orange />
      </div>
      <div className="grid grid-cols-4 gap-2 px-2 mt-2">
        <Button name="7" clickHandler={handleClick} />
        <Button name="8" clickHandler={handleClick} />
        <Button name="9" clickHandler={handleClick} />
        <Button name="x" clickHandler={handleClick} orange />
      </div>
      <div className="grid grid-cols-4 gap-2 px-2 mt-2">
        <Button name="4" clickHandler={handleClick} />
        <Button name="5" clickHandler={handleClick} />
        <Button name="6" clickHandler={handleClick} />
        <Button name="-" clickHandler={handleClick} orange />
      </div>
      <div className="grid grid-cols-4 gap-2 px-2 mt-2">
        <Button name="1" clickHandler={handleClick} />
        <Button name="2" clickHandler={handleClick} />
        <Button name="3" clickHandler={handleClick} />
        <Button name="+" clickHandler={handleClick} orange />
      </div>
      <div className="grid grid-cols-4 gap-2 px-2 mt-2 mb-2">
        <Button name="0" clickHandler={handleClick} wide />
        <Button name="." clickHandler={handleClick} />
        <Button name="=" clickHandler={handleClick} orange />
      </div>
    </div>
  );
};

export default ButtonPanel;
