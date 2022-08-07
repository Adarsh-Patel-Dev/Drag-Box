import React from "react";
import "./footer.css";
import { FaChevronRight, FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { usePositionContext } from "../Context/PositionContext";

function Footer() {
  const navigate = useNavigate();
  const { border, setBorder, positionDispatch } = usePositionContext();
  return (
    <footer className="footer">
      <button
        onClick={() => {
          navigate("/page2", { replace: true });
        }}
        className="footer-btn"
      >
        <span>Goto Page2</span>
        <span>
          <FaChevronRight />
        </span>
      </button>
    </footer>
  );
}

export { Footer };
