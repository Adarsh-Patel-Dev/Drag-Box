import React, { useState } from "react";
import "./draggableBox.css";
import Draggable from "react-draggable";
import { usePositionContext } from "../Context/PositionContext";
import capitalize from "../../utility/capitalize";

function DraggableBox() {
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });
  const { state, positionDispatch, border, setBorder } = usePositionContext();
  const divPosition = capitalize(state.position);
  
  function findCoordinate(value) {
    positionDispatch({
      type: "MOVE",
      payload: "Floating...",
      values: { x: value.x, y: value.y },
    });
  }

  return (
    <>
    <div className="display-container">

    </div>
      <div
        className={`floating ${
          state.position === "center" ? "center" : "bottom-right"
        }`}
      >
        <Draggable
          handle=".handle"
          bounds={{left: -960, top: -315, right: 0, bottom: -73}}
          //bounds={{ left: -282, top: -161, right: 282, bottom: 161 }}
          defaultPosition={coordinate}
          position={state.cordinates}
          onDrag={(e, data) => {
            findCoordinate(data);
            setBorder(false);
          }}
          onStop={() => setCoordinate(state.cordinates)}
        >
          <div
            className={`floating-box handle ${
              border ? "blue-border" : "black-border"
            } `}
          >
            <div className="floating-box-pos ">
              <p>{divPosition}</p>
            </div>
            <div className="floating-box-msg">
              <p>Drag me Around...</p>
            </div>
          </div>
        </Draggable>
      </div>
    </>
  );
}

export { DraggableBox };
