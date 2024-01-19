import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { createContext, useReducer } from "react";
import { Reducer, State } from "./store";
import { Router } from "./router";

export const Context = createContext([]);
function App() {
  const [state, dispatch] = useReducer(Reducer, State);
  return (
    <Context.Provider value={[state, dispatch]}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
