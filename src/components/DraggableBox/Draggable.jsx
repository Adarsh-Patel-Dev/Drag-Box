import React, { useState } from "react";
import "./draggableBox.css";
import Draggable from "react-draggable";
import { usePositionContext } from "../Context/PositionContext";
import capitalize from "../../utility/capitalize";

function DraggableBox() {
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });
  const { state, positionDispatch, border, setBorder } = usePositionContext();
  const divPosition = capitalize(state.position);
  console.log("this is div pos", divPosition);

  function findCoordinate(value) {
    positionDispatch({
      type: "MOVE",
      payload: "Floating...",
      values: { x: value.x, y: value.y },
    });
  }

  return (
    <>
      <div
        className={`floating ${
          state.position === "center" ? "center" : "bottom-right"
        }`}
      >
        <Draggable
          handle=".handle"
          bounds={{ left: -282, top: -161, right: 282, bottom: 161 }}
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
            <div className="floating-box-pos handle">
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
