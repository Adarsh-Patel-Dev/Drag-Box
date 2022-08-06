import { createContext, useContext, useReducer, useState } from "react";
import { positionReducer } from "./PositionReducer";

const PositionContext = createContext();

function PositionProvider({ children }) {
  const [border, setBorder] = useState(false);
  const [state, positionDispatch] = useReducer(positionReducer, {
    position: "center",
    cordinates: { x: 0, y: 0 },
  });
  return (
    <PositionContext.Provider value={{ state, positionDispatch, border, setBorder }}>
      {children}
    </PositionContext.Provider>
  );
}

const usePositionContext = () => useContext(PositionContext);

export { PositionProvider, usePositionContext };
