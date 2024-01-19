import { useContext, useEffect } from "react";
import { Context } from "../../App";
import { SetTitle } from "../../utilities";

export default function Home() {
  useEffect(() => {}, []);
  console.log("Home useContext : ", useContext(Context));
  const [state, dispatch] = useContext(Context);
  const { countNumber } = state;

  useEffect(() => {
    SetTitle("HOME");
    document
      .getElementsByTagName("BODY")[0]
      .addEventListener("keyup", (event): void => {
        const { key } = event;
        console.log("keydown : ", key);
        switch (key) {
          case "j":
            return dispatch({ type: "decrease-count-number", payload: "test" });
          case "l":
            return dispatch({ type: "increase-count-number" });
          case "k":
            return dispatch({ type: "clear-count-number" });
          default:
            break;
        }
      });
  }, []);

  function increase() {
    const some: any = dispatch({ type: "increase-count-number" });
    const some1: any = "";
    console.log(some1);

    console.log(some);
  }

  function decrease() {
    if (state.countNumber > 0) {
      dispatch({ type: "decrease-count-number" });
    }
  }

  function clear() {
    dispatch({ type: "clear-count-number" });
  }

  return (
    <div id="box-home-component">
      <h1>Home component</h1>
      <div>
        <h1>{countNumber}</h1>
        <button id="" onClick={decrease}>
          -
        </button>
        <button onClick={clear}>clear</button>
        <button id="increase" onClick={increase}>
          +
        </button>
      </div>
    </div>
  );
}
