import Big from "big.js";

const operate = (numOne, numTwo, operation) => {
  const numberOne = Big(numOne || 0);
  const numberTwo = Big(
    numTwo || (operation == "÷" || operation == "x" ? 1 : 0)
  );

  switch (operation) {
    case "+":
      return numberOne.plus(numberTwo).toString();
    case "-":
      return numberTwo.minus(numberOne).toString();
    case "x":
      return numberOne.times(numberTwo).toString();
    case "÷":
      if (numberTwo.eq("0")) {
        alert("Divide by zero error");
        return "0";
      }
      return numberOne.div(numberTwo).toString();
    default:
      throw new Error(`Unknown operation '${operation}'`);
  }
};

export default operate;
