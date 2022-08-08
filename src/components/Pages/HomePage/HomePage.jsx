import React, { useCallback, useEffect } from "react";
import { usePositionContext } from "../../Context/PositionContext";
import { Display } from "../../Display/Display";
import { DraggableBox } from "../../DraggableBox/Draggable";
import { Footer } from "../../Footer/Footer";
import Header from "../../Header/Header";
import "../page.css"

function HomePage() {
  const { displayFloatingBox, setdisplayFloatingBox } = usePositionContext();

  const keyboardAction = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        setdisplayFloatingBox(true);
        console.log("enter", displayFloatingBox);
      }
      if (e.keyCode === 27) {
        setdisplayFloatingBox(false);
        console.log("esc", displayFloatingBox);
      }
    },
    []
  );

  useEffect(() => {
    document.addEventListener("keydown", keyboardAction);

    return () => {
      document.removeEventListener("keydown", keyboardAction);
    };
  }, [keyboardAction]);

  return (
    <div className="page">
      <nav className="nav">
        <Header />
      </nav>
      <main className="main">
        <Display />
        {displayFloatingBox && <DraggableBox />}
      </main>
      <footer className="footer">
      <Footer url="/page2" btnText="Go to Page2" icon ="right"/>
      </footer>
    </div>
  );
}

export default HomePage;
