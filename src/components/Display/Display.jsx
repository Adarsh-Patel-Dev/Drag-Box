import React from "react";
import { usePositionContext } from "../Context/PositionContext";
import { DraggableBox } from "../DraggableBox/Draggable";
import "./display.css";

function Display() {
  const { displayFloatingBox } = usePositionContext()
  return (
   
      <div className="display-container">
       {displayFloatingBox && <DraggableBox />}
      </div>
   
  );
}

export { Display };
