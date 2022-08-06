import React from "react";
import "./Header.css";
import { Clock } from "../Clock/Clock";
import { usePositionContext } from "../Context/PositionContext";

function Header() {
  const { state, positionDispatch } = usePositionContext();
  return (
    <div>
      <header className="header-container flex-row center">
        <div className="flex-row center gap-md">
          <h2>Position:</h2>
          <div className="input-container flex-row">
            <input
              onChange={(e) =>
                positionDispatch({ type: "CENTER", payload: e.target.value })
              }
              type="radio"
              value="center"
              name="position"
              id="center"
              checked={state.position==='center'}
            />
            <label htmlFor="center">Center</label>
          </div>
          <div className="input-container flex-row">
            <input
              onChange={(e) =>
                positionDispatch({ type: "BOTTOM_RIGHT", payload:e.target.value })
              }
              type="radio"
              value="bottom-right"
              name="position"
              id="bottom-right"
              checked={state.position==='bottom-right'}
            />
            <label htmlFor="bottom-right">Bottom Right</label>
          </div>
        </div>
        <div className="flex-row center gap-md">
          <p className="header-msg">
            Press ESC key to hide the window, Enter to show it again
          </p>
          <Clock className="clock" />
        </div>
      </header>
    </div>
  );
}

export default Header;
