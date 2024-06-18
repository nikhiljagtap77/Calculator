import Big from "big.js";
import isNumber from "./isNumber.js";
import operate from "./operate.js";

const calculate = (state, buttonName) => {
  if (buttonName === "AC") {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === "0" && state.next === "0") {
      return {
        next: state.next,
        total: state.total,
        operation: state.operation,
      };
    }

    if (state.operation) {
      if (state.next) {
        return {
          next: state.next + buttonName,
          total: state.total,
          operation: state.operation,
        };
      }
      return {
        next: buttonName,
        total: state.total,
        operation: state.operation,
      };
    }

    if (state.next) {
      const next = state.next === "0" ? buttonName : state.next + buttonName;
      return {
        next: next,
        total: null,
        operation: state.operation,
      };
    }

    if (state.total) {
      const next = state.total === "0" ? buttonName : state.total + buttonName;
      return { next: next, total: null, operation: state.operation };
    }

    return {
      next: buttonName,
      total: null,
      operation: state.operation,
    };
  }

  if (buttonName === "%") {
    if (state.operation && state.next) {
      const result = operate(state.total, state.next, state.operation);
      return {
        total: Big(result).div(Big("100").toString()),
        next: null,
        operation: null,
      };
    } else if (state.next) {
      return {
        next: Big(state.next).div(Big("100").toString()),
        total: state.total,
        operation: state.operation,
      };
    } else {
      return {
        next: state.next,
        total: state.total,
        operation: state.operation,
      };
    }
  }

  if (buttonName === ".") {
    if (state.next) {
      if (state.next.includes(".")) {
        return {
          next: state.next,
          total: state.total,
          operation: state.operation,
        };
      } else {
        return {
          next: state.next + buttonName,
          total: state.total,
          operation: state.operation,
        };
      }
    } else if (state.total) {
      if (state.total.includes(".")) {
        return {
          next: state.next,
          total: state.total,
          operation: state.operation,
        };
      } else {
        return {
          next: state.next,
          total: state.total + buttonName,
          operation: state.operation,
        };
      }
    }

    return {
      next: "0.",
      total: state.total,
      operation: state.operation,
    };
  }

  if (buttonName === "=") {
    if (state.operation && state.next) {
      return {
        total: operate(state.total, state.next, state.operation),
        next: null,
        operation: null,
      };
    }
  }

  if (buttonName === "+/-") {
    if (state.next) {
      return {
        next: (-1 * parseFloat(state.next)).toString(),
        total: state.total,
        operation: state.operation,
      };
    }

    if (state.total) {
      return {
        next: state.next,
        total: (-1 * parseFloat(state.total)).toString(),
        operation: state.operation,
      };
    }
    return {};
  }

  if (!state.next) {
    return { operation: buttonName, next: state.next, total: state.total };
  }

  if (state.operation) {
    return {
      total: operate(state.total, state.next, state.operation),
      next: null,
      operation: buttonName,
    };
  }

  return {
    total: state.next,
    next: null,
    operation: buttonName,
  };
};

export default calculate;
