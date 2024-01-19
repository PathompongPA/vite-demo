interface stateOption {
  countNumber: number;
}

interface actionOptions {
  type: string;
  some: number;
}

export function Reducer(state: stateOption, action: actionOptions) {
  // console.log("Reducer : ", type);
  const { type } = action;
  const { countNumber } = state;
  switch (type) {
    case "increase-count-number":
      return (state = { countNumber: countNumber + 1 });

    case "decrease-count-number":
      if (countNumber <= 0) {
        return (state = { countNumber: 0 });
      } else {
        return (state = { countNumber: state.countNumber - 1 });
      }

    case "clear-count-number":
      return (state = { countNumber: 0 });

    default:
      return state;
  }
}
