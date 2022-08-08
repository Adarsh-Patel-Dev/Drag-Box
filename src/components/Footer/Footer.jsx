import React from "react";
import "./footer.css";
import { FaChevronRight, FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { usePositionContext } from "../Context";

function Footer({ url, btnText, icon }) {
  const navigate = useNavigate();
  const { setBorder, positionDispatch } = usePositionContext();
  return (
    <footer className="footer">
      <button
        onClick={() => {
          navigate(url, { replace: true });
          positionDispatch({ type: "CENTER", payload: "center" });
          setBorder(true);
        }}
        className="footer-btn"
      >
        {icon === "left" ? <FaAngleLeft /> : ""}
        <span>{btnText}</span>
        {icon === "right" ? <FaChevronRight /> : ""}
      </button>
    </footer>
  );
}

export { Footer };
